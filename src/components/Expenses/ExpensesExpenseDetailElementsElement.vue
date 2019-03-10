<template>
  <div class="flex flex-row pt-8">
    <div class="mr-4">
      <div class="rounded-full mx-auto max-w-sm overflow-hidden w-6">
        <div v-if="user" class="sm:items-center">
          <img
            class="block h-5 sm:h-5 rounded-full self-center"
            :src="getAvatarUrl(user.email)"
            alt
          />
        </div>
        <div v-else class="sm:items-center">
          <font-awesome-icon class="font-semibold ml-1" :class="color" :icon="fontIcon" />
        </div>
      </div>
    </div>
    <div class="font-medium text-grey-darkest text-grey-darker">{{ getValue }}</div>
  </div>
</template>

<script>
import { fontIcon } from '@/utils';

export default {
  name: 'ExpensesExpenseDetailElementElement',
  props: {
    type: {
      type: String,
      default: () => '',
    },
    value: {
      type: String,
      default: () => '',
    },
    user: {
      type: Object,
      default: () => {},
    },
    color: {
      type: String,
      default: () => 'text-grey-dark',
    },
  },
  computed: {
    fontIcon,
    getValue() {
      return this.user ? `${this.user.first} ${this.user.last}` : this.value;
    },
  },

  methods: {
    getAvatarUrl: email => `https://api.adorable.io/avatars/285/${email}`,
  },
};
</script>
