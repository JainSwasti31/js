let str1="jainswasti3112@gmail.com"
let str2=str1
console.log(str1)
console.log(str2)
str2="user@google.com"
console.log(str1)
console.log(str2)

//stack(primtive)
let myobj={
    user:"user@google.com",
    upi:"user@ybl"
}
console.log(myobj.user)
let myobj2=myobj
myobj2.user="user@yahoo.com"
console.log(myobj2.user)
console.log(myobj.user)


// heap(non primitive )