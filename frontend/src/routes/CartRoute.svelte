<script>
  // Import necessary dependencies
  import { cart } from '../store';
  import { onMount } from 'svelte';

  // Define the component
  let items = [];

  // Subscribe to changes in the cart store
  onMount(() => {
    const unsubscribe = cart.subscribe(value => {
      items = value;
    });

    // Unsubscribe when the component is destroyed
    return unsubscribe;
  });
</script>

<!-- Display the cart contents -->
<div>
  <h2>Cart</h2>
  {#if items.length === 0}
    <p>Your cart is empty</p>
  {:else}
    <ul>
      {#each items as item}
        <li>{item.name} - ${item.price}</li>
      {/each}
    </ul>
  {/if}
</div>
