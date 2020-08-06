import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const state = () => ({
  authUser: null,
  token: null,
})

export const getters = {
  getToken(state){
    if (state.token) {
      return state.token;  
    }else{
      return false;
    }
    
  }
}

export const mutations = {
  SET_USER(state, user) {
    state.authUser = user.user.email
    state.token = user.user.uid
  },
}

export const actions = {
  async signUp({ commit }, { email, password }) {
    try {
      await this.$fireAuth.createUserWithEmailAndPassword(
        email,
        password
      ).then(user => {
        commit('SET_USER', user)
      })
    } catch (error) {
      console.log(error);
    }
  }, async logIn({ commit }, { email, password }) {
    try {
      await this.$fireAuth.signInWithEmailAndPassword(
        email,
        password
      ).then(user => {
        console.log(user)
        commit('SET_USER', user)
      })
    } catch (error) {
      console.log(error);
    }
  },
}