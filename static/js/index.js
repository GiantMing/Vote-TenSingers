$('.song-list-wrap').on('click', function(event) {
    var target = event.target;
    if($(target).hasClass('thumb') || $(target).hasClass('thumb_num')) {
        if($(target).hasClass('thumb')) $(target).addClass('thumb_clicked');
        event.stopPropagation();
    }
});

$(document).on('scroll', function () {
    var windowHeight = window.innerHeight,
        bodyHeight = document.body.offsetHeight,
        winScrollTop = document.body.scrollTop;

    var $song_fragment = $('.song_list').eq(0).clone();

    if (windowHeight + winScrollTop >= bodyHeight - 10) {
        $.post('url', {leght: $('.song_list').length}, function(res) {
            var data = JSON.parse(res);
            data.forEach(function(item, index, arr) {
                $song_fragment.find('#song_link').attr('href', item.link);
                $song_fragment.find('#singer_head').attr('src', item.singer_ehad);
                $song_fragment.find('#song_name').text(item.song_name);
            });
        });
    }
})