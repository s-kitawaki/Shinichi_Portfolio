<template>
  <v-app>
    <v-main>
      <Header/>
      <Profile/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
      <TestComponents :number="number"/>
    </v-main>
  </v-app>
</template>

<script>
import TestComponents from './components/TestComponents.vue'
import Header from './components/Header.vue'
import Profile from './components/Profile.vue'
import Skill from './components/Skill.vue'
import Works from './components/Works.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    TestComponents,
    Header,
    Profile,
    Skill,
    Works,
    Contact,
    Footer,
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

<style scoped>

</style>