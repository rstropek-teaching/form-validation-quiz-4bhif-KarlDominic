"use strict";
var isFName = false;
var isLName = false;
var isEmail = false;
$('#emailMandatory').hide();
$('#otherMediaChannel').hide();
$('#firstName').keyup(function () {
    if ($('#firstName').val()) {
        $('#firstNameMandatory').hide();
        isFName = true;
    }
    else {
        $('#firstNameMandatory').show();
        isFName = false;
    }
});
$('#lastName').keyup(function () {
    if ($('#lastName').val()) {
        $('#lastNameMandatory').hide();
        isLName = true;
    }
    else {
        $('#lastNameMandatory').show();
        isFName = false;
    }
});
$('#newsletter').click(function () {
    if (!$('#newsletter').is(':checked') && !$('#email').val()) {
        $('#emailMandatory').hide();
    }
    else if ($('#newsletter').is(':checked') && !$('#email').val()) {
        $('#emailMandatory').show();
        $('#email').keyup(function () {
            if ($('#email').val()) {
                $('#emailMandatory').hide();
                isEmail = true;
            }
        });
        isEmail = false;
    }
});
$('#mediaChannelSelect').change(function () {
    $('#mediaChannelSelect option:selected').each(function () {
        var str = "";
        str += $(this).text();
        if (!str.localeCompare('Other')) {
            $('#otherMediaChannel').show();
        }
        else {
            $('#otherMediaChannel').hide();
        }
    });
});
if (isFName && isLName && isEmail) {
    $('form').on('click', 'button.btn btn-primary', function () {
        $('button').hide();
    });
}
