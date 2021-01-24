const userRoutes = require('./user/router')
const postRoutes = require('./post/router')

module.exports = [
  ...userRoutes,
  ...postRoutes
]
