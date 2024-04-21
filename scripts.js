let availableKeywords = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'DIV',
    'ELEMENT'
];

var resultbox = document.querySelector("#result-box");
var inputBox = document.getElementById("input-box");

let timeoutId;

inputBox.addEventListener('input', (e) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {  //DEBOUNCING
        const input = e.target.value.toLowerCase();
        const result = input ? availableKeywords.filter(data => data.toLowerCase().includes(input)) : [];
        display(result);
    }, 500);
})

function display(result) {
    console.log("value");
    const content = result.map((list) => {
        return "<li>" + list + "</li>";
    })
    if (result.length > 0) {
        resultbox.classList.add("result-box");
    }
    else {
        resultbox.classList.remove("result-box");
    }
    resultbox.innerHTML = "<ul>" + content + "</ul>";
}
 