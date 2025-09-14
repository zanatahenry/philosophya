"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getPhrase() {
  const prompt = `
    Me informe uma frase filosófica aleatória para eu refletir profundamente.
    Além disso, me informe o autor e o período de vida dele (ano de nascimento e ano de falecimento).
    A resposta deve estar **sempre** no formato exato abaixo (sem nada além disso):

    "frase | autor | nascimento e falecimento"

    A frase não pode ser repetida com as anteriores
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      temperature: 0.9,
      systemInstruction:
        "Você é um pesquisador de filosofia mundialmente reconhecido. Forneça respostas variadas e criativas, explorando diferentes abordagens para a mesma questão."
    }
  });

  const textFromAI = response.text;
  const splitPhrase = textFromAI?.split("|");

  const treatedPhrase = splitPhrase?.[0]?.replace(/"/g, "").trim() || "";
  const treatedAuthor = splitPhrase?.[1]?.replace(/\*/g, "").trim() || "";
  const treatedDates = splitPhrase?.[2]?.trim().replace(`"`, "") || "";

  return {
    author: treatedAuthor,
    phrase: treatedPhrase,
    dates: treatedDates
  };
}
