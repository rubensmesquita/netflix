<template>
  <div id="netflix">
    <NavBar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavBar from '@/components/navbar.vue'

@Component({
  components: { NavBar }
})

export default class Home extends Vue {}
</script>
