//api tries simulate 2 api calls
//1. get users all, and find by id
//2. get users posts, and filter by id
const {users, posts} = require('./data.js')

const getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = users.find(user => user.id === id)
    cb(user)
  }, 150)
}

const getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    const post = posts.filter(post => post.createdBy === userId)
    cb(post)
  }, 150)
}

module.exports = {getPostsForUser, getUserById}
