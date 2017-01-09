function Main(){}

Main.prototype.emailPop = function(){
  $('#gmail-link').click(function(event){
    event.preventDefault();
    $('.email').removeClass('hide').hide();;
    $('.email').show('slide');
  })
}

Main.prototype.initialize = function(){
  this.emailPop();
}
