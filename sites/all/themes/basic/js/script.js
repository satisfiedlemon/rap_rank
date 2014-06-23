(function($){
  $(document).ready(function() {

    var $tmp = $(window);
    $tmp.add('test', $('#block-views-test_block-block'));
    $tmp.test;

    $tmp.background = $('body');
    $tmp.scaling = 0.8;

    $tmp.speed = 800;
    $tmp.easing = 'swing';

    /*
    parallax.add('test', $('#block-views-test_block-block'));
    parallax.test;

    parallax.background = $('body');
    parallax.scaling = 0.4;

    parallax.speed = 800;
    parallax.easing = 'swing';

    */

    /*
     *  Moving the page on menu item click
     *
     */
    function scrollHome() {
      $('html, body').animate({
        scrollTop: $('#navigation').offset().top
      }, 800);
    }

    function scrollAbout() {
      $('html, body').animate({
        scrollTop: $('#block-views-top_artists-block').offset().top
      }, 800);
    }

    function scrollServices() {
      $('html, body').animate({
        scrollTop: $('#block-views-mathcup_left-block').offset().top
      }, 800);
    }

    function scrollLinks() {
      $('html, body').animate({
        scrollTop: $('#block-views-matchup_right-block').offset().top
      }, 800);
    }

    function scrollContacts() {
      $('html, body').animate({
        scrollTop: $('#block-views-contacts-block_1').offset().top
      }, 800);
    }

    /* Click on Home */
    $('.menu-218').click(function(e) {
      e.preventDefault();
      scrollHome();
    });

    /* Click on About Us */
    $('.menu-483').click(function(e) {
      e.preventDefault();
      scrollAbout();
    });

    /* Click on Our Services */
    $('.menu-482').click(function(e) {
      e.preventDefault();
      scrollServices();
    });

    /* Click on Links */
    $('.menu-437').click(function(e) {
      e.preventDefault();
      scrollLinks();
    });

    /* Click on Contacts */
    $('.menu-438').click(function(e) {
      e.preventDefault();
      scrollContacts();
    });

  });
})(jQuery);