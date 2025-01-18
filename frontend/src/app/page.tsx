"use client";

import { useEffect, useState } from "react";
import { Box, Button, Heading, Input, VStack, Text } from "@chakra-ui/react";

type Task = {
  id: number;
  title: string;
  deadline: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]); // Initialize as an empty array
  const [title, setTitle] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data: Task[]) => {
        if (Array.isArray(data)) {
          setTasks(data);
        } else {
          console.error("Invalid response: expected an array", data);
          setTasks([]);
        }
      })
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  const handleCreateTask = async () => {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, deadline }),
    });

    const newTask = await response.json();
    if (newTask && newTask.task) {
      setTasks([...tasks, newTask.task]);
    }
    setTitle("");
    setDeadline("");
  };

  return (
    <VStack spacing={4} p={8}>
      <Heading>Task Manager</Heading>
      <Box>
        <Input
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          mb={2}
        />
        <Input
          placeholder="Deadline (YYYY-MM-DD)"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          mb={2}
        />
        <Button onClick={handleCreateTask} colorScheme="blue">
          Add Task
        </Button>
      </Box>

      <VStack align="stretch">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Box key={task.id} p={4} borderWidth="1px">
              <Text>
                <strong>{task.title}</strong> - Due: {task.deadline} -{" "}
                <i>{task.completed ? "Completed" : "Pending"}</i>
              </Text>
            </Box>
          ))
        ) : (
          <Text>No tasks available</Text>
        )}
      </VStack>
    </VStack>
  );
}
