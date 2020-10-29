/*NAV MENU*/

$('.burgerIcon').hover(function() {
	//hover on
    TweenMax.to($('.burgerLine:first-child'), 0.2, { x: -10 });
    TweenMax.to($('.burgerLine:last-child'), 0.2, { x: 10 });
}, function() {
	//hover off
    TweenMax.to($('.burgerLine:first-child'), 0.2, { x: 0 });
    TweenMax.to($('.burgerLine:last-child'), 0.2, { x: 0 });
});


let tlmenu = new TimelineMax( {paused : true} );
tlmenu.to($('nav'), 0.3, { autoAlpha: 1})
		.staggerFromTo($('nav li'), 0.5, {y : 100 , opacity: 0}, {y : 0, opacity: 1}, 0.2);

$('.burgerIcon').on('click', function(){
	tlmenu.play(0);


});
$('.closeButton').on('click', function(){
	tlmenu.reverse(0);

});

/*END NAV MENU*/

/*HERO SECTION - MAIN SLIDER*/
/*TweenMax.to($('#hero h1'), 1, { y : -50 , opacity:1 });*/
TweenMax.fromTo($('#hero h1'), 0.6, { y : 80 , opacity : 0 }, {y : 0, opacity : 1, delay : 1});
TweenMax.fromTo($('#hero .learnMoreButton'), 0.6, { y : 80 , opacity : 0 }, {y : 0, opacity : 1, delay : 2, ease : Back.easeOut});
/*END HERO SECTION - MAIN SLIDER*/


/*FOUR COLUMN SECTION*/
$('.fourColItem').hover(function(){
	TweenMax.to($(this), 0.5, {y:-10, scale : 1.03});
	TweenMax.to($(this), 0.5, {boxShadow: '0 0 20px rgba(0,0,0,0.36)'});
}, 
function(){
	TweenMax.to($(this), 0.5, {y: 0, scale : 1});
	TweenMax.to($(this), 0.5, {boxShadow: '0 0 20px rgba(0,0,0,0.06)'});
})
/*END FOUR COLUMN SECTION*/
/*SERVICE SECTION*/

TweenMax.set($('.serviceBoxInner'), {y: -200, opacity : 0});

$('.serviceBox').hover(function(){
	TweenMax.to($(this).find('.serviceBoxInner'), 0.5, {y: 0, opacity : 1});
}, function(){
	TweenMax.to($(this).find('.serviceBoxInner'), 0.5, {y: -200, opacity : 0});
});

/*END SERVICE SECTION*/
TweenMax.to($('.cogLeft'), 5, {rotation: 360, repeat: -1, ease: Linear.easeNone});
TweenMax.to($('.cogRight'), 5, {rotation: -360, repeat: -1, ease: Linear.easeNone});
/*cogs section*/

/*end cogs section*/