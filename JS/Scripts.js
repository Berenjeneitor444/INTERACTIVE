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