export const isAdmin = (req) => {
  console.log('!!req.session.admin :>> ', !!req.session.admin)
  console.log('here')
  return !!req.session.admin
}
