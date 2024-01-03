// "안녕" chat_txt에 입력 후 send_btn을 클릭하면
// chat_list 에 <li>태그로 chat_txt에 입력한 "안녕" 값을 출력하기
const chat_box = document.querySelector('#chat');
const chat_list = chat_box.querySelector('.chat_list'); //메세지 출력 위치
const chat_send = chat_box.querySelector('.chat_send');
const chat_txt = chat_send.querySelector('#chat_txt'); //메세지 입력 창
const send_btn = chat_send.querySelector('#send_btn'); //보내기 버튼
const ul = document.createElement('ul');
console.log(ul);
console.log(chat_box,chat_list,chat_send,chat_txt,send_btn);
// 보내기 버튼 클릭 시
send_btn.addEventListener('click',function(){
    ul.innerHTML += `<li>${chat_txt.value}</li>`;
    chat_list.appendChild(ul); //이부분 꼭 적어줘야함 * 객체.appendChild(삽입노드) [이부모객체의.마지막자식위치로삽입해라 => 라는 뜻]
    chat_txt.value = '';
})