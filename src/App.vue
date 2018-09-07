<template>
<div id='app'>
  <app-header></app-header>
  <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
</div>
</template>

<script>
import Header from './components/Header.vue'
require('material-design-lite')

export default {
  name: 'app',
  components: {
    'app-header': Header
  }
}
</script>

<style>
body {
  margin: 0;
}
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
</style>