import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsList: [
    ],
  },
  mutations: {
    addProductList(state, product) {
      state.productsList.push(product)
    },
    deleteProductFromList(state, productIndex) {
      state.productsList.splice(productIndex, 1)
    },
    toggleProductToCompletedOrNot(state, productIndex) {
      state.productsList[productIndex].isCompleted = !state.productsList[productIndex].isCompleted
    }
  },
  actions: {
  }
})
