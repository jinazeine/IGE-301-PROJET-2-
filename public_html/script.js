function getmail(){
   window.alert("your email is " + document.getElementById("myEmail").value);

}
function changeBGcolor(me){
                if(me.value===""){
                    me.style.backgroundColor="";
                }else{
                    me.style.backgroundColor="red";
                }
            }
