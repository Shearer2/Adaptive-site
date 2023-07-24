$(function() {
    $('select').styler();

    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    })

    $('.menu1-btn').on('click', function() {
        $('.menu1').toggleClass('menu1_active');
        $('.content').toggleClass('content_active');
    })

    $('.menu2-btn').on('click', function() {
        $('.menu2').toggleClass('menu2_active');
        $('.content').toggleClass('content_active');
    })

})

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}