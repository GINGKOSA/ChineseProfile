/*var open = false;
var page = $(this).attr("href")
var speed = 750;
$('html, body').animate({
    scrollTop: $("#home").offset().top
}, 1000);*/

$(document).ready(function()
    {
        $("#cockpitTwo").hide();
        let cockpit = "ouvert";
            
            $('#btnHome').click(function () {
                $("#video").css("z-index","1")
                    if (cockpit == "ouvert")
                        {
                            $("#cockpitTwo").show();

                            cockipit = "fermee";
                            setTimeout(function()
                            {
                                var page = $(this).attr("href")
                                var speed = 750;
                                $('html, body').animate({
                                scrollTop: $("#home").offset().top
                                }, 1000);
    
                            },1000);
                            setTimeout(function()
                            {
                                $("#cockpitTwo").hide();
                            },3000);
                        }
                     else if (cockpit == "fermee")
                     {
                        var page = $(this).attr("href")
                        var speed = 750;
                        $('html, body').animate({
                        scrollTop: $("#home").offset().top
                        }, 1000);
                     }
                     document.getElementById('musiqueDeux').pause();
                     document.getElementById('video').pause();   
            });
            $('#btnUn').click(function () {
                $("#video").css("z-index","1")
                if (cockpit == "ouvert")
                {
                    $("#cockpitTwo").show();

                    cockipit = "fermee";
                    setTimeout(function()
                    {
                        var page = $(this).attr("href")
                        var speed = 750;
                        $('html, body').animate({
                        scrollTop: $("#un").offset().top
                        }, 1000);
                    },1000);
                    setTimeout(function()
                    {
                        $("#cockpitTwo").hide();
                    },3000);
                }
             else if (cockpit == "fermee")
             {
                var page = $(this).attr("href")
                var speed = 750;
                $('html, body').animate({
                scrollTop: $("#un").offset().top
                }, 1000);
             }
             document.getElementById('musiqueDeux').pause();
             document.getElementById('video').pause();   
    });


            $('#btnDeux').click(function () {
                $("#video").css("z-index","1")
                if (cockpit == "ouvert")
                {
                    $("#cockpitTwo").show();

                    cockipit = "fermee";
                    setTimeout(function()
                    {
                        var page = $(this).attr("href")
                        var speed = 750;
                        $('html, body').animate({
                        scrollTop: $("#deux").offset().top
                        }, 1000);
                    },1000);
                    setTimeout(function()
                    {
                        $("#cockpitTwo").hide();
                    },3000);
                }
             else if (cockpit == "fermee")
             {
                var page = $(this).attr("href")
                var speed = 750;
                $('html, body').animate({
                scrollTop: $("#deux").offset().top
                }, 1000);
             }
             document.getElementById('musiqueDeux').pause();
             document.getElementById('video').pause();   
    });
            $('#btnTrois').click(function () {
                $("#video").css("z-index","1")
                if (cockpit == "ouvert")
                {
                    $("#cockpitTwo").show();

                    cockipit = "fermee";
                    setTimeout(function()
                    {
                        var page = $(this).attr("href")
                        var speed = 750;
                        $('html, body').animate({
                        scrollTop: $("#trois").offset().top
                        }, 1000);
                    },1000);
                    setTimeout(function()
                    {
                        $("#cockpitTwo").hide();
                    },3000);
                }
             else if (cockpit == "fermee")
             {
                var page = $(this).attr("href")
                var speed = 750;
                $('html, body').animate({
                scrollTop: $("#trois").offset().top
                }, 1000);
             }
             document.getElementById('musiqueDeux').pause();
             document.getElementById('video').pause();   
    });
            $('#btnQuatre').click(function () {
                $("#video").css("z-index","1")
                if (cockpit == "ouvert")
                {
                    $("#cockpitTwo").show();

                    cockipit = "fermee";
                    setTimeout(function()
                    {
                        var page = $(this).attr("href")
                        var speed = 750;
                        $('html, body').animate({
                        scrollTop: $("#quatre").offset().top
                        }, 1000);
                    },1000);
                    setTimeout(function()
                    {
                        $("#cockpitTwo").hide();
                    },3000);
                }
             else if (cockpit == "fermee")
             {
                var page = $(this).attr("href")
                var speed = 750;
                $('html, body').animate({
                scrollTop: $("#quatre").offset().top
                }, 1000);
             }
             document.getElementById('musiqueDeux').play();
             document.getElementById('video').pause();   
    });
            $('#btnCinq').click(function () {
                if (cockpit == "ouvert")
                {
                    $("#cockpitTwo").show();

                    cockipit = "fermee";
                    setTimeout(function()
                    {
                        var page = $(this).attr("href")
                        var speed = 750;
                        $('html, body').animate({
                        scrollTop: $("#cinq").offset().top
                        }, 1000);
                    },1000);
                    setTimeout(function()
                    {
                        $("#cockpitTwo").hide();
                    },3000);
                }
             else if (cockpit == "fermee")
             {
                var page = $(this).attr("href")
                var speed = 750;
                $('html, body').animate({
                scrollTop: $("#cinq").offset().top
                }, 1000);
             }
                setTimeout(function()
                {
                    $("#video").css("z-index","3") 
                    document.getElementById('video').play();
                },3000
                )

                document.getElementById('musiqueDeux').pause();  
             
    });
            $('#btnSix').click(function () {
                document.getElementById('video').pause();
                if (cockpit == "ouvert")
                {
                    $("#cockpitTwo").show();

                    cockipit = "fermee";
                    setTimeout(function()
                    {
                        var page = $(this).attr("href")
                        var speed = 750;
                        $('html, body').animate({
                        scrollTop: $("#six").offset().top
                        }, 1000);
                    },1000);
                    setTimeout(function()
                    {
                        $("#cockpitTwo").hide();
                    },3000);
                }
             else if (cockpit == "fermee")
             {
                var page = $(this).attr("href")
                var speed = 750;
                $('html, body').animate({
                scrollTop: $("#six").offset().top
                }, 1000);
             }
             document.getElementById('musiqueDeux').pause();
              
    });
            $('#btnSeven').click(function () {
                if (cockpit == "ouvert")
                {
                    $("#cockpitTwo").show();

                    cockipit = "fermee";
                    setTimeout(function()
                    {
                        var page = $(this).attr("href")
                        var speed = 750;
                        $('html, body').animate({
                        scrollTop: $("#seven").offset().top
                        }, 1000);
                    },1000);
                    setTimeout(function()
                    {
                        $("#cockpitTwo").hide();
                    },3000);
                }
             else if (cockpit == "fermee")
             {
                var page = $(this).attr("href")
                var speed = 750;
                $('html, body').animate({
                scrollTop: $("#seven").offset().top
                }, 1000);
             }
             document.getElementById('musiqueDeux').pause();
             document.getElementById('video').pause();   
    });
    });