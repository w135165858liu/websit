;(function($){
    /**鼠标放上去的效果 */
    function addActive(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    }
    function removeActive(){
        $(this).removeClass('active')
    }
    $('.top-nav ul .top-nav-item').on('mouseenter',addActive);
    $('.top-nav ul .top-nav-item').on('mouseleave',removeActive);
    /**点击楼层按钮 */
    $('#elevator .elevator-item').on('click',addActive);
    
})(jQuery)