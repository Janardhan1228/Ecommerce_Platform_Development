<script>
  // Import necessary dependencies
  import { navigate } from 'svelte-routing';
  import { login } from '../api/auth'; // Assuming you have an API module to handle user authentication
  
  // Define the component
  let formData = {
    email: '',
    password: ''
  };
  let error = null;

  // Function to handle form submission (user login)
  async function handleSubmit() {
    try {
      const response = await login(formData);
      if (response.success) {
        // Redirect to home page or dashboard after successful login
        navigate('/');
      } else {
        error = response.message;
      }
    } catch (error) {
      console.error('Error logging in:', error);
      error = 'An unexpected error occurred. Please try again later.';
    }
  }
</script>

<!-- User login form -->
<div>
  <h2>User Login</h2>
  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
  <form on:submit|preventDefault={handleSubmit}>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={formData.email} required>
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={formData.password} required>
    <button type="submit">Login</button>
  </form>
</div>
