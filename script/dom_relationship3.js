const header = document.querySelector('header');
const headerChild = header.childNodes;
console.log(header, headerChild);
console.log(header.childElementCount); //(=2) header의 자식이 몇명인지 알려주는 태그

console.log(headerChild[1]); //h1
console.log(headerChild[3]); //nav
console.log(headerChild[1].innerText); //"logo"
console.log(headerChild[1].innerHTML); //<a href="#">logo</a>
console.log(headerChild[3].innerText); //menu1 menu2 (안에포함된 글자를 모두 꺼낸다)
console.log(headerChild[3].innerHTML); //<a href="#">menu1</a> <a href="#">menu2</a>

/* headerChild[3].innerText = "로고"; */ // innerText는 대입연산자로 활용하면 안에있는걸 통쨰로 인식한다. 따라서 a태그와 글자 모두 인식 후 "로고"라고 변경 했기 때문에 a태그가 사라진다. 텍스트 logo만 변경하고 싶다면 ↓
console.log(headerChild[1].childNodes[0]); //콘솔로 위치 확인 (**인덱스를 꼭 붙여줘야 인식해서 변경이 된다**)
headerChild[1].childNodes[0].innerText = "로고"; 
/* headerChild[1].children[0].innerHTML = "로고로고"; */ //동일한 방법, 문법의 차이 
console.log('------------------------------');

//Q. menu1 마우스를 올리면 menu1 -> 메뉴1 글자 변경
headerChild[3].childNodes[1].addEventListener('mouseover',function(){
    headerChild[3].childNodes[1].innerText = "메뉴1";
})
//Q. menu2 마우스를 올리면 menu2 -> 메뉴2 글자 변경
headerChild[3].children[1].addEventListener('mouseover',function(){
    headerChild[3].children[1].innerText = "메뉴2";
})
/* headerChild[3].childNodes[3].addEventListener('mouseover',function(){
    headerChild[3].childNodes[3].innerText = "메뉴2";
}) */ // childNodes는 공백까지 인식하고 children은 요소만 인식한다. 따라서 childNodes로 쓸거면 공백0,2제외한[1,3]으로 써야 한다.
// 풀이
// //Q. menu1 마우스를 올리면 menu1 -> 메뉴1 글자 변경
// 1.menu1 변수 생성하기(h1-a가 아닌 nav-a만 잡는 방법(콘솔체크))
// 1-1. (위 변수 생성 이유) 마우스 올리는 대상, 변경 글자 대상
// 2. 변수 이용 이벤트 핸들러 addEventListener
// 2-1. 마우스 올리면 이벤트 종류 찾기
// 2-2. 마우스 올렸을 때 실행 결과 이벤트 내 function 안에 작성 준비
// 3. 글자를 변경하는 속성이 뭔지 체크 문법에 맞춰서 작성
// 3-1. 객체.속성= "값" 속성 값 변경하는 문법
const nav = header.querySelector('nav');
const nav_a = nav.children;
console.log(nav, nav_a, nav_a[0], nav_a[1]);
nav_a[0].addEventListener('mouseover',function(){
    nav_a[0].innerText = "메뉴1";
})
nav_a[1].addEventListener('mouseover',function(){
    nav_a[1].innerText = "메뉴2";
})
console.log('------------------------------');
// main-장바구니 아이템의 개수를 자동으로 측정하여 main span.all 노드에 해당 개수 출력하기
// 1. main-cart 변수 생성하기
// 2. span.all 변수 생성하기
// const main_cart = document.querySelector('main');
// const cart = main_cart.querySelector('.cart');
// const spanAll = main_cart.querySelector('.all');
// console.log(main_cart, cart , spanAll); 
// 3. main-cart의 자식 item 개수 체크하기
/* console.log(main_cart.childElementCount);  *///(=3)
// const cart_item_count = main_cart.childElementCount;
/* console.log(cart_item_count); */ //(=3)
// 4. span.all 변수에 위(3번) 값 대입하기
/* spanAll.innerText = cart_item_count; */ // index를 붙이는건 컬렉션으로 여러개 있을경우
console.log('------------------------------');
// 선생님 풀이----------------------------------
const mainNode = document.querySelector('main');
// 1. main-cart 변수 생성하기
const cart = mainNode.querySelector('.cart');
// 2. span.all 변수 생성하기
const all_count_view = mainNode.querySelector('span.all');
// 3. main-cart의 자식 item 개수 체크하기
const cart_item_count = cart.childElementCount;
console.log(mainNode, cart, all_count_view, cart_item_count);
all_count_view.innerText = cart_item_count;