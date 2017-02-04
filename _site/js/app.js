var clickCounter = 0;

$('#top').on('click',function(){

	if(clickCounter == 0){
		//go to panel2
		$('#bottom').removeClass().addClass('second')
		clickCounter = 1
	} else if (clickCounter == 1) {
		//go to panel3
		$('#bottom').removeClass().addClass('third')
		clickCounter = 2
	} else {
		//go to panel1
		$('#bottom').removeClass().addClass('first')
		clickCounter = 0
	}

})