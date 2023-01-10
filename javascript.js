let wörter =
    [
        "Äcker", "Äonen", "Äpfel", "Bäume", "Dämon", "Fäden", "Fähre", "Gänge", "Hähne", "Jäger", "Käfig", "Kälte", "Käfig", "Länge", "Mägen", "Pläne", "Ränge", "Säcke", "Täler", "Zäune"
    ]

let wort = (wörter[Math.floor(Math.random() * wörter.length)]).toUpperCase();

let trys = 0;

let container = document.getElementsByClassName("container")[0];
container.onkeyup = function (e)
{
    let target = e.srcElement;
    let maxLength = parseInt(target.attributes["maxlength"].value, 10);
    let myLength = target.value.length;
    if (myLength >= maxLength)
    {
        let next = target;
        while (next = next.nextElementSibling)
        {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input")
            {
                next.focus();
                break;
            }
        }
    }
}

function check()
{
    let holder = document.createElement("div");
    let checked = document.getElementById("checked");
    checked.appendChild(holder);

    let checkInput1 = document.getElementById("input1");
    let checkInput2 = document.getElementById("input2");
    let checkInput3 = document.getElementById("input3");
    let checkInput4 = document.getElementById("input4");
    let checkInput5 = document.getElementById("input5");

    let checkInput = (checkInput1.value + checkInput2.value + checkInput3.value + checkInput4.value + checkInput5.value).toUpperCase();




    if (checkInput.length === 5)
    {
        for (let i = 0; i < checkInput.length; i++)
        {
            let selected = false;
            if (checkInput[i] === wort[i])
            {
                let inpute = document.createElement("p");
                inpute.setAttribute("id", "green");
                inpute.setAttribute("class", "checked");
                holder.appendChild(inpute);
                inpute.innerText = checkInput[i];
                selected = true;
            }

            else
            {
                for (let j = 0; j < checkInput.length; j++)
                {
                    if (checkInput[i] === wort[j])
                    {
                        let inpute = document.createElement("p");
                        inpute.setAttribute("id", "yellow");
                        inpute.setAttribute("class", "checked");
                        holder.appendChild(inpute);
                        inpute.innerText = checkInput[i];
                        selected = true;
                        j = checkInput.length;
                    }

                    else if (selected === false)
                    {
                        let inpute = document.createElement("p");
                        inpute.setAttribute("id", "grey");
                        inpute.setAttribute("class", "checked");
                        holder.appendChild(inpute);
                        inpute.innerText = checkInput[i];
                        selected = true;
                    }
                }
            }
        }
    }
    trys++;
}


let amount = document.createElement("p");
let body = document.getElementsByTagName("body");
amount.setAttribute("id", "amount");
amount.setAttribute("class", "checked");
body.appendChild(amount);
inpute.innerText = "Amount of trys: " + trys;