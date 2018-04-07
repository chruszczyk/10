$(function() {
	console.log('DOM loaded');

	$('span:even').css('color', 'red');

	var paragraphs = $('p');
	paragraphs.each(function(index, element) {
    	var button = '<button class="btn" data-tmp="' + index + '">Click here</button>';
    	$(element).append(button);
	});

	$('button').click(function() {
		alert($(this).attr('data-tmp'));
	});
});