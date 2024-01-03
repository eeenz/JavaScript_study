# javascript(ECMAScript)
* 자바스크립트는 절차적언어, 객체지향언어이다.
## 자바스크립트 작성위치
* `<head>`, `<body>` 내에 `<script>` 작성 가능
* 내부스크립트 `<script>...</script>`
* 외부스크립트 `<script src="url"></script>`
* 자바스크립트 성능 향상 추가 옵션 `defer`, `async` (주로 defer를 사용)
- `defer` : 로딩을 빠르게 도와주는 기능 (페이지를 우선 로드하고 스크립트를 읽어라)
- `async` : 자바스크립트를 먼저 읽어주는 것 (스크립트 우선 로드해라)
## 자바스크립트 변수
* `변수생성키워드 생성변수명 대입연산자 대입값;`
### 변수생성 키워드 종류
1. `var` : 중복선언 거르지 못함. ECMA Script 구버전의 오래된 변수 선언문
2. `let` : 중복선언 불가능하고 대입된 값을 언제든 변경할 수 있다.
3. `const` : 상수(변하지 않는 값), 선언과 동시에 대입이 이루어져야 한다.
### 기초 연산자
1. `=` : 대입연산자 ` let X = data `
2. `+` : 연결연산자 ` X + '1' `
3. `+=` : 복합대입연산자 ` X += Y ` => ` X = X+Y `
### 자바스크립트에서 사용하는 괄호 개념
1. () : 메서드, 연산자 우선순위, 배열 빈공간, 배열선언, 함수
* 메서드 : `객체.메서드();`
* 연산자 : 1+(1-2);
* 배열 빈공간 : new Array(2) 값이 하나일 때 빈공간으로 인식
* 배열 선언 : new Array(1,2) 값이 두개일 때
* 함수 : `function(){};`
2. {} : 함수실행값, 객체선언
* 함수실행값 : `function(){ 실행값 };`
* 객체선언 : `let object = { 속성:값, 속성:[값1,값2,값3],};`
3. [] : 배열생성, 배열인덱스호출, 불러온 DOM 객체가 2개 이상일 때 인덱스호출용
* 배열생성 : `let 변수명 = [배열값, 배열값,]`
* 배열인덱스호출 : `변수명[인덱스]`
* DOM : `(2개 이상의 DOM 선언 후) DOM변수명[인덱스]`
---------------------------
## 자바스크립트 데이터 종류
### 원시 데이터
* 참조를 이루지 않고 특정 변수에 바로 데이터 값이 저장되어있는 경우를 뜻한다.
* String(문자), number(숫자), boolean(논리형), null(값 없음), undefined(정의되지 않음), Symbol(ES6)
### 문자 데이터
* 작은따옴표(''), 큰따옴표(“”), 문자열의 앞 뒤에 붙여서 표현한다.
* “” => 빈문자열
* 숫자+문자 = 문자(string)
* 숫자+숫자 = 숫자(number)
* 숫자+숫자+문자 = 문자(string)
### 특수 데이터
* 없는 배열 요소를 읽으려 시도하거나, 값을 아직 할당하지 못한 변수, 아무것도 변환하지 않는 함수가 반환한 값을 나타내주는 데이터
* 값이 없음 = `null`
* 정의되지 않음 = `undefined`
*  var, let, const 은 데이터 타입이 없다. 이유는 생성된 변수에 대입되는 값에 따라 데이터 타입이 결정되기 때문이다.
### 데이터 타입 연산자
* typeof : 작성 방법 => `typeof데이터;` `typeof(데이터);`
* 데이터의 타입을 알려준다.
---------------------------
## 배열 Array 속성과 메서드
* `push` : 배열의 끝에 새로운 값 추가 메서드
* `unshift` : 배열의 처음에 새로운 값 추가 메서드
* `pop` : 끝 값 제거 메서드
* `shift` : 시작 값 제거 메서드
* `length` : 배열의 개수 확인 속성
* `index` : 배열의 위치 확인 속성 [ex) index 0번째]
---------------------------
### 객체 object
* 데이터 저장소 = 변수(한번에 1개의 값), 배열(2개 이상의 값)
* 특정 값에 해당되는 속성을 추가해서 데이터 관리를 용이하게 한다.
* 객체는 {}로 적는다.
* index와 length = 두가지는 배열만의 속성이다. 객체에는 사용 불가하다.
* 속성에 두가지 쓰고 싶으면 공백으로 띄어쓰기 후 사용 가능하다. 대신 ''로 묶어주어야 한다. [ex)'cat type':'코리안 숏헤어']
* `delete` : 객체속성 제거 (속성을 제거하고 싶을 때 사용한다.)
---------------------------
## DOM(document Object Model)
### getElementsByTagName (Tag)
* Tag는 여러개 이므로 Elements로 s를 붙여 사용하며, Tag가 부모 자식 자손 관계로 여러개를 갖으면 경로앞에 바로위 부모의 경로를 적어준다. [ex)`const ulTag = document.getElementsByTagName('ul')[0];` `console.log(ulTag);`] 
* 1. HTML에 TagNode가 2개 이상일 때 그 중 1개만 동적인 기능이 적용되어 DOM으로 등록이 필요한 거라면 변수 지정 시 [index] 설정하고 대입하기 (=>대괄호 사용x)
[ex) tag가 두개 있다. `<h1>DOM-1</h1>` `<h1>DOM-2</h1> ` h1의 [0]에 동적 기능 하고 싶으면 `const h1Tag = document.getElementsByTagName('h1')[0]` `console.log(h1Tag);`]
* 2. HTML에 TagNode가 2개 이상일 때 그 중 여러 개에 동적인 기능이 적용되어 DOM이 된다면 변수 지정 시는 [index] 없이 대입하고 (=>대괄호 사용o) 해당 DOM 변수 호출 시 필요한 경우 [index] 사용하기 
[ex) tag가 두개 있다. `<h1>DOM-1</h1>` `<h1>DOM-2</h1>` 여러개 (2개이상)에 동적 기능 사용하고 싶으면 호출에 index사용한다. `const h1Tag = document.getElementsByTagName('h1')` `console.log(h1Tag[0]);`]
* DOM Node 변수 지정 시
`HTMLCollection` 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고 실제로 DOM Node 변수를 동적인 결과를 만들어야 할때는 직접적인 접근으로 대상을 하나씩 개별인식하게 만들어야한다. [index] [ex) ul이 1개만 있더라도 선언할때 index[0]를 붙여준다.]
### getElementsByClassName (Class)
* class는 중복사용 가능하므로 Element의 붙여 사용하며, 공통 Class의 부모 자식 자손 관계로 여러개를 갖으면 경로앞에 바로위 부모의 경로를 적어준다.  [ex)`const lnbCls = gnbCls.getElementsByClassName('lnb');` `console.log(lnbCls);`] 
### getElementById (Id)
* id는 타이틀이 1개 이므로 부모의 경로를 적지 않아도 된다.
* id는 1개 이므로 Element의 s를 적지 않는다.
### querySelector
* querySelector는 태그가 여러개 있을 경우에도 바디를 읽을 때 첫 번째 대상만 잡아서 보여준다.
* `const h1Tag = document.querySelector('h1');` `const titleCls = document.querySelector('.title')`
* 자체에 class나 id나 tag를 나누는게 없어서()안에 적어줘야한다. [ex)class => .으로표기, id=> #으로표기, (= h1.title)]
### querySelectorAll
* `document.querySelectorAll('.list');` `console.log(listAll);``console.log(listAll[1]);`
### Number
* `Number`는 숫자가 문자열로 인식될 때 붙여주는 속성이다.
* 예시1.`let num = Number(window.prompt('구입수량은?',''));`
* 예시2. `console.log(Number(numInput.value));`
* 암시적 형변환(자바스크립트가 개발자 동의없이 자동으로 형변환)되는 경우 Number를 사용해 문자열을 숫자로 변환해준다.
[ex)`let age = Number(window.prompt('당신의 나이는?'));`]
* `prompt`와 `form 태그에 삽입되는 값 속성(input, option, select, button, textarea)` 데이터값은 무조건 문자열로 처리되기 때문에 Number를 사용해 숫자로 변환이 필요하다.
* NaN => Not a Number 라는 뜻
### value
* form 태그에 삽입되는 값 속성(input, option, select, button, textarea)
* form 태그 내에 작성했을 땐 미리 입력된 값 표현 가능
* javascript의 DOM.속성 `ex)DOM.value`로 처리했을 땐 해당 DOM의 미리 입력된 값부터 사용자가 입력하는 신규 값까지 모두 인식할 수 있다.
1. 쇼핑몰 상품 수량
2. 쇼핑몰의 총 주문 가격
3. 예약페이지의 여행 인원 수 등등..
* 주의사항 -> value속성은 form전용이므로 다른 태그일때 해당 값을 알고 싶다면 다른 속성 및 메서드를 사용해야 한다.
* 주의사항 -> `DOM.value`로 처리 시 숫자를 쓰더라도 문자열(string)으로 인식하기 때문에 필요한 경우 `Number()` 로 메서드를 활용해 (Number)데이터 타입으로 변환해야 한다. [ex) `Number(객체.value())`]
### 사용가능한 상황
* `객체.속성.메서드()`
* `객체.속성()`
* `메서드(객체.속성)`
* `메서드(객체.메서드)`
* `메서드(객체.속성.메서드)`
---------------------------
### toLocaleString('')
* 국가 코드별로 숫자를 변환해주는 메서드
* 문자열이 문자로 처리 되므로 계산을 모두 마친 후 마지막 출력 경우에만 toLocaleString('')를 사용한다.
----------------------------
## DOM 관계속성
### javascript에서 속성(css)를 동적으로 설정 할 때
* 자바스크립트에서css를 적용할 땐 인라인 스타일로 적용된다.
* 인라인 스타일은 모든 스타일 기준 가장 우선순위가 높으므로 기존 .css파일에 디자인 되어있는 속성이 있을 때 그 값보다 우선적용 된다.
### parent - 부모 관계속성
1. parentNode 부모 노드, parentElement 부모 요소
    - parentNode.parentNode 연속 사용 가능 (부모의 부모 잡기)
    - 자식 또는 자손노드.parentElement (특정 자식의 부모 잡기)
