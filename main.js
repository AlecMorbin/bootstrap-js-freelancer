function submitForm(event){
    event.preventDefault();
    console.log("Clicked");

    document.getElementById("result").innerHTML = `Il prezzo finale è di: ${calcolo()}`;
}

function calcolo(){
    //backend 1 ora =  20.5 EUR
    //frontend 1 ora = 15.3 EUR
    //analisi 1 ora  = 33.6 EUR
    
    let listaCodiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

    let ore =  document.getElementById("hours").value;
    let lavoro = document.getElementById("work").value;
    let result = 0;
    switch (lavoro) {
        case "backend":
            result = ore * 20.5;
            break;
        case "frontend":
            result = ore * 15.3;
            break;       
        case "analysis":
            result = ore * 33.6;
            break;
    }

    let discount  = document.getElementById("discount").value;

    let flag = false;
    for (let i = 0; i < listaCodiciSconto.length; i++) {   
        if (discount == listaCodiciSconto[i]) {
            flag = true;
            break;
        }
    }

    if (flag == true) {
        result = (result*75)/100;
    }
    else {
        alert("Il codice sconto non è valido");
    }

    return result.toFixed(2);
}