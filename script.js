const button = document.querySelector('#btn-bold');

button.addEventListener('click', () => {
    const textArea = document.querySelector('#text-area');
    const textValue = textArea.value;

    //Textarea to resize based on content length
    if (textArea.scrollHeight >= textArea.clientHeight) {
        textArea.style.height = "1px";
        textArea.style.height = (25+textArea.scrollHeight)+"px";
    }
    else {
        textArea.style.height = "1px";
        textArea.style.height = "375px";
    }

    //Refreshes the content on the right. Otherwise it concats same text everytime user clicks the button
    document.querySelector('#bolded').textContent = "";

    //Pass bold text to textbox on the right
    makeBold(textValue);
});


function makeBold(str) {
    const selectedBoldCount = document.querySelector('#bold-count').value;
    const resultArea = document.querySelector('#bolded');
    let arrStr = str.split(/(\s+)/);

    //check if selected count is 'half' or a number
    if (selectedBoldCount === 'Half') {
        arrStr.forEach(e => {
            let length = e.length;
            var bold = document.createElement('b');

            //check if next word is a whitespace
            if (e.trim() == "")
                resultArea.append(e);
            else {    
                bold.textContent = e.slice(0, length / 2);

                resultArea.appendChild(bold);
                resultArea.append(e.slice(length / 2));
            }
        });
    }
    else {
        arrStr.forEach(e => {
            let length = e.length;
            var bold = document.createElement('b');
            let countInt = parseInt(selectedBoldCount);

            //check if next word is a whitespace
            if (e.trim() == "")
                resultArea.append(e);

            //check if length of current word is less than or equal to selected count value
            else if (length <= countInt) {
                bold.textContent = e;
                resultArea.appendChild(bold);
            }
            else {
                bold.textContent = e.slice(0, countInt);
                resultArea.appendChild(bold);
                resultArea.append(e.slice(countInt));
            }
        });
    }
}
