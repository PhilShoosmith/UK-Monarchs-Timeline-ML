import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("API key not found");
  process.exit(1);
}
const ai = new GoogleGenAI({ apiKey });

const i18nContent = fs.readFileSync('i18n.ts', 'utf8');

// Extract the 'en' object string
const enMatch = i18nContent.match(/en: \{\s*translation: (\{[\s\S]*?\n    \})\s*\},\s*fr:/);
if (!enMatch) {
  console.error("Could not find 'en' object");
  process.exit(1);
}

const enJsonStr = enMatch[1];
const enObj = eval('(' + enJsonStr + ')');

async function translate() {
  const prompt = `Translate the following JSON object values to Chinese (Simplified). Keep the keys exactly the same. Return ONLY valid JSON.

${JSON.stringify(enObj, null, 2)}`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });

  let zhJsonStr = response.text;
  zhJsonStr = zhJsonStr.replace(/```json/g, '').replace(/```/g, '').trim();
  
  const newI18nContent = i18nContent.replace(
    /  \}\n\};\n\ni18n/,
    `  },\n  zh: {\n    translation: ${zhJsonStr}\n  }\n};\n\ni18n`
  );
  
  fs.writeFileSync('i18n.ts', newI18nContent);
  console.log("Translation to Chinese complete!");
}

translate();
