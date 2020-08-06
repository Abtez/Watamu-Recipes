$(document).ready(function(){
    $("button#bowl").click(function(){
        $("#brekporg").toggle();
    });
    $("button#porigshow").click(function(){
        $("#porig").toggle();
    });

    $("button#bbqingr").click(function(){
        $("#bbqsalad").toggle();
    });
    $("button#bbqsaladshow").click(function(){
        $("li#bbq").toggle();
    });

    $("button#dinnshow").click(function(){
        $("#diningr").toggle();
    });
    $("button#dinnershow").click(function(){
        $("li#dinprep").toggle();
    });
});
    
  