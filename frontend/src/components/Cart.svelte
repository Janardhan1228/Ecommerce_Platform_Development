<script>
  // Import necessary dependencies
  import { cart } from '../store';

  // Define the component
  let items = [];
  
  // Subscribe to changes in the cart store
  cart.subscribe(value => {
    items = value;
  });

  // Function to remove an item from the cart
  function removeFromCart(index) {
    // Update the cart store by removing the item at the specified index
    cart.update(items => {
      items.splice(index, 1);
      return items;
    });
  }
</script>

<!-- Display the items in the cart -->
<div>
  <h2>Shopping Cart</h2>
  {#if items.length === 0}
    <p>Your cart is empty</p>
  {:else}
    <ul>
      {#each items as item, index}
        <li>
          <span>{item.name} - ${item.price}</span>
          <button on:click={() => removeFromCart(index)}>Remove</button>
        </li>
      {/each}
    </ul>
  {/if}
</div>
