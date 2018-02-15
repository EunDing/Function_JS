//이벤트

/*

웹이 동작 방식
자바스크립트는 css 파일의 존재를 모른다.

선택자(HTML) -> 이벤트(감지) -> 기능수행
*/

var doc = document;
var box1 = doc.getElementById("box1"); //선택자
var box2 = doc.getElementById("box2");

box1.addEventListener('click',function(){
//    alert('box1');
    box1.style.backgroundColor = 'blue';
});
box2.addEventListener('click',function(){
//    alert('box2'); 
//    -> 잘작동하는지 확인하기
 console.log(box2.classList); //box2의 클래스를 배열로 가져오는 기능

    this.classList.add('change'); 
    console.log(box2.classList);//box2의 클래스를 추가하는 기능
    //css : #change가 blue니까 box2클릭하면 blue로 변함.
    
//    this.classList.remove('a');
//    this.classList.toggle('change');
// 누르면 change class 추가 한번 더 누르면 change 삭제
    
//    토글은 오직 2개의 값만 가지고 있다. 하나가 on이면 다른 하나는 off 스위치의 개념
});

//이벤트의 종류
var nemo = doc.getElementById('nemo');
//nemo.addEventListener( 이벤트, 함수 );


//마우스 포인터를 이용한 이벤트
//
//-마우스를 눌렀다 떼면 바뀌는 속성(버튼 누르는 느낌)
//nemo.addEventListener('mousedown',function(){
//    this.classList.add('color')
//});
//
//nemo.addEventListener('mouseup',function(){
//    this.classList.remove('color')
//});

//-hover의 기능
nemo.addEventListener('mouseover',function(){
    this.classList.add('color')
});

nemo.addEventListener('mouseout',function(){
    this.classList.remove('color')
});










//키보드를 사용하는 이벤트

//엔터를 하면 화면에 내용이 입력되는 이벤트
var user = doc.getElementById('user');
user.addEventListener('keyup',function(event){
    console.log(event); //키보드의 정보는 객체로 담겨있음을 알 수 있음.
    console.log(event.keyCode);
    
    if ( event.keyCode === 13 ){
        var v = this.value;
        nemo.innerHTML=v;
    }
});


//엔터를 하면 box가 오른쪽으로 움직이는 이벤트
var num=0;

//최상위 키워드 : widnow
window.addEventListener('keydown',function(e){
    num++;
    if ( e.keyCode === 39){
        nemo.style.marginLeft = num+ '50px';
    }
});

//-키를 눌렀다 떼면(keyup), 키를 누른 상태(keydown) 작동







//scroll 이벤트

//-스크롤 내릴때 마다 바뀌는 배경색
window.addEventListener('scroll',function(){
    var nowScroll = doc.body.scrollTop;
    console.log(nowScroll);//얼마만큼 내려가는지 확인하기
    
    if ( nowScroll >= 300 && nowScroll<599 ){
        doc.getElementById('long').style.backgroundColor ='green';
    } else if ( nowScroll >=600){
        doc.getElementById('long').style.backgroundColor ='blue'; 
    } 
});

//-입력폼 관련한 이벤트

//Focus blur change 

//입력창에 포인터가 입력되었을때
user.addEventListener('focus',function(){
    console.log('포커싱 되었습니다');
});

//포인터가 외부로 나왔을때
user.addEventListener('blur',function(){
    console.log('아웃 되었습니다')

});

//입력창의 내용이 변경되었을때
user.addEventListener('change',function(){
    console.log('변경 되었습니다')
    nemo.innerHTML = this.value;
});














