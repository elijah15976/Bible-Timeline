window.onload = function(){
  $.getJSON("./bible-figures.json", function(data){
    console.log(data);
  });
};