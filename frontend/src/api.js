// Define the base URL for your backend API
const BASE_URL = 'http://localhost:8000/api'; // Change this to match your actual backend API URL

// Function to handle HTTP GET requests
export async function get(endpoint) {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  return await response.json();
}

// Function to handle HTTP POST requests
export async function post(endpoint, data) {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

// Function to handle HTTP PUT requests
export async function put(endpoint, data) {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

// Function to handle HTTP DELETE requests
export async function del(endpoint) {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: 'DELETE'
  });
  return await response.json();
}
