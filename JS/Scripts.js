//muestra el menu jugando con display none o block
//accede a un pseudoelemento que sirve para oscurecer el fondo y juega
//tambien con display
function menu() {
    document.getElementsByClassName("menu")[0].classList.toggle("enseñar")
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
//valida email en la pagina contactame
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
// funcion que crea un formulario para el singup, reutilizado en la funcion quienes para crear pagina de
// publicacion de historias
function crearForm() {
    let filaUsuario = document.getElementById("usuario").parentElement
    let filaContrasenya = document.getElementById("contrasenya").parentElement
    let filaBoton = document.createElement("div")
    let boton = document.createElement("input")
    let texto = document.createElement("p")
    let marco = document.createElement("fieldset")
    let titulo = document.createElement("legend")
    let signUp = document.createElement("form")

    filaBoton.className = "botones login"
    boton.setAttribute("type", "button")
    boton.setAttribute("value", "Crear Usuario")
    boton.setAttribute("onclick", "crearCuenta()")
    texto.innerHTML = "¿Ya tienes una cuenta?"
    let volverLogin = boton.cloneNode(false)
    volverLogin.setAttribute("value", "Iniciar Sesión")
    volverLogin.setAttribute("onclick", "location.reload()")   
    filaBoton.appendChild(boton)
    filaBoton.appendChild(texto)
    filaBoton.appendChild(volverLogin)
    signUp.id = "signUp"
    signUp.appendChild(filaUsuario)
    signUp.appendChild(filaContrasenya)
    signUp.appendChild(filaBoton)
    titulo.innerHTML = "Creación de Usuario"
    marco.appendChild(titulo)
    marco.appendChild(signUp)

    return marco
}
//coge el formulario y lo mete
function crearSignUp(){
    marco = crearForm()
    document.getElementById("login").parentElement.remove();
    document.getElementsByClassName("formularios")[0].appendChild(marco)
    document.getElementsByClassName("titulo")[0].innerHTML = "Crea tu cuenta"
}
function crearCuenta() {
    let usuario = document.getElementById("usuario").value
    let contrasenya = document.getElementById("contrasenya").value
    //validar nombre de usuario
    if (!(/^[a-zA-Z0-9_]{4,16}$/.test(usuario))) {
        alert("El nombre de usuario debe tener entre 4 y 16 caracteres, ademas de tener solo letras, numeros y guion bajo")
        document.getElementById("usuario").style.borderColor = "red"
        return
    }
    //validacion contraseña (comprueba que tenga un numero, una minuscula y una mayuscula y 8 o mas caracteres de longitud)
    if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(contrasenya))) {
        alert("La contraseña debe tener un numero, una minuscula, una mayuscula y 8 caracteres o mas de longitud. Vuelva a intentarlo")
        document.getElementById("usuario").style.borderColor = "red"
        return
    }

    //comprobamos si existe el objeto Usuarios en localStorage, si no existe lo creamos
    if (!localStorage.getItem("Usuarios")) {
        var Usuarios = {}
        localStorage["Usuarios"] = JSON.stringify(Usuarios)
    }
    // uso json aqui para convertir en string objetos y poder guardarlos en localstorage
    //y luego los vuelvo a convertir al sacarlos para poder iterar sobre ellos
    let listaUsuarios = JSON.parse(localStorage["Usuarios"])
    if (usuario in listaUsuarios) {
        alert("Este usuario ya existe")
        document.getElementById("usuario").style.borderColor = "red"
        return
    }
    else {
        listaUsuarios[usuario] = contrasenya
        localStorage["Usuarios"] = JSON.stringify(listaUsuarios)
        alert("Usuario creado con exito, inicie sesión a continuación")
        window.location.reload()
    }
}
function loguearse() {
    let usuario = document.getElementById("usuario").value
    let contrasenya = document.getElementById("contrasenya").value
    const listaUsuarios = JSON.parse(localStorage["Usuarios"])
    if (!(usuario in listaUsuarios)) {
        alert("Usuario o contraseña incorrecta")
        return
    }
    else {
        if (!(contrasenya == listaUsuarios[usuario])) {
            alert("Usuario o contraseña incorrecta")
            return
        }
        else {
            sessionStorage.setItem("usuarioActual", usuario)
            window.location.reload();
        }
    }
}
function quienEs(){
    //comprobamos si hay alguien logueado en el almacenamiento temporal
    if (sessionStorage.getItem("usuarioActual")) {
        let formularioViejo = crearForm()
        let elementosHijos = formularioViejo.lastChild.children //accedo al ultimo hijo de fieldset (form) y cojo sus hijos
        // reutilizo el formulario viejo y le cambio estos dos campos para que coincida
        for (let fila of elementosHijos) {
            if (fila.className == "botones login"){
                fila.innerHTML = ""
                let boton = document.createElement("input")
                boton.setAttribute("type", "button")
                boton.setAttribute("value", "Publica tu historia")
                boton.setAttribute("onclick", "publicarHistoria()")
                fila.appendChild(boton)
            }
            for (let elemento of fila.children) {
                if (elemento.id == "usuario") {
                    elemento.id = "titulo-historia"
                    elemento.setAttribute("type", "text")
                    elemento.setAttribute("name", "titulo-historia")
                    elemento.setAttribute("placeholder", "Dale nombre a tu historia")
                    let etiqueta = elemento.previousElementSibling
                    etiqueta.innerHTML = "Titulo de tu historia"
                    etiqueta.setAttribute("for", "titulo-historia")
                }
                if (elemento.id == "contrasenya") {
                    let elementoNuevo = document.createElement("textarea")
                    elementoNuevo.id = "tu-historia"
                    elementoNuevo.setAttribute("type", "text")
                    elementoNuevo.setAttribute("name", "tu-historia")
                    elementoNuevo.setAttribute("placeholder", "Cuentanos tu historia")
                    fila.insertBefore(elementoNuevo, elemento)
                    elemento.remove()
                    let etiqueta = elementoNuevo.previousElementSibling
                    etiqueta.innerHTML = "Tu Historia"
                    etiqueta.setAttribute("for", "tu-historia")
                }
            }
        }
        document.getElementsByClassName("titulo")[0].innerHTML = "Comparte tus sueños"
        let div = document.getElementsByClassName("formularios")[0]
        div.innerHTML = ""
        div.appendChild(formularioViejo)

    }
    else { //no hay nadie logueado, dejamos el formulario de iniciar sesión
        return
        
    }
}
//funcion que recoge historia del usuario y la guarda en localstorage
function publicarHistoria(){
    const titulo = document.getElementById("titulo-historia").value
    const historia = document.getElementById("tu-historia").value
    if (titulo.length < 10)  {
        alert("Titulo muy corto")
        return
    }
    if (historia.length < 30) {
        alert("Historia muy corta")
        return
    }
    if (!localStorage.getItem("Historias")) {
        var historias = []
        localStorage["Historias"] = JSON.stringify(historias)
    }
    let nuevaHistoria = {
        "Autor" : sessionStorage["usuarioActual"],
        "Titulo" : titulo,
        "Historia"  : historia
    }
    guardarHistoria = JSON.parse(localStorage["Historias"])
    guardarHistoria.push(nuevaHistoria)
    localStorage["Historias"] = JSON.stringify(guardarHistoria)
    alert("historia publicada correctamente")
}
// plasma todas las historias guardadas en localStorage en la pagina de sueños al cargar
function  cargarHistorias() {
    const arrayHistorias = JSON.parse(localStorage.getItem("Historias"))
    const muro = document.getElementById("muro-dinamico")
    for (i=0; i<arrayHistorias.length; i++) {
        const historia = arrayHistorias[i]
        let bloqueHistoria = document.createElement("section")
        let titulo = document.createElement("h3")
        let cuerpo = document.createElement("article")
        let creditos = document.createElement("cite")
        titulo.innerHTML = historia["Titulo"]
        cuerpo.innerHTML = historia["Historia"]
        creditos.innerHTML = "Subido por: " + historia["Autor"]
        bloqueHistoria.appendChild(titulo)
        bloqueHistoria.appendChild(cuerpo)
        bloqueHistoria.appendChild(creditos)
        bloqueHistoria.className = "elemento-muro"
        muro.appendChild(bloqueHistoria)
    }
}
// funcion que solo hace grande la foto clickada en la pagina de galeria
// y le pone un fondo oscuro detras, con otro click a la imagen vuelve a la normalidad
function destacar(id) {
    if (!document.getElementById("visor")){
        let visor = document.createElement("div")
        visor.id = "visor"
        visor.style.zIndex = "99999"
        visor.style.position = "fixed"
        visor.style.top = "0"
        visor.style.left = "0"
        visor.style.width = "100%"
        visor.style.height = "100%"
        visor.style.backgroundColor = "rgba(0,0,0,0.9)"
        visor.style.display = "flex"
        visor.style.justifyContent = "center"
        visor.style.alignItems = "center"
        let imagen = document.getElementById(id)
        let imagenClonada = imagen.cloneNode(false)
        
        imagenClonada.style.maxWidth = "20%"
        imagenClonada.style.height = "auto"
        visor.appendChild(imagenClonada)
        document.body.appendChild(visor)
    }
    else {
        document.getElementById("visor").remove()
    }
}
function modoNocturno() {
    if (document.body.id != "oscuro") {
        document.body.style.backgroundColor = "#131313"
        document.getElementsByTagName("main")[0].style.color = "#FFF"
        document.body.id = "oscuro"
    }
    else {
        document.body.style.backgroundColor = "#F1FADA"
        document.getElementsByTagName("main")[0].style.color = "#000"
        document.body.id = null
    }
}