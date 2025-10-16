# Google Sheets Integration Setup Instructions

Follow these steps to connect your contact form to Google Sheets:

## Step 1: Open Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Give your project a name (e.g., "Kuposu Contact Form Handler")

## Step 2: Add the Script Code

1. Delete the default code in the editor
2. Copy the code from `google-apps-script.js` file
3. Paste it into the Apps Script editor
4. Save the project (Ctrl+S or Cmd+S)

## Step 3: Deploy as Web App

1. Click "Deploy" > "New Deployment"
2. Click the gear icon next to "Type" and select "Web app"
3. Set the following:
   - Description: "Contact Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click "Deploy"
5. **Copy the Web App URL** - you'll need this for the next step

## Step 4: Update Your Website

1. Open `script.js` in your website files
2. Find the line: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';`
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL'` with the Web App URL you copied in Step 3

Example:
```javascript
const scriptURL = 'https://script.google.com/macros/s/AKfycby.../exec';
```

## Step 5: Test the Form

1. Open your website
2. Fill out and submit the contact form
3. Check your Google Sheet - the data should appear automatically

## Your Google Sheet Structure

The form will create these columns in your sheet:
- **Timestamp** - When the form was submitted
- **Name** - Full name from the form
- **Email** - Email address
- **Company** - Company name (optional)
- **Service** - Selected service type
- **Budget** - Selected budget range (optional)
- **Message** - Project details message

## Troubleshooting

- **Form not submitting**: Check that the Web App URL is correct in `script.js`
- **No data in sheet**: Make sure the Google Apps Script has permission to access your spreadsheet
- **Permission errors**: Re-deploy the web app and ensure "Anyone" has access

## Your Google Sheet URL
https://docs.google.com/spreadsheets/d/1HyWU7yLqcAmTaTiMaCbuCf0SMf_-I9ehxmrhL6EyQw4/edit?usp=sharing

The script is already configured to use this spreadsheet ID.