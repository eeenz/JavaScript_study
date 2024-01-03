/* 
DOM 관계속성
1.parentNode 부모 노드, parentElement 부모 요소
    - parentNode.parentNode 연속 사용 가능 (부모의 부모 잡기)
    - 자식 또는 자손노드.parentElement (특정 자식의 부모 잡기)
2. javascript에서  css 제어하기 -> style 속성
    - DOM.관계.style = '속성:값; 속성:값; 속성:값;';
    (* 위 style 2번 이상 생성 시 이전 송성:값 제거됨)
    - DOM.관계.관계.style.속성 = '값';
    (* 위 style 2번 이상 생성 시 기존 속성값에 이어서 추가됨)
    - DOM.style.속성 = '값';
    - 위 관계는 필요에 따라 선택 속성
*/
// 24/1/3 자식노드 제어하기
// childNodes, children, childElementCount
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
console.log(header,main,footer);
// 변수 정상 작동 확인
// 빨강 error, undefined, null 출력 없이 올바른 Node 출력이 되는지 확인!

console.log(header.childNodes); //(= odeList [text]) 텍스트 노드 인덱스 출력 **정보확인용**
console.log(header.childNodes[0]); // (= "header") 텍스트 노드 자체만 콘솔에서 값을 보고 싶을 때 지정해서 출력 **지정해서 동적인 기능 할 땐 이렇게 적어야 함**
console.log(header.childNodes[0].data); // (=header) 데이터값
console.log(header.childNodes[0].length); // (=6) 글자수
console.log(header.childNodes[0].baseURI); // (= http://127.0.0.1:5501/relationship.html) 경로
//-----------------------------------------
console.log('--------------------------------');
const hChild = header.childNodes; // 편리를 위해 반복되는 'header.childNodes[0]'부분 변수로 묶어주기
console.log(hChild[0]); 
console.log(hChild[0].data); 
console.log(hChild[0].length); 
console.log(hChild[0].baseURI); 
console.log('--------------------------------'); //main영역 연습
const mChild = main.childNodes;
console.log(mChild[0]); //(="main")
console.log(mChild[0].data);//(=main)
console.log(mChild[0].length); //(=4)
console.log(mChild[0].parentElement); //
console.log('--------------------------------'); //fooder영역 연습
const fChild = footer.childNodes;
console.log(fChild[0]); //(="footer")
console.log(fChild[0].data); //(=footer)
console.log(fChild[0].length); //(=6)
console.log(fChild[0].baseURI); //(=http://127.0.0.1:5501/relationship.html)