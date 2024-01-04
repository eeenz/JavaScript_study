/* 
아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.
입력하신 내용을 다시 확인해주세요.
*/
// "로그인" 버튼을 클릭 시 위 메세지가 form 안에서 span.error출력
const error = document.querySelector('#frm .error');
const loginBtn = document.querySelector('#frm #loginBtn');
const error_create = document.createElement('ul'); //1. 요소 자체를 자바스크립트에서 생성하는 방법
console.log(error_create); // 2. (= p) <p></p>태그 생성됨 확인
console.log(error, loginBtn);

//3. form의 마지막 자식 위치로 createElement로 생성한 노드 추가하기
// * 삽입노드 += 값 =>변수를 만들엇
// * 객체.appendChild(삽입노드) [이부모객체의.마지막자식위치로삽입해라 => 라는 뜻]
// # 객체.innerHTML = '삽입노드' => 이것(#)과 위(*)의 차이점은 위(*)는 메서드라서 복합 대입이 안되기 때문에 따로 변수를 만들어서 대입해 줘야한다.

loginBtn.addEventListener('click',function(){
    error_create.innerHTML += "<li>아이디를 입력하세요</li>";
    error.appendChild(error_create);
    console.log(error);
    /* error.innerHTML = `<em>아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br>입력하신 내용을 다시 확인해주세요.</em>`
    console.log(error); */
}) //innerHTML : tag를 인식 하기 때문에 <br>을 넣을 거면 innerHTML로 해야한다. 