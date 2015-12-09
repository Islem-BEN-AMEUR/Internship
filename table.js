$(document).ready(function () {

    (function ($) {

        $('#filter').keyup(function () {

            var rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
			
                return rex.test($(this).text());
            }).show();
			
        })

    }(jQuery));

});
function control_form()
{
if(document.getElementById('filter').value=='')
{
   location.reload();
   return false;
} else return true;
}