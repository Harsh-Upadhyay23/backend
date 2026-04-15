// Load environment variables (API keys etc.)
import "dotenv/config";

// For taking input from terminal
import readline from "readline";

// LangChain model & message types
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage, AIMessage } from "@langchain/core/messages";

// Create interface for CLI chat
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Initialize AI model
const model = new ChatMistralAI({
  model: "mistral-small-latest",
});

// 🧠 Memory to store conversation history
const messages = [];

// Main chat function
async function chat() {
  rl.question("You: ", async (input) => {

    // Exit condition
    if (input.toLowerCase() === "exit") {
      console.log("Chat ended.");
      rl.close();
      return;
    }

    try {
      // 1️⃣ Store user message
      messages.push(new HumanMessage(input));

      // 2️⃣ Send full conversation to AI
      const response = await model.invoke(messages);

      // 3️⃣ Store AI response
      messages.push(new AIMessage(response.content));

      // 4️⃣ Print AI reply
      console.log("Bot:", response.content);

    } catch (error) {
      console.error("Error:", error.message);
    }

    // 5️⃣ Repeat chat
    chat();
  });
}

// Start chat
chat();