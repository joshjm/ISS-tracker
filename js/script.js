const fetchLocation = function(){
    $.ajax('http://api.open-notify.org/iss-now.json').done(function(data){
        $('#position-text').text(JSON.stringify(data.iss_position));
        let top = 100-(data.iss_position.latitude*100/180+50);
        let left = (data.iss_position.longitude*100/360+50);
        $('#converted-text').text(`left: ${left} top: ${top} `);
        $('.images').append(`<img 
        class="breadcrumb" 
        src="img/red-dot.png" 
        style=
        "left: ${left}%;
        top: ${top}%"
        > </img>`)
        $('#iss-image').css({'top': `${top-4}%`, 'left': `${left-4}%`});
    })
}
// 0,0 at 80, -180
fetchLocation()
setInterval(fetchLocation, 5000); // want to put this is a while 1 loop, with 1 second delays
