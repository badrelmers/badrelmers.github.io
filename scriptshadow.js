(function (){
var root = containerrr.attachShadow( { mode: "open" } )

//Inside element
var h1 = document.createElement( "h1" )
h1.textContent = "Insideeeee Shadow DOM"
h1.id = "inside"
root.appendChild( h1 )

//Access inside element
console.log( containerrr.shadowRoot.querySelector( "#inside" ) )
})()
