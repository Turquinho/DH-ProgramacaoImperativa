
function podeSubir(altura,acompanhada){
   
    if(altura > 140 && altura < 200){
        console.log("Acesso Liberado")
        return true
    } else if (altura > 200){
        console.log("Acesso Negado")
        return false
    }else if (altura <= 140 && altura >= 120 && acompanhada){
        console.log("Acesso Liberado")
        return true
    } else if (altura <= 140 && !acompanhada){
        console.log("Acesso negado")
        return false    
    } else if (altura < 120){
        console.log ("Acesso negado")
        return false
    }
}

console.log (podeSubir(135, true))

