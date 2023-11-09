<template>
  <h1>null팀의 Vue 실습 페이지</h1>
  <br>
  <div class="Work">
    <WorkView1 name="문호준" src-url="images/team1.png" food="베이컨 토마토 디럭스 버거" teamNum="4">
    </WorkView1>
    <WorkView2 name="노은기" src-url="images/team2.png" food="소금빵 까눌레" teamNum="4">
    </WorkView2>
    <WorkView3 name="손승범" src-url="images/team3.png" food="라멘 마라탕" teamNum="4">
    </WorkView3>
    <WorkView3 name="이해성" src-url="images/team4.png" food="맥도날드 감자튀김" teamNum="4">
    </WorkView3>
  </div>
</template>

<script>
  import WorkView1 from '@/components/TeamCard.vue'
  import WorkView2 from '@/components/TeamCard.vue'
  import WorkView3 from '@/components/TeamCard.vue'

  export default {
  components: {
    WorkView1,
    WorkView2,
    WorkView3, 
  }
}
</script>

<style>
  .Work {
    display: flex;
    align-items: center;
  }
</style>
