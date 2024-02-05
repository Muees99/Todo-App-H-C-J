// Toggle 'completed' class on list item click
$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
})

// Remove list item when its span is clicked
    $("ul").on("click","span",function (e) {
    $(this).parent().fadeOut(500,function () {
     $(this).remove();  
    });
 // Stop event propagation to prevent li click event triggering
    e.stopPropagation();
})

// Add new todo item when Enter key is pressed in the text input
$("input[type='text']").keypress(function (e) {
    if (e.which===13) {
        // Get the todo text from input and clear the input field
        let todoText=$(this).val();
        $(this).val("");
        // Append new todo item to the list
        $("ul").append("<li><span><i class='fa-regular fa-trash-can'></i><span>" + todoText + "</li>")
        
    }
    
})   
// Toggle visibility of the text input when font ThrashBin icon is clicked
$(".fa").click( function () {
        $("input[type='text']").fadeToggle()
    
}) 
