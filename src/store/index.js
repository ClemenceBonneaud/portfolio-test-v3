import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

const ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    activeTab: null,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [],
});
