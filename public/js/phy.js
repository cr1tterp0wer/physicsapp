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
jQuery.fn.arrEqual = function(array){
  
  if (! Array.isArray( array ) ){
    return false;
  }
  else if ( this.length != array.length ){
    return false;
  } 

  for( var i = 0; i < array.length; i++ ){
    if ( array[i] != this[i] )
      return false;
  }

  return true;
}
//
// Page JS
var attachDotForm = function(){
  
  var result1 = [];
  var result2 = [];

  var dotpoduct;
 $('form#dot-p-form').on('submit', function(e){
    e.preventDefault();
    result1[ 0 ] = $( this ).find(".vect1 input[name='x1']").val();
    result1[ 1 ] = $( this ).find(".vect1 input[name='y1']").val();
    result1[ 2 ] = $( this ).find(".vect1 input[name='z1']").val();
    
    result2[ 0 ] = $( this ).find(".vect2 input[name='x2']").val();
    result2[ 1 ] = $( this ).find(".vect2 input[name='y2']").val();
    result2[ 2 ] = $( this ).find(".vect2 input[name='z2']").val();

    dotproduct = dotProduct( result1, result2 );
    $( this ).find("div#dot-product-result p").text( dotproduct );
  });
};

var attachCrossForm = function(){
  var result1 = [];
  var result2 = [];
  var crossproduct = [];

 
 $('form#cross-p-form').on('submit', function(e){
   e.preventDefault();
    result1[ 0 ] = parseInt($( this ).find(".vect1 input[name='x1']").val());
    result1[ 1 ] = parseInt($( this ).find(".vect1 input[name='y1']").val());
    result1[ 2 ] = parseInt($( this ).find(".vect1 input[name='z1']").val());
    
    result2[ 0 ] = parseInt($( this ).find(".vect2 input[name='x2']").val());
    result2[ 1 ] = parseInt($( this ).find(".vect2 input[name='y2']").val());
    result2[ 2 ] = parseInt($( this ).find(".vect2 input[name='z2']").val());
    
     crossproduct = crossProduct(result1, result2);
     console.log(crossproduct);
     console.log(result1);
     console.log(result2);
     $( this  ).find("div#cross-product-result p").text( crossproduct );
 
 });


};

//PageScroll
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

var getScrollDelta = function(){
  return 1 - ( ($(document).height() - $(document).scrollTop()
         - $(window).height()) / ($(document).height() 
         - $(window).height())  ); 
}

var smoothScroll = function(){ $('.smooth').on('click', function() {
     $.smoothScroll({
             scrollElement: $('body'),
             scrollTarget: '#' + this.id
         });     
     return false;
   });
};

//
// Arrays a, b to hold 3 fields (x,y,z)
//
var dotProduct = function( a, b ){
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};

//
// Arrays a, b to hold 3 fields (x,y,z)
//
var crossProduct = function( a, b ){
  //find theta between angle
  
  //mag(a) * mag(b) cos( theta );
  return [
          ( ( a[1] * b[2] ) - ( a[2] * b[1] ) ),  
          ( ( -1 ) * ( ( a[0] * b[2] ) - ( b[0] * a[2] ) ) ),
          ( ( a[0] * b[1] ) - (  ( b[0]   *  a[1]  )  ) )
          ]

};

// Get Magnitude
// @ a=[x,y,z]
// Accurate to 2 Decimals
var getMagnitude = function( a ){
  return Math.sqrt( Math.pow( a[0], 2 ) + 
         Math.pow( a[1], 2 ) + 
         Math.pow( a[2], 2 ) ).toFixed(2);
};

//////// CALLS
$(function(){
  smoothScroll();
  backScroll();
  attachDotForm();
  attachCrossForm();
});




//TESTS
var testArrEqual     = function(){
  var a = [ 1, 2, 3 ]
  var b = [ 1, 2, 3 ]
  var c = [ 5, 6, 7 ]
  var d = [1,2,3,4,5,6]

  console.log( $(a).arrEqual(b) );
  console.log( $(b).arrEqual(b) );
  console.log( $(c).arrEqual(b) );
  console.log( $(d).arrEqual(b) );
  console.log( $(34).arrEqual(b) ); 
}

var testCrossProduct = function(){
  var a = [ 1, 2, 3 ];
  var b = [ 4, 5, 6 ];
  var res = crossProduct( a, b );
  return  $(res).arrEqual( [ -3, 6, -3 ] );
}

var testMagnitude = function(){
    var a = [ 1, 2, 3 ];
    console.log( getMagnitude( a ) == 3.74 );
    return getMagnitude( a ) == 3.74;
};




