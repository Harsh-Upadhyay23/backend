import "dotenv/config";
import readline from "readline";
import { ChatMistralAI } from "@langchain/mistralai";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
  model: "mistral-small-latest",
  temperature: 0,
});

async function chat() {
  rl.question("You: ", async (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Bot: Goodbye 👋");
      rl.close();
      return;
    }

    try {
      const response = await model.invoke(input);

      // IMPORTANT: response.content use karo
      console.log("Bot:", response.content);

    } catch (error) {
      console.log("Error:", error.message);
    }

    chat(); // loop again
  });
}

chat();