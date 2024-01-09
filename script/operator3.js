// 문자열 연산자(피연산자 중 하나라도 문자일 경우)
console.log('hello'+'world'); //helloworld
console.log('1'+2); //12
console.log(10+'Number()'); //10Number() ''에 묶여있으니 문자로 인식
console.log('num'+(2+2)+'ber'); //num4ber
console.log('안녕하세요'.length); //5
// 문자열 + 삼항연산자
// textarea 영역에 100자 이상을 쓰고 리뷰 등록 버튼 클릭 하면 '등록' 팝업출력
// textarea 영영에 100자 이하를 쓰고 리뷰 등록 버튼 클릭 하면 '100자 이상 쓰세요' 팝업출력
const review = document.querySelector('#review');
const textarea = review.querySelector('#re');
const reviewBtn = review.querySelector('#reviewBtn');
console.log(review,textarea,reviewBtn);

reviewBtn.addEventListener('click',function(){
    let result = textarea.value.length > 100 ? '등록' : '100자 이상 입력하세요';
    window.alert(result);
    console.log(result);
})