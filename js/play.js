window.onload = function(){
    $(document).ready(function(){
        var count=0; 
        var score=0;
        $('.red_portion').bind('click', function fncSearch(){
            $('#red_portion_pour').show();
            $('#yellow_portion_pour').hide();
            $('#skyblue_portion_pour').hide();
            $('#blue_portion_pour').hide();
            $('#green_portion_pour').hide();
            $('#deepgreen_portion_pour').hide();
            $('#purple_portion_pour').hide();
            $('#brown_portion_pour').hide();
            $('#white_portion_pour').hide();
            $('#black_portion_pour').hide();
            count++;
            score+=1;
            changeicon(count);
        });
        $('.yellow_portion').bind('click', function fncSearch(){
            $('#yellow_portion_pour').show();
            $('#red_portion_pour').hide();
            $('#skyblue_portion_pour').hide();
            $('#blue_portion_pour').hide();
            $('#green_portion_pour').hide();
            $('#deepgreen_portion_pour').hide();
            $('#purple_portion_pour').hide();
            $('#brown_portion_pour').hide();
            $('#white_portion_pour').hide();
            $('#black_portion_pour').hide();
            count++;  
            score+=2;
            changeicon(count);
        });  
        $('.skyblue_portion').bind('click', function fncSearch(){
            $('#skyblue_portion_pour').show();
            $('#red_portion_pour').hide();
            $('#yellow_portion_pour').hide();
            $('#blue_portion_pour').hide();
            $('#green_portion_pour').hide();
            $('#deepgreen_portion_pour').hide();
            $('#purple_portion_pour').hide();
            $('#brown_portion_pour').hide();
            $('#white_portion_pour').hide();
            $('#black_portion_pour').hide();
            count++;  
            score+=3;
            changeicon(count);
        }); 
        $('.blue_portion').bind('click', function fncSearch(){
            $('#blue_portion_pour').show();
            $('#red_portion_pour').hide();
            $('#yellow_portion_pour').hide();
            $('#skyblue_portion_pour').hide();
            $('#green_portion_pour').hide();
            $('#deepgreen_portion_pour').hide();
            $('#purple_portion_pour').hide();
            $('#brown_portion_pour').hide();
            $('#white_portion_pour').hide();
            $('#black_portion_pour').hide();
            count++;  
            score+=4;
            changeicon(count);
        }); 
        $('.green_portion').bind('click', function fncSearch(){
            $('#green_portion_pour').show();
            $('#red_portion_pour').hide();
            $('#yellow_portion_pour').hide();
            $('#skyblue_portion_pour').hide();
            $('#blue_portion_pour').hide();
            $('#deepgreen_portion_pour').hide();
            $('#purple_portion_pour').hide();
            $('#brown_portion_pour').hide();
            $('#white_portion_pour').hide();
            $('#black_portion_pour').hide();
            count++; 
            score+=5; 
            changeicon(count);
        }); 
        $('.deepgreen_portion').bind('click', function fncSearch(){
            $('#deepgreen_portion_pour').show();
            $('#red_portion_pour').hide();
            $('#yellow_portion_pour').hide();
            $('#skyblue_portion_pour').hide();
            $('#blue_portion_pour').hide();
            $('#green_portion_pour').hide();
            $('#purple_portion_pour').hide();
            $('#brown_portion_pour').hide();
            $('#white_portion_pour').hide();
            $('#black_portion_pour').hide();
            count++;  
            score+=6;
            changeicon(count);
        }); 
        $('.purple_portion').bind('click', function fncSearch(){
            $('#purple_portion_pour').show();
            $('#red_portion_pour').hide();
            $('#yellow_portion_pour').hide();
            $('#skyblue_portion_pour').hide();
            $('#blue_portion_pour').hide();
            $('#green_portion_pour').hide();
            $('#deepgreen_portion_pour').hide();
            $('#brown_portion_pour').hide();
            $('#white_portion_pour').hide();
            $('#black_portion_pour').hide();
            count++;  
            score+=7;
            changeicon(count);
        }); 
        $('.brown_portion').bind('click', function fncSearch(){
            $('#brown_portion_pour').show();
            $('#red_portion_pour').hide();
            $('#yellow_portion_pour').hide();
            $('#skyblue_portion_pour').hide();
            $('#blue_portion_pour').hide();
            $('#green_portion_pour').hide();
            $('#deepgreen_portion_pour').hide();
            $('#purple_portion_pour').hide();
            $('#white_portion_pour').hide();
            $('#black_portion_pour').hide();
            count++;  
            score+=8;
            changeicon(count);
        }); 
        $('.white_portion').bind('click', function fncSearch(){
            $('#white_portion_pour').show();
            $('#red_portion_pour').hide();
            $('#yellow_portion_pour').hide();
            $('#skyblue_portion_pour').hide();
            $('#blue_portion_pour').hide();
            $('#green_portion_pour').hide();
            $('#deepgreen_portion_pour').hide();
            $('#purple_portion_pour').hide();
            $('#brown_portion_pour').hide();
            $('#black_portion_pour').hide();
            count++;  
            score+=9;
            changeicon(count);
        }); 
        $('.black_portion').bind('click', function fncSearch(){
            $('#black_portion_pour').show();
            $('#red_portion_pour').hide();
            $('#yellow_portion_pour').hide();
            $('#skyblue_portion_pour').hide();
            $('#blue_portion_pour').hide();
            $('#green_portion_pour').hide();
            $('#deepgreen_portion_pour').hide();
            $('#purple_portion_pour').hide();
            $('#brown_portion_pour').hide();
            $('#white_portion_pour').hide();
            count++;  
            score+=10;
            changeicon(count);
        });  
    });
}