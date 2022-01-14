function escolher(){
    return Number(prompt("Escolha"))
  }
  
  function cond(){
      while(x != 1 || x!= 2 || x!= 3){
       var x = escolher()
        if( x === 1){
            window.location.href ="../html/casaB.html";
          break
        }
        else if(x === 2){
            window.location.href = "../finaisruins_html/final_florestaB.html"
          break
        }
        else if(x === 3){
          window.location.href = "../finaisruins_html/final_floresta2B.html"
          break
        }
        else{
          alert("Digite 1 , 2 ou 3 como foi pedido");
        } 
    }
}