class RegexFunctionsVerify {
  static verifyName() {}
  static verifyEmail() {}

  static verifyPassword(password) {
    const mdpRegex = /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9]).{8}/;

    let tableErrors = [];

    if (!mdpRegex.test(password)) {
      if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        tableErrors.push({
          level: 1,
          message: "Votre mot de passe doit contenir 2  majuscules",
        });
      }

      if (!/(?=.*[!@#$&*])/.test(password)) {
        tableErrors.push({
          level: 1,
          message: "Vous devez avoir un caractere special",
        });
      }

      if (!/(?=.*[0-9].*[0-9])/.test(password)) {
        tableErrors.push({
          level: 1,
          message: "Vous devez avoir deux caracteres digitaux",
        });
      }

      if (password.length < 8) {
        tableErrors.push({
          level: 1,
          message: "Votre mot de passe doit contenir 8 caracteres",
        });
      }
    }

    return tableErrors;
  }
}