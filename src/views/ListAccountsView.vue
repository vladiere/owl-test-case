<template>
  <div class="h-full w-full p-0">
    <table class="w-full text-sm text-center rtl:text-right text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" class="px-2 py-3">
                    Firstname
                </th>
                <th scope="col" class="px-2 py-3">
                    Middlename
                </th>
                <th scope="col" class="px-2 py-3">
                    Lastname
                </th>
                <th scope="col" class="px-2 py-3">
                    Email Address
                </th>
                <th scope="col" class="px-2 py-3">
                    Occupation
                </th>
                <th scope="col" class="px-2 py-3">
                    Position
                </th>
                <th scope="col" class="px-2 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="account in accounts" :key="account.id" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td class="px-2 py-4 capitalize">
                  {{ account.firstname }}
                </td>
                <td class="px-2 py-4 capitalize">
                  {{ account.middlename }}
                </td>
                <td class="px-2 py-4 capitalize">
                  {{ account.lastname }}
                </td>
                <td class="px-2 py-4">
                  {{ account.email_address }}
                </td>
                <td class="px-2 py-4 capitalize">
                  {{ account.occupation }}
                </td>
                <td class="px-2 py-4 capitalize">
                  {{ account.position }}
                </td>
                <td class="py-4 justify-center capitalize flex gap-2">
                  <router-link :to="{ path: '/accounts/update', query: { id: account.id } }" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</router-link>
                    <button class="font-medium text-red-600 dark:text-red-500 hover:underline" @click="delete_acc(account.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { useAccountStore } from '../stores/accounts';

  const accountStore = useAccountStore();

  const accounts = ref([]);

  const delete_acc = (id: string) => {
    const is_ok = window.confirm('Are you sure you want to delete this account?');

    if (is_ok) {
      accountStore.delete_account(id);
    }
  }

  onMounted(() => {
    accounts.value = [];
    accounts.value = accountStore.get_accounts;
  })

  watch(() => accountStore.get_accounts, (newVal, oldVal) => {
    accounts.value = [];
    accounts.value = newVal;
  });
</script>
