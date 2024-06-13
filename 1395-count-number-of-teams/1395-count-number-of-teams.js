/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  let answer = 0;
  
  for (let i = 1; i < rating.length - 1; i++) {
    let deLeft = 0;
    let deRight = 0;
    let inLeft = 0;
    let inRight = 0;
    
    for (let j = 0; j < i; j++) {
      if (rating[j] > rating[i]) deLeft++;
      if (rating[j] < rating[i]) inLeft++;
    }
    
    for (let j = i + 1; j < rating.length; j++) {
      if (rating[j] > rating[i]) inRight++;
      if (rating[j] < rating[i]) deRight++;
    }
    
    answer += deLeft * deRight + inLeft * inRight;
  }
  
  return answer;
};