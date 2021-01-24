const userController = require('./controller')
module.exports = [
  {
    method: 'get',
    path: '/users',
    handlers: [
      userController.getMany
    ]
  },
  {
    method: 'get',
    path: '/users/:id',
    handlers: [
      userController.getOne
    ]
  },
]
