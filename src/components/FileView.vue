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
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="actions">
          <a @click.prevent="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CAT
          </a>
        </div>
      </div>
    </div>
</template>

<script>
import {storage} from '../services/firebase'
export default {
  methods: {
    onChange () {
      console.log('gggg')
      var preview = document.querySelector('img')
      var file = document.querySelector('input[type=file]').files[0]
      var reader = new FileReader()
      console.log(reader)

      reader.onloadend = function () {
        console.log('ttttt')
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
        storage.child(`images/picture-${new Date().getTime()}`).put(file).then(res => {
          let starsRef = storage.child(res.metadata.fullPath)
          starsRef.getDownloadURL().then(res => {
            const cat = {
              url: res,
              comment: 'ma photo',
              info: 'Posted by Charles on Tuesday',
              created_at: -1 * new Date().getTime()
            }
            this.$http.post('https://cropcat-28625.firebaseio.com/cats.json', cat).then(res => {
              this.$router.go(-1)
            },
            error => {
              console.log(error)
            })
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
.waiting {
  padding: 10px;
  color: #555;
}
</style>