var doc = document;

function productList(imgPos,productName){
    
    var product = doc.getElementById('product');
    var title = doc.getElementById('title');
    
    product.style.backgroundPosition=imgPos;
    title.innerHTML = productName;
}

var productArr = [
   {pos : '0px', tit : 'menu1'},
    {pos : '-250px', tit : 'menu2'},
    {pos : '-500px', tit : 'menu3'},
     {pos : '-750px', tit : 'menu4'}
]

doc.getElementById('menu1').addEventListener('click',function(){
    productList(productArr[0].pos, productArr[0].tit);
});

//doc.getElementById('menu2').addEventListener('click',function(){
//    var pro = {pos : '-250px', tit : 'menu2'}
//    productList(pro.pos, pro.tit);
//});

doc.getElementById('menu2').addEventListener('click',function(){
    productList(productArr[1].pos, productArr[1].tit);
});

doc.getElementById('menu3').addEventListener('click',function(){
    var pos = '-500px';
    var tit = 'menu3';
    productList(pos,tit);
});

doc.getElementById('menu4').addEventListener('click',function(){
    var pos = '-750px';
    var tit = 'menu4';
    productList(pos,tit);
});