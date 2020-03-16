<template>
  <div id="app">
    <ul class="nav bg-warning">
        <a class="navbar-brand text-dark px-5" href="#">Shoppiee</a>
      </ul>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="row">
            <div class="col-md-6"  v-for="(product,index) in getProducts" :key ="index" >
              <app-product :isInCart="isInCart(product)" :product="product"></app-product>
            </div>
          </div>
          </div>
        <div class="col-md-5" >
          
          <div class="list-group my-5">
          <a v-show = "getTotal>0" class="text-right" @click="removeAll" href="#">clear cart</a>
          <li class="list-group-item" v-for="(item,index) in getCartItems" :key="index">
            <app-cart-item :item = "item"></app-cart-item>
          </li>
          <li class="list-group-item">
            <button class="btn btn-primary" :disabled="getTotal<=0">checkout</button>
            <h2 class="float-right">Total: ₹{{getTotal}}</h2></li>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Product from '@/components/Product.vue';
import CartItem from '@/components/CartItem.vue';
import store from './store';
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  components: {
    'app-product': Product,
    'app-cart-item': CartItem
  },
  methods: {
    ...mapActions(['removeAll']),
    isInCart(product){
          let item = store.getters.getCartItems.find(item=>item.id==product.id)
          return item;
        }
  },
  computed: {
    ...mapGetters(['getProducts','getCartItems','getTotal'])
  }
}
</script>


