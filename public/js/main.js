(function () {
	// Inits the click handler for the text area when the user clicks the page
	$(document).on('click', function () {
		// automatically focuses the textarea when the user clicks
		$('.textarea').focus();
	});

	// array that will keep track of the letters pressed
	var textArea = [],
		textAreaLength = 0,
		pictypeArea = $('.pictype-chararea'),
		elementToAppend;

	// when text is inputed onto the field runs function
	$('.textarea').on('input', function (e) {
		// checks letter key pressed
		var currentString = $(this).val();

		// creates an array in which to access the different letters
		var currentStringArray = $(this).val().split('');

		// last character inputted
		var lastChar = currentStringArray[currentStringArray.length - 1];
		
		// characters that are omitted from pictype
		var badChar = ['`','1','2','3','4','5','6','7','8','9','0','-','=','[',']',';','.','/','!','@','#','$','%','^','&','*','(',')','_','+','{','}',':','"','<','>','?',"'"];
		
		// returns the invalid letters fro the array
		var inArray = isInArray(lastChar, badChar);
	

		// if the inputted key is a space bar take out the image tag
		if (lastChar === ' ') {
			var elementToAppend = '<div class="pictype-char ' + lastChar + '"></div>';
		} else if (inArray) {
			// does not append content
			var elementToAppend ='';
		} else {
			console.log(lastChar)
			// appends the image related to the key, creates a custom time id so that the gif doesnt repeat
			elementToAppend = '<div class="pictype-char ' + lastChar + '"><img src="assets/gif-font/eiji/' + lastChar + '.gif?id=' + Math.random() + '"/></div>';
		}
		
		// checks to length of the characters typed
		// not exactly sure why I'm making this check but will figure out
		if (currentStringArray.length > textAreaLength ) {
			pictypeArea.append(elementToAppend);
			textAreaLength = currentStringArray.length;
		} else {
			console.log($('.pictype-char').last());
			$('.pictype-char').last().remove();
			textAreaLength = currentStringArray.length;
		}

		// on click event handler that creates a new instance of the gif for that letter and reanimates the letter
		$('.pictype-char').on('click', function (e) {
			var currentCharClass = $(this).context.className.split(' ')[1];
			console.log($(this).children(':first-child').attr('src', 'assets/gif-font/eiji/' + currentCharClass + '.gif?id=' + Math.random()));
		});
	});

	// checks wether the 'values' exist in the 'array'
	// returns the invalid keys
	function isInArray(value, array) {
      return array.indexOf(value) > -1;
    }

   // checks the length of the text area for something not sure
   // guessing some type of limit
    $('textarea').keydown(function(){
    	var length = $('textarea').val().length;
    	console.log(length);
    });

})();


