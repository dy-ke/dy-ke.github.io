var amount = 50;
var sky = $('.sky');

for(var i = 0; i < amount; i++) {
    var star = $('<div class="star-blink"><div></div></div>');
    star.css({
        'top': Math.random() * 100 + '%',
        'left': Math.random() * 100 + '%',
        'animation': 'blinkAfter 15s infinite ' + Math.random() * 100 + 's ease-out',
        'width': Math.random() * 2 + 7 + 'px',
        'height': Math.random() * 2 + 7 + 'px',
        'opacity': Math.random() * 5 / 10 + 0.5
    });
    sky.append(star);
}

function show_tip(text) {
    $('.shortcuts-box').show();
    $('#shortcuts-info').html(text);
    setTimeout(function () {
        $('.shortcuts-box').fadeOut(1000);
    }, 2000);
}
  
if ($('.share-btn').length > 0) {
    var clipboard = new ClipboardJS('.share-btn');
    clipboard.on('success', function (e) {
        show_tip('最新地址复制成功，可分享给好朋友一起看~！');
    });
    clipboard.on('error', function (e) {
        console.log(e);
    });
}