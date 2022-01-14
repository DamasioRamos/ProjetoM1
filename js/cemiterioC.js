function escolher(){
    return Number(prompt("Escolha"))
}
  
function cond(){
      while(x != 1){
       var x = escolher()
        if( x === 1){
          window.location.href ="../html/finalC.html";
          break
        }
        else{
          alert("Digite 1 ");
        } 
    }
}