module.exports = {
  getMany: (req, res) => {
    const users = require('./users.json')
    res.send(users)
  },
  getOne: (req, res) => {
    const id = req.params.id
    const user = require('./users.json').find(item => item.id === +id)
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
