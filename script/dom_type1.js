// ex)마켓컬리 [- 1 +] 구매 옵션
// 방법1
/* let price = 100
let num = window.prompt('구입수량은?','');
console.log(`구입수량은 ${num}개 입니다`);
console.log(`구입수량은 +1 이벤트행사중 총 수량은 ${Number(num)+1}개 입니다`); */
// 방법2 관리하려면 이 방법이 위 방법보다 좋다(변수부터 숫자로 처리되기 때문에)
/* let price = 1000
let num = Number(window.prompt('구입수량은?',''));
console.log(`구입수량은 ${num}개 입니다`);
console.log(`구입수량은 +1 이벤트행사중 총 수량은 ${num+1}개 입니다`);
console.log(`총 가격은 ${(num*price)}원 입니다.`); */
// NaN == Not a Number 라는 뜻
// ------------------------------------------------------
// 변수 만들기
const textInput = document.querySelector('#text');
const numInput = document.querySelector('#number');
const resultBtn = document.querySelector('#btn');
console.log(textInput, numInput, resultBtn);
// 함수 만들기
// input 일 때 value를 적어준다. (비슷 : button, sllect, option)
function func1(){
    /* console.log('test'); */
    console.log(textInput.value); // value에 써있는 입력하세요를 지우고 쓰면 그 값이 전송되고 html에 value 속성이 없어도 콘솔에 적어서 값이 뜬다.
    console.log(numInput.value);

    console.log(typeof textInput); // (= object) 객체이다. 이유 => 태그라서 
    console.log(typeof textInput.value); // (= string) 

    console.log(typeof numInput); // (= object) 
    console.log(typeof numInput.value); // (= string) 숫자가 아니라 문자로 인식되니 숫자(Number)로 바꿔줘야한다(prompt와 유사)
    console.log(Number(numInput.value)); // (numInput.value)의 입력한 값이 숫자로 인식된다.
    
    let result = Number(numInput.value) // 변수자체를 Number화 시키고 싶을 때 result로 묶고 변수 생성해주면 된다. 보통 이렇게 관리를 한다.
    console.log(typeof result)
    console.log(result+1) // +1하고 싶을 때.
}