/**
 * Created by Alan Wong 2023/2 
 * 
 */

$(document).ready(function() {
    console.log("main js run");
    var id  = getID();
    console.log("ID: "+id);

    pageStart();

    submitNameAndWish();
    
});

function getID(){ 
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('id')){
        let id = searchParams.get('id');
        return id; 
    }else{
        console.log("Missing ID");
        return "";
    }
}

function pageStart(){
    $('.main-area').hide();

    // $('#name-and-wish-area').hide();

    // $('#saa-edit').click(function(){
    //     $('#select-action-area').hide();
    //     $('#name-and-wish-area').show();
    // });

    // $('#saa-view').click(function(){

    // });
}

function submitNameAndWish(){
    $("#nw-submit").click(function(){ 
        
        var username = $('#user-name').val();
        var wishtext = $('#user-wishtext').val();

        if(username != "" &&  wishtext != ""){
            //Call API 
            $('#name-and-wish-area').hide(); 
            $('.main-area').hide();
            //$('.main-area').css({ "background" : "none"});
        }else{
            //Show the warming 

        }
    });
}