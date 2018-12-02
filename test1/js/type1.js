$(document).ready(function() {

    
    $items = $("#slider ui li.item");

    var currentIndex = 2;
    var imgCount = $items.length;
    
    if (currentIndex >= imgCount) {
        currentIndex = 0;
    }
    //모든이미지에 active 클래스를 제거한다
    setInterval(function() {
        $items.removeClass('active');
        $items.eq(currentIndex++).addClass('active');
        
    }, 1000);
});