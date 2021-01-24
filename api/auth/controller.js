const authController = {
  andRestrictToSelf: (req, res, next) => {
    // If our authenticated user is the user we are viewing
    // then everything is fine :)
    if (req.authenticatedUser.id === req.user.id) {
      next();
    } else {
      res.status(401);
      res.send('Unauthorized');
    }
  },
  
  andRestrictTo: (role) => {
    return function(req, res, next) {
      if (req.authenticatedUser.role === role) {
        next();
      } else {
        res.status(401);
        res.send('Unauthorized');
      }
    }
  }
}

export default authController