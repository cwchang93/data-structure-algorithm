
const funcAsync = async () => {
  return Promise.resolve("Hello World!")
}

funcAsync().then((data) => {
  console.log(data);
})

console.log(funcAsync());