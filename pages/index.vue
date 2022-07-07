<template>
  <div id="app">
    <client-only>
      <particle-field />
    </client-only>
    <header class="header_main">
      <nav class="lnb_main">
        <ul class="lists_lnb">
          <li
            v-for="anchor in anchors"
            :key="anchor.index"
            class="item_lnb"
            @click.prevent="lnbClick(anchor)"
          />
        </ul>
      </nav>
    </header>
    <main class="contents_main">
      <section id="index" class="wrap_section">
        <div class="area_title">
          <h1 class="title">Project realdew</h1>
          <p class="desc">Coming Soon</p>
        </div>
      </section>
      <section id="second" class="wrap_section">
        <div class="area_title">
          <h1 class="title">second title</h1>
          <p class="desc">second page</p>
        </div>
      </section>
    </main>
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
  data() {
    return {
      anchors: [{ location: 'index' }, { location: 'second' }],
    }
  },
  mounted() {
    this.init()
  },
  beforeUnmount() {},
  methods: {
    init() {
      // const canvas = document.getElementById('canvas')
      // const ctx = canvas.getContext('2d')
      // ctx.fillStyle = '#121212'
      // ctx.fillRect(0, 0, canvas.width, canvas.height)

      window.scrollTo(0, 0)
    },
    lnbClick(anchor) {
      const target = document.getElementById(anchor.location)
      target.scrollIntoView({ behavior: 'smooth' })
    },
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
  position: relative;
  width: 100%;
  height: 100%;
  min-height: -webkit-fill-available;
  position: fixed;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

.canvas_background {
  position: fixed;
  z-index: -1;
  margin: 0;
  width: 100%;
  height: 100%;
}
.header_main {
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

.lnb_main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.lists_lnb {
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.item_lnb {
  &::before {
    content: '';
    display: inline-block;
    vertical-align: text-bottom;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    // background: linear-gradient(to right, #fe9aec, #33ccff);
    background: linear-gradient(to bottom, #00ccff, #33ffcc);
    animation-name: fadeIn;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    cursor: pointer;
  }
}

.contents_main {
  position: relative;
  height: 100%;
  /* 스크롤바 없애기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.contents_main::-webkit-scrollbar {
  /* 스크롤바 없애기 */
  display: none; /* Chrome, Safari, Opera*/
}

.wrap_section {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  scroll-snap-align: start;
}
.area_title {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
}

.area_title {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: linear-gradient(to right, #fe9aec, #33ccff);
  background: linear-gradient(to right, #33ffcc, #33c4ff);
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
