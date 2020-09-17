import Vue from "vue";
import Vuex from "vuex";
import HomeModule from "./modules/HomeModule";
import CategoryModule from "./modules/CategoryModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bundleData: null,
    bundleLoaded: false,
    selectedCategory: null,
  },
  mutations: {
    setBundleData(state, payload) {
      state.bundleData = payload;
    },
    setSelectedCategory(state, payload) {
      state.selectedCategory = payload;
    },
    setBundleDataLoader(state, payload) {
      state.bundleLoaded = payload;
    },
  },
  getters: {
    bundle: (state) => state.bundleData,
    bundleLoaded: (state) => state.bundleLoaded,
  },
  actions: {
    getBundleData({ commit, dispatch }) {
      commit("setBundleDataLoader", true);
      return new Promise((resolve, reject) => {
        axios
          .get("/data/data.json")
          .then((res) => {
            commit("setBundleData", res.data);
            dispatch("Home/getCategories");
            commit("setBundleDataLoader", false);
            resolve(res);
          })
          .catch((e) => {
            commit("setBundleDataLoader", false);
            reject(e);
          });
      });
    },
  },
  modules: {
    Home: HomeModule,
    Category: CategoryModule,
  },
});
