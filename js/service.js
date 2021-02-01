var gUsers = [
  {
    id: "u101",
    userName: "buki",
    password: "secret",
    lastLoginTime: 1601891998864,
    isAdmin: true,
  },
  {
    id: "u102",
    userName: "shuki",
    password: "itsme",
    lastLoginTime: 1601891998866,
    isAdmin: false,
  },
  {
    id: "u103",
    userName: "kuki",
    password: "itsher",
    lastLoginTime: 1601891998863,
    isAdmin: false,
  },
];

var gSortBy;


function _createUsers (numOfUsers) {
  for (var i = 0 ; i<numOfUsers; i++) {
    gUsers.push(_createUser())
  }
  _saveuUsersToStorage()
}

function _createUser (nameoOfUser) {
  nameoOfUser = prompt('Pick User name')
  var user = {
    id: _makeId(),
    userName: nameoOfUser,
    password: makeLorem(1),
    lastLoginTime: Date(Date.now()),
    isAdmin: false
  }
return user
}

function getSortedUsers() {
  if (gSortBy === "Name") {
    var users = gUsers.sort(function (a, b) {
      return a.userName > b.userName? 1 : -1;
    });
  } else {
    var users = gUsers.sort(function (a, b) {
      return a.lastLoginTime > b.lastLoginTime? 1 : -1;
    });
  }
  return users;
}

function setSortBy(sortValue) {
  gSortBy = sortValue;
}

function _saveuUsersToStorage () {
  saveToStorage('Users', gUsers)
}


