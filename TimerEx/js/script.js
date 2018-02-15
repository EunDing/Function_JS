//기능

// 자바스크립트를 활용한 애니메이션

// setInterval


//setInterval(함수, 시간)
//: 매 '시간' 마다 '함수'를 실행시킨다.
//
//setTimeout(함수,시간)
//: '시간'이 경과하면 '함수'를 1회 실행시킨다.
//
//
//
//시간 : 1초 = 1000ms

//- 초시계 만들기
var doc=document;
var clock = doc.querySelector('.clock');
var play = doc.querySelector('.play')
var pause = doc.querySelector('.pause')
var right = doc.querySelector('.right');

var num=1; 
var move = null; //전역변수로 만들기 위해 공간을 비워놓음

play.addEventListener('click',function(){
    
    clearInterval(move);
//여러번 누르면 인터벌이 여러개 생겨 혼란이 오니 clearInterval이용하여 누르면 일단
//움직임을 정지시키고 움직이게 하기
    
    move = setInterval(function(){

        clock.innerHTML = num;
        num++;

    },1000);
    //var move하면 지역변수가 되어버림
});

pause.addEventListener('click',function(){
    clearInterval(move);
//    num=1; '시작' 누르면 처음부터 시작하게 됨
});







//박스가 오른쪽으로 이동하는 기능
var ani = 0;

right.addEventListener('click',function(){
     setInterval(function(){
        ani+=1;
    if (ani >=500){
        clearInterval(tt);
    }
    clock.style.transform = 'translateX('+ani+'px)';
    },5);
});

//그러나 css transform이 익스플로러에서 아직 높은버젼에서만 호환한다.
var cssmove = doc.querySelector('.cssmove');
cssmove.addEventListener('click',function(){
    clock.classList.add('active');
});

