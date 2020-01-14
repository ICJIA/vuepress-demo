<template>
  <div>
    <button>xxtes11t</button>
    <p v-html="hello"></p>
  </div>
</template>

<script>
export default {
  name: "ElButton",
  data() {
    return {
      hello: "<span>Hello World</span>",
      num: 1,
      status: true
    };
  }
};
</script>

<style>
</style>
