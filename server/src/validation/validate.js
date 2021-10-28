export const validateEmail = (email) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (email.match(validRegex)) return true
  return false
}

export const isAuth = (req) => {
  return req.session.userId === req.params.id || req.session.admin
}
