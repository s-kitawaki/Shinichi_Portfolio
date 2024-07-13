<template>
  <v-container>
    <div>
      <h2>Props.vue</h2>
      <p>子コンポーネントに渡された値:({{ number }})</p>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'TestComponents',
  props: ['number'],

  data: () => ({

  }),
}
</script>
