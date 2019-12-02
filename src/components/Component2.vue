<template>
  <div class="detail">
    <div class="son">
      Detail
    </div>
  </div>
</template>
<script>

export default {
  name: 'Component2',
  data() {
    return {
      name: 'Component2'
    };
  },
  mounted () {
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
  .detail {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    font-size: 24px;
    .son {
      color: skyblue;
    }
  }
</style>

