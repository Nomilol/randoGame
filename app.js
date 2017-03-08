(function(){
  var app = {
    init : function(){
      app.listeners();
    },
    listeners : function(){
      $('.ui.purple.button').on('click', app.rollGame);
    },
    rollGame : function(){
      var arrayGames = ['League Of Trolls', 'Teso', 'CSGO', 'Minecraft', 'Palalolz'];
      console.log('ça marche');
      var rand = arrayGames[Math.floor(Math.random() * arrayGames.length)];
      $('.game').text(rand);
      }
  }









  app.init();
})();
