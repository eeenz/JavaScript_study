// 왼쪽 썸네일 이미지 JS
// 1. small_thumbnail에 a에 마우스를 올렸을 때 => ex. small2 마우스를 올렸다면
// 2. big_thumbnail 이미지 경로(src)가 변경된다. => ex. big1이 big2 이미지 경로로 변경
const item_detail = document.querySelector('.item_detail');
const small_thum = item_detail.querySelectorAll('.small_thumbnail a');
const big_thum= item_detail.querySelector('.big_thumbnail img');
console.log(item_detail,small_thum,big_thum);

small_thum[0].addEventListener('mouseover',function(){
    big_thum.src = './dog_images/big1.jpg';
})
small_thum[1].addEventListener('mouseover',function(){
    big_thum.src = './dog_images/big2.jpg';
})
small_thum[2].addEventListener('mouseover',function(){
    big_thum.src = './dog_images/big3.jpg';
})
small_thum[3].addEventListener('mouseover',function(){
    big_thum.src = './dog_images/big4.jpg';
})
small_thum[4].addEventListener('mouseover',function(){
    big_thum.src = './dog_images/big1.jpg';
})
small_thum[5].addEventListener('mouseover',function(){
    big_thum.src = './dog_images/big2.jpg';
})