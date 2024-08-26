const adminMiddleware = async (req, res, next) => {
  try {
    console.log(req.user);
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      return res.status(200).json({ msg: "Access danied. User is not admin" });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
