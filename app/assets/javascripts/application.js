// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
var ws = new WebSocket("ws://192.168.2.166:8080");
$(function(){
  $("#btn_post").click(post);
  $("#message").keydown(function(e){
    if(e.keyCode == 13) post();
  });
});

var post = function(){
  var mes = 'christmastime'
  ws.send(mes);
  $("input#message").val("");
};
