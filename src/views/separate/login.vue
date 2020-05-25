<template>
    <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on"
             label-position="left">

        <div class="title-container">
            <h3 class="title">Login Form</h3>
        </div>

        <el-form-item prop="username">
            <span class="svg-container">
                <i class="el-icon-user"></i>
            </span>
            <el-input
                ref="username"
                v-model="loginForm.username"
                placeholder="Username"
                name="username"
                type="text"
                tabindex="1"
                autocomplete="on"
            ></el-input>
        </el-form-item>

        <el-tooltip v-model="capsTooltip" content="开启了大写哦!" placement="right" manual>
            <el-form-item prop="password">
                <span class="svg-container">
                  <i class="el-icon-unlock"></i>
                </span>
                <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    placeholder="Password"
                    name="password"
                    tabindex="2"
                    autocomplete="on"
                    @keyup.native="checkCapslock"
                    @blur="capsTooltip = false"
                    @keyup.enter.native="handleLogin"></el-input>
                <span class="show-pwd" @click="showPwd">
                    <i :class="passwordType === 'password' ? 'el-icon-view' : 'el-icon-sugar'"></i>
                </span>
            </el-form-item>
        </el-tooltip>

        <el-checkbox class="remember" v-model="isRemember" name="remember">记住密码</el-checkbox>

        <el-button :loading="loading" type="primary" class="loginBtn"
                   @click.native.prevent="handleLogin">Login</el-button>

    </el-form>
  </div>
</template>

<script>
    import { CEN } from '@/utils/validate';
    import { login } from '@/api/login';
    import { storage } from "@/utils/localStorage.js";

    export default {
        name: 'login',
        data() {
            const validateUsername = (rule, value, callback) => {
                if (value.length < 2 || value.length > 12) {
                    callback(new Error('您的用户名长度不正确'))
                }
                if (!CEN(value)) {
                    callback(new Error('用户名只允许含有中英文加数字'))
                } else {
                    callback()
                }
            };
            const validatePassword = (rule, value, callback) => {
                if (value.length < 6 || value.length > 12) {
                    callback(new Error('密码长度6到12位'))
                } else {
                    callback()
                }
            };
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                isRemember: true,
                loginRules: {
                    username: [{required: true, trigger: 'blur', validator: validateUsername}],
                    password: [{required: true, trigger: 'blur', validator: validatePassword}]
                },
                passwordType: 'password',
                capsTooltip: false,
                loading: false,
                showDialog: false,
            }
        },
        mounted() {
            let loginForm = storage.get('loginForm');
            if (loginForm && typeof loginForm === 'object') {
                this.loginForm = {
                    username: loginForm.username,
                    password: loginForm.password
                }
            }
        },
        methods: {
            // 密码点击按钮明文
            showPwd() {
                if (this.passwordType === 'password') {
                    this.passwordType = ''
                } else {
                    this.passwordType = 'password'
                }
                this.$nextTick(() => {
                    this.$refs.password.focus()
                })
            },
            // 提示开启了大写
            checkCapslock({shiftKey, key} = {}) {
                if (key && key.length === 1) {
                    this.capsTooltip = shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z');
                }
                if (key === 'CapsLock' && this.capsTooltip === true) {
                    this.capsTooltip = false
                }
            },
            // 登录按钮
            handleLogin() {
                this.loading = true;
                // 验证账号密码格式正确
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        login(this.loginForm).then(res => {
                            this.loading = false;
                            this.remember();
                            // token记录在vuex内
                            this.$store.commit('token', res.data.token);
                            storage.set('token', res.data.token);
                            // user 记录在vuex内
                            this.$store.commit('user', res.data.user);
                            storage.setJSON('user', res.data.user);
                            // 登录成功
                            this.$router.push({name: 'welcome'});
                        }).catch(() => {
                            this.loading = false;
                        })
                    } else {
                        console.log('error submit!!');
                        this.loading = false;
                        return false;
                    }
                })
            },
            // 记住密码
            remember() {
                if (this.isRemember) {
                    storage.setJSON('loginForm', this.loginForm);
                } else {
                    storage.remove('loginForm');
                }
            }
        }
    }
</script>

<style lang='less'>
@dark_gray: #889aa4;
@light_gray: #eee;
.login-container {
    position: fixed;height: 100%;min-height: 100%;width: 100%;background-color: #2d3a4b;overflow: hidden;

    .el-input {
        display: inline-block;height: 47px;width: 85%;

        input {
            background: transparent;border: 0;-webkit-appearance: none;border-radius: 0;padding: 12px 5px 12px 0;color: #fff;height: 47px !important;caret-color: #fff;

            &:-webkit-autofill {
                box-shadow: 0 0 0 1000px #283443 inset !important;-webkit-text-fill-color: #fff !important;
            }
        }
    }

    .loginBtn {
        width: 100%;margin-bottom: 30px;
    }

    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);background: rgba(0, 0, 0, 0.1);border-radius: 5px;color: #454545;
    }

    .login-form {
        position: relative;width: 450px;max-width: 100%;padding: 160px 35px 0;margin: 0 auto;overflow: hidden;
    }

    .tips {
        font-size: 14px;color: #fff;margin-bottom: 10px;

        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }

    .svg-container {
        color: @dark_gray;vertical-align: middle;width: 30px;display: inline-block;text-align: center;float: left;margin-left: 15px;

        i {
            font-size: 20px;display: inline-block;margin-top: 14px;
        }
    }

    .title-container {
        position: relative;

        .title {
            font-size: 26px;color: @light_gray;margin: 0 auto 40px auto;text-align: center;font-weight: bold;
        }
    }

    .show-pwd {
        position: absolute;right: 10px;top: 0;width: 30px;height: 47px;font-size: 16px;color: @dark_gray;cursor: pointer;user-select: none;

        i {
            font-size: 20px;display: inline-block;margin-top: 14px;
        }
    }

    .thirdparty-button {
        position: absolute;right: 0;bottom: 6px;
    }

    .remember {
        width: 100%;display: block;margin-bottom: 22px;height: 16px;

        span {
            float: left;height: 14px;
        }

        .el-checkbox__label {
            height: 16px;line-height: 16px;
        }
    }

}
</style>
