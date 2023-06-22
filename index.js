class RegexFunctionsVerify {
  static verifyUsername(username) {
    const usernameRegex = /^[a-z]{2,10}$/;
    let tableErrors = [];
    if (!username.match(usernameRegex)) {
      tableErrors.push({
        level: 1,
        message: "Votre nom d'utilisateur doit etre entre 2 et 8 caracteres",
      });
    }

    return tableErrors;
  }
  static verifyEmail(email) {
    const emailRegex = /^\w*@[a-z]+\.[a-z]{2,}$/;
    let tableErrors = [];
    if (!email.match(emailRegex)) {
      tableErrors.push({
        level: 1,
        message: "Mauvais format  email",
      });
    }

    return tableErrors;
  }

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
  static passwordMatching(firstPassword , secondPassword) {

    let tableErrors = [];
    if (!secondPassword.match(firstPassword)) {
      tableErrors.push({
        level: 1,
        message: "Les mots de passe ne correspondent pas",
      });
    }

    return tableErrors;
  }
}