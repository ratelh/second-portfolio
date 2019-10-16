var $header = $('header'),
   $window = $(window),
   menuBtn = $('.header_menu_btn'),
   menu = $('nav'),
   $resMenu = $('nav > ul > li'),
   $video = $('.main_banner_video');

//header stick
$window.scroll(function () {
   if ($(this).scrollTop() > 0) {
      $header.addClass('sticky');
   } else {
      $header.removeClass('sticky');
   }
});

//menu btn change
menuBtn.click(function () {
   $(this).toggleClass('active');
   menu.toggleClass('active');
   if(!menu.hasClass('active')){
      $resMenu.removeClass('active');
   }
});

//asdie menu responsive list

$resMenu.click(function(){
      $(this).toggleClass('active').siblings().removeClass('active');
});



var $ratio = window.devicePixelRatio;
      
   if (Modernizr.touchevents || $ratio >=2) {
      $video.find('video').hide();
      $video.addClass('show');
   }

//video background
$window.resize(function () {
   var $this = $(this),
      windowHeight = $this.height(),
      windowWidth = $this.width(),
      videoRatio = 1920 / 1080,
      windowRatio = windowWidth / windowHeight;
   if (videoRatio > windowRatio) {
      $video.css({
         width: videoRatio * windowHeight,
         height: '100%',
         left: (windowWidth - videoRatio * windowHeight) / 2,
         top: 0
      });
   } else {
      $video.css({
         width: '100%',
         height: windowWidth / videoRatio,
         left: 0,
         top: (windowHeight - windowWidth / videoRatio) / 2
      });
   }
});
$window.trigger('resize');



//pager click event
var $pager = $('.pager a'),
   $contents = $('.pager_section');

$pager.click(function (e) {
   e.preventDefault();
   var section = $(this).attr('href');
   var sectionTop = $(section).offset().top;
   $('html,body').animate({
      scrollTop: sectionTop
   }, 500);
   $(this).addClass('on').siblings().removeClass('on');
});


$window.scroll(function(){
   $pager.each(function(){
   var section = $(this).attr('href');
   var sectionTop = $(section).offset().top-400;
   if($window.scrollTop()>=sectionTop){
      $pager.removeClass('on');
      $(this).addClass('on');
   }
   });
});
$pager.eq(0).trigger('click');

//counter animation
var trigger = false;
var counter = document.querySelector('.counter');

window.addEventListener('scroll', function () {
   var winSCT = document.documentElement.scrollTop;
   if (!trigger) {
      if (winSCT > counter.offsetTop - 700) {
         var target = document.querySelectorAll('.counter .counter_number');
         for (var i = 0; i < target.length; i++) {
            init(i);

            function init(x) {
               var num = 0;
               var timer = setInterval(function () {
                  num++;
                  target[x].innerHTML = num;
                  if (num == target[x].getAttribute('data-rate')) {
                     clearInterval(timer);
                  }
               }, 3);
            }
         }
         trigger = true;
      } //counter animation
   }
});

//scrollEffect profile
$window.scroll(function () {
   var sct = $window.scrollTop(),
      profile = $('.section_aboutus_profile'),
      offset = 900;

   if (sct > profile.offset().top - offset) {
      profile.addClass('active');
   } else {
      profile.removeClass('active');
   }
});

//sorting
var sortingMenu = $('.section_subsidiaries > p input'),
   sortingList = $('.section_subsidiaries ul li');

sortingMenu.click(function () {
   var userValue = '.' + $(this).val();
   sortingList.hide();
   sortingList.filter(userValue).fadeIn();
   if ($(this).val() == "all") {
      sortingList.fadeIn();
   }
});
sortingMenu.eq(0).trigger('click');

//stock btn
var container = $('.stockinfo_slide'),
   slideGroup = container.find('.stockinfo_slide_sub'),
   slides = slideGroup.find('>div'),
   controller = $('.stockinfo_slide_control a');

slides.each(function (i) {
   $(this).css({
      left: i * 100 + '%'
   });
});

controller.click(function (e) {
   e.preventDefault();
   if ($(this).hasClass('prev')) {
      slideGroup.animate({
         left: '0'
      });
   } else {
      slideGroup.animate({
         left: '-100%'
      });
   }
});

//tab menu
var tabList = $('.strategy > ul li a'),
   tabContent = $('.tabs-panel');

tabList.click(function (e) {
   e.preventDefault();
   tabList.removeClass('active');
   $(this).addClass('active');
   var tabLink = $(this).attr('href');
   tabContent.hide();
   $(tabLink).fadeIn(500);
});
tabList.eq(0).trigger('click');

//map
var map;
var marker;
function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
      center: {
         lat: 37.522230,
         lng: 126.922266
      },
      zoom: 15
   });
   marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {lat: 37.522230, lng: 126.922266},
      title: 'Korea Investment holdings'
    });
    marker.addListener('click', toggleBounce);
   }

function toggleBounce() {
 if (marker.getAnimation() !== null) {
   marker.setAnimation(null);
 } else {
   marker.setAnimation(google.maps.Animation.BOUNCE);
 }
}

//nav
var navList = $('.nav-wrapper ul'),
   mobileNavBtn = $('.m_btn');

   function mobileMenu(){
      if(navList.find('li').length==1){
         navList.css({'display':'block'});
         mobileNavBtn.css({'display':'none'});
         navList.find('li').css({position:'absolute',top:'-70px'});
      }else{
         navList.css({'display':'none'});
      }
   }
      $window.resize(function(){
         if($(this).width()>480){
            navList.css({'display':'flex'});
            navList.find('li').css({position:'static',top:'70px'});
         }else{
            navList.css({'display':'none'});
            mobileMenu();
            navList.find('li').css({position:'absolute',top:'-70px'});
         }
      });

      $window.trigger('resize');
      mobileNavBtn.click(function () {
         navList.find('li').css({position:'static',top:'70px'});
         mobileNavBtn.toggleClass('active');
         navList.stop().slideToggle(300);
      });
      
   
//back to top
var btt = $('.backtotop');

$window.scroll(function () {
   if ($window.scrollTop() > 2500) {
      btt.fadeIn();
   } else {
      btt.fadeOut();
   }
});

btt.click(function (e) {
   e.preventDefault();
   $('html,body').animate({
      scrollTop: 0
   }, 400);
});

//datepicker
if($( "#datepicker" ).length){
   $( "#datepicker" ).datepicker({
      showOn: "both", 
      buttonText: "<i class='fas fa-calendar-alt'></i>"
   });
   
}

//closebtn
$('.notice_closebtn').click(function(e){
   e.preventDefault();
   $(this).parent().hide();
});

//cookie
var currentCookie = document.cookie;
var cookieCheck = currentCookie.indexOf('portfolio2');
if(cookieCheck>-1){
   $('.notice').hide();
}else{
   $('.notice').show();
}
var date = new Date();

date.setDate(date.getDate() +7);

var setCookie = '';
setCookie += 'CookieName = portfolio2;';
setCookie += 'expires =' + date.toUTCString();

document.cookie = setCookie;

