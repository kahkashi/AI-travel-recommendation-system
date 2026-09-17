const OpenAI = require("openai");

const nabhClient = new OpenAI({
  apiKey: process.env.NABH_API_KEY,
  baseURL: "https://api.nabh.cloud/v1",
  timeout: 30000,
  maxRetries: 0,
});

async function getTravelRecommendation(preferences) {
  const completion = await nabhClient.chat.completions.create({
    model: "mistral-7b-instruct",
    messages: [
      {
        role: "user",
        content: preferences,
      },
    ],
  });

  return completion.choices[0].message.content;
}

module.exports = { getTravelRecommendation };
