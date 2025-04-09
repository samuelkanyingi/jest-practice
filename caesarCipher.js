function caesarCipher(string, shift){
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    var map = {};
    for(let i=0;i<alphabet.length;i++){
        map[alphabet[i]] = i+shift
        if(map[alphabet[i]] > 25) {
            map[alphabet[i]]-=26;
        }
    }
    let result="";
    for(let i=0;i<string.length;i++){
        let char = string[i];
        if(char != " ") 
        result += alphabet[map[string[i]]]
    }

    return result;
}
module.exports=caesarCipher;