<template>
    <div>
        <h3>Login form</h3>
        <form action="" @submit="onLogin">
            <input type="email" v-model="email">
            <input type="password" v-model="password">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    name: "loginForm",
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        onLogin(e) {
            e.preventDefault();
            const payload = {
                email: this.email,
                password: this.password,
            };
            this.$store.dispatch("auth/login", payload);
        }
    },
}
</script>

<style scoped>

</style>