
const audio1 = new Audio("c3-95007.mp3");
const audio2 = new Audio("c6-102822.mp3");
const audio3 = new Audio("f6-102819.mp3");
const audio4 = new Audio("fa-78409.mp3");
const audio5 = new Audio("g6-82014.mp3");
const audio6 = new Audio("sol-101774.mp3");

function show(x) {
  if (document.getElementById){
   document.getElementById(x).style.visibility = "visible";
   
 }
}
  
// blink "off" state
function hide(x) {
 if (document.getElementById){
   document.getElementById(x).style.visibility = "hidden";
 }
}


 document.getElementById ("key1").innerhtml
document.getElementById("key1").addEventListener("click", function(){

   audio1.play(); })

   document.getElementById("key2").addEventListener("click", function(){
    audio2.play(); })

    document.getElementById("key3").addEventListener("click", function(){
        audio3.play(); })

        document.getElementById("key4").addEventListener("click", function(){
            audio4.play(); })

            document.getElementById("key5").addEventListener("click", function(){
                audio5.play(); })

                document.getElementById("key6").addEventListener("click", function(){
                    audio6.play(); })
                
                    window.addEventListener(
                        "keydown",
                        (event) => {
                          if (event.defaultPrevented) {
                            return; // Do nothing if the event was already processed
                          }
                      
                          switch (event.key) {
                            case "a":
                              hide("key1")
                              setTimeout("show(`key1`)",200)
                              audio1.play()
                              break;
                            case "d":
                              hide("key2")
                              setTimeout("show(`key2`)",200)
                              audio2.play()
                              break;
                            case "g":
                              hide("key3")
                              setTimeout("show(`key3`)",200)
                              audio3.play()
                              break;
                            case "j":
                              hide("key4")
                              setTimeout("show(`key4`)",200)
                              audio4.play()
                              break;
                            case "l":
                              hide("key5")
                              setTimeout("show(`key5`)",200)
                              audio5.play()
                              break;
                            case "p":
                              hide("key6")
                              setTimeout("show(`key6`)",200)
                              audio6.play()
                              break;
                            default:
                              return; // Quit when this doesn't handle the key event.
                          }
                      
                          // Cancel the default action to avoid it being handled twice
                          event.preventDefault();
                        },
                        true,
                      );