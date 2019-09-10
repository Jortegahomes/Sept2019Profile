//<div id="pixlee_container"></div><script type="text/javascript">window.PixleeAsyncInit = function() {Pixlee.init({apiKey:'d6836UaUv6qOsOGzVFux'});Pixlee.addSimpleWidget({widgetId:'20171'});};</script><script src="//instafeed.assets.pixlee.com/assets/pixlee_widget_1_0_0.js"></script>



$(document).ready(function(){
    $('.header').height($(window).height());
    
   })

   $(".navbar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
   })