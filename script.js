// script.js

// Example API endpoint
const apiEndpoint = "https://jsonplaceholder.typicode.com/posts/1";

// Function to make a GET request to the API
async function fetchData() {
  try {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("API Data:", data);
    // Add further processing if needed
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Call the fetch function to retrieve data from the API
fetchData();
