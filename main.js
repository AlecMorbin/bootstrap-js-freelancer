function submitForm(event){
    event.preventDefault();
    console.log("Clicked");

    document.getElementById("result").innerHTML = `Il prezzo finale è di: ${calcolo()}`;
}

const listaCodiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
var codiciUsati = new Array();

function calcolo(){
    //backend 1 ora =  20.5 EUR
    //frontend 1 ora = 15.3 EUR
    //analisi 1 ora  = 33.6 EUR
    

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

    result = discountCheck(result).toFixed(2) ;
    console.log(result);

    return result;
}

function discountCheck(result) {
    let discount  = document.getElementById("discount");

    if (discount.value.length > 0) {
       
        if (usedDiscountCheck(discount.value)==false) {
            alert("Questo codice è già stato inserito");
            return result;
        }
        let flag = false;
        for (let i = 0; i < listaCodiciSconto.length; i++) {   
            if (discount.value == listaCodiciSconto[i]) {
                flag = true;
                codiciUsati.push(listaCodiciSconto[i]);
                break;
            }
        }

        if (flag == true) {
            result = (result*75)/100;
        }
        else {
            discount.style.color = "red";
            alert("Il codice sconto non è valido");
        }
    }

    return result;
}

function usedDiscountCheck(code){
    console.log("Codice checked")
    console.log(code);
    console.log(codiciUsati);
    for (let i = 0; i < codiciUsati.length; i++) {
        if (code == codiciUsati[i]) {
            console.log("usato");
            return false;
        }        
    }
}