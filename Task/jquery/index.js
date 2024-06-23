$('#home').click(function () {
    $('.home-cont').show(),
    $('.detail-cont').hide(),
    $('.about-cont').hide()

})
$('#about').click(function () {
    $('.about-cont').show(),
    $('.detail-cont').hide(),
    $('.home-cont').hide()

})
$('#detail').click(function () {
    $('.detail-cont').show(),
    $('.home-cont').hide(),
    $('.about-cont').hide()

})
$(document).ready(function(){

    $('.detail-cont').hide(),
    $('.about-cont').hide()
});
    

  