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

    let ore = document.getElementById("hours").value;
    let lavoro = document.getElementById("work").value;
    let result = 0;
    console.log(typeof ore);
    return ;
}