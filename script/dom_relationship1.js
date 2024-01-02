// DOM의 부모잡기 : parentNode, parentElement
//nav 안에 있는 a 자식들 잡기
const aNode = document.querySelectorAll('nav > a'); // ('nav a'); 로 써도 괜찮다
console.log(aNode, aNode[0], aNode[1]);
console.log(aNode[0].parentNode); //= nav (aNode[0]의 부모노드)
console.log(aNode[1].parentNode); //= nav (aNode[1]의 부모노드)
console.log(aNode[0].parentElement); //= nav (aNode[1]의 부모요소)
console.log(aNode[1].parentElement.parentElement); // = header (aNode[1]의 부모의 부모요소)
console.log(aNode[1].parentNode.parentNode); // = header (aNode[1]의 부모의 부모노드)
console.log('-----------------------------');
// javascript에서 속성(css)를 동적으로 설정할 때
// 객체.속성
// 객체.속성.속성
// 자바스크립트에서css를 적용할 땐 인라인 스타일로 적용된다.
// 인라인 스타일은 모든 스타일 기준 가장 우선순위가 높으므로 기존 .css파일에 디자인 되어있는 속성이 있을 때 그 값보다 우선적용 된다.
/* aNode[0].parentNode.style = 'background-color:yellow; border:1px solid red'; */ // inline스타일로 적용 (객체.객체.속성 = '속성:값; 속성:값;')
/* aNode[0].parentNode.style = 'transform:skewX(20deg)'; */ // 텍스트들에 기울기가 됨
/* aNode[1].parentNode.style.backgroundColor = 'aqua'; */ //이런식으로 적용할 수 있음 카멜표기법으로 해야하고 한번에 스타일 종류는 하나씩만 적용 가능함.(객체.객체.속성.속성 = '값';)
/* aNode[1].parentNode.style.border = '3px solid blue';  *///이런식으로 적용할 수 있음 (객체.객체.속성.속성 = '값';)
/* aNode[1].parentNode.style.transform = 'rotate(10deg)';  *///배경이 기울어짐

// aNode[0] 마우스 올렸을 때
aNode[0].addEventListener('mouseover',function(){
    // 첫번째 a에 마우스 올렸을 때 nav 배경색 노랑
    aNode[0].parentNode.style.backgroundColor = 'yellow';
    // 첫번째 a에 마우스 올렸을 때 header 배경색 하늘
    aNode[0].parentNode.parentNode.style.backgroundColor = 'skyblue';
})
// aNode[0] 마우스 나갔을 때 배경색 제거하기(none)
aNode[0].addEventListener('mouseout',function(){
    aNode[0].parentNode.style.background = 'none';
    aNode[0].parentNode.parentNode.style.background = 'none';
})