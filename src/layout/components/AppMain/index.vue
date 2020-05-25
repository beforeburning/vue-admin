<template>
  <section class="app-main">

    <transition :name="direction">
      <keep-alive :include="cachedViews">
        <router-view class="appView" :key="key" />
      </keep-alive>
    </transition>

  </section>
</template>

<script>
export default {
    name: 'AppMain',
    data() {
        return {
            direction: 'slide-right'
        }
    },
    watch: {
        $route(to, from) {
            const toDepth = to.path.split("/").length;
            const fromDepth = from.path.split("/").length;
            if (to.path === "/") {
                this.direction = "slide-right";
            } else if (from.path === "/") {
                this.direction = "slide-left";
            } else {
                this.direction = toDepth < fromDepth ? "slide-right" : "slide-left";
            }
        }
    },
    computed: {
        cachedViews() {
            return this.$store.state.tagsView.cachedViews
        },
        key() {
            return this.$route.path
        }
    }
}
</script>

<style lang="less" scoped>
.app-main {
    display: flex;
    width: 100%;
    position: relative;
    overflow: hidden;
}
</style>

<style lang="less">
  .appView {
      position: absolute;
      width: 100%;
      transition: transform 0.3s ease-out;
  }

  .slide-left-enter {
      transform: translate(100%, 0);
  }

  .slide-left-leave-active {
      transform: translate(-50%, 0);
  }

  .slide-right-enter {
      transform: translate(-50%, 0);
  }

  .slide-right-leave-active {
      transform: translate(100%, 0);
  }
</style>
