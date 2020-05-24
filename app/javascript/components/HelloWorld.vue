<template>
  <p>{{ hello }}</p>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    hello: {
      type: String,
      default: "Hello World"
    }
  }
});
</script>
