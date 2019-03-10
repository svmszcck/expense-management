<template>
  <div class="flex flex-col w-full overflow-y-auto">
    <div class="flex flex-row font-semibold justify-between w-full pb-6">
      <div class="pl-12 pt-3">
        <font-awesome-icon
          class="mr-4 text-grey-dark"
          icon="chevron-up"
          :title="$t('expense.up')"
        />
        <font-awesome-icon
          class="mr-4 text-grey-light"
          icon="chevron-down"
          :title="$t('expense.down')"
        />
      </div>
      <div class="flex flex-row pb-3">
        <div class="pl-3 pt-3 pb-3 pr-5 border-pleo border-b-2 text-grey-darker">
          {{ $t('expense.details') }}
        </div>
        <div class="pl-5 pt-3 pb-3 pr-3 text-grey border-grey-light border-b-2">
          {{ $t('expense.activity') }}
        </div>
      </div>
      <div class="pt-3  ">
        <font-awesome-icon class="mr-4 text-grey-dark" icon="eye" :title="$t('expense.watching')" />
        <span class="text-grey">3</span>
      </div>
    </div>
    <div class="pl-12 flex flex-col items-center pt-24">
      <div class="flex flex-col justify-center block h-24 sm:h-24 w-24 rounded-full bg-green-light">
        <span class="text-white text-5xl ml-8">{{ merchantInitial }}</span>
      </div>
      <div class="text-xl font-medium text-grey-darkest pt-4"></div>
      <div class="text-3xl font-normal text-grey-dark pt-2">
        {{ getCurrency(currentExpense.amount.currency) }}{{ currentExpense.amount.value }}
      </div>
      <div class="font-normal text-grey pt-2">{{ currentExpense.date }}</div>
    </div>

    <div class="pl-40 flex flex-col items-left pt-12">
      <ExpensesExpenseDetailElements :expense="currentExpense" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { getCurrency } from '@/utils';
import ExpensesExpenseDetailElements from '@/components/Expenses/ExpensesExpenseDetailElements.vue';

export default {
  name: 'ExpensesExpenseDetail',

  components: {
    ExpensesExpenseDetailElements,
  },

  data() {
    return {
      currentExpense: {
        id: '',
        amount: { value: '', currency: '' },
        date: '',
        merchant: '',
        receipts: [],
        comment: '',
        category: '',
        user: { first: '', last: '', email: '' },
        index: null,
      },
    };
  },

  computed: {
    ...mapGetters(['expense']),

    merchantInitial() {
      return this.currentExpense.merchant[0];
    },
  },

  mounted() {
    this.$store.watch(
      (state, getters) => getters.expense,
      newValue => {
        this.currentExpense = newValue;
      },
    );
  },

  methods: {
    getCurrency,
  },
};
</script>
