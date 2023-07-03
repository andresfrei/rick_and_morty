const session = {
  id: 1,
  email: 'user@gmail.com',
  fullName: 'Cosme Fulanito',
  password: '12345'
}

export const isValidateLogin = (passpord) => {
  return passpord.email === session.email && passpord.password === session.password
}
