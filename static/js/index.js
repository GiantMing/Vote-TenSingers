$('.song-list-wrap').on('click', function(event) {
    var target = event.target;
    if($(target).hasClass('thumb') || $(target).hasClass('thumb_num')) {
        if($(target).hasClass('thumb')) $(target).addClass('thumb_clicked');
        event.stopPropagation();
    }
});