const container = document.querySelector("#container");
container.style.color = "blue";
// container.textContent = "Hello World!";
container.style.cssText = "display: flex; width: 500px; height: 500px; border: solid 1px; flex-wrap: wrap; justify-content: center; align-content: center;";

// container.style.cssText = "width: 500px; height: 500px; border: solid;";
// container.style[""]



function newPixel(n) {
    
    for (let i = 0; i < n; i++) {
        const column = document.createElement("div");
        column.style.cssText = "border: solid blue 2px; padding 1px; display: flex; flex: 1 1 0";
        column.setAttribute("class", "column");
        // column.style.cssText = "border: solid blue 2px; padding 1px";
        container.appendChild(column);

        for (let j = 1; j <= n; j++) {
            let pixel = document.createElement("div");
            pixel.style.cssText = "border: solid; padding: 10px; margin: 1px; flex-shrink: 1";
            pixel.setAttribute("class", "pixel");
            column.appendChild(pixel);
        }
    }
}

function addPixel2(n) {
    const size = Math.trunc((500 - n*2) / n) ;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            let pixel = document.createElement("div");
            // pixel.style.cssText = `border: solid; flex-shrink: 1; width:${n} px`;
            pixel.setAttribute("class", "pixel");
            pixel.setAttribute("style", `border: solid 1px; width: ${size}px; height: ${size}px`);
            container.appendChild(pixel);
        }
    }
    console.log(size);
}

// addPixel2(5);

const inputContainer = document.querySelector('#inputContainer');

const text = document.createElement('p');
const inputNumber = document.createElement('input');
const btn = document.createElement('button');

text.textContent = "Enter number of squares per side";
btn.textContent = "Submit number";

inputContainer.appendChild(text);
inputContainer.appendChild(inputNumber);
inputContainer.appendChild(btn);

// btn.setAttribute('placeholder', "Less 50");

        

btn.addEventListener('click', () => {
    const number = inputNumber.value;
    inputNumber.value = '';
    container.replaceChildren();
    if (number >= 50) {
        alert('Less than 50!');
    } else {
        addPixel2(number);
        sketch();
    }
    inputNumber.focus();
})



// add pixel to row
function addPixel(n, row) {
    for (let i = 1; i <= n; i++) {
        let pixel = document.createElement("div");
        pixel.style.cssText = 
            "border: solid; margin: 1px; padding: 10px";
        pixel.setAttribute("class", "pixel");
        row.appendChild(pixel);
    }
};


function addRow(n) {
    for (let i = 1; i <= n; i++) {
        const row = document.createElement("div");
        row.style.cssText = "display: flex; flex-direction: column";
        addPixel(n, row);
        container.appendChild(row);
    }
}


function sketch() {
    const pixel = document.querySelectorAll(".pixel");
    pixel.forEach((p) => {
        p.addEventListener('mouseover', e => {
            e.target.style.background = "green";
        });
    })
}



