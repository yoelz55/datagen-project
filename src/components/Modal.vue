

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <slot ></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data: () => ({
  }),
  methods: {
    close() {
      this.$emit("close");
    },
  }
};
</script>