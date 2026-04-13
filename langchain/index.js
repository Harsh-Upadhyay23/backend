import "dotenv/config";
import readline from "readline";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage, AIMessage } from "@langchain/core/messages";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
  model: "mistral-small-latest",
});

// 🧠 memory
const messages = [];

async function chat() {
  rl.question("You: ", async (input) => {
    if (input === "exit") {
      rl.close();
      return;
    }

    // user message add
    messages.push(new HumanMessage(input));

    // AI call with full history
    const res = await model.invoke(messages);

    // AI reply store
    messages.push(new AIMessage(res.content));

    console.log("Bot:", res.content);

    chat(); // repeat
  });
}

chat();