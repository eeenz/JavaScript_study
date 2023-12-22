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