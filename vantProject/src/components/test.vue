<template>
  <div>
    <van-button @click="handliClick">测试</van-button>
  </div>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {}
    },
    created() {
      console.log(this.$route.query.value);
      console.log(this.$route.query.name);
      console.log(this.$route.meta)
    },
    methods: {
      handliClick: function () {
        this.$router.push({
          path: '/HelloWorld',

        })
      }
    }
  }
</script>

<style scoped>

</style>
