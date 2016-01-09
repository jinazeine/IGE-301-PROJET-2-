function getmail(){
   window.alert("your email is " + document.getElementById("myEmail").value);

}

            
function getInfo(){
         var frm = document.getElementById("myForm");
        alert("YOUR ORDER INFO :"+" "+frm.elements[0].value+"  " +frm.elements[1].value+"  "+frm.elements[2].value+"   " +frm.elements[3].value+"   "+frm.elements[4].value);
            } 
            

var coloring;
 function changeColor(){coloring = window.setInterval(getColor, 2000);
            }
 function getColor(){
      var color;
      var rnd = Math.random();
      if(rnd<0.34){
         color = "black";
           }else if(rnd<0.67){
              color = "red";
   
                }
      document.getElementById("myP").style.color = color;
            }
            

function changeBGcolor(me){
                if(me.value===""){
                    me.style.backgroundColor="";
                }else{
                    me.style.backgroundColor="red";
                }
            }
            
 var photo;
 function changePic(){photo = window.setInterval(getPic, 2000); }
 function getPic(){
                var pic;
                var rnd = Math.random();
                if(rnd<0.34){
                    pic = url('images/jeita.jpg');
                }else if(rnd<0.67){
                   pic = url('images/antelias.jpg');
                }else {
                    pic = url('images/rabieh.jpg');
                } document.getElementById("pic").style.backgroundimage = pic;
            }
            
            
            

               