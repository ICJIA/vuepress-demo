<template>
  <p class="demo" v-html="hello">
    {{ msg }}
  </p>
</template>

<script>
export default {
  name: "ElDemo",
  data () {
    return {
      hello: 'this is hello',
      msg: 'Hello this is <demo-1>'
    }
  }
}
</script>