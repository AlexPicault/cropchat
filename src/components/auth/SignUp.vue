<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input" :class="{invalid: $v.email.$error}">
          <label for="email">Mail</label>
          <input
                  type="email"
                  id="email"
                  @blur="$v.email.$touch()"
                  v-model="email">
          <p v-if="!$v.email.email">Please provide a valid email address.</p>
        </div>
        <div class="input" :class="{invalid: $v.pseudo.$error}">
          <label for="pseudo">Your Pseudo</label>
          <input
                  type="string"
                  id="pseudo"
                  @blur="$v.pseudo.$touch()"
                  v-model="pseudo">
          <p v-if="!$v.pseudo.required">You pseudo have to be at least {{ $v.pseudo.$params.minLength.min }} caracters.</p>
        </div>
        <div class="input" :class="{invalid: $v.password.$error}">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  @blur="$v.password.$touch()"
                  v-model="password">
        </div>
        <div class="input" :class="{invalid: $v.confirmPassword.$error}">
          <label for="confirm-password">Confirm Password</label>
          <input
                  type="password"
                  id="confirm-password"
                  @blur="$v.confirmPassword.$touch()"
                  v-model="confirmPassword">
        </div>
        <div class="submit">
          <button type="submit" :disabled="$v.$invalid">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
  import {mapActions} from 'vuex'

  export default {
    data () {
      return {
        email: '',
        pseudo: '',
        password: '',
        confirmPassword: ''
      }
    },
    validations: {
      email: {
        required,
        email
      },
      pseudo: {
        required,
        minLength: minLength(3)
      },
      password: {
        required,
        minLen: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs(vm => {
          return vm.password
        })
      }
    },
    methods: {
      ...mapActions({
        storeUser: 'storeUser'
      }),
      onSubmit () {
        const user = {
          email: this.email,
          pseudo: this.pseudo,
          password: this.password
        }
        this.storeUser(user)
        this.$http.post('https://cropcat-28625.firebaseio.com/users.json', user).then(
          response => {
            this.$router.push('/')
          },
          error => {
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>
  .signup-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #3b56cf;
    background-color: #eee;
  }

  .input.invalid label {
    color: red;
  }

  .input.invalid input {
    border: 1px solid red;
    background-color: #ffc9aa;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies button {
    border: 1px solid #3b56cf;
    background: #3b56cf;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #3b56cf;
  }

  .hobbies input {
    width: 90%;
  }

  .submit button {
    border: 1px solid #3b56cf;
    color: #3b56cf;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #3b56cf;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>