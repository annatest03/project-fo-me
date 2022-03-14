$(document).ready(function(){
    $(".icon").click(function(){
        $(".menu_icon").toggle();
    });
//     $(".contact_box h4").click(function(){
//         // $(".contact_box_one p").toggle().animate({
//         //     opacity:'1',
//         // },1000);
//         $(".contact_box").each(function () {
//
//         })
//         console.log($(this).text());
//     });
})

const contact_box = document.getElementsByClassName('contact_box');
const p = document.getElementsByClassName('contact_text');
for (let i=0; i < contact_box.length; i++){
    contact_box[i].onclick=()=>{
        if(p[i].style.display==="block") {
            p[i].style.display = 'none';
        }else{
            p[i].style.display = 'block';
        }
    }
}
