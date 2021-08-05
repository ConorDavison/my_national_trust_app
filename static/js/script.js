//for mobile collapse
$(document).ready(function(){
    $('.sidenav').sidenav({edge:"right"});
  });

// for collapsible
$(document).ready(function(){
  $('.collapsible').collapsible();
});

// initialise dropdown on visit.html
$(document).ready(function(){
  $('select').formSelect();
})

// for date picker
$(document).ready(function(){
  $('.datepicker').datepicker({
    format: "dd mmmm, yyyy",
    yearRange: 3,
    showClearBtn: true,
    i18n: {
        done: "Select"
    }
})
})