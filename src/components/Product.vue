<template>
  <div class="card my-5" >
        <img :src="product.image" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title text-center">{{product.title}}</h5>
        <p class="card-text text-center text-muted display-4">₹{{product.price}}</p>
        <button :disabled="isInCart" @click="addToCart(product)" class="btn btn-primary form-control">
          {{!isInCart? 'Add To Cart':'Added To Cart'}}</button>
        </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props: ['product','isInCart'],
    methods: {
      ...mapActions(['addToCart'])
    }
}
</script>

<style>

</style>