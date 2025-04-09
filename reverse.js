function reverseString(string){
    let sub = string.split("")
    let rev = sub.reverse();
    let jn = rev.join("")
    return jn
}




module.exports=reverseString;