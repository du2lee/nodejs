// function a(){
//     console.log('A')
// }

var a = function a(){
    console.log('A')
}


function slowFunc(callback){
    callback();
}

slowFunc(a);