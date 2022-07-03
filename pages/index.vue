<template>
  <div id="app">
    <canvas id="canvas" class="canvas_background"></canvas>
    <header class="header">
      <nav class="nav_header">
        <ul class="lists_nav">
          <a href="#0"><li class="item_nav"></li></a>
          <a href="#1"><li class="item_nav"></li></a>
        </ul>
      </nav>
    </header>
    <section id="0" class="wrap_index">
      <div class="area_title">
        <h1 class="title">Project realdew</h1>
        <p class="desc">Coming Soon</p>
      </div>
    </section>
    <!-- <section id="1" class="wrap_particle_field">
      <client-only>
        <particle-field />
      </client-only>
    </section>
    <section id="2"></section> -->
  </div>
</template>

<script>
// import ParticleField from '@/components/ParticleField'
// import particle from '@/assets/js/particle.js'

export default {
  name: 'IndexPage',
  // components: {
  //   ParticleField,
  // },
  mounted() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#121212'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  },
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

#app {
  width: 100%;
  height: 100%;
  position: fixed;
}

.wrap_index {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.canvas_background {
  position: absolute;
  z-index: -1;
  margin: 0;
  width: 100%;
  height: 100%;
  // background-color: #121212;
}
.header {
  position: absolute;
  z-index: 999;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  width: 30px;
}

.nav_header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.lists_nav {
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  list-style: none;
  a {
    text-decoration: none;
  }
}
.item_nav {
  ::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 20px;
    border-color: white;
    // padding-left: 0px;
  }
}
.wrap_title {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: transparent;
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

  .title {
    font-size: 40px;
    font-weight: 900;
  }

  .desc {
    font-size: 25px;
    font-weight: 500;
  }
}

.wrap_particle_field {
  width: 100%;
  height: 100vh;
}
</style>
