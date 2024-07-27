<template>
  <v-container>
    <div>
      <p>TestComponentsに渡された値:({{ number }})</p>
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
