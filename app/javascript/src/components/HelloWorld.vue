<template>
  <div>
    <p>{{ hello }}</p>
  </div>
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
