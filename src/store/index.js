import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsList : [
      {name: 'Tomatos', price: 20, description:"good Food",isCompleted: true},
      {name: 'Orange', price: 12, description:"good Food",isCompleted: false},
      {name: 'Apple', price: 34, description:"good Food",isCompleted: false},
      {name: 'raisi2222n', price: 24, description:"good Food",isCompleted: false}
    ],
  },
  mutations: {
    addProductList (state, product) {
      state.productsList.push(product)
    },
    deleteProductFromList(state, productIndex){
      state.productsList.splice(productIndex, 1)
    },
    toggleProductToCompletedOrNot(state, productIndex){
      console.log(state.productsList[productIndex])
      state.productsList[productIndex].isCompleted = !state.productsList[productIndex].isCompleted
    }
  },
  actions: {
  }
})
