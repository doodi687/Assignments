//Q4) Count consonants and vowels in a string with minimum 20 characters

let str = 'The quick brown fox jumps over the lazy dog';
let vowelCt = 0 ;
let consonantCt = 0;
for(let i in str){
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'){
        vowelCt++;
    }
    else if(str[i]!=' '){
        consonantCt++;
    }
}
console.log(`Number of Vowel ${vowelCt} and number of Consonant ${consonantCt}`);