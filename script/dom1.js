// DOM document object model
const h1Tag = document.getElementsByTagName('h1')
console.log(h1Tag[0]);
/* 
    gitElementsBtTagName 
    * 1. HTML에 TagNode가 2개 이상일 때 그 중 1개만 동적인 기능이 적용되어 DOM으로 등록이 필요한 거라면 변수 지정 시 [index] 설정하고 대입하기 (=>대괄호 사용x)
    * 2. HTML에 TagNode가 2개 이상일 때 그 중 여러 개에 동적인 기능이 적용되어 DOM이 된다면 변수 지정 시는 [index] 없이 대입하고 (=>대괄호 사용o) 해당 DOM 변수 호출 시 필요한 경우 [index] 사용하기 
*/
/*  위 내용 예시
    *1번
    tag가 두개 있다.
    <h1>DOM-1</h1>
    <h1>DOM-2</h1> 
    h1의 [0]에 동적 기능 하고 싶으면
    const h1Tag = document.getElementsByTagName('h1')[0]
    console.log(h1Tag);

    *2번
    tag가 두개 있다.
    <h1>DOM-1</h1>
    <h1>DOM-2</h1> 
    여러개 (2개이상)에 동적 기능 사용하고 싶으면 호출에 index사용한다.
    const h1Tag = document.getElementsByTagName('h1')
    console.log(h1Tag[0]);
*/
// Q.상황1. ul에 동적인 기능이 필요한 경우
const ulTag = document.getElementsByTagName('ul')[0]; //원하는 대상이 1개라도 해도 index를 붙인다.
console.log(ulTag);
// Q.상황2. ul-li 3개 모두에 동적인 기능이 필요한 경우
const liTag = ulTag.getElementsByTagName('li');
console.log(liTag[0]);
console.log(liTag[1]);
console.log(liTag[2]);
// Q.상황3. ul-li-a 중 두번째 a만 동적인 기능이 필요한 경우
// const aTagVer1 = document.getElementsByTagName('a')[1];
const aTagVer1 = liTag[1].getElementsByTagName('a');
console.log(aTagVer1);
// Q.상황4. ul-li-a 3개의 a에 동적인 기능이 필요한 경우
const aTagVer2 = document.getElementsByTagName('a')
console.log(aTagVer2[0]);
console.log(aTagVer2[1]);
console.log(aTagVer2[2]);
/* 
    DOM Node 변수 지정 시
    HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고 실제로 DOM Node 변수를 동적인 결과를 만들어야 할때는 직접적인 접근으로 대상을 하나씩 개별인식하게 만들어야한다. [index]
    = > ex. ul이 1개만 있더라도 선언할때 index[0]를 붙여준다.
*/