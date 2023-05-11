import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    fullName(state) {
      return "当前参数值" + state.count;
    },
  },
  mutations: {
    addCountByCommit(store, count) {
      store.count += count;
    },
    addCountByCommitMap(store, count) {
      store.count += count;
    },
  },
  actions: {
    addCountByAysnc(store, count) {
      setTimeout(() => {
        store.commit("addCountByCommit", count);
      }, 1000);
    },
    addCountByAysncMap(store, count) {
      setTimeout(() => {
        store.commit("addCountByCommit", count);
      }, 1000);
    },
  },
  modules: {},
});
