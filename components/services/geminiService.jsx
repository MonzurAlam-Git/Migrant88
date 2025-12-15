import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

/**
 * Generates a creative and humorous excuse for a missing page.
 */
export const generatePageMissingExcuse = async () => {
  try {
    const modelId = "gemini-2.5-flash";

    const prompt = `
You are a witty AI assistant for a creative digital agency's 404 page.
Generate a short, professional yet humorous excuse (max 1 sentence) for why the requested web page cannot be found.

Themes:
- A developer is drinking coffee
- A designer is moving pixels 1px to the left
- The server is meditating
- A marketing brainstorm got out of hand
- The link is shy

Do not start with "Error 404". Just give the excuse.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });

    return response.text || "Our developers are currently chasing this bug.";
  } catch (error) {
    console.error("Failed to generate excuse:", error);
    return "The page is lost in the creative void.";
  }
};
