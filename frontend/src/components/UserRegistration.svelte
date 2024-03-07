<script>
  // Import necessary dependencies
  import { navigate } from 'svelte-routing';
  import { register } from '../api/auth'; // Assuming you have an API module to handle user registration
  
  // Define the component
  let formData = {
    name: '',
    email: '',
    password: ''
  };
  let error = null;

  // Function to handle form submission (user registration)
  async function handleSubmit() {
    try {
      const response = await register(formData);
      if (response.success) {
        // Redirect to login page after successful registration
        navigate('/login');
      } else {
        error = response.message;
      }
    } catch (error) {
      console.error('Error registering user:', error);
      error = 'An unexpected error occurred. Please try again later.';
    }
  }
</script>

<!-- User registration form -->
<div>
  <h2>User Registration</h2>
  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
  <form on:submit|preventDefault={handleSubmit}>
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={formData.name} required>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={formData.email} required>
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={formData.password} required>
    <button type="submit">Register</button>
  </form>
</div>
