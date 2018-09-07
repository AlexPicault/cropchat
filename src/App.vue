<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <router-link class="mdl-layout-title" to=" /">CropChat</router-link>
        <router-link to="/signup">Sign Up</router-link>
        <router-link to="/signup">Sign Up</router-link>
        <i class="material-icons" @click="getBack">arrow_back</i>
      </div>
    </header>
    <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">CropChat</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/post" @click.native="hideMenu">Post a cat picture</router-link>
        <router-link class="mdl-navigation__link" to="/file" @click.native="hideMenu">Post your picture</router-link>
        <router-link class="mdl-navigation__link" to="/camera" @click.native="hideMenu">Take a picture</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
require('material-design-lite')

export default {
  name: 'app',
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    },
    getBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
.back{
  margin: 60%;
  cursor: pointer;
}
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
</style>