// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// commonjs 방식
// module.exports = {
//   add,
//   sub,
// };

// esmodule 방식
// export { add, sub };
