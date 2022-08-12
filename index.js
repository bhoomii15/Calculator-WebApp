let screen = document.getElementById('screen');
//to get all the buttons
buttons = document.querySelectorAll('button');
//empty value of input
let screenValue = '';
//for the buttons to function properly
for (item of buttons) {
    item.addEventListener('click', (e) => {
        // e. target is the button which gets clicked and innerText gets us the text of that particular button
        buttonText = e.target.innerText;
        //to check whether its working or not
        console.log('Button text is', buttonText);
        //now we'll write the logic
        if (buttonText == 'X') {
            buttonText = '*';
            //we add the += so as there can be multiple inputs of *
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = '=';
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            //here the whole expression has to be evaluated
            screen.value = eval(screenValue);
        }
        else {
            // for when no function is added
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
