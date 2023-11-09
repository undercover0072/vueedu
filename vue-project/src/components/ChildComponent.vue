<template>
  <button type="button" @click="childFunc" ref="btn">자식버튼</button>
</template>
<script setup>
const childFunc = function () {
  window.alert('자식 컴포넌트의 버튼태그에서 발생된 클릭이벤트!!');
}
</script>