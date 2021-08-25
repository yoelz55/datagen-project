<template>
  <div class="shop">
    <h2>Shopping List</h2>
    <div class="shopping-list">
      <product-item
        v-for="(product, index) in productsList"
        :key="product.name"
        :name="product.name"
        :price="product.price"
        :itemIndex="index"
        :isCompleted="product.isCompleted"
        @click.native="showProductPage(product)"
        @delete-product="deleteProduct"
        @toggle-product-to-completed-or-not="toggleProductToCompletedOrNot"
      ></product-item>
      <div class="products-after-shop-list">
        <span class="product-index"></span>
        <span class="product-name">Total:</span>
        <span class="product-price">{{totalPrice}}NIS</span>
        <span class="empty-place"></span>
        <span class="empty-place"></span>
      </div>
      <div class="products-after-shop-list" @click="showModal()">
        <span class="product-index" style="border:none">+</span>
        <span class="product-name add-product">Add Product</span>
        <span class="product-price"></span>
        <span class="empty-place"></span>
        <span class="empty-place"></span>
      </div>
    </div>

    <Modal v-show="isModalVisible">
      <add-product-page @close="closeModal"></add-product-page>
    </Modal>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import Modal from "@/components/Modal.vue";
import AddProductPage from "@/components/AddProductPage.vue";

export default {
  name: "Shop",
  components: {
    ProductItem,
    Modal,
    AddProductPage
  },
  data: function() {
    return {
      productsList: [],
      isModalVisible: false
    };
  },
  mounted() {
    this.productsList = this.$store.state.productsList;
  },
  computed: {
    totalPrice() {
      return this.productsList.reduce((acc, product) => acc + product.price, 0);
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showProductPage(product) {
      this.$router.push({
        name: "ProductPage",
        params: { name: product.name, description: product.description }
      });
    },
    deleteProduct(productIndex) {
      this.$store.commit("deleteProductFromList", productIndex);
    },
    toggleProductToCompletedOrNot(productIndex) {
      this.$store.commit("toggleProductToCompletedOrNot", productIndex);
    }
  }
};
</script>
