const { GoogleGenAI } = require("@google/genai");

const AIResponse = async (req, res) => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",  // ← correct model name
            contents: req.body.prompt,
        });

        res.status(200).json({ AIResponse: response.text });

    } catch (error) {
        res.status(500).json({ message: `failed to generate, err: ${error.message}` });
        // ← remove the duplicate line that was here
    }
}

module.exports = AIResponse;