
function verificaPalindrome(word){
    for (let index in word) {
        if(word[index] != word[(word.length -1) - index]){

        }
}
return true;
}

function verifica(string) {
    let reverse = string.split('').reverse().join('');
    if(reverse === string) {
        return true;
    } else {
        return false;
    }
}
console.log(verifica("arara"));
console.log(verifica('desenvolvimento'));
