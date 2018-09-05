<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.catUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CAT
          </a>
        </div>
      </div>
    </div>
  </form>
</template>

<script>

export default {
  data () {
    return {
      catUrl: null,
      title: ''
    }
  },
  mounted () {
    this.$http.get('https://api.thecatapi.com/v1/images/search?format=json')
      .then(response => {
        this.catUrl = response.data[0].url
      })
  },
  methods: {
    postCat () {
      const cat = {
        url: this.catUrl,
        comment: this.title,
        info: 'Posted by Charles on Tuesday',
        created_at: -1 * new Date().getTime()
      }
      this.$http.post('https://cropcat-28625.firebaseio.com//cats.json', cat).then(
        response => {
          this.$router.push('/')
        },
        error => {
          console.log(error)
        }
      )
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
