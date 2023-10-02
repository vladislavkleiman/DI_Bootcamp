const users = { user1: 18273, user2: 92833, user3: 90315 }

const users2 = Object.entries(users)

console.log(users2);

const multUsers = []

for (const user of users2) {
    const [name,id] = user
    multUsers.push([name, id * 2])
}

console.log(multUsers);
