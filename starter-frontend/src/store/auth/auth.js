import router from "@/router";
import api from "@/services/api";
import service from "@/services/service";

export const namespaced = true;

export const state = {
  user: null,
  authorized: null,
  loading: false,
  notification: {
    type: "",
    message: "",
  },
};

export const mutations = {
  SET_AUTHORIZED(state, authorized) {
    state.authorized = authorized;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_NOTIFICATION(state, notification) {
    state.notification = notification;
  },
};

export const actions = {
  login({ commit, dispatch, state }, payload) {
    commit("SET_LOADING", true);
    api
      .login(payload)
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        commit("SET_AUTHORIZED", true);
        const messageData = {
          type: response.data.type,
          message: response.data.message,
        };
        commit("SET_NOTIFICATION", messageData);
        dispatch("get_user");
      })
      .catch((err) => {
        localStorage.setItem("token", "");
        commit("SET_AUTHORIZED", false);
        const messageData = {
          type: err.response.data.type,
          message: err.response.data.message,
        };
        commit("SET_NOTIFICATION", messageData);
      })
      .finally(() => {
        commit("SET_LOADING", false);
      });
  },
  get_user({ commit, dispatch, state }, payload) {
    service
      .get_user()
      .then((response) => {
        commit("SET_USER", response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  },
  check_auth({ commit, dispatch, state }, payload) {
    if (localStorage.getItem("token")) {
      commit("SET_AUTHORIZED", true);
      dispatch("get_user");
    }
  },
  logout({ commit, dispatch, state }, payload) {
    commit("SET_AUTHORIZED", false);
    commit("SET_USER", {});
    localStorage.setItem("token", "");
    router.push({ path: "/login" });
    service
      .logout()
      .then((response) => {
        consolelog(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  },
};

export const getters = {
  authorized: (state) => {
    return state.authorized;
  },
  error: (state) => {
    return state.error;
  },
  loading: (state) => {
    return state.loading;
  },
};
