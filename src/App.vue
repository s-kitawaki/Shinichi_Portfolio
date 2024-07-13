<template>
  <v-app>
    <v-main>
        <div>
          <p>testでーす</p>
        </div>
      <HelloWorld/>
      // 違うコンポーネントに値を引き渡す表記方法
      <TestComponents :number="number"/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestComponents from './components/TestComponents.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    TestComponents,
  },
  // data()はどちらでも同じ
  data: () => ({
    number: 100,
  }),
  // data() {
  //   return {
  //     number: 1,
  //   };
  // }
}
</script>
