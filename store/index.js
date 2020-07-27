import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const state = () => ({
  authUser: null,
  token: null,
  history: [],
  favorites: [],
  breadCrumbs: [{ page: "Home", show: "Home", route: "" }]
})

export const getters = {
  getHistory: state => {
    return state.history;
  },
  getFavorites: state => {
    return state.favorites;
  },
  checkFavorite: (state) => (javId) => {
    if (state.favorites.some(item => item === javId)) {
      return true;
    } else {
      return false;
    }
  }
}

export const mutations = {
  SET_HISTORY(state, history) {
    if (history) {
      state.history = history;
      this.$cookies.set('history', history, {
        path: '/',
        maxAge: 60 * 60 * 24 * 14
      })
    } else {
      state.history = [];
      this.$cookies.set('history', [], {
        path: '/',
        maxAge: 60 * 60 * 24 * 14
      })
    }
  },
  SET_FAVORITES(state, favorites) {
    if (favorites) {
      state.favorites = favorites;
      this.$cookies.set('favorites', favorites, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      })
    } else {
      state.favorites = [];
      this.$cookies.set('favorites', [], {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      })
    }
  },
  ADD_HISTORY(state, javId) {
    if (javId) {
      if (!state.history.some(item => item === javId)) {
        state.history.unshift(javId);
      }
      this.$cookies.set('history', state.history, {
        path: '/',
        maxAge: 60 * 60 * 24 * 14
      })
    }
  },
  ADD_FAVORITE(state, javId) {
    if (javId) {
      if (!state.favorites.some(item => item === javId)) {
        state.favorites.unshift(javId);
      } else {
        const index = state.favorites.findIndex(item => item === javId);
        state.favorites.splice(index, 1);
      }
      this.$cookies.set('favorites', state.favorites, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      })
    }
  },
  SET_USER(state, user) {
    if (user) {
      state.authUser = user.data.user
      this.$cookies.set('user', user.data.user, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      state.token = user.data.token
      this.$cookies.set('token', user.data.token, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    } else {
      state.authUser = null
      this.$cookies.set('user', null, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      state.token = null
      this.$cookies.set('token', null, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    }
  },
  SET_BREADCRUMBS(state, page) {
    if (page) {
      if (page.page == "Home") {
        let newCrumbs = [{ page: "Home", route: "" }];
        state.breadCrumbs = newCrumbs;
      } else {
        if (page.page == "Categories") {
          let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: page.page, show: page.show, route: page.route }];
          state.breadCrumbs = newCrumbs;
        } else {
          if (page.page == "Idols") {
            let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: page.page, show: page.show, route: page.route }];
            state.breadCrumbs = newCrumbs;
          } else {
            if (page.page == "Idol") {
              let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: "Idols", show: "Idols", route: "idols/1" }, { page: page.page, show: page.show, route: page.route }];
              state.breadCrumbs = newCrumbs;
            } else {
              if (page.page == "Category") {
                let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: "Categories", show: "Categories", route: "categories" }, { page: page.page, show: page.show, route: page.route }];
                state.breadCrumbs = newCrumbs;
              } else {
                if (page.page == "Javs") {
                  let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: page.page, show: page.show, route: page.route }];
                  state.breadCrumbs = newCrumbs;
                } else {
                  if (page.page == "Jav") {
                    let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: "Javs", show: "Javs", route: "javs/1" }, { page: page.page, show: page.show, route: page.route }];
                    state.breadCrumbs = newCrumbs;
                  } else {
                    if (page.page == "Search") {
                      let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: page.page, show: page.show, route: page.route }];
                      state.breadCrumbs = newCrumbs;
                    } else {
                      if (page.page == "Favorites") {
                        let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: page.page, show: page.show, route: page.route }];
                        state.breadCrumbs = newCrumbs;
                      } else {
                        if (page.page == "History") {
                          let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: page.page, show: page.show, route: page.route }];
                          state.breadCrumbs = newCrumbs;
                        } else {

                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

export const actions = {
  nuxtServerInit({ commit, state }, { req }) {
    const cookieUser = this.$cookies.get('user');
    const cookieToken = this.$cookies.get('token');
    const cookieHistory = this.$cookies.get('history');
    const cookieFavorites = this.$cookies.get('favorites');
    if (cookieUser) {
      let userData = {
        "data": {
          "user": cookieUser,
          "token": cookieToken
        }
      }
      commit('SET_USER', userData)
    } else {
      commit('SET_USER', null)
    }
    if (cookieHistory) {
      commit('SET_HISTORY', cookieHistory);
    } else {
      commit('SET_HISTORY', null);
    }
    if (cookieFavorites) {
      commit('SET_FAVORITES', cookieFavorites);
    } else {
      commit('SET_FAVORITES', null);
    }
  },

  addToHistory({ commit }, { javId }) {
    commit('ADD_HISTORY', javId);
  },

  addToFavorites({ commit }, { javId }) {
    commit('ADD_FAVORITE', javId);
  },

  async login({ commit }, { email, password }) {
    try {
      const user = await axios.post('https://jav.souzou.dev/jav4free/user/login', { email, password })
      commit('SET_USER', user)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout({ commit }) {
    try {
      commit('SET_USER', null)
    } catch (error) {
      throw error;
    }
  },

  async addCrumb({ commit }, { page, show, route }) {
    let newPage;
    if (page == "Idol") {
      try {
        let idolId = show;
        let idol = await axios.get(
          "https://jav.souzou.dev/jav4free/idols/" + idolId
        );
        newPage = { page: page, show: idol.data.idol.name, route: route }
      } catch (error) {
        throw error
      }
    } else {
      if (page == "Category") {
        try {
          let categoryId = show;
          let category = await axios.get(
            "https://jav.souzou.dev/jav4free/categories/" + categoryId
          );
          newPage = { page: page, show: category.data.category.name, route: route }
        } catch (error) {
          throw error
        }
      } else {
        if (page == "Jav") {
          try {
            let javId = show;
            let jav = await axios.get(
              "https://jav.souzou.dev/jav4free/javs/" + javId
            );
            newPage = { page: page, show: jav.data.jav.code, route: route }
          } catch (error) {
            throw error
          }
        } else {
          if (page == "Search") {
            newPage = { page: page, show: show, route: route }
          } else {
            if (page == "Favorites") {
              newPage = { page: page, show: show, route: route }
            } else {
              if (page == "History") {
                newPage = { page: page, show: show, route: route }
              } else {
                newPage = { page: page, show: show, route: route }
              }
            }
          }
        }
      }
    }
    commit('SET_BREADCRUMBS', newPage)
  },

}