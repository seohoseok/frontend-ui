$(document).ready(function() {

    $items = $("#slider ul li.item");

    var CurrentIndex = 2;
    var imgCount = $items.length;
    
    if (CurrentIndex >= imgCount) {
        CurrentIndex = 0;
    }
    //모든이미지에 active 클래스를 제거한다
    setInterval(function() {
        $items.removeClass('active');
        $items.eq(CurrentIndex++).addClass('active');
        
    }, 1000);
});