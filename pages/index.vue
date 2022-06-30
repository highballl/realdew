<template>
  <div class="wrap_index">
    <div class="area_title">
      <h1 class="title">Project realdew</h1>
      <p class="desc">Coming Soon</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.wrap_index {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.area_title {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #fe9aec, #33ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation-name: fadeIn;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}

.title {
  margin: 0;
  font-size: 2rem !important;
}

.desc {
  margin: 0;
  font-size: 1.25rem !important;
}
</style>
