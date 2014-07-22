	


$('textarea').on("click", function(){
	setInterval ('cursorAnimation()', 1200);
});

	function cursorAnimation() {
    $('.cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
};


(function () {

	var textArea = [],
		textAreaLength = 0,
		pictypeArea = $('.pictype-area');

	$('.textarea').on('input',function(e) {
		var currentString = $(this).val();
		var currentStringArray = $(this).val().split('');
		var lastChar = currentStringArray[currentStringArray.length - 1];

		if (lastChar === ' ') {
			var elementToAppend = '<div class="pictype-char ' + lastChar + '"></div>';
		} else {
			var elementToAppend = '<div class="pictype-char ' + lastChar + '"><img src="assets/gif-font/eiji/' + lastChar + '.gif?id=' + Math.random() + '"/></div>';
		}
		
		if (currentStringArray.length > textAreaLength ) {
			pictypeArea.append(elementToAppend);
			textAreaLength = currentStringArray.length;
		} else {
			console.log($('.pictype-char').last());
			$('.pictype-char').last().remove();
			textAreaLength = currentStringArray.length;
		}
	});
})();





	






// 	var captionLength = 0;
// 	var caption = '';


// $(document).ready(function() {
//     setInterval ('cursorAnimation()', 600);
//     captionEl = $('#caption');
    
//     $('#test-typing').click(function(){
//         testTypingEffect();
//     });

//     $('#test-erasing').click(function(){
//         testErasingEffect();
//     });
// });

// function testTypingEffect() {
//     caption = $('input#user-caption').val();
//     type();
// }

// function type() {
//     captionEl.html(caption.substr(0, captionLength++));
//     if(captionLength < caption.length+1) {
//         setTimeout('type()', 50);
//     } else {
//         captionLength = 0;
//         caption = '';
//     }
// }

// function testErasingEffect() {
//     caption = captionEl.html();
//     captionLength = caption.length;
//     if (captionLength>0) {
//         erase();
//     } else {
//         $('#caption').html("You didn't write anything to erase, but that's ok!");
//         setTimeout('testErasingEffect()', 1000);
//     }
// }

// function erase() {
//     captionEl.html(caption.substr(0, captionLength--));
//     if(captionLength >= 0) {
//         setTimeout('erase()', 50);
//     } else {
//         captionLength = 0;
//         caption = '';
//     }	
// }

// function cursorAnimation() {
//     $('#cursor').animate({
//         opacity: 0
//     }, 'fast', 'swing').animate({
//         opacity: 1
//     }, 'fast', 'swing');
// }


