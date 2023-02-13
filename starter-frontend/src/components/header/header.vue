<template>
    <nav
        class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div class="collapse navbar-collapse flex-grow items-center">
                <router-link class="text-xl text-white pr-2 font-semibold" to="/">Home</router-link>
            </div>

            <div class="flex items-center relative">
                <ul class="navbar-nav flex pl-0 list-style-none mr-auto">
                    <li v-if="!authorized" class="nav-item p-2">
                        <router-link class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                            to="/login">Login</router-link>
                    </li>
                    <li v-if="!authorized" class="nav-item p-2">
                        <router-link class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                            to="/registration">Registration</router-link>
                    </li>
                    <li v-if="authorized" class="nav-item p-2">Logged in as {{ user?.name }}
                        <button class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0" @click="onLogout">Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
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