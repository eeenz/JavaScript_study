// 외부스크립트
// 객체 object
// 데이터 저장소 = 변수(한번에 한가지 값), 배열(2개 이상의 값)
// 특정 값에 해당되는 속성을 추가해서 데이터 관리를 용이하게 
const cat = { //객체는 {}로 적는다.
    color:'black',
    age:1, //,를 마지막에도 적는 이유는 나중에 추가했을 때 ,안적는걸 미연에 방지하기 위해 적는다.
}
console.log(cat); // 배열에는 있는데 없는 것은 index와 length = 두가지는 배열만의 속성이다.
/* console.log(cat.length); */ // = undefined => 객체에는 length 속성 사용이 불가하기 때문에
console.log(cat.color);  // 잘못된 표기 console.log(cat.color()); =>속성에는 ()사용 불가
console.log(cat.age);
//Q.1살 black 고양이 분양합니다.
//A.
console.log(`${cat.age}살 ${cat.color} 고양이 분양합니다.`);
//
console.log('--------------------------------------------');
const cat2 = {
    color:['white', 'yellow', 'black'],
    age:2,
}
console.log(cat2); // = color: Array(3), age: 2 | color:(3) | length: 3 | Array(0)
//Q.고양이의 털 색깔은 yellow, white, black으로 이루어져 있습니다.
//A.
console.log(`고양이의 털 색깔은 ${cat2.color[1]}, ${cat2.color[0]}, ${cat2.color[2]}으로 이루어져 있습니다.`)
//
console.log('--------------------------------------------');
const cat3 = {
    'cat type':'코리안 숏헤어', //속성에 두가지 쓰고 싶으면 공백으로 띄고 사용가능 대신 ''묶어주어야함
    color:['흰색', '검은색'],
    age:1,
    gender:'암컷',
    adopt:'입양 전',
    neutering:'중성화 전',
    health:'양호',
}
console.log(cat3);
/* console.log(cat3.'cat type'); */ // = error
console.log(cat3['cat type']); //속성에 공백을 사용했으면 문자열처럼 값에 대입해주어야 함.
console.log(`고양이의 나이는 ${cat3.age}살이고 품종은 ${cat3['cat type']}입니다.`); //예시
//입양 전 => 입양완료
cat3.adopt = '입양완료';
console.log(cat3.adopt);
//중성화 전 => 중성화 완료
//1 => 2
cat3.gender = '중성화 완료';
cat3.age += 1;
console.log(cat3);