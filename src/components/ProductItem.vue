<template>
  <div class="product-item">
    <span class="product-index">{{itemIndex}}</span>
    <span
      :style="[isCompleted? {'text-decoration': 'line-through','opacity':'0.5'}:{}]"
      class="product-name"
    >{{name}}</span>
    <span class="product-price">{{price}}NIS</span>
    <i
      @click.stop="toggleProductToCompletedOrNot(itemIndex)"
      class="icon-action glyphicon glyphicon-pencil"
    ></i>
    <i @click.stop="deleteProduct(itemIndex)" class="icon-action glyphicon glyphicon-trash"></i>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
    description: String,
    itemIndex: Number,
    isCompleted: Boolean
  },
  methods: {
    deleteProduct(productIndex) {
      this.$emit("delete-product", productIndex);
    },
    toggleProductToCompletedOrNot(productIndex) {
      this.$emit("toggle-product-to-completed-or-not", productIndex);
    }
  }
};
</script>