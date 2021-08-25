<template>
  <div class="add-product-page">
    <i @click="close" class="icon-close glyphicon glyphicon-remove-circle"></i>
    <i @click="addProductToTheList()" class="icon-add glyphicon glyphicon-circle-arrow-right"></i>
    <div class="inputs">
      <div>
        <input v-model="name" placeholder="Name" />
      </div>
      <div>
        <input v-model.number="price" placeholder="Price" />
      </div>
    </div>
    <textarea v-model="description" placeholder="Description"></textarea>
  </div>
</template>


<script>
export default {
  data: () => ({
    name: "",
    price: "",
    description: ""
  }),
  methods: {
    close() {
      this.$emit("close");
    },
    addProductToTheList() {
      const product = {
        name: this.name,
        price: this.price,
        description: this.description,
        isCompleted: false
      };
      this.$store.commit("addProductList", product);
      this.cleanInput();
      this.close();
    },
    cleanInput() {
      this.name = "";
      this.price = "";
      this.description = "";
    }
  }
};
</script>
