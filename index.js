var musicians = ['John Lennon'];
var instruments = ['guitar'];
var myArray = [];

function theBeatlesPlay(musicians,instruments){

     var i = musicians.length;

     for (let j=0; j<=i; j++){
          myArray.push(`${musicians[j]} plays ${instruments[j]}.`);
     }


}
