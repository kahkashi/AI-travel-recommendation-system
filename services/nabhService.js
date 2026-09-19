const OpenAI = require("openai");

const nabhClient = new OpenAI({
  apiKey: process.env.NABH_API_KEY,
  baseURL: "https://api.nabh.cloud/v1",
  timeout: 60000,
  maxRetries: 0,
});

async function getTravelRecommendation(details) {
  const { destination, vibe, budget, numberOfDays, travelType } = details;

  // Ensure all values are properly converted to strings to prevent prompt issues
  const safeDestination = String(destination || "").trim();
  const safeVibe = String(vibe || "").trim();
  const safeBudget = String(budget || "").trim();
  const safeNumberOfDays = Number(numberOfDays) || 0;
  const safeTravelType = String(travelType || "").trim();
  
  // Validate required fields
  if (!safeDestination || !safeVibe || !safeBudget || safeNumberOfDays <= 0 || !safeTravelType) {
    throw new Error("Invalid input parameters: destination, vibe, budget, numberOfDays, and travelType are required and must be valid");
  }

  const userContent = `Create a detailed ${safeNumberOfDays}-day travel itinerary for a trip to ${safeDestination}.

Trip Profile:
- Destination: ${safeDestination}
- Travel Vibe: ${safeVibe}
- Travel Type: ${safeTravelType}
- Duration: ${safeNumberOfDays} days
- Budget: ${safeBudget}

The itinerary must include:
- A day-by-day breakdown covering all ${safeNumberOfDays} days
- Places and attractions to visit each day
- Suggested activities appropriate for ${safeTravelType} travelers
- Food suggestions local to ${safeDestination}
- Approximate timing and order of activities each day
- Travel and local transportation suggestions
- All suggestions must fit within the ${safeBudget} budget
- All suggestions must be appropriate for a ${safeTravelType} trip

Format the response in Markdown with ## for day headings, **bold** for key place names, and bullet points for activities.`;

  try {
    console.log("Nabh API request details:");
    console.log("- URL:", "https://api.nabh.cloud/v1/chat/completions");
    console.log("- Model:", "mistral-7b-instruct");
    console.log("- Destination:", safeDestination);
    console.log("- Vibe:", safeVibe);
    console.log("- Budget:", safeBudget);
    console.log("- Days:", safeNumberOfDays);
    console.log("- Travel Type:", safeTravelType);
    
    const completion = await nabhClient.chat.completions.create({
      model: "mistral-7b-instruct",
      messages: [
        {
          role: "system",
          content: "You are an expert travel planner. Always respond in Markdown format. Use ## for day headings (e.g. ## Day 1 — Title), **bold** for important place names, and bullet points (- ) for activities. Include food, transport, and timing details.",
        },
        {
          role: "user",
          content: userContent,
        },
      ],
    });

    console.log("Nabh API response received successfully");
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Nabh API Error Details:");
    console.error("- Error name:", error.name);
    console.error("- Error message:", error.message);
    if (error.response) {
      console.error("- Response status:", error.response.status);
      console.error("- Response data:", error.response.data);
    }
    
    // Specific handling for timeout errors
    if (error.name === 'APIConnectionTimeoutError' || error.name === 'AbortError' || error.message.includes('timeout')) {
      const timeoutError = new Error("Nabh API request timed out. Please try again.");
      timeoutError.name = "NabhTimeoutError";
      throw timeoutError;
    }
    
    throw error;
  }
}

module.exports = { getTravelRecommendation };
