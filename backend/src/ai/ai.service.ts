import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

@Injectable()
export class AiService {
  private readonly ollamaBaseUrl = 'http://localhost:11434'; // Default Ollama API endpoint
  private readonly model = 'llama3:8b'; // Change to the model you want

  async prioritizeTaskUsingLocalOllama(taskDescription: string): Promise<string> {
    try {
      const response = await fetch(`${this.ollamaBaseUrl}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: this.model,
          prompt: `Analyze this task: "${taskDescription}" and classify it as one of the following: "Urgent", "High", "Medium", or "Low". Only return the classification.`,
          stream: false,
        }),
      });

      const data = await response.json();

      if (data?.response) {
        return data.response.trim();
      }

      console.warn("Ollama response is empty or invalid:", data);
      return "Unable to determine priority.";

    } catch (error) {
      console.error("Ollama API Error:", error);
      return "Error determining priority.";
    }
  }
  
  async prioritizeTask(taskDescription: string): Promise<string> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are an AI assistant that classifies tasks by priority." },
          { role: "user", content: `Analyze this task: "${taskDescription}" and classify it as one of the following: "Urgent", "High", "Medium", or "Low". Only return the classification.` }
        ],
        max_tokens: 10
      });

      if (response.choices?.length && response.choices[0].message?.content) {
        return response.choices[0].message.content.trim();
      }

      console.warn("OpenAI response is empty or invalid:", response);
      return "Unable to determine priority.";

    } catch (error) {
      console.error("OpenAI API Error:", error);
      return "Error determining priority.";
    }
  }
}
