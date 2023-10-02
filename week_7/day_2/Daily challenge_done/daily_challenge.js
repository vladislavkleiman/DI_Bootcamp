const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];


   console.log(gameInfo[1].username);

   

function getUsername(array) {
    const usernames = []
    for(let i = 0; i<array.length; i++) {
        usernames.push(`${array[i].username}!`)
    }
    return usernames
}


const usernames = getUsername(gameInfo)
console.log(usernames);



function getWinners(array) {
    const winners = []
    for(let i = 0; i<array.length; i++) {
        if (array[i].score > 5) {
            winners.push(array[i].username)}
    }
    return winners
}

const winners = getWinners(gameInfo)
console.log(winners);

function totalSumScores (array) {
    let sum = 0;
    for(let i = 0; i<array.length; i++) {
        sum = sum + array[i].score
    }
    return sum
}

const totalSum = totalSumScores(gameInfo)
console.log(totalSum);