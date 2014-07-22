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