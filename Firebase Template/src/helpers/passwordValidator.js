export function passwordValidator(password) {
  if (!password) return "Şifre Kısmı Boş Bırakılamaz!"
  if (password.length < 5) return 'Şifreniz 5 karakter uzunluğundan az olamaz!'
  return ''
}
