<template>
  <div class="expenses"></div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Expenses',

  computed: {
    ...mapGetters(['expenses']),
  },

  created() {
    this.getExpenses();
  },

  methods: {
    ...mapActions(['getExpenses']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
