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

// Handle dropdown toggle
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownContent = document.querySelector('.dropdown-content');
const arrowIcon = document.querySelector('.arrow');

// Toggle the dropdown menu and the arrow icon
dropdownToggle.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
  
  // Toggle the arrow icon
  if (dropdownContent.classList.contains('show')) {
    arrowIcon.classList.remove('fa-arrow-down');
    arrowIcon.classList.add('fa-arrow-up');
  } else {
    arrowIcon.classList.remove('fa-arrow-up');
    arrowIcon.classList.add('fa-arrow-down');
  }
});




