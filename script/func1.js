// 함수 스코프
// 지역변수와 전역변수
// let b = 20;
// let c = 30;
// let a = '';
// scope1() // 함수 호출 위치는 생성 위치와 관계 없다.
// function scope1(){
    // a += 10;
    // console.log(a,b,c); // 10 20 30
// }
// console.log(a+(b+c)) //102030 = 기존데이터''+10 =>문자10 => 10 + 20 + 30 =>문자로 처리

// 함수 스코프 연습
let x = 1
let y
function func1(){
    y = 5
    console.log(x+y) 
}
function func2(){
    let z = 10
    console.log(x+y+z)  
}
func1() 
func2()
console.log('--------------------------')

const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
console.log(btn)

// ver1 - 원래 하던 방식
// btn.addEventListener('click',function(){
//     console.log('결과 테스트')
// })
// btn2.addEventListener('click',function(){
//     console.log('결과 테스트')
// })

// ver2
function testFunc(){
    console.log('결과 테스트')
}
btn.addEventListener('click',testFunc)
btn2.addEventListener('click',testFunc)

// 이벤트 함수 개별 선언 연습
// - + 눌렀을 때 가격도 변경되고 수량도 변경되게
const minus_btn = document.querySelector('#minus')
const plus_btn = document.querySelector('#plus')
const num_view = document.querySelector('#num')
const price_tag = document.querySelector('.price')
console.log(minus,plus,num_view,price_tag)
let num = 1
let price = 4000;

function minus_result(){    
    num > 1 ? num-- : alert('최소 구매 수량입니다')
    num_view.value = num;
    price_tag.innerHTML = (num*price).toLocaleString('ko-kr') +'원';
}
minus_btn.addEventListener('click',minus_result)

function plus_result(){    
    num < 10 ? num++ : alert('최대 구매 수량입니다')
    num_view.value = num;
    price_tag.innerHTML = (num*price).toLocaleString('ko-kr') +'원';
}
plus_btn.addEventListener('click',plus_result)