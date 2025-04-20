const axios = require('axios');

exports.handler = async (event) => {
  try {
    // Ensure the request is a POST
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method not allowed' }),
      };
    }

    // Parse the incoming message
    const { message } = JSON.parse(event.body);
    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    // Call OpenAI API
    const apiResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', // Use 'gpt-4' if you have access
        messages: [
          {
            role: 'system',
            content: 'You are the Gemba Indonesia Karya chatbot, an expert in AI, Machine Learning, Data Analysis, Lean and Six Sigma, Project Management, and Change Management. Provide concise, professional, and accurate responses.'
          },
          { role: 'user', content: message }
        ],
        max_tokens: 150, // Adjust for response length
        temperature: 0.7 // Adjust for creativity
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Extract the assistant's response
    const assistantResponse = apiResponse.data.choices[0].message.content;

    return {
      statusCode: 200,
      body: JSON.stringify({ response: assistantResponse })
    };
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process request' })
    };
  }
};
