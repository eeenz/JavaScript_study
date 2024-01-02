const btn1 = document.querySelector('#btn1'); //DOM 노드 변수
console.log(btn1); //변수 정상 등록 확인

btn1.addEventListener('mouseover',function(){ //익명함수 or 콜백함수 (앞에 함수 선언명이 이미 있으므로 따로 적지 않아도 된다.)
    console.log('hello btn1');
}) 

// Q.btn2 클릭 시 윈도우 질문답변창으로 1+1을 물어보고 그 결과 팝업으로 출력하기
const btn2 = document.querySelector('#btn2'); //DOM 노드 변수
console.log(btn2); //변수 정상 등록 확인

btn2.addEventListener('click',function(){
    const qa = Number(window.prompt('1+1',''));
    window.alert(qa+1);
})

// Q.btn3 누를 시 구글 주소로 바로가기
const btn3 = document.querySelector('#btn3');
console.log(btn3);

btn3.addEventListener('mousedown',function(){
    window.location.href = 'https://google.com';
})

//Q.인증확인 버튼 클릭 시 input에서 입력한 값이 팝업창으로 출력
// 출력 메세지 예 ) oooo 입력 확인 되었습니다.
const certifiedTxt = document.querySelector('#certified_txt'); 
const certifiedBtn = document.querySelector('#certified_btn'); 
console.log(certifiedTxt, certifiedBtn);

certifiedBtn.addEventListener('click',function(){
    /* console.log('.'); */ // 이벤트 함수 정상 동작 체크
    /* console.log(certifiedTxt.value); */ // 값 동작 체크(input에 값을 적었을때 console에 정상적으로 뜨는지)
    /* window.alert(certifiedTxt.value); */ // 팝업으로 뜨는지 확인
    /* window.alert(`${certifiedTxt.value} 입력 확인 되었습니다.`); */ // 팝업으로 이쁘게 뜨게 꾸며주기
    // 중간 변수 추가해서 깔끔하게 식 정리하기
    let certifiedNum = certifiedTxt.value // 변수를 추가해서 최종 출력을 단순하게 처리
    window.alert(`${certifiedNum} 입력 확인 되었습니다.`);
})

//Q.총 수입 버튼을 클릭 시 월급+보너스 더한 결과가 팝업으로 출력
//결과 예시) 총 수입은 ooooooo원 입니다.
const input_pay = document.querySelector('#result1');
const input_bonus = document.querySelector('#result2');
const answer_btn = document.querySelector('#answer_btn');
console.log(input_pay, input_bonus, answer_btn);

answer_btn.addEventListener('click',function(){
    /* console.log('.'); */ // 이벤트 함수 정상 동작 체크
    /* console.log(input_pay, input_bonus); */ // 값 정상 체크
    /* console.log(input_pay + input_bonus); */ // 값 더하기 확인
    /* console.log(typeof(input_pay,input_bonus)); */ // 계산이 안되는 문제(데이터) 확인 => STRING => 문제해결(Number)
    /* let total = Number(input_pay.value + input_bonus.value); */ //결과를 담는 변수 생성 후 대입
    /* console.log(total); */ //결과 변수 정상 작동 확인 => ()안에있는 문자끼리 더하기를 한 후 숫자로 변환하는 문제 발생
    let total = Number(input_pay.value) + Number(input_bonus.value);
    window.alert(`총 수입은 ${total}원 입니다.`);
})

// Q. 자바스크립트 은행
// 입금 전 잔액 : 10000원
// 입금액(자유) 입금 시 마다 +100원이 더해져서 총 잔액에 포함
// 입금 시 잔액 포함은 버튼 클릭 시 실행되는 구조
const bank_input = document.querySelector('#bank_input'); //입금input
const bank_total = document.querySelector('#bank_total'); //총잔액input
const bank_btn = document.querySelector('#bank_btn'); //입금버튼
let total1 = 10000;  //기본 총잔액 10000원으로 변수로 설정 (값은 변경되므로 let으로 적어야한다)
console.log(bank_input, bank_total, bank_btn);
bank_total.value = total1; 

bank_btn.addEventListener('click',function(){
    /* console.log('.'); */ // 이벤트 함수 정상 동작 체크
    /* console.log(bank_input + 100); */ // = [object HTMLInputElement]100 => 태그 자체에 금액을 대입해서.
    /* console.log(bank_input.value + 100); */ // 문자 + 숫자로 인식 => number로 변경필요
    // console.log(Number(bank_input.value) + 100); 
    console.log(Number(bank_input.value) + 100 + total1);  // 총 잔액 더하기 결과 확인
    let input_total =  Number(bank_input.value) + 100 ; // 입금액 + 이자
    total1 += input_total; // = total1 = total1 + input_total;
    bank_total.value = total1; // 쌓인 값을 계속 input 기본값으로 대입해 준다.
    window.alert(`총 금액은 ${input_total}원 입니다.`);
    // 입금액 입력값 초기화 방법(커서올려도 이전값이 안지워져서 불편)
    bank_input.value = ''; // 입력값이 남지않고 바로 초기화된다
})
