// button 클릭 시 +1씩 증가
const num = document.querySelector('#num');
const numBtn = document.querySelector('#numBtn');
console.log(num, numBtn);
function plus(){
    //버튼을 클릭하면 실행되는 함수
    /* console.log(num.value); */ // 값 출력되나 확인 => ok
    /* console.log(num.value+1);  */// 더하기 출력 확인 x => 문제확인 => 01로 나옴
    /* console.log(typeof num.value+1); */ // 문제 해결하기 위한 데이터 확인 => string1 -> number로 바꿔주기
    /* console.log(Number(num.value)+1); */ // 더하기 되는건 확인 ok 근데 계속 1이라고만 뜬다
    /* num.value = Number(num.value)+1 ; */ // 출력 대상 바꿔서 확인 => 1부터 숫자가 계속 올라간다. 성공!
    /* console.log('----------------------'); */ // 위 단계를 깔끔하게 정리해보면
    let result = Number(num.value); //result = 결과라는 뜻. 이렇게 정리해두면 result안에서 확인가능
    num.value = result + 1; // 이렇게 하면 인풋안에 숫자가 올라가는걸 확인 가능
}