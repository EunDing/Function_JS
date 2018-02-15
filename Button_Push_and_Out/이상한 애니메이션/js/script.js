//슬라이드
/*
1. CSS Animation -> 자동슬라이드(컨트롤이 없음)
2. 자바스크립트로 슬라이드 구현
3. 제이쿼리 
4. 플러그인
*/

//자바스크립트 이미지 슬라이드 구현 (setInterval)
//절차지향프로그래밍 (선호하는 방식은 아니다.)
//나열하는 구조의 개발 방식
//선택자와 기능을 분리 시킨다.
//변수는 스네이크, 카멜은 함수할 떄 보통 사용
//선택자

//시작버튼
var doc = document;
var next_btn = doc.getElementById('next');
var item = doc.querySelector('.item');
var circle = doc.querySelector('.page').getElementsByTagName('div');
var slidePos = 0;
var distance = 700; //슬라이스 이동거리 (한개당)
var nowPos = 0; //현재 슬라이드가 있는 위치
var pageCount=1; 
//이전버튼
var prev_btn = doc.getElementById('prev');
//시작버튼
var play_btn = doc.getElementById('play');
//정지버튼
var pause_btn = doc.getElementById('pause');
//고도화
var slideCount = item.getElementsByTagName('li').length//슬라이드 객체의 개수 ==li
var lastSlide = -(distance*(slideCount-1));

//동작
next_btn.addEventListener('click', nextSlide);
prev_btn.addEventListener('click', prevSlide);
play_btn.addEventListener('click', playSlide);
pause_btn.addEventListener('click', pauseSlide);


//기능 ( 함수 )
 //다음 버튼 누를 때 실행하는 함수
function nextSlide(){
    if ( pageCount < slideCount ){ //-2800px보다 큰 값이면 작동시켜라.
         nowPos = nowPos - distance; //슬라이드 끝나면 있어야 할 위치
        pageCount++;
        console.log(pageCount);
        
    var move = setInterval(function(){ //10ms마다 실행시켜라
         slidePos = slidePos - 10; //translateX -10만큼 이동된다.
        
        if (slidePos <= nowPos ){ //trnaslate 이동값이 현재 슬라이드 값과 같으면
            clearInterval(move);   //정지시켜라
            circle[pageCount-1].classList.add('active');
            circle[pageCount-2].classList.remove('active');
        }
        item.style.transform = 'translateX('+slidePos+'px)';
    },10);
        
    } else {
        var move = setInterval(function(){
            slidePos = slidePos + 20;
            if (slidePos >=0){
                clearInterval(move)
                nowPos = 0; 
                pageCount =1;
                circle[0].classList.add('active');
                circle[circle.length -1].classList.remove('active');
            }
             item.style.transform = 'translateX('+slidePos+'px)';
        },5);
       
    }
//    다음 버튼 누르면 이동
//    slidePos = slidePos - 700;
//    
//    if (slidePos < -2800){
//        slidePos = 0;
//    }
//    item.style.transform = 'translateX('+slidePos+'px)';
}

//이전버튼
function prevSlide(){
    if ( slideCount > 1 ){ //-2800px보다 큰 값이면 작동시켜라.
         pageCount--;
         nowPos = nowPos + distance; //슬라이드 끝나면 있어야 할 위치
        console.log(pageCount);
        
    var move = setInterval(function(){ //10ms마다 실행시켜라
         slidePos = slidePos + 10; //translateX -10만큼 이동된다.
        
        if (slidePos >= nowPos ){ //trnaslate 이동값이 현재 슬라이드 값과 같으면
            clearInterval(move);   //정지시켜라
            circle[pageCount-1].classList.add('active');
            circle[pageCount].classList.remove('active');
                
        }
        item.style.transform = 'translateX('+slidePos+'px)';
    },10);
        
    } 
    else {
        var move = setInterval(function(){
            slidePos = slidePos - 20;
            if (slidePos <= lastSlide){
                clearInterval(move)
                nowPos = lastSlide; 
                pageCount = slideCount;
                circle[circle.length-1].classList.add('active');
                circle[0].classList.remove('active');
            }
             item.style.transform = 'translateX('+slidePos+'px)';
        },5);
       
    }
}

function playSlide(){
    auto=setInterval(nextSlide,3000);
};

function pauseSlide(){
     clearInterval(auto);
};




