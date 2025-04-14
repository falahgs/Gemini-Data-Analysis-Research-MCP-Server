# Gemini Email Subject Generator - Usage Guide

This guide will help you use the Gemini Email Subject Generator MCP tool suite effectively.

## Prerequisites

1. Ensure you have set up your environment variables in `.env`:
   ```
   NODEMAILER_EMAIL=your.email@gmail.com
   NODEMAILER_PASSWORD=your_app_password
   GEMINI_API_KEY=your_gemini_api_key
   ```

2. For Gmail, you must use an App Password:
   - Go to your Google Account → Security
   - Enable 2-Step Verification if not already enabled
   - Go to App Passwords
   - Create a new app password for "Mail"
   - Use this password in your `.env` file

## Email Tool with AI Subject Generation

### Testing the Email Tool

Run the test script to ensure your email configuration works:

```bash
node test-email.mjs
```

If successful, you'll receive a test email in your inbox from yourself.

### Using with Claude

When using the email tool with Claude, use this format:

```json
{
  "name": "send-email",
  "arguments": {
    "to": "recipient@example.com", 
    "subjectPrompt": "Create a compelling subject line for our quarterly results announcement",
    "text": "Hello! Here are the results of our data analysis...",
    "html": "<h1>Quarterly Results</h1><p>Here are our <b>findings</b>...</p>"
  }
}
```

### Crafting Effective Subject Prompts

The quality of your AI-generated subject depends on your prompt. Here are some tips:

- Be specific about the tone (professional, friendly, urgent)
- Mention the target audience (executives, customers, team members)
- Include key topics or themes for the email
- Specify any constraints (length, style, keywords to include)

Examples:
- "Create a professional subject line for a quarterly report email to executives"
- "Write a catchy subject line for a marketing email about our summer sale"
- "Generate an urgent subject line for system maintenance notification"

### Understanding the Response

When you use the email tool through Claude, you'll see a confirmation like:

```
✅ Email successfully sent!

To: recipient@example.com
Subject: "Quarterly Results: Exceeding Expectations with 27% Growth"
Message ID: <abc123@gmail.com>

The email has been delivered with your provided content.
Note: This is just a confirmation message displayed here, not the actual email content.
```

**Important**: This confirmation message is NOT the content of the email itself. It's just feedback that the operation succeeded. The recipient will only see the content you specified in the `text` and `html` fields.

## Adding Images to Emails

To include images in your email:

1. Convert your image to a data URI format (base64)
2. Reference the image in your HTML with the CID format
3. Include the image data in your request

Example:

```json
{
  "name": "send-email",
  "arguments": {
    "to": "recipient@example.com",
    "subjectPrompt": "Create a subject about our quarterly results",
    "text": "Here are our quarterly results (image visible in HTML version only)",
    "html": "<h1>Quarterly Results</h1><p>Here's our performance chart:</p><img src='cid:image0' alt='Chart'/>",
    "images": [
      {
        "name": "chart.png",
        "data": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
      }
    ]
  }
}
```

## Using the Thinking Generation Tool

The thinking generation tool helps you generate detailed, high-quality content using Gemini's Flash 2 model.

### Basic Usage

```json
{
  "name": "generate-thinking",
  "arguments": {
    "prompt": "Analyze the pros and cons of implementing a four-day workweek in a software company",
    "outputDir": "./output" 
  }
}
```

### Tips for Effective Prompts

- Be specific and clear about what you want
- Break complex questions into parts
- Specify the desired format or structure if needed
- Include relevant context or constraints

### Example Use Cases

- Strategic planning and decision making
- Content creation for articles or reports
- Brainstorming new ideas or approaches
- Analyzing complex problems from multiple perspectives
- Creating comprehensive responses to difficult questions

## Troubleshooting

If you encounter errors:

1. **Authentication Failed**
   - Check that your email and password are correct
   - For Gmail, ensure you're using an App Password
   - Verify the password is entered correctly with spaces if it has them

2. **Connection Issues**
   - Verify your internet connection
   - Check if your email provider is having issues

3. **API Key Issues**
   - Verify your Gemini API key is correct and active
   - Check for any quota limitations

4. **Image Issues**
   - Ensure image data is correctly formatted as a data URI
   - Verify the CID references match between HTML and image definitions 