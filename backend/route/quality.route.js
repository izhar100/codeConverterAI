const { default: axios } = require("axios")
const express = require("express")
const qualityRouter = express.Router()
require("dotenv").config()
const apiKey = process.env.chatGPTkey

qualityRouter.post("/", async (req, res) => {
    
    try {
        const { code, sourceLanguage, targetLanguage } = req.body;
        if (!code) {
            return res.status(400).json({ error: 'Please provide code input.' })
        }
        //using chatgpt to generate quote
        const convertedCode = await convertCode(code,sourceLanguage,targetLanguage)
        res.status(200).json({convertedCode})

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
async function convertCode(code,sourceLanguage,targetLanguage) {
    let prompt = `Please check following ${sourceLanguage} code quality on the basis of accuracy, readability,reusability and clean code and give the details and score also and suggestion to improve code if any\n\n ${code} `;
    
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
    const response=await axios.post(apiUrl, {
        prompt,
        max_tokens: 500,
        n: 1, // Number of responses to return
    },
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        }
    })
    console.log("response:",response)
    return response.data.choices[0].text.trim();
}

module.exports = {
    qualityRouter
}