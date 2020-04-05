// check off specific todos by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// click on "X" to delete todo
// must tell span to not allow event bubbling
$("ul").on("click", "span", function (event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  event.stopPropagation();
});

// add listener to text input that fires when enter is pressed
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
});

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
})