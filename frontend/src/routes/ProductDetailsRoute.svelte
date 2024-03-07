<script>
  // Import necessary dependencies
  import { onMount } from 'svelte';
  import { useParams } from 'svelte-routing';
  import { getProductById } from '../api/products'; // Assuming you have an API module to fetch product details
  
  // Define component variables
  let product = null;
  const params = useParams();

  // Fetch product details when the component mounts
  onMount(async () => {
    try {
      const productId = params.id;
      product = await getProductById(productId);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  });
</script>

<!-- Product details template -->
<div>
  {#if product}
    <h2>{product.name}</h2>
    <p>Description: {product.description}</p>
    <p>Price: ${product.price}</p>
    <p>Stock Quantity: {product.stockQuantity}</p>
  {:else}
    <p>Loading...</p>
  {/if}
</div>
