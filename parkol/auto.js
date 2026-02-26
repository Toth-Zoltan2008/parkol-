
function szamol(){

    const zonak = {
        "A": 1000,
        "B": 800,
        "C": 600
    };

    const MAX_NAPI_DIJ = 300000; 

    let zona = document.getElementById("zona").value;
    let alapdij = zonak[zona];

    let jarmuSzorzo = parseFloat(document.getElementById("jarmu").value);
    let jarmuNev = document.getElementById("jarmu").selectedOptions[0].text;

    let ora = parseInt(document.getElementById("ora").value) || 0;
    let perc = parseInt(document.getElementById("perc").value) || 0;

    let teljesIdo = ora + (perc/60);
    let teljesOrak = Math.floor(teljesIdo);
    let maradek = teljesIdo - teljesOrak;

    let aktualisOradij = alapdij;
    let vegosszeg = 0;


    for(let i=0; i<teljesOrak; i++){
        vegosszeg += aktualisOradij;
        aktualisOradij *= 1.10;
    }


    if(maradek > 0){
        vegosszeg += aktualisOradij * maradek;
    }


    vegosszeg *= jarmuSzorzo;


    if(document.getElementById("berlet").checked){
        vegosszeg *= 0.8;
    }

      if(vegosszeg > MAX_NAPI_DIJ){
        vegosszeg = MAX_NAPI_DIJ;
    }

    vegosszeg = Math.round(vegosszeg);


    document.getElementById("eredmeny").style.display="block";
    document.getElementById("eredmeny").innerHTML=`
        <strong>Kiválasztott zóna:</strong> ${zona}<br>
        <strong>Jármű típusa:</strong> ${jarmuNev}<br>
        <strong>Parkolási idő:</strong> ${ora} óra ${perc} perc<br>
        <strong>Fizetendő végösszeg:</strong> ${vegosszeg} Ft
    `;


    document.getElementById("jegy").style.display="block";
    document.getElementById("jegy").innerText=
`------ PARKOLÓJEGY ------
Zóna: ${zona}
Jármű: ${jarmuNev}
Idő: ${ora} óra ${perc} perc
Fizetendő: ${vegosszeg} Ft
--------------------------`;
}

