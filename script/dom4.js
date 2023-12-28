// querySelector
const h1Tag = document.querySelector('h1'); //(= h1#main_title)
const liTag = document.querySelector('li'); //(= li#list_wrap)
const titleCls = document.querySelector('.title') //=> 자체에 class나 id나 tag를 나누는게 없어서()안에 적어줘야한다. class => . (= h1.title)
const listCls = document.querySelector('li.list'); //(= li.list)
const main_title = document.querySelector('#main_title'); //(= h1#main_title)
console.log(h1Tag, liTag);
console.log(titleCls);
console.log(listCls);
console.log(main_title);
// 쿼리셀렉터는 태그가 여러개 있을 경우에도 바디를 읽을 때 첫 번째 대상만 잡아서 보여준다.
console.log('-------------------------------------------------');
// querySelectorAll
const listAll = document.querySelectorAll('.list') //(= NodeList [li.list])
console.log(listAll);
console.log(listAll[1]);
console.log(listAll[2]);
console.log(listAll.length);
console.log('-------------------------------------------------');
// --------------------------------------------------------------
// 명시적 형변환(개발자가 적접 데이터타입을 결정)
let a = 10
console.log(typeof a); // (= number)
a = '10';
console.log(typeof a); // (= string)
// 암시적 형변환(자바스크립트가 개발자 동의없이 자동으로 형변환)
// prompt 받는 데이터값은 무조건 문자열로 처리된다.
let age = Number(window.prompt('당신의 나이는?'));
console.log(typeof age); //(= string)30
console.log(age);
console.log(Number(age));
age += 1; // 위에 문자로 인식되어 문자+숫자 = '30'+1 = '301'
console.log(age);
/* 
-가능-
객체.속성.메서드()
객체.속성()
메서드(객체.속성)
메서드(객체.메서드)
메서드(객체.속성.메서드)

-불가능-
객체.메서드().메서드()
객체.메서드().속성
*/