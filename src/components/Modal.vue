

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <button type="button" class="btn-green" @click="close">
              Close me
            </button>

          <input v-model="name" placeholder="Name" />
          <input v-model.number="price" placeholder="Price" />
          <textarea v-model="description"  placeholder="Description">
          </textarea>
          <div @click="addProductToTheList()">add</div>
       
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data: () => ({
    name: "",
    price: "",
    description: ""
  }),
  methods: {
    close() {
      this.$emit("close");
    },
    addProductToTheList(){
      const product = {
        name: this.name,
        price: this.price,
        descritpion: this.description,
        isCompleted: false
      }
      this.$store.commit('addProductList', product);
      this.cleanInput();
      this.close();

    },
    cleanInput(){
      this.name = "";
      this.price = "";
      this.description = "";
    }
  }
};
</script>
<style>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
.modal-header,

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #000;
  background: transparent;
  text-align: right;
}
.btn-green {
  color: white;
  background: #828282;
  border: 1px solid #828282;
  border-radius: 2px;
  margin: 5px;
}
.input {
  margin-top: 5px;
}
.added-text {
  margin-block-end: -10px;
  margin-block-start: 0.5rem;
}
</style>
