const name = 'duhui';
const age = 20;

const message = "I\'m duhui";
const message2 = `My name is ${name}`;

console.log(message2);
console.log(age+6);

// alert : 알려줌, prompt : 입력받음, confirm : 확인받음
// 단점 -> 1. 스크립트 일시정지 2. 스타일링 X

const nickName = prompt("별명을 입력하세요 : ");
alert("환영합니다. " + nickName + "님");
alert(`안녕하세요. ${nickName}님. 환영합니다.`);

//prompt는 두개의 매개변수를 받음(두번째 매개변수 = default 값)
const bookedDate = prompt("예약일을 입력하세요 : ", "2022-04-12");

const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult);   //true or false

// String() : 문자형, Number() : 숫자형, Boolean() : 불린형
console.log(String(100));
console.log(Number('100'));
Number(null);           // 0
Number("안녕하세요");      // NaN

if (true || false){
    console.log('I\'m Working');
}
 
for (let i= 0; i<10; i++){
    console.log(i);
}

while(true){
    let answer = confirm("계속할까요?");
    if (!answer)
        break
}

let fruit = prompt('무슨 과일을 사고 싶나요?');
switch(fruit){
    case '사과':
        console.log('사과 톡톡');
        break;
    case '포도':
        console.log('포동포동');
        break;
    case '복숭아':
        console.log('모모는 복숭아');
        break;
    case '멜론':
        console.log('메론 소다');
        break;
    case '딸기':
        console.log('딸기 딸기');
        break;
    default:
        console.log('그런 과일은 없습니다.');
}

// function 만들기
function sayHello(name = 'friend'){
    // let newName = name || 'friend';
    let msg = 'hello, ';
    if(name)
        msg += name;
    console.log(msg)
}
function showError(){
    alert('에러가 발생했습니다. 다시 시도 해주세요');
}
function add(a ,b){
    return a + b;
}
// //위의 함수를 함수 표현식으로 표현하면
// let add = function(a, b){
//     return a + b
// }
// 위의 코드 화살표로 표현하면
// let add = (a, b) => a + b

const superman ={
    name:'duhui',
    age:26,
    gender:'male',
    birthDay,
}

for (let key in superman){
    console.log(key)
    console.log(superman[key])
}