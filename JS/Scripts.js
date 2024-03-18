function menu(id) {
    document.getElementById(id).classList.toggle("enseñar")
    var ListaEstilos = document.styleSheets[0].cssRules
    for (rule of ListaEstilos) {
        if (rule.selectorText == "body::before") {
            let valor = rule.style.display
            if (valor == "none") {
                rule.style.display = "block";
            }
            else {
                rule.style.display = "none"
            }
            break
        }
    }
}
function validacion_email() {
    let email = document.getElementById("email").value
    let asunto = document.getElementById("asunto").value
    let cuerpo = document.getElementById("cuerpo").value
    if (!(/^\w+@\w+\.[a-zA-Z]{2,4}$/.test(email))) {
        alert("formato de Email incorrecto")
        return false
    }
    else if (asunto.length < 5 || !(/\w{3,}/.test(asunto))) {
        //que tenga mas de 5 caracteres y una palabra de mas de tres caracteres alfanumericos
        alert("el asunto es muy corto, incoherente o inexistente")
        return false
    }
    else if (cuerpo.length < 15 || !(/\w{3,}/.test(cuerpo))) {
        alert("cuerpo muy corto, incoherente o inexistente")
        return false
    }
    else {
        return true
    }
}
function enviar_correo(){

}