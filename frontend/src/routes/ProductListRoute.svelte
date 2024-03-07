<script>
  // Import necessary dependencies
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';
  import { getAllProducts } from '../api/products'; // Assuming you have an API module to fetch all products
  
  // Define component variables
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

<!-- Product list template -->
<div>
  <h2>Product List</h2>
  {#if products.length === 0}
    <p>No products available</p>
  {:else}
    <ul>
      {#each products as product}
        <li>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </li>
      {/each}
    </ul>
  {/if}
</div>
