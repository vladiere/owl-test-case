import { defineStore } from 'pinia'

interface Account {
  id: number | null;
  firstname: string | null;
  middlename: string | null;
  lastname: string | null;
  email_address: string | null;
  occupation: string | null;
  position: string | null;
}

interface AccountCreate {
  firstname: string | null;
  middlename: string | null;
  lastname: string | null;
  email_address: string | null;
  occupation: string | null;
  position: string | null;
}

export const useAccountStore = defineStore('accounts', {
  state: () => ({
    accounts: [] as Account[]
  }),
  getters: {
    get_accounts: (state) => state.accounts
  },
  actions: {
    add_account(account: AccountCreate) {
      this.accounts.push({
        id: Math.floor(Math.random() * 9999999),
        ...account
      })
    },
    delete_account(accountId: string) {
      this.accounts = this.accounts.filter((account) => account.id !== accountId)
    },
    update_account(updatedAccount: Account) {
      const index = this.accounts.findIndex((account) => account.id === updatedAccount.id)
      if (index !== -1) {
        this.accounts[index] = updatedAccount
      }
    },
    get_account_by_id(accountId: string): Account | undefined {
      return this.accounts.find((account) => account.id === accountId)
    }
  },
  persist: true
})
