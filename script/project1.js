// 적정 체중 구하는 계산기 만들기
// 계산식) **적정체중 = (본인신장-100)*0.9**
// 변수명 예) **userHeight, userWeight, goals, result, normal_w**
// +CSS 디자인은 심미적으로 자유롭게 표현하세요.
// - 현재 키와 몸무게를 자유롭게 입력하고
// - 버튼을 눌렀을 때 최종 목표 칸에 메세지 출력하기
// 최종목표 **결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.**
const height = document.querySelector('#height'); 
const weight = document.querySelector('#weight'); 
const goals = document.querySelector('#goals');
const result = document.querySelector('#result');
console.log(height, weight, goals, result);
result.addEventListener('click',function(){
    goals.value = Number(height.value-100)*0.9;
    window.alert(`적정체중은 ${goals.value}kg이며 ${weight.value - goals.value}kg 초과되셨습니다.`);
    bank_input.value = '';
})
