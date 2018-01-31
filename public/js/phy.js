$(function(){
var smoothScroll = function(){ $('.smooth').on('click', function() {
     $.smoothScroll({
             scrollElement: $('body'),
             scrollTarget: '#' + this.id
         });
     
     return false;
   });
};
smoothScroll();

var backScroll = function(){

  $(document).scroll(function(){
     if( $(document).scrollTop() >= $('#home').position().top ){
        $('body').removeClassRegEx(/\-back*/);
        $('body').addClass('gray-back');
        $('nav a').removeClass('active')
     }
     if( $(document).scrollTop() >= $('#dot-product').position().top  ){
        $('body').removeClassRegEx(/\-back*/);
        $('body').addClass('fire-back');
        $('nav a').removeClass('active');
        $('nav a.dot-product').addClass('active');
     }
     if( $(document).scrollTop() >= $('#cross-product').position().top  ){
        $('body').removeClassRegEx(/\-back*/);
        $('body').addClass('ocean-back');
        $('nav a').removeClass('active')
        $('nav a.cross-product').addClass('active');
     }
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
