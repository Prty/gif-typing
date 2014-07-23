(function () {

	var textArea = [],
		textAreaLength = 0,
		pictypeArea = $('.pictype-chararea');

	$('.textarea').on('input', function (e) {
		var currentString = $(this).val();
		var currentStringArray = $(this).val().split('');
		var lastChar = currentStringArray[currentStringArray.length - 1];
		var badChar = ['`','1','2','3','4','5','6','7','8','9','0','-','=','[',']',';','.','/','!','@','#','$','%','^','&','*','(',')','_','+','{','}',':','"','<','>','?',"'"];
		var inArray = isInArray(lastChar, badChar);
	


		if (lastChar === ' ') {
			var elementToAppend = '<div class="pictype-char ' + lastChar + '"></div>';
		} else if (inArray) {
			var elementToAppend ='';
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

		$('.pictype-char').on('click', function (e) {
			var currentCharClass = $(this).context.className.split(' ')[1];
			console.log($(this).children(':first-child').attr('src', 'assets/gif-font/eiji/' + currentCharClass + '.gif?id=' + Math.random()));
		});
	});

	function isInArray(value, array) {
      return array.indexOf(value) > -1;
    }

    var length = $('.textarea').val.length;
    console.log(length);

})();


