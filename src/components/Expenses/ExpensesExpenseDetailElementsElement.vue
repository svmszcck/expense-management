<template>
  <div class="flex flex-row pt-8">
    <div class="mr-4">
      <div class="rounded-full mx-auto max-w-sm overflow-hidden w-6">
        <div class="sm:items-center">
          <font-awesome-icon class="font-semibold ml-1" :class="color" :icon="fontIcon" />
        </div>
      </div>
    </div>
    <div class="font-medium text-grey-darkest text-grey-darker">Leonard Oliveira</div>
  </div>
</template>

<script>
export default {
  name: 'ExpensesExpenseDetailElementElement',
  props: {
    type: {
      type: String,
      default: () => '',
    },
    color: {
      type: String,
      default: () => 'text-grey-dark',
    },
  },
  computed: {
    fontIcon() {
      const iconType = [
        {
          type: 'team',
          value: 'users',
        },
        {
          type: 'category',
          value: 'utensils',
        },
        {
          type: 'vat',
          value: 'calculator',
        },
        {
          type: 'tag',
          value: 'tag',
        },
        {
          type: 'comment',
          value: 'comment-alt',
        },
      ];
      return iconType.find(o => o.type === this.type).value;
    },
  },
};
</script>
