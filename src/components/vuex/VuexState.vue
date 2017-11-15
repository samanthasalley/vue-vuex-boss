<template lang="html">
  <div class="columns vvb-margin">

    <div class="column is-8 is-offset-2">
      <h1>{{ vText }}</h1>
      <div>
        <input type="text" v-model="newName" placeholder="name" />
        <input type="number" v-model="newAge" placeholder="age" />
        <button @click="addUser">Add User</button>
        <button @click="sayHi">Hello Vuetron</button>
      </div>
      <table class="table is-bordered is-striped is-narrow is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Edit</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users">
            <th>
              {{ user.name }}
            </th>
            <th>
              {{ user.age }}
            </th>
            <th>
              <button class="button is-success" @click="() => {editName(index, user.name)}">Edit</button>
              <button class="button is-danger" @click="() => {remUser(index)}">Delete</button>
            </th>
          </tr>

        </tbody>
      </table>
      <VuexGetters />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VuexGetters from './VuexGetters.vue'
export default {
  name: 'VText',
  data () {
    return {
      vText: 'Vuex State',
      newName: null,
      newAge: null
    }
  },
  computed: {
    ...mapState([
      'users'
    ])
  },
  methods: {
    editName (idx, name) {
      let newName = prompt('new name:')
      console.log('new name', newName)
      if (newName) this.$store.commit('editUserName', {idx, newName})
    },
    addUser () {
      if (!this.newName || !this.newAge) return
      let newUser = {
        name: this.newName,
        age: this.newAge
      }
      this.$store.commit('addNewUser', newUser)
    },
    remUser (idx) {
      this.$store.commit('deleteUser', idx)
    },
    sayHi () {
      this.$emit('helloVuetron')
    }
  },
  components: {
    VuexGetters
  }
}
</script>

<style lang="css" scoped >

.vvb-margin{
  margin-top: 30px;
}
</style>
