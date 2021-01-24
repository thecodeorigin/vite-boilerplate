module.exports = {
  getMany: (req, res) => {
    const posts = require('./posts.json')
    res.send(posts)
  },
  getOne: (req, res) => {
    const id = req.params.id
    const user = require('./posts.json').find(item => item.id === +id)
    if (user) {
      res.send(user)
    } else {
      res.status(404)
      res.send({
        code: 'NOT_FOUND',
        message: 'User not found'
      })
    }
  }
}
