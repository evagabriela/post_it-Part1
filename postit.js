// When the user clicks anywhere on the Board, a new PostIt is generated.
var Board = function( selector ) {
  // Your board related code goes here
  
// jquery syntax to access the element. $('#mydiv') accesses the DOM element with ID 'mydiv'
// Variables that begin with $ refer to DOM elements
// 'selector' can be any DOM element that we want to select
// Board is our class. When we instantiante an object of that class, we need to give it an input arg


  // Use $elem to access the DOM element for this board
  var $elem = $( selector );

// alternative way of calling initalize. When using 'this.initialize', call 
// new Board('#board').initialize();

  // this.initialize = function(){
  //   $($elem).on("click", function(e){
  //     new PostIt(e.pagex, e.pageY, $elem);
  //   });
  // }

  function initialize() {
    $($elem).on("click", function(e){
      new PostIt(e.pageX, e.pageY, $elem);
    });
  }
    // What needs to happen when this object is created?
    initialize();
  };


// PostIt objects have a header and a content area, which is editable. 
// A PostIt can be deleted by clicking on the X in the header.
// The content area of a PostIt is editable, even though it is not a form element like <textarea> or <input>.

var PostIt = function(x, y, board) {
  // Your post-it related code goes here
  function initialize() {
    var header = $("<div class = 'header'>").text('Post Me!');
    var content = $("<div class = 'content'>").attr("contenteditable", "true");
    $("<div class = 'post-it'>").css("top",y).css("left",x).append(header).append(content).appendTo(board);
    $(".post-it").draggable({cancel : '.content'});
  // can also do it:
  // .draggable({handle:myHead})

    $(".post-it").on("click", function(e){
      e.stopPropagation();
    });
  }
  initialize();
};




// PostIt objects can be moved by clicking and dragging the header. 
$(function() {
  // This code will run when the DOM has finished loading
   new Board('#board');

});



