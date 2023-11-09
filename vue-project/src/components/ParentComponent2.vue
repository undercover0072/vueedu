<template>
  <child-component2  ref="child2">
    이건 slot 기능 테스트용 컨텐트~~
  </child-component2>
</template>
<script>
import ChildComponent2 from './ChildComponent2.vue';
export default {
  components: { ChildComponent2 },
  mounted() {
    this.$refs.child2.callFromParent();
  }
}
</script>