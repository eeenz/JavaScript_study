let num = 0;
function clickNum(){
    num += 1;
    console.log(num);
}

const obj = {
    name:'김땡땡',
    gender:'남성',
    birthday:function(){ //익명함수 (속성이 이름을 대신한다는 뜻)
        console.log(`${obj.name}아 생일 축하해-!`)
    }
}
// -------------------------------
// 배열 묶을 때 : [] | 객체 묶을 때 : {}
const member = [
    {
        name:'김모모',
        age:20,
    },{
        name:'박모모',
        age:21,
    },{
        name:'이모모',
        age:22,
    },
]
console.log(member);
// ----------------------------
// 오늘의집 상품 예제
const item = [
    {
        brandName:'청정원',
        productName:'파스타소스',
        sale:'38%',
        price:13900,
        reviewPoint:'4.7',
        reviewNum:'7,620',
        delivery:'무료배송',
        cardOption:'최대 10% 결제할인',
    },
    {
        brandName:'청정원',
        productName:'파스타소스',
        sale:'38%',
        price:13900,
        reviewPoint:'4.7',
        reviewNum:'7,620',
        delivery:'무료배송',
        cardOption:'최대 10% 결제할인',
    },
]
console.log(item);