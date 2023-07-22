// code your solution here
function superbowlWin(arrayOfObjects) {
    
    const winningYearObject = arrayOfObjects.find((obj) => obj.result === "W");
  
    
    return winningYearObject ? winningYearObject.year : undefined;
  }
  const superBowlHistory = [
  { year: 2019, result: "W" },
  { year: 2012, result: "W" },
  { year: 2023, result: "N/A" },
  { year: 2021, result: "L" },
  { year: 2018, result: "W" },
];

console.log(superbowlWin(superBowlHistory)); 
  
