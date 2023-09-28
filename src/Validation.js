export const FormErrors = {
  username: "Username should be atleast 5 character",
  password: "password should be atleast 6 character",
  confirmPassword: "Password and confirm password should match",
};

export function formHandling(username, password, consfirmPassword) {
  const errors = {};
  if (username.length <= 5) errors["username"] = FormErrors["username"];

  if (password.length < 6) errors["password"] = FormErrors["password"];

  if (consfirmPassword !== password)
    errors["confirmPassword"] = FormErrors["confirmPassword"];

  return errors;
}
