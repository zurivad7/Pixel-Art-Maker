$(function(){

	function makeGrid() { //line to initiate the grid

    let gridHeight = ($('#inputHeight').val());
    let gridWidth = ($('#inputWeight').val());
	
	for (let i = 0; i < gridHeight; i++) {
      $('#pixelCanvas').append('<tr></tr>')
    }
    for (let j = 0; j < gridWidth; j++) {
      $('#pixelCanvas>tr').append('<td></td>')
    }
  }


  //line to call the grid
  $('#sizePicker').submit(function(event) {
    $('#pixelCanvas').children().remove();
    makeGrid()
    event.preventDefault();
    
  });

  //this line is used to color the tiles
  $('#pixelCanvas').click(function(event){
      const paint = $('#colorPicker').val();
      $(event.target).css('background-color', paint)
  
  });

//this line is used to clear the already colored cells
  $('#pixelCanvas').on('contextmenu', 'td', function(evt) {
    evt.preventDefault();
    rightClick ='transparent';
    isDrawing = true;
    if (isDrawing) {
      $(evt.target).css('background-color', rightClick);
    };
    return false;
  });

});











	