$('.song-list-wrap').on('click', function(event) {
    var target = event.target;
    if($(target).hasClass('thumb') || $(target).hasClass('thumb_num')) {
        $(target).addClass('thumb_clicked');
        event.stopPropagation();
        console.log(84793849);
        return false;
    }
});