var jQ = jQuery.noConflict();
jQ(document).ready(function($){
  $(document).foundation();
  $('body').addClass('is-ready');
  
  $('#fullpage').fullpage({
    fixedElements: '#header',
    navigation: true,
    normalScrollElementTouchThreshold: 2,
    css3: true,
    menu: '#menu-stream',
    responsiveWidth: 801,
    responsiveHeight: 601,
    scrollingSpeed: 1000,
    bigSectionsDestination: 'top',
    slidesNavigation: false,
    afterLoad: function(origin, index, destination, direction){
      if ( index == 2 || index == 3 ) { 
        $('#fp-nav ul li:nth-child(2), #fp-nav ul li:nth-child(3)').addClass('same-section')
      }else {
        $('#fp-nav ul li:nth-child(2), #fp-nav ul li:nth-child(3)').removeClass('same-section')
      }
      if ( index == 5 || index == 6 || index == 7 ) { 
        $('#fp-nav ul li:nth-child(5), #fp-nav ul li:nth-child(6), #fp-nav ul li:nth-child(7)').addClass('same-section')
      }else {
        $('#fp-nav ul li:nth-child(5), #fp-nav ul li:nth-child(6), #fp-nav ul li:nth-child(7)').removeClass('same-section')
      }

    },
    onLeave: function (index, nextIndex, direction) {
      var leavingSection = this;
      if ( nextIndex == 2 || nextIndex == 3 ) { 
        $('#fp-nav ul li:nth-child(2), #fp-nav ul li:nth-child(3)').addClass('same-section')
      }else {
        $('#fp-nav ul li:nth-child(2), #fp-nav ul li:nth-child(3)').removeClass('same-section')
      }
      if ( nextIndex == 5 || nextIndex == 6 || nextIndex == 7 ) { 
        $('#fp-nav ul li:nth-child(5), #fp-nav ul li:nth-child(6), #fp-nav ul li:nth-child(7)').addClass('same-section')
      }else {
        $('#fp-nav ul li:nth-child(5), #fp-nav ul li:nth-child(6), #fp-nav ul li:nth-child(7)').removeClass('same-section')
      }

      if ( nextIndex == 3 ) {
        $('#menu-stream li[data-menuanchor="intro"] a').addClass('active-by-js')
      } else if (nextIndex != 3) {
        $('#menu-stream li[data-menuanchor="intro"] a').removeClass('active-by-js')
      }
      if ( nextIndex == 6 || nextIndex == 7 ) {
        $('#menu-stream li[data-menuanchor="cloud-gaming"] a').addClass('active-by-js')
      } else if ( nextIndex != 6 || nextIndex != 7 ) {
        $('#menu-stream li[data-menuanchor="cloud-gaming"] a').removeClass('active-by-js')
      }
    }
  });
})