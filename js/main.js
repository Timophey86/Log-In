"use strict";

function onInit() {}

function onSubmit() {
  var elInputUserName = document.querySelector(".Username");
  var elInputPassword = document.querySelector(".Password");
  var getUser = gUsers.find(function (user) {
    return user.userName === elInputUserName.value;
  });
  if (elInputPassword.value === getUser.password) {
    getUser.lastLoginTime = new Date(Date.now())
    renderSuccesfulLog(getUser);
    saveToStorage("Loged User", getUser);
  }
}

function renderSuccesfulLog(user) {
  var elBody = document.querySelector("body");
  var strHTML = `<h2 class="logged-in">Welcome ${user.userName}!</h2>
  <img class="mario-img" src="img/mario.jpg" alt=""></img><a class="log-out" href="index.html" onclick="onLogOut()">Log Out</a>`;
  if (user.isAdmin) {
    strHTML += `<a class="admin-page" href="admin.html">Admin</a>`;
  }
  elBody.innerHTML = strHTML;
}


function renderUserTable(users) {
  var elAdmin = document.querySelector(".table-body");
  var strHTML = `<table>
    <tr><th>Username</th><th>Password</th><th>lastLoginTime</th><th>isAdmin</th></tr>`;
  users.forEach(function (user) {
    strHTML += `<tr><td>${user.userName}</td><td>${user.password}</td><td>${user.lastLoginTime}</td><td>${user.isAdmin}</td></tr>`;
  });
  strHTML += `</table>`;
  elAdmin.innerHTML = strHTML;
}


function onSortTable() {
  var elSortBy = document.querySelector(`select[name=sortBy]`);
  var sortBy = elSortBy.value;
  setSortBy(sortBy);
  getSortedUsers();
  renderUserTable(gUsers);
}

function onLogOut() {
  localStorage.removeItem('Loged User')
}
