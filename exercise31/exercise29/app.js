// Function that simulates fetching a JSON file (e.g., 'data.json')
async function fetchJsonData() {
  try {
    // fetch returns a Promise, non-blocking to the rest of the program
    const response = await fetch("data.json");

    // Parses the raw JSON response body into a JavaScript object
    const data = await response.json();

    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching JSON:", error);
  }
}

// 1. Call the async function (runs in the background)
fetchJsonData();

// 2. These log statements execute immediately without waiting for the fetch to finish
console.log("Other code running: Step 1");
console.log("Other code running: Step 2");
