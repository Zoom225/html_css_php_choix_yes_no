function validateForm() {
    var question = document.forms[0]["question"].value;
    if (question == "") {
        alert("Please answer the question");
        return false;
    }
}

function showProgressBar(choice) {
    var progressBar = choice.nextElementSibling;
    var span = progressBar.querySelector("span");
    progressBar.style.display = "inline-block";
    setTimeout(function() {
        span.style.width = "100%";
    }, 100);
}