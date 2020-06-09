<template>
  <div :class="collapse ? 'sidebar-logo-container close' : 'sidebar-logo-container'">
    <transition name="sidebarLogoFade">
      <div class="sidebar-logo-link" @click="logoIn">
          <img v-if="logo" v-lazy="`${this.publicPath}${logo}`" class="sidebar-logo" alt="logo">
          <h1 class="sidebar-title">{{ name }}</h1>
      </div>
    </transition>
  </div>
</template>

<script>
  import { getConfig } from '@/utils/getConfig';

  export default {
      name: 'SidebarLogo',
      props: {
          collapse: {
              type: Boolean
          }
      },
      data() {
          return {
              publicPath: process.env.BASE_URL,
              name: '',
              logo: ''
          }
      },
      mounted() {
          // 读取配置文件修改logo和name
          this.logo = getConfig(['basis', 'logo']);
          this.name = getConfig(['basis', 'name']);
      },
      methods: {
          logoIn() {
              this.$router.push({name: 'welcome'})
          }
      },
  }
</script>

<style lang="less" scoped>

.sidebar-logo-container {
    position: relative;height: 50px;line-height: 50px;text-align: center;overflow: hidden;background: #002140;
    display: flex;justify-content: center;align-items: center;
    width: 100%;

    .el-submenu__title {
        transition: 0s !important;
    }

    & .sidebar-logo-link {
        height: 100%;width: 100%;cursor: pointer;display: flex;justify-content: center;align-items: center;

        & .sidebar-logo {
            width: 32px;height: 32px;
        }

        & .sidebar-title {
            display: inline-block;margin: 0 0 0 12px;color: #fff;font-weight: 600;line-height: 50px;font-size: 14px;font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;vertical-align: middle;
        }
    }

    &.collapse {
        .sidebar-logo {
            margin-right: 0;
        }
    }
}
</style>
