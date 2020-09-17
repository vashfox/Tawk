import _orderBy from "lodash/orderBy";

export default {
  namespaced: true,
  state: {
    categories: [],
  },
  mutations: {
    setCategories(state, payload) {
      state.categories = payload;
    },
  },
  getters: {
    categories: (state) => _orderBy(state.categories, ["order"], ["asc"]),
  },
  actions: {
    getCategories({ rootGetters, commit }) {
      commit("setCategories", rootGetters["bundle"]["categories"]);
    },
    getCategoryIcon(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/svg/${payload}.svg`)
          .then((res) => {
            resolve(res.data.toString());
          })
          .catch((e) => {
            reject(e);
          });
      });
    },
  },
};
