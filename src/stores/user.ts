import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    authenticated: false,
  }),
  getters: {
    is_authenticated: (state) => state.authenticated,
  },
  actions: {
    set_auth() {
      this.authenticated = true
    },
    logout() {
      this.authenticated = false
    },
  },
  persist: true,
});
