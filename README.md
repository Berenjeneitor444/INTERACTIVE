# Web_Responsive
PaginaWebResponsiveParaLLMM
## Estructura carpetes
El proyecte está separat entre HTML CSS y MULTIMEDIA per a una organització senzilla
## Tecnologies
+ He fet servir iloveimg.com per edició d'imatges
+ w3schools per recerca d'informació sobre webs responsive
+ svbackgrounds.com pel fons de la web
+ les fotos y videos les he agafades de diferents llocs web
+ VSCode per la creació de la pagina
+ Chrome i devtools per fer proves

També cal recalcar que aquesta web es una parodia humoristica del fenomen d'internet [this man](https://www.thisman.org/), el qual es basa en un rostré humà el qual moltes persones afirmen haveure somniat amb aquesta entidat 
![This man](https://i0.wp.com/www.thisman.org/wp-content/uploads/2023/02/thisman_small.jpg?fit=200%2C235&ssl=1)
## Funcionalitats
La funcionalitat d'aquesta web es entretenir, només es text amb imatges gracioses.
Però he aplicat diseny responsive per a que tot el contingut estigui ben representat y ordenat.
He fet servir diseny grid per situar els elements
També els grid items els vaig declarar com a flex containers /*Alguns*/ per a poder situar comodament tots els items
i he fet servir dos media break points, un per a viewports de menys de 1000 px d'ample, i per tots els altres, l'unica diferencia entre els dos es que el de menys de 1000px l'he posat perque els items es col·loquin en vertical /*Una columna*/amb disseny grid, i amb l'altre en horizontal /*Tres columnes*/. Despres tota la resta del css son per a regles compartides.
![image](https://github.com/Berenjeneitor444/Web_Responsive/assets/104897753/39866ed6-3438-485c-a1b1-15937cd954e3)
![image](https://github.com/Berenjeneitor444/Web_Responsive/assets/104897753/6f99ea7e-9669-4fa0-8826-9407498f7133)
## Divisió de tasques
L'he feta jo tot sol, disculpa el retràs, m'ha faltat un poc de temps i m'he passat tota la nit sense dormir fins ara per acabar-la, perque he treballat tot el pont, i avui tambè.

# Part JS

## Formulari

He fet uns quants formularis, per enviar un email, encara que no funciona.
També un per crear un compte, per fer login, y un altre per penjar histories de forma dinamica a sa web

Totes les dades d'aquests 3 ultims de l'usuari es guarden en localstorage, també he fet servir sessionStorage per guardar
si algun usuari esta logetjat y fer servir aquesta informacio per carregar el formulari de penjar una historia

## Menu

He fet un menu que s'amaga y es mostra amb un botó, a mes a mes el fons es torna fosc quan apareix

## Canvi d'estil

En el menú hi ha un botó que canvia a mode fosc o clar

## Imatges

He fet una galeria a la pagina galeria, que quan pitjes una imatge es fa gran y el fons es fa fosc

## Carrega dinamica

la pagina de sueños es construeix tot sola en base a dades de local storage, on he ficat una llista amb totes les histories recollides per formulari, per ficar dades en localstorage he fet servir json per convertir objectes a string i viceversa

## Notificacions

les notificacions surten per exemple en alerts per validar els formularis o quan alguna acció s'ha pogut fer o no

## Notes adicionals

He cambiat els estils respecte a la darrera entrega y he refactoritzat una mica el css, ara está tot amb flex,
he llevat el grid, m'agradaria haver-ho deixat millor pero
no he tingut més hores, així que es un poc fea :C

## Divisió de feina

Ho he fet jo tot