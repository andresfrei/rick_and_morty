import users from '../mocks/users.json'

export const validateLogin = (passpord) => {
  const { email, password } = passpord
  const user = users.find(user => user.email === email)
  if (!user) return []
  return user.password === password ? user : []
}
