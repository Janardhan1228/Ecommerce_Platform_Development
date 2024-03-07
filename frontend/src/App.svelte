<script>
  // Import necessary dependencies
  import { Router, Route } from 'svelte-routing';

  // Import route components
  import ProductListRoute from './routes/ProductListRoute.svelte';
  import ProductDetailsRoute from './routes/ProductDetailsRoute.svelte';
  import CartRoute from './routes/CartRoute.svelte';
  import CheckoutRoute from './routes/CheckoutRoute.svelte';
  import UserLoginRoute from './routes/UserLoginRoute.svelte';
  import UserRegisterRoute from './routes/UserRegisterRoute.svelte';

  // Define the component
</script>

<!-- App layout -->
<div>
  <h1>E-commerce Platform</h1>

  <!-- Router component to handle navigation -->
  <Router>
    <Route path="/products" component={ProductListRoute} />
    <Route path="/products/:id" component={ProductDetailsRoute} />
    <Route path="/cart" component={CartRoute} />
    <Route path="/checkout" component={CheckoutRoute} />
    <Route path="/login" component={UserLoginRoute} />
    <Route path="/register" component={UserRegisterRoute} />
  </Router>
</div>
