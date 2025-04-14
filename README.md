# Gemini Data Analysis & Research MCP Server

A powerful Model Context Protocol (MCP) server that leverages Google's Gemini Flash 2 AI model for comprehensive data analysis, research paper generation, and automated email delivery. This server provides an integrated solution for analyzing datasets, generating research content, and distributing results directly to stakeholders via email.

## 🚀 Features

### 1. Advanced Data Analysis & Reporting (`analyze-data`)
- Comprehensive analysis of Excel (.xlsx, .xls) and CSV files
- Features:
  - Automatic data type detection and parsing
  - Statistical analysis of numeric columns
  - Interactive visualizations using Chart.js
  - AI-powered insights using Gemini Flash 2
  - Detailed HTML reports with interactive plots
  - Direct email delivery of analysis results
  - Basic and detailed analysis modes
  - Customizable output directory
  - Support for large datasets
  - Automatic outlier detection
  - Correlation analysis for numeric columns

### 2. Research & Email Delivery System (`send-email`)
- Professional research paper generation and distribution
- Features:
  - AI-powered research paper generation
  - Automated email delivery of analysis results
  - Support for multiple content types:
    - Research papers
    - Technical reports
    - Data analysis summaries
    - Business intelligence reports
  - Professional email subject line generation
  - Support for both HTML and plain text content
  - Image attachments with inline display capability
  - Secure SMTP authentication
  - Comprehensive error handling and status reporting
  - Professional email formatting
  - Message delivery tracking
  - Customizable email templates

### 3. Research & Analysis Generator (`generate-thinking`)
- Advanced research and analysis generation
- Features:
  - Research paper generation
  - Technical documentation writing
  - Data analysis summaries
  - Business intelligence reports
  - Timestamped response saving
  - Customizable output directory
  - Direct email delivery of generated content
  - Professional content creation

## 📊 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- TypeScript
- Claude Desktop
- Google Gemini API Key
- SMTP Email Account (for email functionality)

### Installation

1. Clone and setup:
```bash
git clone [your-repo-url]
cd gemini-data-analysis-email-generator
npm install
```

2. Create `.env` file:
```env
GEMINI_API_KEY=your_api_key_here
NODEMAILER_EMAIL=your.email@gmail.com
NODEMAILER_PASSWORD=your_app_password_here
```

3. Build the project:
```bash
npm run build
```

### Claude Desktop Configuration

1. Create/Edit `%AppData%/Claude/claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "Gemini Data Analysis": {
      "command": "node",
      "args": ["path/to/gemini-data-analysis-email-generator/dist/index.js"],
      "cwd": "path/to/gemini-data-analysis-email-generator",
      "env": {
        "GEMINI_API_KEY": "your_api_key_here",
        "NODEMAILER_EMAIL": "your.email@gmail.com",
        "NODEMAILER_PASSWORD": "your_app_password_here"
      }
    }
  }
}
```

2. Restart Claude Desktop

## 📊 Using the Tools

### Data Analysis with EDA and AI
```json
{
  "name": "analyze-data",
  "arguments": {
    "fileData": "base64_encoded_file_content",
    "fileName": "data.xlsx",
    "analysisType": "detailed",
    "outputDir": "./analysis_results"
  }
}
```

### Email Sending with AI Subject Generation
```json
{
  "name": "send-email",
  "arguments": {
    "to": "recipient@example.com",
    "subjectPrompt": "Create a professional subject line for a business report",
    "text": "Hello! This is the plain text version of our email.",
    "html": "<h1>Hello!</h1><p>This is the <b>HTML</b> version of our email.</p>",
    "images": [
      {
        "name": "chart.png",
        "data": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
      }
    ]
  }
}
```

### Thinking Generation
```json
{
  "name": "generate-thinking",
  "arguments": {
    "prompt": "Analyze the market trends for Q1 2024",
    "outputDir": "./thinking_output"
  }
}
```

## 📁 Output Structure
```
output/
├── analysis/
│   ├── plots/
│   │   ├── column1_histogram_[timestamp].html
│   │   └── column2_histogram_[timestamp].html
│   ├── analysis_[timestamp].txt
│   └── report_[timestamp].html
├── thinking/
│   └── gemini_thinking_[timestamp].txt
└── emails/
    └── email_log_[timestamp].txt
```

## 🛠️ Development

### Available Scripts
- `npm run build`: Compile TypeScript to JavaScript
- `npm run start`: Start the MCP server
- `npm run dev`: Run in development mode with ts-node

### Environment Variables
- `GEMINI_API_KEY`: Your Google Gemini API key
- `NODEMAILER_EMAIL`: Your email address for sending emails
- `NODEMAILER_PASSWORD`: Your email app password (for Gmail, use an app password)

## 🔒 Security Notes

- Store your API keys securely
- Don't share your `.env` file
- For Gmail, use app passwords instead of your main account password
- Be careful with the content of emails sent through the system
- Never include sensitive or personal information in email examples

## 🐛 Troubleshooting

### Common Issues
1. **API Key Error**
   - Verify `.env` file exists
   - Check API key validity
   - Ensure proper environment loading

2. **Claude Desktop Connection**
   - Verify config.json syntax
   - Check file paths in config
   - Restart Claude Desktop

3. **Email Sending Issues**
   - Check that NODEMAILER_EMAIL and NODEMAILER_PASSWORD are set correctly
   - For Gmail, ensure you've created an app password
   - Verify that less secure app access is enabled for non-Gmail providers
   - Check recipient email address format

4. **Data Analysis Issues**
   - Ensure file format is supported (.xlsx, .xls, .csv)
   - Check file encoding (UTF-8 recommended)
   - Verify file size is within limits
   - Ensure numeric columns are properly formatted

### Debug Mode
Add `DEBUG=true` to your `.env` file for verbose logging:
```env
GEMINI_API_KEY=your_key_here
DEBUG=true
```

## 📚 API Reference

### Data Analysis Tool
```typescript
interface AnalyzeDataParams {
  fileData: string;         // Base64 encoded file content
  fileName: string;         // File name (must be .xlsx, .xls, or .csv)
  analysisType: 'basic' | 'detailed';  // Analysis type
  outputDir?: string;      // Optional output directory
}
```

### Email Sending Tool
```typescript
interface SendEmailParams {
  to: string;              // Recipient email address
  subjectPrompt: string;   // Prompt for Gemini to generate email subject
  text: string;            // Plain text version of email
  html?: string;           // HTML version of email (optional)
  images?: {               // Optional images to attach
    name: string;          // Image filename
    data: string;          // Base64 encoded image data
  }[];
}
```

### Thinking Generation Tool
```typescript
interface GenerateThinkingParams {
  prompt: string;           // Analysis prompt
  outputDir?: string;       // Optional output directory
}
```

## 👨‍💻 Author

**Falah G. Salieh**  
📍 Baghdad, Iraq  
📅 2025

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

MIT License - See LICENSE file for details