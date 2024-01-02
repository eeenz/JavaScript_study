// 문자열 변환 메서드
/* let price = 10000000000; */
// 계산을 모두 마친 후 마지막 출력 경우에만 toLocaleString('')를 사용한다.
/* console.log(price.toLocaleString('ko-kr')); */ // toLocaleString('') 국가 코드별로 숫자를 변환해주는 메서드
// HTMLNode.value = price.toLocaleString('ko-kr')



// Q. 자바스크립트 은행
// 총 잔액 10,000원 시작 기준 입금 시 마다 100원 더하기 (총잔액은 항상 콤마처리로)
const bank_input = document.querySelector('#bank_input'); //입금액
const bank_total = document.querySelector('#bank_total'); //총잔액
const bank_btn = document.querySelector('#bank_btn');
let total = 10000;
bank_total.value = total.toLocaleString('ko-kr'); //input창 가격 10,000으로 
console.log(bank_input, bank_total, bank_btn)

bank_btn.addEventListener('click',function(){
    let input_total =  Number(bank_input.value) + 100 ; 
    total += input_total; 
    bank_total.value = total.toLocaleString('ko-kr');
    bank_input.value = ''; 
})