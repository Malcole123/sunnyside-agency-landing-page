function main(){
    //Menu functions
    var $menuIcon = $('#menuBtn');
    var $closeIcon = $('#closeBtn');
    var $navMenu = $('.nav-links');
    var $mobilenavActive = false;
  
    $menuIcon.on('click',()=>{
        $navMenu.show();
        $menuIcon.hide()
        $closeIcon.show()
        $mobilenavActive =true
    });
    $closeIcon.on('click', () =>{
        $navMenu.hide();
        $closeIcon.hide()
        $menuIcon.show();
        $mobilenavActive = false
    });
    $(window).on('scroll',()=>{
        if($mobilenavActive === true){
            $navMenu.hide();
            $closeIcon.hide();
            $menuIcon.show();
            $mobilenavActive = false;  
        }
    })
    $(window).on('resize', function(){
        var win = $(this); //this = window
        if (win.width() >= 768) {
            $navMenu.show();
            $menuIcon.hide()
            $closeIcon.hide() 
         }else{
            $navMenu.hide();
            $menuIcon.show();
            $closeIcon.hide();
         }
    });
    //
}

$(document).ready(main)