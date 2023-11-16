const OpenAI = require('openai')
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Really simplified call to openAI
// TODO add more interaction
const getChatResponse = async () => {
    const response = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: [
          {
            "role": "system",
            "content": "You are a chatbot that is exceedingly nice"
          },
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
    return response;
}

module.exports = {
    getChatResponse
}
