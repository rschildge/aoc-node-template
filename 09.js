const part1 = data =>
  new Promise(resolve => {
    setTimeout(() => {
      let answer = "hello";
      Array.from(data)
          .reverse()
          .join("");
      return resolve(answer);
    }, 1000);
  });

const part2 = data =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(
        Array.from(data)
          .reverse()
          .join("")
      );
    }, 1000);
  });

module.exports = {
  part1 
  //,part2
};
