import OpenAI from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function prioritizeTask(taskDescription: string): Promise<string> {
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
