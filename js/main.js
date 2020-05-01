// 最初のトップ画面の表示
$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

let close = document.getElementsByClassName('nav-close');

if(
  document.querySelector('.open-menu').onclick = function(){
    h1.ClassName = 'nav-close';
  }
  
)





// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


//メニューのjquery

$(document).ready(function() {
  $('.open-menu').on('click', function() {
  $('.overlay').addClass('open');
  });
  
  $('.close-menu').on('click', function() {
  $('.overlay').removeClass('open');
  });
  });

// ------------------------------------------------------

//-------背景画像のスライド---------------------

  $(document).ready(function(){

    $("#theTarget").skippr();

   });    

//スライドここまでーーーーーーーーーーーーーーー

// slick用の画像スライドコード(PC用)
$('.images-test').slick({
  autoplay: true, //自動再生
  centerMode: true,
  slidesToShow: 3,
});



// slick用の画像スライドコード(スマホ用)
$('.images-test').slick({
  autoplay: true, //自動再生
  centerMode: true,
  slidesToShow: 1,
});

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


//letterfixのコード
$(function() {
  $(".image-galally").letterfx({
    "fx": "spin"
  });
});

// ------------------------------------------



//letterfixのコード
$(function() {
  $(".ttitle").letterfx({
    "fx": "spin"
  });
});

// ------------------------------------------


