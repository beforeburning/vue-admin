<template>

    <div class="userBox" @mouseenter="enter" @mouseleave="leave">
        <div class="userName">
            <img :src="user.header" alt=""><p>{{user.name}}</p><i
            :class="isDropDown ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"></i>
        </div>

        <div class="dropDownBox animated flipInY" v-show="isDropDown">
            <div class="dropDown">
                <p @click="personal"><i class='el-icon-s-custom'></i>个人中心</p>
                <p @click="account"><i class='el-icon-s-tools'></i>账户设置</p>
                <p @click="exit"><i class="el-icon-switch-button"></i>退出登录</p>
            </div>
        </div>

    </div>
</template>

<script>
    import { storage } from "@/utils/localStorage.js";
    import { loginOut } from '@/api/user';

    export default {
        name: 'user',
        data() {
            return {
                user: {},
                isDropDown: false,
                dropDown: []
            }
        },
        mounted() {
            let user = this.$store.state.user;
            if (!user) {
                this.$message.error('未获取到用户信息,请重新登录~');
                this.$router.push({name: 'login'});
                return false
            }
            this.user = user;
        },
        methods: {
            // 展开收起
            enter() {
                this.isDropDown = true
            },
            leave() {
                this.isDropDown = false
            },
            // 退出登录
            exit() {
                loginOut().then(res => {
                    if (res.state) {
                        // 清楚token和user信息
                        this.$store.commit('token', '');
                        storage.remove('token');
                        this.$store.commit('user', {});
                        storage.remove('user');
                        this.$message.success(res.message);
                        // 跳转到登录页
                        this.$router.push({name: 'login'});
                    }
                }).catch(() => {
                    console.log('请求失败');
                })
            },
            // 个人中心
            personal() {
                this.$router.push({name: 'personal'});
            },
            // 账户设置
            account() {
                this.$router.push({name: 'account'});
            }
        }
    }
</script>

<style scoped lang="less">
    .userBox {
        margin-right: 15px;cursor: pointer;position: relative;

        .userName {
            display: flex;justify-content: center;align-items: center;

            img {
                width: 30px;height: 30px;border-radius: 50%;margin-right: 10px;
            }

            p {
                font-size: 16px;color: rgba(0, 0, 0, .65);margin: 0 10px 0 0;padding: 0;display: inline-block;
            }

            i {
                color: rgba(0, 0, 0, .65);display: flex;justify-content: center;align-items: center;
            }

        }

        .dropDownBox {
            position: absolute;left: -30px;top: 50px;width: 150px;
            display: flex;z-index: 2;transition: .3s;

            .dropDown {
                box-shadow: 2px 2px 7px rgba(51, 51, 51, 0.3);display: flex;flex-direction: column; width: 100%;
                margin-top: 10px;border-radius: 10px;

                p {
                    background: #fff;margin: 0;width: 100%;padding: 10px 0;transition: .1s;font-size: 14px;

                    i {
                        margin-right: 10px;
                    }

                    &:last-child {
                        border-top: 1px solid #efefef;box-sizing: border-box;
                    }

                    &:hover {
                        background: #40a9ff;color: white;transition: .1s;
                    }

                }
            }
        }
    }
</style>
