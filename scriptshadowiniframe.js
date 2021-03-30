(function (){
var root = shadowwcontainer.attachShadow( { mode: "open" } )


//Inside element
var h1 = document.createElement( "h1" )
h1.textContent = "Inside Shadowww DOM"
h1.id = "inside"
root.appendChild( h1 )


  //example 2 button inside shadow
var buttonnn = document.createElement( "button" )
buttonnn.textContent = "buttonnn Inside Shadow DOM Сейчас в СМИ"
buttonnn.id = "Butonnninside"
root.appendChild( buttonnn )
  
  //example 2 button inside shadow
var buttonnn2 = document.createElement( "button" )
buttonnn2.textContent = "buttonnn2222 Inside Shadow DOM"
buttonnn2.id = "Butonnn22inside"
root.appendChild( buttonnn2 )
  
//Access inside element
console.log( shadowwcontainer.shadowRoot.querySelector( "#inside" ) )
})()
