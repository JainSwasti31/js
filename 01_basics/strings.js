const name="Swasti"
const repoCount=259
console.log(`Hello! My name is ${name} and my roll no. is ${repoCount}`)
// another way to use a String
const gameName=new String('swasti-jain-259')
console.log(gameName[5])
console.log(gameName.__proto__)
const news=gameName.substring(0, 4)
const another=gameName.slice(-8,4)
console.log(news);
console.log(another)
const a="    swasti      "
console.log(a);
console.log(a.trim())
const url="https://swasti.com/swasti%20jain"
console.log(url.replace('%20','-'))
console.log(url.includes('jai'))
// this method converts string into array based on a separator
console.log(gameName.split('-'));