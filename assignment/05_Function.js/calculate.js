//function บวก ลบ คูณ หาร มีการรับ parameter เป็นเเบบ rest parameter
//function ไว้สำหรับบวกตัวเลขที่รับเข้ามาจากซ้ายไปขวา
export const add = (...nums) => {
  var sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};
//function ไว้สำหรับคูณตัวเลขที่รับเข้ามาจากซ้ายไปขวา
export const multiply = (...nums) => {
  var sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum *= nums[i];
  }
  return sum;
};
//function ไว้สำหรับลบตัวเลขที่รับเข้ามาจากซ้ายไปขวา
export const minus = (...nums) => {
  var sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum -= nums[i]; // sum = sum - nums[i];
  }
  return sum;
};
//function ไว้สำหรับหารตัวเลขที่รับเข้ามาจากซ้ายไปขวา
export const divide = (...nums) => {
  var sum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum /= nums[i];
  }
  return sum;
};
