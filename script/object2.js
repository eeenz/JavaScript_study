// 예약시스템
const reservation = {
    room:1,
    adult:2,
    children:1,
    option:'금연',
}
console.log(reservation);
//방 1개 => 2개 예약으로 변경하기
reservation.room += 1;
console.log(reservation);
delete reservation.option; // 속성 제거하고 싶을 때 => delete 객체.속성 (delete = 객체속성 제거)
console.log(reservation); 
reservation.option = '금연'; //다시 속성 추가하고 싶을 때 => 값을 대입해 준다.
console.log(reservation);
// ------------------------------
//x 50, y 100, z 0
//Q1.변수로 도형의 x, y, z값 담기
//A1.
const figureX = 50;
const figureY = 100;
const figureZ = 0;
console.log(figureX, figureY, figureZ);
//Q2.객체로 도형의 x, y, z값 담기
//A2.
const figure = {
    x:50,
    y:100,
    z:0,
}
console.log(figure);
//---------------------------------
//응용
const user = {
    name:'박',
    age:20,
    /* birthday:console.log('생일ㅊㅋ'), */ // undefined => 실행매서드 = 실행함수 (실행할 함수를 적용해주어야 나온다)
    birthday:function(){
        console.log('생일ㅊㅋ')  // 실행매서드 = 실행함수 (실행할 함수를 적용해주어야 나온다)
    },
}
/* console.log(user.birthday); */ // = ƒ 로 나온다
console.log(user.birthday()); // 함수를 부를때는 ()를 꼭 적어주어야 한다.