<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="cat.url" />
      </div>
      <div class="info">
        <span>{{ cat.info }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="comment">
        <span>{{ cat.comment }}</span>
      </div>
      <div class="actions">
        <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
          ANSWER
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      cat: null
    }
  },
  mounted () {
    this.$http.get('https://cropcat-28625.firebaseio.com/cats.json')
      .then(response => {
        for (var id in response.data) {
          if (id === this.$route.params.id) {
            this.cat = response.data[id]
          }
        }
      }
      )
  }
}
</script>
<style scoped>
.picture > img {
  color: #fff;
  width: 100%;
}
.info {
  text-align: right;
  padding: 5px;
  color: #555;
  font-size: 10px;
}
.comment {
  padding: 10px;
  color: #555;
}
.actions {
  text-align: center;
}
</style>