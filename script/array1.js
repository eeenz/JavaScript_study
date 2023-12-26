// 외부스크립트
let a = 'ABC';
console.log(`a => ${a}, a의 type은 ${typeof a}`);
let b = 'DEF';
console.log(`b => ${b}, b+a의 type은 ${typeof (b+a)}`);
const alpa = ['ABC', 'DEF']
console.log(`alpa배열의 값은 ${alpa}`);
console.log(`배열은 0부터 시작하기 때문에 ABC를 출력하고 싶으면 ${alpa[0]}`); // = index ex)인덱스가 몇이냐 라고 물어봄 ex)abc가지고 온다고 하면 0번이다.
console.log(`배열의 개수 확인 => ${alpa.length}`); // = 총 개수 length 속성

const yoil = new Array('월', '화', '수', '목', '금', '토', '일');
const weather = new Array('맑음', '흐림', '비', '눈');
// Q.아래 내용으로 각각 다른 인덱스로 값을 출력하라
// 월(맑음)
// 화(눈)
// 수(비)
// 목(흐림)
// 금(맑음)
// 토(맑음)
// 일(눈)
// A.
console.log(`${yoil[0]}(${weather[0]})`);
console.log(`${yoil[1]}(${weather[3]})`);
console.log(`${yoil[2]}(${weather[2]})`);
console.log(`${yoil[3]}(${weather[1]})`);
console.log(`${yoil[4]}(${weather[0]})`);
console.log(`${yoil[5]}(${weather[0]})`);
console.log(`${yoil[6]}(${weather[3]})`);
//-----------------------------------------------
const nameArray = ['김', '이', '박', '최'];
console.log(nameArray); //테스트 용으로 다른속성 안붙이고 출력하면 '확인용'으로 모든 정보 확인 가능
// 배열 값 추가, 삭제 메서드(자주 사용하는 종류)
nameArray.push('수'); //push => 배열의 끝에 새로운 값 추가하는 메서드
console.log(nameArray); //= 결과 값에 '수' 값 추가됨
nameArray.unshift('방');// unshift => 배열의 처음에 새로운 값 추가하는 메서드
console.log(nameArray);//= 결과 값에 '방' 값 추가됨
nameArray.pop(); // = 끝 값 제거 속성
console.log(nameArray);//= '수' 값 제거됨
nameArray.shift(); //시작 값 제거 속성
console.log(nameArray); // = '방' 값 제거됨
//연습
/* push - pop , unshift - shift */
const testArray = ['딸기', '수박', '참외', '메론', '바나나', '블루베리', '자몽'];
console.log(testArray);
testArray.push('체리', '귤');
console.log(testArray); // = 결과 값에 '체리', '귤' 2개의 값 추가됨
testArray.pop();
testArray.pop();
testArray.pop();
console.log(testArray); // = 끝에있는 3개의 값인 '자몽','체리','귤'의 값이 지워짐
// -----------------------------------
/* megabox - 인원 선택에 최대 인원 8명까지 연습 */
const movie = new Array(8); // 배열에 값 1개로 숫자만 넣어놓으면 빈자리를 만들어 준다.
console.log(movie); // =  [empty × 8]
/* movie.push('A1'); */ // 빈자리로 들어간게 아니라 9번째 자리로 추가됨.
/* console.log(movie); */ // = [empty × 8, 'A1']
/* movie.unshift('A1'); */ // 빈자리로 들어간게 아니라 0번째 자리로 추가됨.
/* console.log(movie); */ // = ['A1', empty × 8]
// 
// 이럴때 연산자(+,+=,=)로 사용해야한다.
// 
movie[0] = 'A1';
console.log(movie); // =  ['A1', empty × 7]
movie[1] = 'B3';
console.log(movie); // =  ['A1', 'B3', empty × 6]
console.log('--------------------------------------------------');
const megabox = new Array();
console.log(megabox); // = 배열로 인식하는데 값이 비워있음. Array(0)
megabox.push('A1');
console.log(megabox); // = ['A1'] 0번째로 추가됨 => length:1
megabox.push('B3');
console.log(megabox); // =  ['B3'] 추가됨 => ['A1', 'B3'] | 0: "A1" 1: "B3" | length: 2 | Array(0)
megabox.pop();
console.log(megabox); // = ['A1'] => 'B3'제거됨