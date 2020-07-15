<script src="../../utils/clipboard.js"></script><template>
  <div class="home">
    <p>首页</p>
    <p>当前是否是线上版本 {{isLocal}}</p>
    <el-button class="button" type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
  import { getConfig } from '@/utils/getConfig';

  export default {
      name: "home",
      components: {},
      data() {
          return {
              isLocal: ''
          }
      },
      methods: {
          login() {
              this.$router.push({name: 'login'})
          }
      },
      mounted() {
          this.isLocal = getConfig(['basis', 'isLocal'])

      },
  };
</script>

<style lang="less" scoped>
  .home {
      display: flex;flex-direction: column;align-items: center;

      .button {
          width: 200px;
      }
  }
</style>
