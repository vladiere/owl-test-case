import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

interface Account {
  id: string;
  firstname: string;
  middlename: string;
  lastname: string;
  email_address: string;
  occupation: string;
  position: string;
}

interface AccountCreate {
  firstname: string;
  middlename: string;
  lastname: string;
  email_address: string;
  occupation: string;
  position: string;
}

export const useAccountStore = defineStore('accounts', {
  state: () => ({
    accounts: [] as Accounts[],
  }),
  getters: {
    get_accounts: (state) => state.accounts,
  },
  actions: {
    add_account(account: AccountCreate) {
      this.accounts.push({
        id: uuidv4(),
        ...account,
      });
    },
    delete_account(accountId: string) {
      this.accounts = this.accounts.filter((account) => account.id !== accountId);
    },
    update_account(updatedAccount: Account) {
      const index = this.accounts.findIndex((account) => account.id === updatedAccount.id);
      if (index !== -1) {
        this.accounts[index] = updatedAccount;
      }
    },
    get_account_by_id(accountId: string): Account | undefined {
      return this.accounts.find((account) => account.id === accountId);
    },
  },
  persist: true,
});
