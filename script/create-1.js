// 아이디 찾기 - 인증번호받기
// Q. 인증번호 받기 클릭 시 버튼 마지막 형제 위치에 "인증번호가 발송되었습니다" 출력하기
const id_search = document.querySelector('#id_search'); //방식1
/* const id_search = document.querySelector('#id_search form'); */ //방식2
const authentication_btn = id_search.querySelector('#authentication_btn');
const id_send_message = document.createElement('span');

id_send_message.innerText = "인증번호가 발송 되었습니다";
console.log(id_search,authentication_btn,id_send_message);

authentication_btn.addEventListener('click',function(){
    id_search.querySelector('form').appendChild(id_send_message); //방식1 변수로 따로 만들어도 되는데 다른방식으로 활용해봄
    console.log(id_search);
    // id_search.insertBefore(id_send_message, id_search.firstElementChild); //방식2
})
// 객체.appendChild(Node) => 마지막 자식 노두 추가 [ex.부모.appendChild()]
// 객체.insertBefore(삽입Node, 기존 시작자식 노드) => 첫번째 자식 노드 추가 [ex.부모.insertBefore(삽입, 부모.firstChild)]

// Q. 인증번호입력칸 #authentication_input 값을 입력하면 form의 이전 형제 위치에 "인증번호가 틀렸습니다" 출력하기
const authentication_input = document.querySelector('#authentication_input');
const message_error = document.createElement('p');
const container = document.querySelector('#id_search');

message_error.innerText = "인증번호가 틀렸습니다";
console.log(authentication_input,message_error);

authentication_input.addEventListener('blur',function(){
    container.insertBefore(message_error, container.firstChild);
    console.log(container);
})