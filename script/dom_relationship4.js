// 첫번째 자식, 마지막 자식 노드 잡기
// firstChild, firstElementChild
// lastChild, lastElementChild
const items = document.querySelectorAll('.item'); //querySelector라고 하면 맨앞에있는 하나만 보여준다. 따라서 전부 보고 싶으면 querySelectorAll로 적어줘야함
console.log(items);
console.log(items[0]);
console.log(items[0].firstChild); //(= #text) => 첫번째 자식 노드 (공백인식)
console.log(items[0].firstElementChild); //(= p.photo) => 첫번째 요소 노드
console.log(items[0].lastChild); //(= #text) => 마지막 자식 노드 (공백인식)
console.log(items[0].lastElementChild); //(= p.price) => 마지막 자식 요소 노드
// ------------------------형제노드잡기
// 이전 형제 previousSibling, previousElementSibling
// 다음 형제 nextSibling(공백노드), nextElementSibling(요소노드)
const item_h2 = items[0].querySelector('h2'); //위에 변수에서 All로 했기 때문에 인덱스를 넣어줘야 한다.
console.log(item_h2);
console.log(item_h2.nextSibling); //(=#text)공백인식
console.log(item_h2.nextSibling.nextSibling); //(=p.price)공백다음 요소 인식 (공백포함한 다음형제)
console.log(item_h2.nextElementSibling); //(=p.price) 요소만 체크하는 다음형제
console.log(item_h2.previousSibling); //(=#text)공백인식 이전형제
console.log(item_h2.previousSibling.previousSibling); //(=p.photo)공백인식 포함한 이전 형제
console.log(item_h2.previousElementSibling); //(=p.photo) 요소만 체크하는 이전형제