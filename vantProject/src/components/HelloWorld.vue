<template>
  <div class="hello">
    <van-button @click="handleClick">1111</van-button>
  </div>
</template>

<script>
  import RouterLink from "vant/es/mixins/router-link";

  export default {
    name: 'HelloWorld',
    components: {RouterLink},
    data() {
      return {
        value: '1111',
        name: '豆芽菜'
      }
    },
    methods: {
      handleClick: function () {
        var value = this.value;
        var name = this.name;
        this.$router.push({
          path: `/test`,
          query: {value: value, name: name},
        })
      }
    }

  }
</script>
<style scoped>
</style>

