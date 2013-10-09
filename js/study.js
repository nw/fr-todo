
var todoapp = {
  items: []
};


$(function(){

  var inputbox = $('#new-todo');
  var todolist = $('#todo-list');
  
  
  inputbox.on('keypress', function(event){
    if(event.charCode == 13){
      var name = inputbox.val();
      inputbox.val("");
      var item = addItem(name);
    }
  });
  
  todolist.on('click', 'button.destroy', function(e){
    var item = $(e.target).parents('li');
    var id = item[0].id;
    
    todoapp.items = todoapp.items.filter(function(item){
      return  item.id !== id;
    });
    
    item[0].remove();
  });
  
  
  
  function addItem(name){
    var id = 'item_' + Date.now();
    var html = $('<li id="'+id+'"><div class="view">'+     
      '<input class="toggle" type="checkbox">'+
      '<label>'+ name + '</label>' +
      '<button class="destroy"></button>'+
      '</div></li>');
    
    var item = {id: id, html: html, active: false};
    
    todoapp.items.push(item);
      
    todolist.prepend(html);
    return item;
  }
  
  
});