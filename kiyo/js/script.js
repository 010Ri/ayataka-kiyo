window.onload = function() {
    const loading = document.getElementById('loading');
    loading.classList.add('loaded');
}

document.addEventListener("scroll", (event) => {
	ScrollAnime();
});

var position = 0;

//スクロール途中でヘッダーが消え、上にスクロールすると復活する処理
function ScrollAnime() {
    // #slideの位置まできたら
    var elemTop = $('#slide').offset().top;
	var scroll = $(window).scrollTop();
    // ヘッダーを出し入れ
    if(scroll == position) {
		// IE11対策
    }else if(elemTop > scroll || 0 > scroll - position){
		//ヘッダーが上から出現
		$('header').removeClass('UpMove');	
		$('header').addClass('DownMove');
    }else {
		//ヘッダーが上に消える
        $('header').removeClass('DownMove');
		$('header').addClass('UpMove');
    }
    
    position = scroll;
    console.log(position);
}


// サムネイル
const swiperThumbnail = new Swiper(".swiper-thumbnail", {
    spaceBetween: 10, // スライド間の余白
    slidesPerView: 3, // 一度に表示するスライド枚数
    watchSlidesProgress: true, // スライダーの動きにスライドを追従させる
});

// スライダー
const slider = new Swiper(".slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: true,
    loop: true,
    thumbs: {
        swiper: swiperThumbnail, // 連動したいスライダーの指定（swiperThumbnail）
    },
});