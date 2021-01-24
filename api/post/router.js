const postController = require('./controller')
module.exports = [
  {
    method: 'get',
    path: '/posts',
    handlers: [
      postController.getMany
    ]
  },
  {
    method: 'get',
    path: '/posts/:id',
    handlers: [
      postController.getOne
    ]
  },
]
