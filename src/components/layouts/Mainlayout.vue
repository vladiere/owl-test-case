<template>
  <div class="flex flex-row">
    <div class="flex flex-col wrap w-[320px] items-center h-full border-r-2 border-slate-300">
      <div class="w-full items-center">
        <div class="flex flex-row justify-center items-center">
          <img src="@/assets/owl-logo.png" class="w-[30%] rounded-[50%]" alt="OWL Logo" />
          <span class="text-2xl font-bold">OWL</span>
        </div>
        <div class="flex flex-col mt-2 w-full">
          <div class="w-full hover:bg-slate-800 py-2">
            <div class="flex items-center justify-center">
              <div class="w-[60%]">
                <router-link to="/" class="flex flex-row gap-2 items-center">
                  <img src="@/assets/icons/home.svg" />
                  <span>Home</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="w-full hover:bg-slate-800 py-2">
            <div class="flex items-center justify-center">
              <div class="w-[60%]">
                <router-link to="/accounts" class="flex flex-row gap-2 items-center">
                  <img src="@/assets/icons/key.svg" />
                  <span>Accounts</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="w-full hoverlogin:bg-slate-800 py-2">
            <div class="flex items-center justify-center">
              <div class="w-[60%]">
                <router-link to="/monitoring" class="flex flex-row gap-2 items-center">
                  <img src="@/assets/icons/history.svg" />
                  <span>RT Monitoring</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="w-full hover:bg-slate-800 py-2">
            <div class="flex items-center justify-center">
              <div class="w-[60%]">
                <router-link to="/reports" class="flex flex-row gap-2 items-center">
                  <img src="@/assets/icons/report.svg" />
                  <span>Reports</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="w-full hover:bg-slate-800 py-2">
            <div class="flex items-center justify-center">
              <div class="w-[60%]">
                <button class="flex flex-row gap-2 items-center" @click="logout_user">
                  <img src="@/assets/icons/logout.svg" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user'

const router = useRouter()
const userStore = useUserStore()

const logout_user = () => {
  userStore.logout()
  router.push({ name: 'login' })
}
</script>
