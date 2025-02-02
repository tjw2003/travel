<template>
    <div class="login-container">
        <h2>登录</h2>
        <!-- <form @submit.prevent="handleSubmit"> -->
        <form @submit.prevent="handleLogin">
            <input v-model="username" type="text" placeholder="Username" />
            <input v-model="password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
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
        async handleLogin() {
            const userId = this.username;
            this.$router.push(`/dashboard/${userId}`);
            // 模拟登录过程，通常你会通过 API 验证用户
            // const userId = await this.mockLogin(this.username, this.password);
            // if (userId) {
            //     // 登录成功，将用户 id 存储到 localStorage 或 Vuex 中
            //     localStorage.setItem('userId', userId);

            //     // 使用路由跳转到用户的 Dashboard 页面
            //     this.$router.push(`/dashboard/${userId}`);
            // } else {
            //     alert('Login failed!');
            // }
        },

        // // 模拟登录，实际项目中应该调用后端接口
        // mockLogin(username, password) {
        //     return new Promise((resolve) => {
        //         setTimeout(() => {
        //             // 假设我们通过用户名返回一个 id
        //             resolve(username === 'admin' ? '123' : null);
        //         }, 1000);
        //     });
        // }
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