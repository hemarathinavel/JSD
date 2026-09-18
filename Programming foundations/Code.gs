/**
 * Code.gs
 * Google Apps Script backend for a Google Sheet "database".
 * Deploy this as a Web App (Deploy > New deployment > Web app).
 *
 * Sheet expected to have a header row, e.g.:
 * Name | Email | Message
 */

const SHEET_NAME = "Sheet1"; // change if your sheet tab has a different name

/**
 * Handles GET requests.
 * Returns all rows in the sheet as a JSON array of objects.
 * Example: https://script.google.com/macros/s/XXXX/exec
 */
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = sheet.getDataRange().getValues();

    if (data.length === 0) {
      return jsonResponse({ status: "success", data: [] });
    }

    const headers = data[0];
    const rows = data.slice(1).map(row => {
      let obj = {};
      headers.forEach((header, i) => {
        obj[header] = row[i];
      });
      return obj;
    });

    return jsonResponse({ status: "success", data: rows });
  } catch (err) {
    return jsonResponse({ status: "error", message: err.message });
  }
}

/**
 * Handles POST requests.
 * Expects a JSON body matching the sheet's headers, e.g.:
 * { "name": "Hema", "email": "hema05r@gmail.com", "message": "Hello!" }
 * Appends a new row to the sheet.
 */
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    const params = JSON.parse(e.postData.contents);

    // Build the row in the same order as the header row
    const newRow = headers.map(header => {
      const key = header.toString().toLowerCase();
      return params[key] !== undefined ? params[key] : "";
    });

    sheet.appendRow(newRow);

    return jsonResponse({ status: "success", message: "Row added successfully" });
  } catch (err) {
    return jsonResponse({ status: "error", message: err.message });
  }
}

/**
 * Utility: wraps an object as a JSON ContentService response.
 */
function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
