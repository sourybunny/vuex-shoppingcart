const state ={
    cartItems: []

}

const getters= {
    getCartItems: (state)=>state.cartItems,
    getTotal: (state)=>{
        return state.cartItems.reduce((sum,item)=>{
            return sum + item.price*item.quantity;
        },0)
    }
}

const actions = {
    addToCart: ({commit},item)=>{
        commit('addToCart',{...item,quantity:1} )
    },
    removeFromCart: ({commit}, item)=>{
        commit('removeItem',item )
    },
    incrementQty: ({commit}, item) =>{
        commit('incrementQty',item )
    },
    decrementQty: ({commit}, item)=>{
        commit('decrementQty',item )
    },
    removeAll: ({commit})=>{
        commit('removeAll');
    }
}

const mutations = {
    addToCart: (state, item)=>{
        state.cartItems.unshift(item);
    },
    incrementQty: (state, item) =>{
        state.cartItems.map(product=>{
            if(product.id==item.id){
                product.quantity+=1;
            }
        })
    },
    decrementQty: (state,item) =>{
        state.cartItems.map(product=>{
            if(product.id==item.id){
                product.quantity>1?product.quantity-=1:1
                
            }
        })
    },
    removeItem: (state, item)=>{
        state.cartItems = state.cartItems.filter(product=>{
            return product.id!=item.id
        });
    },
    removeAll: (state)=>{
        state.cartItems = [];
    }
}
export default {
    state,
    actions,
    getters,
    mutations
}