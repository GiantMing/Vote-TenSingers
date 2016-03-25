$('.weui_input').on('focus', function() {
    $('.weui_cell').removeClass('weui_cell_warn');
    if($(this).val() === '请输入') $(this).val('');
});



$('#submit-btn').on('click', function() {
    $('.weui_cell').each(function(index, item) {
        if($(item).find('input').val() === '') {
            $(this).addClass('weui_cell_warn');
            $(item).find('input').val('请输入');
        }
    });
});