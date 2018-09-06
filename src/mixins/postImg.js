const postImg = {
  methods: {
    postImg (catUrl, title) {
      const img = {
        url: catUrl,
        comment: title,
        info: 'Posted by Charles on Tuesday',
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
