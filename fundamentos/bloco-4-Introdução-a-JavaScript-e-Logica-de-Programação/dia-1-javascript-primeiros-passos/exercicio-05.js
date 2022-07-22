const a = 110;
const b = 80;
const c = 10;

let z = a + b + c;

let x = a>0 && b>0 && c>0;

if(x){
    if(z === 180){
        console.log(true);
      } else {
        console.log(false);
      };
    } else {
      console.log('Erro:');
    }