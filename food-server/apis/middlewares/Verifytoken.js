const jwt = require('jsonwebtoken')
const verifytoken = (req, res, next) => {
  // console.log(req.headers.authorization)
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized accesss" })

  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Token is invalid" })
    }
    req.decoded = decoded
    next();
  })
}

module.exports = verifytoken