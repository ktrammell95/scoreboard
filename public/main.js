function main() {
  let currentPlayer = 1
  let team1Points = 0
  let team2Points = 0

  const team1Add = document.querySelector('.team1 .add')
  const team1Subtract = document.querySelector('.team1 .subtract')
  const team2Add = document.querySelector('.team2 .add')
  const team2Subtract = document.querySelector('.team2 .subtract')

  const increaseScore1 = event => {
    team1Points++
    let points = document.querySelector('.team1 h3')
    points.textContent = team1Points
  }
  const decreaseScore1 = event => {
    team1Points--
    let points = document.querySelector('.team1 h3')
    points.textContent = team1Points
  }

  const increaseScore2 = event => {
    team2Points++
    let points = document.querySelector('.team2 h3')
    points.textContent = team2Points
  }

  const decreaseScore2 = event => {
    team2Points--
    let points = document.querySelector('.team2 h3')
    points.textContent = team2Points
  }

  team1Add.addEventListener('click', increaseScore1)
  team1Subtract.addEventListener('click', decreaseScore1)
  team2Add.addEventListener('click', increaseScore2)
  team2Subtract.addEventListener('click', decreaseScore2)
}

document.addEventListener('DOMContentLoaded', main)
