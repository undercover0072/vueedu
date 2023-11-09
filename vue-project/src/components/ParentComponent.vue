<template>
  <button @mouseover="sendMessage">부모버튼</button>
  <child-component ref="child1" />
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default {
  components: { ChildComponent },
  methods: {
    sendMessage: function () {
      alert("child1이라는 자식 컴포넌트의 버튼에 클릭 이벤트를 트리거하겠습니다.");
      this.$refs.child1.$refs.btn.click();  // 자식 DOM 객체에 이벤트 발생      
    }
  }
};

</script>   