export default {
  adultIncrease (state) {
    // state.users[1].age += 2
    state.users.forEach(user => {
      user.age += 2
    })
  },
  adultDecrease (state) {
    // state.users[1].age += 2
    state.users.forEach(user => {
      user.age -= 2
    })
  },
  editUserName (state, user) {
    console.log('ready to update user', user.idx, 'with new name', user.newName)
    state.users[user.idx].name = user.newName
  },
  addNewUser (state, newUser) {
    console.log('adding new user', newUser)
    state.users.push({name: newUser.name, age: newUser.age, post: false})
  },
  deleteUser (state, userIdx) {
    console.log('deleting user', userIdx)
    state.users.splice(userIdx, 1)
  }
}
