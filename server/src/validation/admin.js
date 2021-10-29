export const isAdmin = (req) => {
  return !!req.session.admin
}
