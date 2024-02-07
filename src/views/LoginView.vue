<template>
  <div class="h-full w-full flex flex-col items-center justify-center">
    <div class="w-[25%] flex flex-col gap-5">
      <div class="flex flex-col items-center justify-center my-3">
        <img src="@/assets/owl-logo.png" class="w-[60%] rounded-[50%]" alt="OWL Logo" />
        <span class="font-bold text-4xl mb-2">Login to OWL</span>
      </div>
      <div class="flex flex-col gap-2">
        <div class="mb-6">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 text-white"
            >Username</label
          >
          <input
            type="text"
            id="username"
            class="bg-transparent border-0 border-b-2 outline-none border text-sm focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 ocus:border-blue-500"
            placeholder="e.g john123"
            required
            v-model="form.username"
          />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 text-white"
            >Password</label
          >
          <input
            type="password"
            id="password"
            class="bg-transparent border-0 border-b-2 outline-none border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
            v-model="form.password"
          />
        </div>
      </div>
      <div class="flex flex-col items-end gap-5">
        <router-link
          to="/forgor-password"
          class="text-6md font-medium hover:underline hover:italic"
        >
          Forgot Password?
        </router-link>
        <button
          type="button"
          class="text-white focus:ring-4 focus:outline-none font-medium text-lg w-full sm:w-auto px-10 py-1.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          @click="check_login"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()

const form = ref({
  username: '',
  password: ''
})

const check_login = () => {
  if (form.value.username !== '' && form.value.password !== '') {
    if (form.value.username === 'kulas.admin' && form.value.password === 'kulas123') {
      userStore.set_auth()
      router.push({ name: 'home' })
    }
  } else {
    return
  }
}
</script>
