// Google Apps Script for handling form submissions
// Copy this code to your Google Apps Script project

function doPost(e) {
  try {
    // Get the spreadsheet by ID
    const spreadsheetId = '1HyWU7yLqcAmTaTiMaCbuCf0SMf_-I9ehxmrhL6EyQw4';
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Parse the form data
    const data = JSON.parse(e.postData.contents);
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Prepare the row data
    const rowData = [
      timestamp,
      data.name || '',
      data.email || '',
      data.company || '',
      data.service || '',
      data.budget || '',
      data.message || ''
    ];
    
    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Company',
        'Service',
        'Budget',
        'Message'
      ];
      sheet.appendRow(headers);
    }
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Google Apps Script is working'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}