<template>
  <div class="w-full h-full flex flex-col gap-2 items-center justify-center">
    <div class="w-[60%] flex flex-row gap-2 items-center">
      <div class="w-full hover:bg-slate-800 py-2">
        <div class="flex items-center justify-center">
          <div class="w-[60%]">
            <router-link to="/accounts/list" class="flex flex-row gap-2 items-center">
              <img src="@/assets/icons/list_account.svg" />
              <span>List Accounts</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="w-full hover:bg-slate-800 py-2">
        <div class="flex items-center justify-center">
          <div class="w-[60%]">
            <router-link to="/accounts/register" class="flex flex-row gap-2 items-center">
              <img src="@/assets/icons/add_account.svg" />
              <span>Add Account</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
