// script.js
// Talks to the Google Apps Script Web App (which reads/writes the Google Sheet).

// 1. Paste your deployed Apps Script Web App URL here (ends in /exec)
const SHEET_API_URL = "PASTE_YOUR_DEPLOYED_WEB_APP_URL_HERE";

/**
 * GET: Fetches all rows from the Google Sheet.
 */
async function getSheetData() {
  try {
    const response = await fetch(SHEET_API_URL, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("GET result:", result);
    return result;
  } catch (error) {
    console.error("Error fetching sheet data:", error);
    return { status: "error", message: error.message };
  }
}

/**
 * POST: Sends a new row of data to the Google Sheet.
 * Keys must match the sheet's header names (lowercase), e.g. name, email, message.
 */
async function postSheetData(name, email, message) {
  try {
    const response = await fetch(SHEET_API_URL, {
      method: "POST",
      // Apps Script doesn't handle a JSON Content-Type cleanly with CORS
      // preflight, so we send it as text/plain and parse it as JSON server-side.
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("POST result:", result);
    return result;
  } catch (error) {
    console.error("Error posting sheet data:", error);
    return { status: "error", message: error.message };
  }
}

// ---- Example usage (wire these up to your HTML buttons/form) ----

// Fetch and display data on page load
document.addEventListener("DOMContentLoaded", () => {
  loadData();
});

async function loadData() {
  const result = await getSheetData();
  const output = document.getElementById("output");
  if (output && result.status === "success") {
    output.textContent = JSON.stringify(result.data, null, 2);
  }
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const result = await postSheetData(name, email, message);

  if (result.status === "success") {
    alert("Data submitted successfully!");
    await loadData(); // refresh the table
  } else {
    alert("Error: " + result.message);
  }
}
