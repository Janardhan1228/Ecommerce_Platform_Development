<script>
  // Import necessary dependencies
  import { cart } from '../store';

  // Define the component
  let items = [];
  let total = 0;

  // Subscribe to changes in the cart store
  cart.subscribe(value => {
    items = value;
    total = calculateTotal(items);
  });

  // Function to calculate the total price of items in the cart
  function calculateTotal(items) {
    let totalPrice = 0;
    items.forEach(item => {
      totalPrice += item.price;
    });
    return totalPrice.toFixed(2);
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
    <p>Total: ${total}</p>
    <button>Proceed to Payment</button>
  {/if}
</div>
