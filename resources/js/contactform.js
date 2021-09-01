import $ from 'jquery';

var triggerButton = document.getElementById('trigger');
triggerButton.addEventListener('click', function () {
    $('.js-input').keyup(function () {
        if ($(this).val()) {
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    });
});


