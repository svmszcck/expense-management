<template>
  <div class="px py-2 mt-2 ml-2 mb-2 mr-6 cursor-pointer" @click="openExpense(expense.id)">
    <div class="flex flex-row">
      <div class="mr-4">
        <div class="rounded-full mx-auto max-w-sm overflow-hidden">
          <div class="sm:items-center">
            <img
              class="block h-12 sm:h-12 rounded-full self-center"
              :src="getAvatarUrl(expense.user.email)"
              alt
            />
          </div>
        </div>
      </div>
      <div class="w-3/5 flex-shrink">
        <div class="text-grey-darker font-medium capitalize">{{ merchantLow }}</div>
        <div class="text-grey mt-2 text-sm">{{ expense.user.first }} {{ expense.user.last }}</div>
        <div v-if="showComment" class="border-l-2 mt-4 border-expense pl-4">
          <div class="pt-1 pb-1 text-grey font-bold">{{ expense.category }}</div>
          <div class="pt-1 pb-1 text-sm text-grey italic">empty</div>
        </div>
      </div>
      <div class="w-1/5 flex-none text-xl font-medium text-grey-dark text-right">
        {{ getCurrency(expense.amount.currency) }}{{ expense.amount.value }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // campos de la db
  name: 'ExpensesExpense',

  props: {
    expense: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    merchantLow() {
      return this.expense.merchant.toLowerCase();
    },
    showComment() {
      return this.expense.comment != '';
    },
  },
  methods: {
    getAvatarUrl: email => `https://api.adorable.io/avatars/285/${email}`,
    openExpense: expenseId => console.log(expenseId),
    getCurrency: currency => {
      const currencies = {
        DKK: 'kr',
        EUR: '€',
        GBP: '£',
        USD: '$',
      };
      return currencies[currency];
    },
  },
};
</script>
