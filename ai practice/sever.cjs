const axios = require('axios');

const SAMBANOVA_API_KEY = '';  

async function callSambaNovaAPI(userMessage) {
  try {
    const response = await axios.post(
      'https://api.sambanova.ai/v1/chat/completions',  
      {
        model: 'your-model-name',  
        messages: [
          { role: 'user', content: userMessage }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SAMBANOVA_API_KEY}`
        }
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (err) {
    console.error(`⚠ SambaNova API error: ${err.response?.status} - ${err.response?.statusText}`);
    throw err;
  }
}
