//절차지향프로그래밍
var doc = document;
var img = doc.getElementById('poster').getElementsByTagName('img');
var container = doc.getElementById('poster');
var count = img.length;

// [img, img, img, img, img, img, img]

doc.getElementById('hor').addEventListener('click',horizontal);
doc.getElementById('ver').addEventListener('click',vertical);
doc.getElementById('ran').addEventListener('click',random);
doc.getElementById('grid').addEventListener('click',grid);

//가로 정렬
function horizontal(){
    for (var i=0; i<count; i++){
        var move = i*200;
        img[i].style.left = move +'px';
        img[i].style.top = 0;
    }
}

//세로정렬
function vertical(){
     for (var i=0; i<count; i++){
        var move = i*270;
        img[i].style.top = move +'px';
        img[i].style.left = 0;
    }
}

//랜덤정렬
function random(){
   for (var i=0; i<count; i++){
    var sortLeft = Math.random() * 200 + 1;
    var sortTop = Math.random() * 270 + 1;
    img[i].style.left = sortLeft +'px';
    img[i].style.top = sortTop +'px';
 }
}
//바둑판정렬
function grid(){
//    var num = 0;
//    console.log(num*200)
    for (i=0;i<count;i++){
    var cou=3;
//      num++;
//    if (num >=2){
//        num=0;
//    }
//        
    var leftMove = (i%cou) *200;    
    var topMove = parseInt(i/cou) *270; //소수의 정수화
        
        
//혼자        
//          var leftMove = i*200 ;
//          var topMove = i*270 ;
         img[i].style.left = leftMove +'px';
//            for(i=1;i<count;i++){
             img[i].style.top = topMove +'px';
//             
//        }
    }
      //  container.style.width = "600px"
      //  img.style.position = "relative"
}