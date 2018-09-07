import {fire} from '../services/firebase'

const storeUser = {
  methods: {
    storeUser (user) {
      fire.auth().createUserWithEmailAndPassword(user.email, user.password).then(res => {
        this.$http.post('https://cropcat-28625.firebaseio.com/users.json', user)
          .then(
            response => {
              this.$router.push('/')
            },
            error => {
              console.log(error)
            })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

export {
  storeUser
}
