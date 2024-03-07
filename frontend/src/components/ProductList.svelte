<script>
  // Import necessary dependencies
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';
  import { getAllProducts } from '../api/products'; // Assuming you have an API module to fetch all products
  
  // Define the component
  let products = [];

  // Fetch all products when the component mounts
  onMount(async () => {
    try {
      products = await getAllProducts();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  });
</script>

<!-- Display list of products -->
<div>
  <h2>Product List</h2>
  <ul>
    {#each products as product}
      <li>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </li>
    {/each}
  </ul>
</div>
