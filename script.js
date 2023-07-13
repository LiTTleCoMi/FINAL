$('.comments-container').on('mouseover', 'input[type="submit"]', function() {
    $(this).css('cursor', 'pointer');
});

$('.comments-container').on('click', '.edit', function() {
    if($(this).val() === 'edit') {
        $(this).attr('value', 'cancel')
    }
    else {
        $(this).attr('value', 'edit')
    }
    let container = $(this).closest('.comments');
    container.find('.comment-edit, .submit-edit').toggle();
    let comment = container.find('.comment').text();
    $('.comment-edit').val(comment);
});

$('.comments-container').on('click', '.submit-edit', function() {

    if($('.comment-edit').val().trim().length === 0) {
        $('.comment-edit').attr('placeholder', 'Please type your edited comment.').addClass('placeholder-red');
    }

    if($('.comment-edit').val().trim().length > 0) {
        let comment = $('.comment-edit').val();
        let container = $(this).closest('.comments');
        container.find('.comment-edit').toggle();
        $(this).toggle();
        container.find('.comment').text(`${comment}`);
        $('.comment-edit').attr('placeholder', 'Comment').removeClass('placeholder-red');
        $('.edit').attr('value', 'edit');
    }

});

 //--------------------------------------------------------
//--------------------------------------------------------
$('.comments-container').on('click', '.delete', function() {
    let comments = $(this).closest('.comments');
    comments.remove();
});

$('.submit').on('click', function() {

    if($('.display-input').val().trim().length === 0) {
        $('.display-input').attr('placeholder', 'Please enter a display name.').addClass('placeholder-red');
    }
    if($('.comment-input').val().trim().length === 0) {
        $('.comment-input').attr('placeholder', 'Please type your comment.').addClass('placeholder-red');
    }

    if ($('.display-input').val().trim().length > 0 && $('.comment-input').val().trim().length > 0) {
        let displayName = $('.display-input').val();
        let comment = $('.comment-input').val();

        $('.comments-container').prepend(`
            <div class="comments">
                <input type="submit" value="edit" class="edit">
                <input type="submit" value="delete" class="delete">
                <p class="user">${displayName}</p>
                <p class="comment">${comment}</p>
                <input type="text" placeholder="Comment" class="comment-edit">
                <input type="submit" class="submit-edit"></input>
            </div>
        `);

        $('.display-input').val('');
        $('.comment-input').val('');
        $('.display-input').attr('placeholder', 'Display Name').removeClass('placeholder-red');
        $('.comment-input').attr('placeholder', 'Comment').removeClass('placeholder-red');
        $('.comments-container').css('padding-top', '20px');
    }
    
    if($('.comments-container').find('div.comments').length > 4) {
        $('.comments-container').css('padding-bottom', '94.5px');
    }

    return false;
});