let number1 = 10;
let number2 = 20;
let result;
number1--;
console.log(number1); //결과:9
number1++;
console.log(number1); //결과:10
result = number2++;
console.log(result); //결과:20 //증가되기 전의 값을 받는다
result = ++number2;
console.log(result); //결과:22 //최종 21이된 result의 값을 받아 증가시켜서 대입한다
console.log('---------');
result = result++
console.log(result); // 22 // 최종 22의 값을 받아 증가전에 대입시킨다
number2 = number1 + result++
console.log(number2); // 32 // 10+22 result 대입전의 값을 가져오기 때문에
// 복합대입연산자
let number = 10;
number += 5; // number = number + 5 //기존 number에 5를 더해서 대입한다
console.log(`변경값 = ${number}`) //변경값 = 15
number -= 5; //number = number - 5 
console.log(`변경값 = ${number}`) //변경값 = 10
number *= 5; //number = number * 5 
console.log(`변경값 = ${number}`) //변경값 = 50
number /= 5; //number = number / 5 
console.log(`변경값 = ${number}`) //변경값 = 10
number %= 2; //number = number % 2  // 기존 number에 2로 나눈 값의 나머지를 대입한다
console.log(`변경값 = ${number}`) //변경값 = 0
// 삼항연산자
// 조건 ? 조건값 참일 때 실행 결과 : 조건값 거짓일때 실행 결과
// 조건에 따라 참과 거짓을 구분하는데 사용하는 연산자
// = 대입연산자
// == 비교연산자(데이터가 같다)
let x = 5;
let y = x+10;
y = x;
let result_xy = x == y ? 'x와 y는 같다' : 'x와 y는 다르다';
console.log(result_xy);
console.log('-------------');
// Q. age 입력받은 데이터가 18세 이상이면 성인 아니면 미성년자 콘솔 값 출력
let age = window.prompt('몇살이세요?');
let result_age = age>=18? '성인' : '미성년자';
console.log(result_age);
console.log('-------------');
// 객체 + 삼항연산자
let user = [
    {
        name:'lee',
        score:80,
    },{
        name:'kim',
        score:100,
    }
]
// 최고 점수 받은 학생의 이름 저장 변수
const max_score_name = user[0].score > user[1].score ? user[0].name : user[1].name ;
console.log(`이번달 1등 학생은 ${max_score_name}님입니다.`);