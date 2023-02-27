var newColor = "#00aa00";
var newText = 'New Text';
document.getElementById('custom-text').setAttribute('value', newText);
document.getElementById('custom-text').setAttribute('color', newColor);

/* update Data*/
function updateData(){
    var textName = document.getElementById('input-field-name').value;
    var textMessage = document.getElementById('input-field-message').value;
    var newColor = "#0000aa";
    var newText = 'Replce Text';
    console.log("Submit Data ==== \(textName), \(textMessage)");
    document.getElementById('custom-name').setAttribute('value', textName);
    document.getElementById('custom-name').setAttribute('color', newColor);
    document.getElementById('custom-text').setAttribute('value', textMessage);
    document.getElementById('custom-text').setAttribute('color', newColor);
}

/* submit*/
function submitRecord(){
    console.log("submit record");
}