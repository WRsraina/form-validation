export const credential = {
  email: 'user@test.com',
  password: 'password'
}

export const isPassword = (password) => {
  return password === credential.password ? true : false
}

export const isEmailCorrect = (email) => {
  return email === credential.email ? true : false
}