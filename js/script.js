/*DESIGN*/
/*Click on image - show content, hide image*/

$(document).ready(function(){
  $('#imageDesign').on('click', function(){
    $(this).hide();
  });
});

$(document).ready(function(){
  $('#imageDesign').on('click', function(){
    $('#textDesign').hide();
  });
});

$(document).ready(function(){
  $('#imageDesign').on('click', function(){
    $('#contentDesign').show();
  });
});

$(document).ready(function(){
  $('#imageDesign').on('click', function(){
    $('#contentDes').show();
  });
});

/*click on content heading - hide content, show image*/
$(document).ready(function(){
  $('#contentDesign').on('click', function(){
    $(this).hide();
  });
});

$(document).ready(function(){
  $('#contentDesign').on('click', function(){
    $('#contentDes').hide();
  });
});

$(document).ready(function(){
  $('#contentDesign').on('click', function(){
    $('#imageDesign').show();
  });
});

$(document).ready(function(){
  $('#contentDesign').on('click', function(){
    $('#textDesign').show();
  });
});

/*show image and heading by clicking on the description*/
$(document).ready(function(){
  $('#contentDes').on('click', function(){
    $('#imageDesign').show();
  });
});

$(document).ready(function(){
  $('#contentDes').on('click', function(){
    $('#textDesign').show();
  });
});

$(document).ready(function(){
  $('#contentDes').on('click', function(){
    $(this).hide();
  });
});

$(document).ready(function(){
  $('#contentDes').on('click', function(){
    $('#contentDesign').hide();
  });
});

