/*Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points.
If two teams have the same number of points, return the team with the largest goal difference.

How to Calculate Points and Goal Difference.

team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68*/


function champions(arr){
  return arr.map(item => ({
    points: (item.wins * 3) + (item.draws * 1),
    name: item.name,
    totalScore: item.scored - item.conceded,
  }));

}

const result = champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 99,
    conceded: 29,
  },
]);

const getPoints = result => {
  return result.sort((a, b) => b.points - a.points)
}

const getValues = getPoints(result);

function finallyResult(getValues){
  if(getValues[0].points !== getValues[1].points){
    return getValues[0].name
  }
  else{
    getValues.sort((a, b) => b.totalScore - a.totalScore);
    return getValues[0].name
  }
}

console.log(finallyResult(getValues))