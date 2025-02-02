<template>
    <div class="login-container">
        <h2>登录</h2>
        <!-- <form @submit.prevent="handleSubmit"> -->
        <form>
            <div class="form-group">
                <label for="username">用户名</label>
                <input type="text" id="username" v-model="username" required />
            </div>

            <div class="form-group">
                <label for="password">密码</label>
                <input type="password" id="password" v-model="password" required />
            </div>

            <!-- <button type="submit" :disabled="isSubmitting">登录</button> -->
            <button>登录</button>
        </form>

        <!-- <p v-if="errorMessage" class="error">{{ errorMessage }}</p> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            isSubmitting: false,
            errorMessage: ''
        };
    },
    methods: {
        //   async handleSubmit() {
        //     this.isSubmitting = true;
        //     this.errorMessage = '';

        //     // 模拟一个登录请求
        //     try {
        //       // 假设登录 API
        //       const response = await this.loginApi(this.username, this.password);
        //       if (response.success) {
        //         this.$router.push('/dashboard'); // 登录成功后跳转到仪表盘页面
        //       } else {
        //         this.errorMessage = '用户名或密码错误';
        //       }
        //     } catch (error) {
        //       this.errorMessage = '登录失败，请稍后重试';
        //     } finally {
        //       this.isSubmitting = false;
        //     }
        //   },
        //   async loginApi(username, password) {
        //     // 这里可以用 axios 或 fetch 进行 API 请求
        //     // 下面只是一个模拟的 API 调用
        //     return new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         if (username === 'admin' && password === '1234') {
        //           resolve({ success: true });
        //         } else {
        //           reject({ success: false });
        //         }
        //       }, 1000);
        //     });
        //   }
    }
};
</script>

<style scoped>
.login-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
}

h2 {
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:disabled {
    background-color: #aaa;
}

.error {
    color: red;
    margin-top: 10px;
}
</style>