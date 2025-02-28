const obj = {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            },
        }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            },
        }
    },

}

function gameObject() {
    return obj
}
const game = gameObject()
const players = [game.home.players, game.away.players]


function allPlayers() {
    const all = players.map(function(team){
        const newArr = []
        for(const player in team){
            newArr.push({nameOfPlayer: player, ...team[player]})
        }
        return newArr
    })
    return all.flat()
}

const playerNames = function() {
    const nameList = []
    for(let i = 0; i < game.length; i++) {
        nameList.push(game[i].players)
    }
    return nameList
}

function findPlayer(playerName) {
    return allPlayers().find(player => {
        return player.nameOfPlayer === playerName
    })
}


function numPointsScored(playersName) {
    return findPlayer(playersName).points
}
//console.log(numPointsScored("Ben Gordon"))


function shoeSize(playersName) {
    return findPlayer(playersName).shoe
}
//console.log(shoeSize("Ben Gordon"))


function teamColors(nameOfTeam) {
    if(nameOfTeam === game.home.teamName){
        return game.home.colors
    }
    else{
        return game.away.colors
    }
}
//console.log(teamColors("Brooklyn Nets"))


function teamNames(game){
    const teamNames = []
    teamNames.push(game.home.teamName, game.away.teamName)
    return teamNames
}
//console.log(teamNames(game))


function playersNumbers(team){
    const teamPlayers = {}
    const playerNumbers = []
    for(const homeAway in game) {
        if(team === game.home.teamName) {
            const teamteam = game.home.teamName
            teamPlayers.teamteam = players
            console.log(teamPlayers)
        }
    }
    console.log(playerNumbers)
}
console.log(playersNumbers("Brooklyn Nets"))
