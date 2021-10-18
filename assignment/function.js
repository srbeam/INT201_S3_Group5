export default function historyCal(...nums) {
  //higher order function
  let data = [];
  let ans = 0;
//เก็บค่าไว้ใน array เพื่อจะได้รู้ว่าค่าตั้งต้นเป็นเลขอะไรบ้าง
  for (let i = 1; i <= nums.length; i++) {
    data.push("number" + i + ":" + nums[i - 1]); 
  }
  //inner is a closure function
  function calculate(operation = "no operation") { //default parameter
    if (operation != "no operation") { //เช็คว่าเป็นdefault parameter ไหม
      	ans = operation(...nums);
      	data.push("Ans of " + operation.name + " function :" + ans);
    }
    	return data;
  }
  	return calculate; //return inner function
}
