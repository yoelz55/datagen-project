<template>
  <div class="shop">
    <h1>Shopping List</h1>
      <div class="shopping-list">
        <product-item
          v-for="(product, index) in productsList"
          :key="product.name"
          :name="product.name"
          :price="product.price"
          :itemIndex="index"
          :isCompleted="product.isCompleted"
           @click.native="showProductItem(product)"
           @delete-product="deleteProduct"
           @toggle-product-to-completed-or-not="toggleProductToCompletedOrNot"
        ></product-item>
        <div>Total: {{totalPrice}}</div>
      </div>
    <div @click="showModal()">
      + Add Product
    </div>
    <Modal v-show="isModalVisible" @close="closeModal" />

  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
import Modal from "@/components/Modal.vue";

export default {
  name: 'Shop',
  components: {
    'product-item': ProductItem,
    Modal
  },
  data: function () {
    return {
      productsList : [],
      isModalVisible: false

    }
  },
  mounted(){
    this.productsList = this.$store.state.productsList;
  },
  computed:{
    totalPrice(){
      return this.productsList.reduce( (acc, product) => acc + product.price, 0)
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showProductItem(product) {
      this.$router.push({name: 'ProductPage', params: {name: product.name, description: product.description}})
    },
    deleteProduct(productIndex){
      this.$store.commit('deleteProductFromList', productIndex);
    },
    toggleProductToCompletedOrNot(productIndex){
      this.$store.commit('toggleProductToCompletedOrNot', productIndex);

    }
  }
}
</script>
