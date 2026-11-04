document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your form submitted successfully.");

    document.getElementById("message").innerHTML =
        "Thank you! Your details have been submitted.";

    document.getElementById("myForm").reset();

});