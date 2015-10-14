$(function(){

 
 $("#plus").click(function(){
        var $n = $("#count");
        $n.val( Number($n.val())+1 );
    });

 $("#moins").click(function(){
        var $n = $("#count");
        $n.val( Number($n.val())-1 );
    });
});