// 객체는 반드시 변수에 저장하고 진행해야 한다!!
let a = 10;
let b = '10';
let c = 1;

a = b+c; // 101
a += a // 101101 

b = c //1

a += b // 1011011

b = a+b+c //101101111

const array = [1,2,3,4,5];

c = c+array[2]; // 4

function ca(){
    console.log(c+array[4]+array[0]) // 4 + 5 + 1 = 10
}

const x = 10;
const y = 5;

// 1. 함수 생성
function xy(){
    console.log(x+(y-1));
    ca(); //위에 쓴 펑션의 호출값
};
// 2. 함수 호출( 생성 밖에서 호출해야 한다)
xy() //호출 = 함수(function) 밖에서 호출해야 한다.

// 은성이 사이트 장바구니 객체 연습
const cart = {
    img:'./img/model.jpg',
    sale:'50% OFF',
    name:'Crop Top',
    fit_size:'Body Fit',
    color:['Mineral Black','Chocolate Brown','Cobalt Blue/Iris Blue','Jewel Green','Jewel Green',],
    size:['XS','S','M','L','XL','XXL'],
    price:27.50,
    price_original:55,
    num:1,
};
console.log(cart);
console.log(cart.name); //하나의 값만 보고 싶으면 객체.속성
console.log(cart.color[2]); //주문하고 싶은 컬러의 인덱스번호를 호출해준다. 그러면 장바구니에 그 컬러가 담긴다.

/* 
자바스크립트에서 사용하는 괄호 개념
1. () : 메서드, 연산자 우선순위, 배열 빈공간, 배열선언, 함수
    메서드 : 객체.메서드();
    연산자 : 1+(1-2);
    배열 빈공간 : new Array(2) 값이 하나일 때 빈공간으로 인식
    배열 선언 : new Array(1,2) 값이 두개일 때
    함수 : function(){};
2. {} : 함수실행값, 객체선언
    함수실행값 : function(){ 실행값 };
    객체선언 : let object = { 속성:값, 속성:[값1,값2,값3],};
3. [] : 배열생성, 배열인덱스호출, 불러온 DOM 객체가 2개 이상일 때 인덱스호출용
    배열생성 : let 변수명 = [배열값, 배열값,]
    배열인덱스호출 : 변수명[인덱스]
    DOM : (2개 이상의 DOM 선언 후) DOM변수명[인덱스]
*/

