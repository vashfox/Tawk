import _orderBy from "lodash/orderBy";
import _findIndex from "lodash/findIndex";

export default {
  namespaced: true,
  state: {
    categoryInfo: null,
    articles: [],
  },
  mutations: {
    setCategory(state, payload) {
      state.categoryInfo = payload;
    },
    setArticles(state, payload) {
      state.articles = payload;
    },
  },
  getters: {
    categoryInfo: (state) => state.categoryInfo,
    articles: (state) => state.articles,
  },
  actions: {
    getArticles({ rootGetters, commit }) {
      commit("setArticles", rootGetters["bundle"]["articles"]);
    },
    getCategoryInfo({ rootGetters, commit }, payload) {
      let itemIndex = _findIndex(
        rootGetters["Home/categories"],
        (o) => o.id == payload
      );
      commit("setCategory", rootGetters["Home/categories"][itemIndex]);
    },
  },
};
