<template>
  <div class="h-full w-full">
    <div class="h-full w-full flex items-center justify-center">
      <div class="w-[60%]">
        <div class="w-full flex flex-col gap-2">
          <div class="w-full flex flex-row gap-2">
            <div class="w-full mb-6">
              <label
                for="firstname"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Firstname</label
              >
              <input
                type="text"
                id="firstname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Firstname"
                required
                v-model="form.firstname"
              />
            </div>
            <div class="w-full mb-6">
              <label
                for="middlename"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Middlename</label
              >
              <input
                type="text"
                id="middlename"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Middlename"
                required
                v-model="form.middlename"
              />
            </div>
          </div>
          <div class="w-full flex flex-row gap-2">
            <div class="w-full mb-6">
              <label
                for="lastname"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Lastname</label
              >
              <input
                type="text"
                id="lastname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Lastname"
                required
                v-model="form.lastname"
              />
            </div>
            <div class="w-full mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Email Address</label
              >
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Emaill Address"
                required
                v-model="form.email_address"
              />
            </div>
          </div>
          <div class="w-full flex flex-row gap-2">
            <div class="w-full mb-6">
              <label
                for="occupation"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Occupation</label
              >
              <input
                type="text"
                id="occupation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Occupation"
                required
                v-model="form.occupation"
              />
            </div>
            <div class="w-full mb-6">
              <label
                for="position"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Position</label
              >
              <input
                type="text"
                id="position"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Position"
                required
                v-model="form.position"
              />
            </div>
          </div>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="update_account"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAccountStore } from '../stores/accounts'

const router = useRouter()
const accountStore = useAccountStore()
const form: any = ref({
  firstname: '',
  middlename: '',
  lastname: '',
  email_address: '',
  occupation: '',
  position: ''
})
const acc_id: any = ref('')

const update_account = () => {
  if (acc_id.value !== '') {
    if (
      form.value.firstname !== '' &&
      form.value.middlename !== '' &&
      form.value.lastname !== '' &&
      form.value.email_address !== '' &&
      form.value.occupation !== '' &&
      form.value.position !== ''
    ) {
      let update_acc = {
        id: acc_id.value,
        ...form.value
      }

      accountStore.update_account(update_acc)
      alert('Account updated successfully')
    } else {
      return
    }
  } else {
    return
  }
}

onMounted(() => {
  acc_id.value = router.currentRoute.value.query.id;

  let search_acc: any = accountStore.get_account_by_id(acc_id.value)

  form.value.firstname = search_acc.firstname;
  form.value.middlename = search_acc.middlename;
  form.value.lastname = search_acc.lastname;
  form.value.email_address = search_acc.email_address;
  form.value.occupation = search_acc.occupation;
  form.value.position = search_acc.position;
})
</script>
