module.export = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({error: 'you must login'});
  }
  next();
};
