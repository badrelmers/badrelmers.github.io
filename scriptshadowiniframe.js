(function (){
var root = shadowwcontainer.attachShadow( { mode: "open" } )


//Inside element
var h1 = document.createElement( "h1" )
h1.textContent = "Inside Shadowww DOM"
h1.id = "inside"
root.appendChild( h1 )


  //example 2 button inside shadow
var buttonnn = document.createElement( "button" )
buttonnn.textContent = "buttonnn Inside Shadow DOM"
buttonnn.id = "Butonnninside"
root.appendChild( buttonnn )
  
  
//Access inside element
console.log( shadowwcontainer.shadowRoot.querySelector( "#inside" ) )
})()
