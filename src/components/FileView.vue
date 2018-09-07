<template>
<div class="mdl-grid">
   <input type="file"
               id="avatar" name="avatar"
               accept="image/png, image/jpeg" 
               v-on:change="onChange(this)"
               />
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img src=""/>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="actions">
          <a @click.prevent="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A PIC
          </a>
        </div>
      </div>
    </div>
</template>

<script>
import {fire} from '../services/firebase'
import {postImg} from '../mixins/postImg'
import {mapGetters} from 'vuex'

export default {
  mixins: [postImg],
  data () {
    return {
      title: ''
    }
  },
  computed: {
    ...mapGetters({
      pseudo: 'pseudo'
    })
  },
  methods: {
    onChange () {
      var preview = document.querySelector('img')
      var file = document.querySelector('input[type=file]').files[0]
      var reader = new FileReader()

      reader.onloadend = function () {
        preview.src = reader.result
      }

      if (file) {
        reader.readAsDataURL(file)
      } else {
        preview.src = ''
      }
    },
    submit () {
      var file = document.querySelector('input[type=file]').files[0]
      var reader = new FileReader()
      if (file) {
        reader.readAsDataURL(file)
        fire.storage().ref().child(`images/picture-${new Date().getTime()}`).put(file).then(res => {
          let starsRef = fire.storage().ref().child(res.metadata.fullPath)
          starsRef.getDownloadURL().then(res => {
            this.postImg(res, this.title, this.pseudo)
          })
        })
      } else {
        console.log('error')
      }
    }
  }
}
</script>

<style scoped>
img{
  margin-top: 15%;
  height: 70%;
  width: 100%;
}
.waiting {
  padding: 10px;
  color: #555;
}
</style>