const postImg = {
  methods: {
    postImg (catUrl, title, pseudo) {
      const img = {
        url: catUrl,
        comment: title,
        info: 'Posted by ' + pseudo,
        created_at: -1 * new Date().getTime()
      }
      this.$http.post('https://cropcat-28625.firebaseio.com/cats.json', img).then(
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

export {
  postImg
}
