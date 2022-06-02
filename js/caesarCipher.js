//unicode table list: capital letters: 65 - 90, lowercase: 97-122
//  output: "Bmfy f xywnsl!"

/*exports.*/caesarCipher = function(str, num) {
    let str1Arr = []
    let strAns = ''
    for (let i =0; i < str.length; i++){
        let chr = str.charCodeAt(i)
        console.log(chr)
        if(chr >= 65 && chr <=90){      //capital letters
            chr += num
            if(chr>90){
                chr-=26
            }
        } else if (chr >= 97 && chr <=122){
            chr+= num
            if(chr>122){
                chr-=26
            }
        }
        str1Arr.push(String.fromCharCode(chr))
        strAns = str1Arr.join('')
    }
    return strAns
};


console.log(caesarCipher("What a string!", 5))
