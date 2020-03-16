'use strict'
var array=[5,2,3,1];

var maximum=array[0];
function greaterthan(){
    for (var x=0;x<array[0];x++){
        if(array[x] >maximum)
        maximum=array[x]
    }

}
console.log(maximum);