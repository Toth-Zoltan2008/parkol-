
function szamol(){

    const zonak = {
        "privát": 4000,
        "földszint": 1000,
        "2. emelt": 800,
        "3. emelet": 600
    };

    const MAX_NAPI_DIJ = 10000000; 

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
    const most = new Date;
    const oraMost = most.getHours();
    let ingyenesIdoszak;
    if (oraMost >=18 || oraMost < 8){
        ingyenesIdoszak = true;
    }
    else{
        ingyenesIdoszak = false;
    }
    lejarido = ora + oraMost;


    document.getElementById("eredmeny").style.display="block";
    document.getElementById("eredmeny").innerHTML=`
        <strong>Kiválasztott zóna:</strong> ${zona}<br>
        <strong>Jármű típusa:</strong> ${jarmuNev}<br>
        <strong>Parkolási idő:</strong> ${ora} óra ${perc} perc<br>
        <strong>Fizetendő végösszeg:</strong> ${vegosszeg} Ft<br>
        <strong>jelenlegi idő:</strong> ${oraMost}<br>
        <strong>lejárási idő:</strong> ${lejarido}<br>
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

