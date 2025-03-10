$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('.js').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
});
const wa = document.createElement("a");
wa.href = "https://api.whatsapp.com/send?phone=15164063086";
//const wi = document.createElement("img");

wa.cssText = `z-index:9999999;background:green;text-decoration:none;color:blue;display:block;background-image:;background-size:cover;background-repeat:none;width:40px; height:40px;border-radius:50%;position:fixed;bottom:30px;right:30px;`;
//wi.cssText = `width:100%; height:`;
//wa.appendChild(wi);
document.body.appendChild(wa);
alert(0)
