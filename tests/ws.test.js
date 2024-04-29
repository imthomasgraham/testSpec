const { logIn, createAccount, GoogleAuthentication } = require("../ws.js");

test("was logging in successful?", () => {
  expect(logIn("luke", "")).toBeFalsy();
  expect(logIn("", "pass")).toBeFalsy();
  expect(logIn("", "")).toBeFalsy();
  expect(logIn("luke", "pass")).toBeTruthy();

  // checking for the exact same result
  expect(logIn("ted", "pass")).not.toBeTruthy();
  expect(logIn("ted", "pass")).toBeFalsy();
});

test("were the password requirements met?", () => {
  expect(
    createAccount("DannyVV", "pa676767", "FsaAccountTracker@hotmail.com")
  ).toBeTruthy();
});

test("Authentication correct credentials should be successful", () => {
  const email = "DanPat@gmail@gmail.com";
  const password = "FSA1234";
  expect(GoogleAuthentication(email, password)).toBe(
    "Authentication successful!"
  );
});

test("Authentication should read incorrect password.", () => {
  const email = "ThomasGraham@gmail.com";
  const password = "FSA12S3";
  expect(GoogleAuthentication(email, password)).toBe("Incorrect password!");
});

// test("Authentication should detect email doesn't exist.", () => {
//   const email = "Mfdad@gmail.com";
//   const password = "FSA123";
//   expect(GoogleAuthentication(email, password)).toBe("Email not found!");
// });
