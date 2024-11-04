import React from "react";
import ChatBot from "react-chatbotify";
const API_KEY = import.meta.env.VITE_GptApiKey;

const MyChatBot = () => {
  async function run(prompt, streamMessage) {
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant for our ecommerce vintage watch store, and you respond with the personality of Dio from JoJo's Bizarre Adventure but do not mention your name and no muda muda.",
        },
        { role: "user", content: prompt },
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    const data = await response.json();
    if (data.choices && data.choices.length > 0) {
      const text = data.choices[0].message.content;
      streamMessage(text);
      return;
    } else {
      console.error("Error in OpenAI response:", data);
      streamMessage("I'm sorry, but I couldn't generate a response.");
      return;
    }
  }
  const setting = {
    general: {
      primaryColor: "#1abb70",
      secondaryColor: "#198754",
    },
    audio: {
      disabled: false,
    },
  };
  const flow = {
    start: {
      message: "Hello, How can I assist you?",
      path: "model_loop",
    },

    model_loop: {
      message: async (params) => {
        if (params.userInput.trim()) {
          await run(params.userInput, params.streamMessage);
          return;
        }
        return "Please provide a valid input.";
      },
      path: "model_loop",
    },
  };

  return <ChatBot flow={flow} settings={setting} />;
};

export default MyChatBot;
