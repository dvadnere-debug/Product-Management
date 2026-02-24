const USERS_KEY = "users";
const TOKEN_KEY = "token";

export function signupUser(username, password) {
  let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const exists = users.find((u) => u.username === username);

  if (exists) {
    alert("Username already exists");
    return false;
  }

  users.push({ username, password });

  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  return true;
}

export function loginUser(username, password) {
  let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const user = users.find(
    (c) => c.username === username && c.password === password
  );

//   if (!user) {
//     alert("Invalid credentials");
//     return false;
//   }

const token = "abc123";
  localStorage.setItem(TOKEN_KEY, token);
  
  document.cookie = `token=${token}; path=/; SameSite=Lax;`;

  return true; 
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
request.cookie = "token=; path=/ SameSite=;";
}

export function isLoggedIn() {
  return !!localStorage.getItem(TOKEN_KEY);
}