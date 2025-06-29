import { GoogleGenAI } from "@google/genai";
import { API_KEY } from "./geminiConstants";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: API_KEY });

export default ai;
