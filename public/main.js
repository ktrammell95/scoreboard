function main() {
  // Dealing with Scores
  let team1Points = 0
  let team2Points = 0

  const team1Add = document.querySelector('.team1 .add')
  const team1Subtract = document.querySelector('.team1 .subtract')
  const team2Add = document.querySelector('.team2 .add')
  const team2Subtract = document.querySelector('.team2 .subtract')

  const increaseScore1 = event => {
    if (team1Points === 21) {
      alert('Player Wins!!')
    } else {
      team1Points++
      let points = document.querySelector('.team1 h3')
      points.textContent = team1Points
    }
  }
  const decreaseScore1 = event => {
    if (team1Points === 0) {
      alert('Score cannot go below 0')
    } else {
      team1Points--
      let points = document.querySelector('.team1 h3')
      points.textContent = team1Points
    }
  }

  const increaseScore2 = event => {
    if (team2Points === 21) {
      alert('Player Wins!!')
    } else {
      team2Points++
      let points = document.querySelector('.team2 h3')
      points.textContent = team2Points
    }
  }

  const decreaseScore2 = event => {
    if (team2Points === 0) {
      alert('Score cannot go below 0')
    } else {
      team2Points--
      let points = document.querySelector('.team2 h3')
      points.textContent = team2Points
    }
  }

  team1Add.addEventListener('click', increaseScore1)
  team1Subtract.addEventListener('click', decreaseScore1)
  team2Add.addEventListener('click', increaseScore2)
  team2Subtract.addEventListener('click', decreaseScore2)

  // Dealing with Team Names

  const inputElement1 = document.querySelector('.team1 input')
  const team1Name = document.querySelector('.team1 h2')
  const updateTeam1Name = event => {
    const currentInputValue1 = event.target.value
    team1Name.textContent = currentInputValue1
  }
  inputElement1.addEventListener('input', updateTeam1Name)

  const inputElement2 = document.querySelector('.team2 input')
  const team2Name = document.querySelector('.team2 h2')
  const updateTeam2Name = event => {
    const currentInputValue2 = event.target.value
    team2Name.textContent = currentInputValue2
  }
  inputElement2.addEventListener('input', updateTeam2Name)
}

document.addEventListener('DOMContentLoaded', main)
