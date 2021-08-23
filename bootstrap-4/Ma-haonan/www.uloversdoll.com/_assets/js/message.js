$('#message_sub').click(function(){
    var Name = $('#Name').val();
    var Email = $('#Email').val();
    var Explain = $('#Explain').val();

    if(!Name){
        $("#message").html("<p class='font-red6'><i class='fas fa-exclamation-triangle mr-2'></i> please fill in all fields.</p>");
        $("#Name").focus();
        return false;
    }

    if(!Explain){
        $("#message").html("<p class='font-red6'><i class='fas fa-exclamation-triangle mr-2'></i> please fill in all fields.</p>");
        $("#Explain").focus();
        return false;
    }

    if(!Email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
    {
        $("#message").html("<p class='font-red6'><i class='fas fa-exclamation-triangle mr-2'></i> please fill in all fields.</p>");
        $("#Email").focus();
        return false;
    }

    $.post('/admin/MessageAction',
        {
            'name':Name,
            'email':Email,
            'explain':Explain
        },function(data){
            var html = "";
            if(data == "Thank you for your message. We will reply as soon as possible."){
                html ="<p class='font-green6'><i class='fas fa-check-circle mr-2'></i> Thank you for your message. We will reply as soon as possible.</p>";
            }
            $("#message").html(html); //在html页面id=test的标签里显示html内容
        })
});

