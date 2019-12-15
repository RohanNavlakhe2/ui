$(document).on("keypress", function (key) {
    // use key.which
    let charOfKey=String.fromCharCode(key.which).toUpperCase();
    let audio=new Audio();
    let article;
    switch (charOfKey) {
        case 'A':
            /*  let a=document.querySelector('#article1');
           a.addEventListener('webkitAnimationEnd',function () {
               $('#a').removeClass('animated bounce');
            });*/
             article=$('article:nth-child(1)');
             article.addClass('animated bounce');
             article.on('animationend',function () {
             $(this).removeClass('animated bounce');
          });
             audio.src='sounds/clap.wav';
            audio.play();
            break;
        case 'S':
            article=$('article:nth-child(2)');
            article.addClass('animated bounce');
            article.on('animationend',function () {
                $(this).removeClass('animated bounce');
            });
            audio.src='sounds/hihat.wav';
            audio.play();
            break;
        case 'D':
            article=$('article:nth-child(3)');
            article.addClass('animated bounce');
            article.on('animationend',function () {
                $(this).removeClass('animated bounce');
            });
            audio.src='sounds/kick.wav';
            audio.play();
            break;
        case 'F':
            article=$('article:nth-child(4)');
            article.addClass('animated bounce');
            article.on('animationend',function () {
                $(this).removeClass('animated bounce');
            });
            audio.src='sounds/openhat.wav';
            audio.play();
            break;
        case 'G':
            article=$('article:nth-child(5)');
            article.addClass('animated bounce');
            article.on('animationend',function () {
                $(this).removeClass('animated bounce');
            });
            audio.src='sounds/boom.wav';
            audio. play();
            break;
        case 'H':
            article=$('article:nth-child(6)');
            article.addClass('animated bounce');
            article.on('animationend',function () {
                $(this).removeClass('animated bounce');
            });
            audio.src='sounds/ride.wav';
            audio.play();
            break;
        case 'J':
            article=$('article:nth-child(7)');
            article.addClass('animated bounce');
            article.on('animationend',function () {
                $(this).removeClass('animated bounce');
            });
            audio.src='sounds/snare.wav';
            audio.play();
            break;
        case 'K':
            article=$('article:nth-child(8)');
            article.addClass('animated bounce');
            article.on('animationend',function () {
                $(this).removeClass('animated bounce');
            });
            audio.src='sounds/tom.wav';
            audio.play();
            break;
        case 'L':
            article=$('article:nth-child(9)');
            article.addClass('animated bounce');
            article.on('animationend',function () {
                $(this).removeClass('animated bounce');
            });
            audio.src='sounds/tink.wav';
            audio.play();
            break;

    }

}) ;