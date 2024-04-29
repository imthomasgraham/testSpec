// before you type any other code
// npm i jest

function logIn(username, password) {
  // if the user does not input a username or password, the function should return false, otherwise should return true if both values have some information inside

  if (username.length === 0 || password.length === 0) {
    return false;
  } else if (username === "luke" && password === "pass") {
    return true;
  } else {
    return false;
  }
}

function createAccount(username, password, email) {
  if (username.length === 0 || password.length === 0 || email.length === 0) {
    return false;
  } else if (
    username.length >= 6 &&
    username.length <= 16 &&
    password.length > 6 &&
    password.length <= 16 &&
    email === "FsaAccountTracker@hotmail.com"
  ) {
    return true;
  } else {
    return false;
  }
}

function GoogleAuthentication(email, password) {
  const users = [
    { email: "ThomasGraham@gmail.com", password: "FSA123" },
    { email: "DanPat@gmail@gmail.com", password: "FSA1234" },
    { email: "DrewWar@gmail@gmail.com", password: "FSA12345" },
    { email: "MayaO@gmail@gmail.com", password: "FSA12346" },
  ];

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      emailFound = true;
      if (users[i].password === password) {
        return "Authentication successful!";
      } else {
        return "Incorrect password!";
      }
    }
  }

  if (!emailFound) {
    return "Email not found!";
  }
}

// What is the Google authentication?
// Can we nest if statements?

module.exports = { logIn, createAccount, GoogleAuthentication };
