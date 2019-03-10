<template>
  <div>
    <!-- <ExpensesExpenseDetailElementsElement type="person" /> -->
    <ExpensesExpenseDetailElementsElement type="team" />
    <ExpensesExpenseDetailElementsElement type="category" color="text-green-light" />
    <ExpensesExpenseDetailElementsElement type="vat" />
    <ExpensesExpenseDetailElementsElement type="tag" />
    <ExpensesExpenseDetailElementsElement type="comment" />
  </div>
</template>
<script>
import ExpensesExpenseDetailElementsElement from '@/components/Expenses/ExpensesExpenseDetailElementsElement.vue';

export default {
  name: 'ExpensesExpenseDetailElements',
  components: {
    ExpensesExpenseDetailElementsElement,
  },
};
</script>
