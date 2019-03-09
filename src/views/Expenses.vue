<template>
  <div class="flex-1 ml-64 bg-white h-full mt-12">
    <div class="inline-flex w-1/2 pl-20 pr-20">
      <div class="flex flex-col w-full">
        <ExpensesActionbar />
        <ExpensesSearch />
        <Expense v-for="(expense, index) in expenses" :key="index" :expense="expense" />
        <div
          class="text-grey-darker text-center px py-2 mt-2 ml-2 mb-2 mr-6"
          @click="getNextPage()"
        >
          Load More...
        </div>
      </div>
    </div>
    <div class="inline-flex bg-red w-2/5 fixed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida, tortor et viverra
      elementum, purus eros vestibulum ante, vel dictum ante lectus non ipsum. Phasellus non lacus
      sapien. Aenean viverra est non elit bibendum pharetra. Sed venenatis vel dui nec vulputate.
      Duis vel tempus felis, nec tempor arcu. Phasellus in nulla congue libero aliquet vestibulum
      vitae sed lorem. Aenean faucibus justo ut consequat venenatis. Fusce aliquam interdum urna,
      vel pretium lectus condimentum fermentum. Mauris vel porta nisi. Nam porttitor lectus eu diam
      ultrices, ac bibendum sapien placerat. Aliquam faucibus quam a dui iaculis, ut gravida sapien
      faucibus. Cras leo ex, aliquam vitae risus a, imperdiet congue quam. Nam quis risus
      pellentesque odio placerat mattis. Orci varius natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Vivamus et laoreet mauris, ac ullamcorper sapien. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in
      consequat turpis, quis euismod justo. Nullam ac dignissim odio, viverra auctor elit. Nulla
      facilisi. Etiam finibus, mi ut porta feugiat, ipsum nisl commodo purus, nec finibus lectus dui
      non leo. Phasellus id turpis massa. Sed sodales finibus ultricies. Curabitur vulputate lectus
      sit amet posuere efficitur. Donec mattis lacus viverra turpis placerat vestibulum. Nunc
      aliquet in felis eget ultricies. Etiam sagittis hendrerit est, vitae interdum magna congue ac.
      Aenean sit amet ante lacus. In dignissim, nisl eget facilisis placerat, augue dui bibendum
      dui, id gravida nibh augue eget risus. Nam vitae molestie magna. Mauris at vestibulum eros.
      Donec mollis ante ante, at aliquet ipsum ullamcorper sit amet. Maecenas eget nisi tellus.
      Fusce at nisl a mauris lobortis vestibulum. Proin odio sapien, ornare et fringilla sed, ornare
      ac nulla. Cras in sapien condimentum, tempor urna et, fermentum enim. Vivamus dictum id quam
      aliquet hendrerit. Donec porta orci risus. Sed ut feugiat justo. Ut eros risus, pretium ac
      tortor at, porttitor vulputate diam. Fusce lobortis diam ac erat fermentum, at auctor eros
      congue. Proin et sodales justo. Praesent elementum urna et elit accumsan molestie. Phasellus
      viverra diam ac sem imperdiet, quis convallis quam maximus. Morbi id varius erat. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus
      porttitor vulputate turpis, vitae congue nunc ullamcorper sed. Nam congue leo quis lobortis
      volutpat. In id convallis dolor. Sed fringilla molestie mauris, ut vulputate purus tristique
      at. Phasellus finibus laoreet mauris, et porttitor odio tempor in. Ut ut convallis sapien.
      Nunc nec iaculis urna. Quisque ornare urna a eros sagittis varius. Sed consectetur fermentum
      aliquam. Integer porttitor magna et eros sollicitudin cursus. Phasellus consectetur dolor
      viverra mattis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      gravida, tortor et viverra elementum, purus eros vestibulum ante, vel dictum ante lectus non
      ipsum. Phasellus non lacus sapien. Aenean viverra est non elit bibendum pharetra. Sed
      venenatis vel dui nec vulputate. Duis vel tempus felis, nec tempor arcu. Phasellus in nulla
      congue libero aliquet vestibulum vitae sed lorem. Aenean faucibus justo ut consequat
      venenatis. Fusce aliquam interdum urna, vel pretium lectus condimentum fermentum. Mauris vel
      porta nisi. Nam porttitor lectus eu diam ultrices, ac bibendum sapien placerat. Aliquam
      faucibus quam a dui iaculis, ut gravida sapien faucibus. Cras leo ex, aliquam vitae risus a,
      imperdiet congue quam. Nam quis risus pellentesque odio placerat mattis. Orci varius natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus et laoreet mauris,
      ac ullamcorper sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Integer in consequat turpis, quis euismod justo. Nullam ac dignissim odio,
      viverra auctor elit. Nulla facilisi. Etiam finibus, mi ut porta feugiat, ipsum nisl commodo
      purus, nec finibus lectus dui non leo. Phasellus id turpis massa. Sed sodales finibus
      ultricies. Curabitur vulputate lectus sit amet posuere efficitur. Donec mattis lacus viverra
      turpis placerat vestibulum. Nunc aliquet in felis eget ultricies. Etiam sagittis hendrerit
      est, vitae interdum magna congue ac. Aenean sit amet ante lacus. In dignissim, nisl eget
      facilisis placerat, augue dui bibendum dui, id gravida nibh augue eget risus. Nam vitae
      molestie magna. Mauris at vestibulum eros. Donec mollis ante ante, at aliquet ipsum
      ullamcorper sit amet. Maecenas eget nisi tellus. Fusce at nisl a mauris lobortis vestibulum.
      Proin odio sapien, ornare et fringilla sed, ornare ac nulla. Cras in sapien condimentum,
      tempor urna et, fermentum enim. Vivamus dictum id quam aliquet hendrerit. Donec porta orci
      risus. Sed ut feugiat justo. Ut eros risus, pretium ac tortor at, porttitor vulputate diam.
      Fusce lobortis diam ac erat fermentum, at auctor eros congue. Proin et sodales justo. Praesent
      elementum urna et elit accumsan molestie. Phasellus viverra diam ac sem imperdiet, quis
      convallis quam maximus. Morbi id varius erat. Pellentesque habitant morbi tristique senectus
      et netus et malesuada fames ac turpis egestas. Vivamus porttitor vulputate turpis, vitae
      congue nunc ullamcorper sed. Nam congue leo quis lobortis volutpat. In id convallis dolor. Sed
      fringilla molestie mauris, ut vulputate purus tristique at. Phasellus finibus laoreet mauris,
      et porttitor odio tempor in. Ut ut convallis sapien. Nunc nec iaculis urna. Quisque ornare
      urna a eros sagittis varius. Sed consectetur fermentum aliquam. Integer porttitor magna et
      eros sollicitudin cursus. Phasellus consectetur dolor viverra mattis porta.
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ExpensesActionbar from '@/components/Expenses/ExpensesActionbar.vue';
import Expense from '@/components/Expenses/ExpensesExpense.vue';
import ExpensesSearch from '@/components/Expenses/ExpensesSearch.vue';

export default {
  name: 'Expenses',
  components: {
    ExpensesActionbar,
    Expense,
    ExpensesSearch,
  },
  data() {
    return {
      page: 0,
    };
  },
  computed: {
    ...mapGetters(['expenses']),
  },

  methods: {
    ...mapActions(['getExpenses']),
    // getNextPage: () => this.getExpenses(1),
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
