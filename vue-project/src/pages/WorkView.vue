<template>
  <h1>null팀의 Vue 실습 페이지</h1>
  <br>
  <div class="Work">
    <work-view idNum="0" name="문호준" src-url="images/team1.png" food="베이컨 토마토 디럭스 버거" teamNum="4" @delete="deleteFunction" v-if="isShow[0]">
    </work-view>
    <work-view idNum="1" name="노은기" src-url="images/team2.png" food="소금빵 까눌레" teamNum="4" @delete="deleteFunction" v-if="isShow[1]">
    </work-view>
    <work-view idNum="2" name="손승범" src-url="images/team3.png" food="라멘 마라탕" teamNum="4" @delete="deleteFunction" v-if="isShow[2]">
    </work-view>
    <work-view idNum="3" name="이해성" src-url="images/team4.png" food="맥도날드 감자튀김" teamNum="4" @delete="deleteFunction" v-if="isShow[3]">
    </work-view>
  </div>
</template>

<script setup>
  import WorkView from '@/components/TeamCard.vue'
  import { ref } from 'vue'

  const isShow = ref([1, 1, 1, 1])

  function deleteFunction(data) {
    console.log('이벤트 수신', data);
    isShow.value[data] = 0;
  }
</script>

<style>
  .Work {
    display: flex;
    align-items: center;
  }
</style>
