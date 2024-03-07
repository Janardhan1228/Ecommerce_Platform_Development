<script>
  // Import necessary dependencies
  import { cart } from '../store';
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';

  // Define the component
  let items = [];
  let total = 0;

  // Subscribe to changes in the cart store
  onMount(() => {
    const unsubscribe = cart.subscribe(value => {
      items = value;
      total = calculateTotal(items);
    });

    // Unsubscribe when the component is destroyed
    return unsubscribe;
  });

  // Function to calculate the total price of items in the cart
  function calculateTotal(items) {
    return items.reduce((acc, item) => acc + item.price, 0);
  }

  // Function to handle checkout
  function handleCheckout() {
    // Perform checkout logic here (e.g., send cart data to backend)
    // For demo purposes, let's just navigate to the home page after checkout
    navigate('/');
  }
</script>

<!-- Display the checkout summary -->
<div>
  <h2>Checkout</h2>
  {#if items.length === 0}
    <p>Your cart is empty</p>
  {:else}
    <ul>
      {#each items as item}
        <li>{item.name} - ${item.price}</li>
      {/each}
    </ul>
    <p>Total: ${total.toFixed(2)}</p>
    <button on:click={handleCheckout}>Proceed to Checkout</button>
  {/if}
</div>
