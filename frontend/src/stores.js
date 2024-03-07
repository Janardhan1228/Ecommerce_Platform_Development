import { writable } from 'svelte/store';

// Define a writable store for managing cart data
export const cart = writable([]);

// Function to add an item to the cart
export function addToCart(item) {
  cart.update(cartItems => [...cartItems, item]);
}

// Function to remove an item from the cart
export function removeFromCart(itemId) {
  cart.update(cartItems => cartItems.filter(item => item.id !== itemId));
}

// Function to clear all items from the cart
export function clearCart() {
  cart.set([]);
}
