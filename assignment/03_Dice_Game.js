// object ของผู้เล่น
let player1 = {
  name: "Somchai",
  diceP1: [],
  scoreP1: [],
};
let player2 = {
  name: "Somying",
  diceP2: [],
  scoreP2: [],
};
//object ของ ลูกเต๋า
let dice = {
  numDice: [1, 2, 3, 4, 5, 6]
};
 
//randomDice เป็นfunction ที่ใช้ในการสุ่มตัวสมาชิกในอาเรย์ที่เก็บหน้าของลูกเต๋าเเล้วส่งค่าไปยัง Function play
function randomDice(items) {
  return items[Math.floor(Math.random() * items.length)];
}
 

//เป็นฟังก์ชันที่ใช้เล่นทอยลูกเต๋า โดยจะเก็บค่าลูกเต๋าที่ทอยได้ในเเต่ละรอบซึ่งรับมาจาก ค่า maxTurn เเล้วนำมาเรียกใช้ฟังก์ชั่นอื่นๆ เพื่อทำการทอยหรือเปรียบเทียบเเต้มที่ออกมา เเล้วจึงนำไปใส่ลงในobject ของ player1 และ player2
function play(maxturn) {
  let sum = 0; 
  for (let turn = 1; turn <= maxturn; turn++) {
    console.log("Turn " + turn);
    p1 = randomDice(dice.numDice);
    p2 = randomDice(dice.numDice);
    score = compare(p1, p2);
    player1.diceP1.push(p1);
    player2.diceP2.push(p2);
    setScore(score);
    sum = sum+score;
  }
  sum_fin = sum;
}

// เป็น Function ที่ไว้เปรียบเทียบระหว่างเเต้มลูกเต๋าของทั้งสองฝ่าย โดยจะส่งค่ากลับเป็น 1,-1,0 เพื่อเอาไปคิดต่อใน Function ต่อไป
function compare(p1, p2) {
  if (p1 < p2) return 1;
  else if (p2 < p1) return -1;
  else if (p2 == p1) return 0;
}
 

//Function ที่ใช้ในการบอกค่าผลลัพธ์ ชนะ เเพ้ หรือเสมอ ระหว่าง player1 เเละ player2 ในเเต่ละรอบ
function setScore(score) {
  if (score == 1) {
    player1.scoreP1.push("lose");
    player2.scoreP2.push("win");
    console.log(`${player2.name} is win in this round`);
  } else if (score == -1) {
    player1.scoreP1.push("win");
    player2.scoreP2.push("lose");
    console.log(`${player1.name} is win in this round`);
  } else if (score == 0) {
    player1.scoreP1.push("Draw");
    player2.scoreP2.push("Draw");
    console.log(`${player1.name} is draw with ${player2.name} in this round`);
  }
}



// เป็น Function หลักที่ไว้เรียก Function play เพื่อทำให้ตัวโปรเเกรมสมบูรณ์เเละเป็นตัวเเสดง output จากการเล่นทอยเต๋า
function main(maxturn) {
  play(maxturn);
  console.log("-----------------RESULT---------------------")
  if(sum_fin<0){
    console.log(`${player1.name} is win`);
  }
  else if(sum_fin>0){
    console.log(`${player2.name} is win`);
  }
  else if(sum_fin==0){
    console.log(`${player1.name} is draw with ${player2.name}`);
  }

  console.log("------------------DATA----------------------")
  for(data1 in player1){
      console.log(player1[data1])
  }
  for(data2 in player2){
      console.log(player2[data2])
  }
}

// เป็นการรับค่าเข้ามาจากแป้นพิมพ์ โดยในที่นี้รับค่าเป็นจำนวนรอบที่ต้องการเล่น  
let prompt = require('prompt-sync')();
let maxturn =  parseInt(prompt("จงระบุจำนวนรอบที่อยากเล่น >> "));

//ใช้ในการเรียก main เพื่อทำให้ระบบทำงานขึ้น
main(maxturn);