2. javascript에서  css 제어하기 -> style 속성
    - DOM.관계.style = '속성:값; 속성:값; 속성:값;';
    (* 위 style 2번 이상 생성 시 이전 송성:값 제거됨)
    - DOM.관계.관계.style.속성 = '값';
    (* 위 style 2번 이상 생성 시 기존 속성값에 이어서 추가됨)
    - DOM.style.속성 = '값';
    - 위 관계는 필요에 따라 선택 속성
* 예시1) `aNode[0].parentNode.style = 'background-color:yellow; border:1px solid red';` : 아래에 속성을 추가하면 기존 속성값은 제거 된다.
* 예시2) `aNode[0].parentNode.style.backgroundColor = 'yellow';` : 속성을 추가하면 기존 속성에 추가가 된다.
###  Child - 자식 관계속성
1. firstChild(공백포함 노드), firstElementChild(요소노드) : 첫번째 자식 속성
    - 예시)`console.log(items[0].firstChild);` (= #text) => 공백포함 인식한 첫번째 자식 노드
2. lastChild(공백포함 노드), lastElementChild(요소노드) : 마지막 자식 속성
    - 예시)`console.log(items[0].lastElementChild);` (= p.price) => 요소 노드 기준 마지막 자식
###  Sibling - 형제 관계속성
1. previousSibling(공백포함 노드), previousElementSibling(요소노드) : 이전형제 속성
    - 예시1) `console.log(item_h2.previousSibling);` (= #text) => 공백포함 인식한 이전형제
    - 예시2) `console.log(item_h2.previousElementSibling);` (= p.price) => 요소만 체크한 이전형제
2. nextSibling(공백포함 노드), nextElementSibling(요소노드) : 다음형제 속성
    - 예시1) `console.log(item_h2.nextSibling);` (= #text) => 공백포함 인식한 다음형제
    - 예시2) `console.log(item_h2.nextElementSibling);` (= p.price) => 요소만 체크한 다음형제
----------------------------