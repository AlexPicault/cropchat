<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-tabs__tab-bar">
      <router-link class="link mdl-tabs__tab mdl-layout-title is-active" to="/">CropChat</router-link>
      <router-link class="link mdl-tabs__tab mdl-layout-title" to="/signup">Sign Up</router-link>
      <router-link class="link mdl-tabs__tab mdl-layout-title" to="/signup">Sign Up</router-link>
      <a class="back mdl-tabs__tab"><i class="material-icons" @click="getBack">arrow_back</i></a>
  </div>
    </header>
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
<style scoped>
.link { 
   color:white;
   cursor: pointer;
 }
 .back { 
   color: white;  
   cursor: pointer;  
 }
</style>


</style>
