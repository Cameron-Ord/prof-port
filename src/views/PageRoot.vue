<script setup>
import AboutArticle from '../../components/AboutArticle.vue'
import IntroHeader from '../../components/IntroHeader.vue'
import OptPicker from '../../components/OptPicker.vue'
import ProjArticle from '../../components/ProjArticle.vue'
import ContactArticle from '../../components/ContactArticle.vue'

import { ref } from 'vue'
const current_opt = 'About'
</script>
<template>
  <section class="dft-grid row-spc-12px align-child-center justify-child-center text-center">
    <intro-header></intro-header>
    <opt-picker></opt-picker>
    <about-article v-if="current_opt === 'About'"></about-article>
    <proj-article v-else-if="current_opt === 'Projects'"></proj-article>
    <contact-article v-else-if="current_opt === 'Contact'"></contact-article>
  </section>
</template>
<style scoped></style>
