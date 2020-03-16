<template>
  <div>

     <h4 class="mb-2">{{item.title}} <div class="float-right">₹{{item.price * item.quantity}}</div> </h4>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" @click ="decrementQty(item)" class="btn btn-secondary badge">-</button>
        <span class="px-3 bg-light">Qty: {{item.quantity}}</span>
        <button type="button" @click ="incrementQty(item)" class="btn btn-secondary badge">+</button>
      </div>
    <button class="btn badge badge-danger mx-3" @click="removeFromCart(item)">
      remove from cart
    </button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props: ['item'],
    data(){
      return{
        // quantity: 1
      }
    },
    methods: {
      ...mapActions(['removeFromCart','incrementQty','decrementQty'])
    },
    
}
</script>

<style>

</style>