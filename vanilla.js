$(document).ready(function(){
    var date,day,time,stadium;
    date = $('.versus__date')[0].innerText
    day = $('.versus__day')[0].innerText
    time = $('.versus__time')[0].innerText
    stadium = $('.versus__stadium')[0].innerText
    var title = 'Ближайший матч состоится ' + date + ' (' + day + ') в ' + time + ' на ' + stadium
    $('title')[0].innerText = title
});