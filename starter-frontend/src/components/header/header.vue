<template>
    <div>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li v-if="!authorized"><router-link to="/login">Login</router-link></li>
            <li v-if="!authorized"><router-link to="/registration">Registration</router-link></li>
            <li v-if="authorized">Logged in as {{ user?.name }} <button @click="onLogout">Logout</button></li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "siteHeader",
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters("auth", ["authorized"]),
        user() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        onLogout() {
            this.$store.dispatch("auth/logout");
        }
    },
}
</script>

<style scoped>

</style>