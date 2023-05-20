// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


let errorPara =  document.getElementById("error");

function purchase() {
    errorPara.textContent = "Something went wrong, please try again!";
    // console.log("Button clicked!");
}