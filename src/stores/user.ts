// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'


export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: '',
    // 用户是否已经登录
    isLogin: false,

    isAdmin: true,
  }),

  actions: {
    logout() {
      this.$patch({
        name: '',
        isAdmin: false,
      })
      // we could do other stuff like redirecting the user
    },

    /**
     * Attempt to login a user
     * @param {string} user
     * @param {string} password
     */
    async login(user: string, password: string) {
      // const userData = await apiLogin(user, password)

      this.$patch({
        name: '南风北区',
        isLogin: true,
      })
    },
  },
})
