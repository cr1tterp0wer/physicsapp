$(function(){
var smoothScroll = function(){ $('.smooth').on('click', function() {
     $.smoothScroll({
             scrollElement: $('body'),
             scrollTarget: '#' + this.id
         });
     
     return false;
   });
};
// smoothScroll();

var backScroll = function(){
   
  var blur    = 0; 
  var offset  = 0;
  var dotP    = $('#dot-product')
  var crossP  = $('#cross-product')
  var dotPscope   = $('.dot-product01')
  var crossPscope = $('.cross-product-triple') 
  var progress    = $('#scroll-progress');
    
  $(document).scroll(function(){

      //update Progress bar
     progress.width( $(document).width() * 
                     getScrollDelta() );

     if( $(document).scrollTop() >= $('#home').position().top &&
         $(document).scrollTop() <= $('#home').position().top + $('#home').height() ){
        $('body').removeClassRegEx(/\-back*/);
        $('body').addClass('gray-back');
        $('nav a').removeClass('active')
     }
     if( $(document).scrollTop() >= dotP.position().top  &&
         $(document).scrollTop() <= dotP.position().top + dotP.height() ){
        $('body').removeClassRegEx(/\-back*/);
        $('body').addClass('fire-back');
        $('nav a').removeClass('active');
        $('nav a.dot-product').addClass('active');

        offset =  dotPscope.height()/8;
        if(blur<0)
          blur=0;
        else{
          blur = dotPscope.position().top - $(document).scrollTop() - offset
          dotPscope.css('filter','blur(' + (blur/offset) + 'px)');
        }
     }
     if( $(document).scrollTop() >= crossP.position().top &&
         $(document).scrollTop() <= crossP.position().top + crossP.height() ){
        $('body').removeClassRegEx(/\-back*/);
        $('body').addClass('ocean-back');
        $('nav a').removeClass('active')
        $('nav a.cross-product').addClass('active');


        offset =  crossPscope.height()/8;
        if(blur<0){
          blur=0;
        }
        else{
          blur = crossPscope.position().top - $(document).scrollTop() - offset
         crossPscope.css('filter','blur(' + (blur/offset) + 'px)');
        }
     
     
     }

      //Menu
     if( $(document).scrollTop() >=(
       $('.masthead.mb-auto').position().top ) + $('.masthead.mb-auto').height()+50  ){
       $('nav.nav-masthead').addClass('fixed-top');
       $('nav.nav-masthead').addClass('p-3');
       $('nav.nav-masthead').removeClassRegEx(/\-bc/);
       $('nav.nav-masthead').addClass('charcoal-bc');
       $('.masthead-brand').hide();
     }else{
       $('nav.nav-masthead').removeClass('fixed-top')
       $('nav.nav-masthead').removeClass('p-3')
       $('nav.nav-masthead').removeClassRegEx(/\-bc/);
       $('.masthead-brand').show();
     } 
  });


    
};
backScroll();

var getScrollDelta = function(){

  return 1 - ( ($(document).height() - $(document).scrollTop()
         - $(window).height()) / ($(document).height() 
         - $(window).height())  ); 
}

// jQUERY addtions
jQuery.fn.removeClassRegEx = function(regex) {
  
    var classes = $(this)[0].className.split(" ")

    for (var i = 0; i < classes.length; i++){
      if (classes[i].match(regex)){
           classes[i] = "";
        }
    }
    classes = classes.join(" ")
    $(this)[0].className = classes

}

});
