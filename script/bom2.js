/* let m0 = 'popup';
let m1 = window.alert('popup');
let m2 = window.alert('잠시 기다려주세요');
let m3 = alert('로딩중입니다');
let m4 = alert('잘못 접근하셨습니다');
let m5 = window.alert('제출 완료되었습니다');
const m6 = window.alert('결제 완료');
console.log(m1); */

/* const qa1 = window.prompt('당신의 나이는?', '')
console.log(qa1);
console.log(typeof qa1); */ // (=string) prompt는 기본 특성이 문자로 되어있다. string

/* const ok = window.confirm('결제하시겠습니까?');
console.log(ok); */ // = 확인버튼 누르면 true 취소버튼 누르면 false

/* window.print(); */

function naverLink(){
    window.location.href='https://naver.com';
}
// ----------------------------
//객체.속성.속성
//객체.속성.메서드()
window.document.write("테스트문구");
document.write('자바스크립트');
document.write('hello<br>world');
// ---------------------------------
/* window.open('https://google.com','_blank'); */
//----------------------------------
function func(){
    window.open('https://google.com', '_blank', 'width=500, height=300'), //윈도우의 창의 크기를 3번째에 적을 수 있다.
    window.open('https://google.com', '_blank', 'width=500, height=300'), //두개 적으면 팝업도 2개 뜬다.
}