// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})

//is a JavaScript/jQuery script that utilizes a plugin called "repeater" to create a
// repeating form element on a webpage. Let's break it down:
//
// $(document).ready(function(){ ... });:
// This code ensures that the script inside the function is executed when the document
// (webpage) has finished loading.
//
// $('.repeater').repeater({ ... });: This line selects all elements with the class
// "repeater" and initializes the repeater plugin on them.
//
// initEmpty: false,: This option specifies whether to initialize the repeater with an
// empty set of repeated elements or with one element already displayed. In this case,
// it's set to false, meaning there will be at least one element displayed initially.
//
// defaultValues: { 'text-input': '' },: This option sets the default values for the form
// inputs inside the repeated elements. In this example, it sets the value of an input with
// the name "text-input" to an empty string.
//
// show: function(){ ... },: This is a callback function that is executed when a new element
// is shown (added to the repeater). In this case, it uses the slideDown() method to animate
// the showing of the new element.
//
// hide: function(deleteElement){ ... },: This is a callback function that is executed
// when an element is hidden (removed from the repeater). It uses the slideUp() method to
// animate the hiding of the element. Additionally, it sets a timeout of 500 milliseconds
// and calls the generateCV() function. This function is likely defined elsewhere in your code
// and is executed after the element is hidden.
//
// isFirstItemUndeletable: true: This option determines whether the first item in the
// repeater should be undeletable, meaning it cannot be removed by the user.
// In this case, it's set to true, indicating that the first item is undeletable.
//
// Overall, this script sets up a repeater functionality for a form, allowing users to
// dynamically add and remove repeated form elements. The plugin provides callbacks for
// customizing the behavior of showing and hiding elements and includes options for default values
// and undeletable items.














