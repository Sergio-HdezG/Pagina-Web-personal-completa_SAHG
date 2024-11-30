function materialesplaca(){    
    idMaterial_orejeta = parseFloat(document.querySelector("#materiales_orejeta").value);
    
    switch (idMaterial_orejeta) {
        case 0:
            Ftu = 63000;
            Fty = 42000;
            Fcy = 45000;
        break;
        case 1:
            Ftu = 58000;
            Fty = 39000;
            Fcy = 42000;
        break;
        case 2:
            Ftu = 67000;
            Fty = 48000;
            Fcy = 51000;
        break;
        case 3:
            Ftu = 66000;
            Fty = 57000;
            Fcy = 57000;
        break;
        case 4:
            Ftu = 78000;
            Fty = 67000;
            Fcy = 70000;
        break;
        case 5:
            Ftu = 85000;
            Fty = 76000;
            Fcy = 80000;
        break;
    }
    document.querySelector("#ftu").value = Ftu;
    document.querySelector("#fty").value = Fty;
    document.querySelector("#fcy").value = Fcy;
}
function materialesujetador(){    
    idMaterial_sujetador = parseFloat(document.querySelector("#material_sujetador").value);
    
    switch (idMaterial_sujetador) {
        case 0:
            dhole = 0.164;
            sFtu = 55000;
            sFty = 32000;
            sFcy = 32000;
            Pstrength = 596;
        break;
        case 1:
            dhole = 0.196;
            sFtu = 55000;
            sFty = 32000;
            sFcy = 32000;
            Pstrength = 860;
        break;
        case 2:
            dhole = 0.229;
            sFtu = 55000;
            sFty = 32000;
            sFcy = 32000;
            Pstrength = 1555;
        break;
        case 3:
            dhole = 0.261;
            sFtu = 55000;
            sFty = 32000;
            sFcy = 32000;
            Pstrength = 2455;
        break;
        case 4:
            dhole = 0.196;
            sFtu = 66000;
            sFty = 56000;
            sFcy = 59000;
            Pstrength = 1230;
        break;
        case 5:
            dhole = 0.229;
            sFtu = 66000;
            sFty = 56000;
            sFcy = 59000;
            Pstrength = 2230;
        break;
        case 6:
            dhole = 0.261;
            sFtu = 66000;
            sFty = 56000;
            sFcy = 59000;
            Pstrength = 3520;
        break;
    }
    document.querySelector("#sftu").value = sFtu;
    document.querySelector("#sfty").value = sFty;
    document.querySelector("#sfcy").value = sFcy;
    document.querySelector("#dbarreno").value = dhole;
    document.querySelector("#Ppermitido").value = Pstrength;   
}

function calcular(){
    width = parseFloat(document.querySelector("#width").value);
    a = parseFloat(document.querySelector("#a").value);
    t1 = parseFloat(document.querySelector("#t1").value);
    t2 = parseFloat(document.querySelector("#t2").value);
    FF = parseFloat(document.querySelector("#ff").value);
    MS = parseFloat(document.querySelector('#ms').value);
    Paplicada = parseFloat(document.querySelector('#paplicada').value);

    kbr=parseFloat(document.querySelector('#kbr').value);

    C=parseFloat(document.querySelector('#C').value);
    Ftyx=Fty*0.85
    Ftux=Ftu*0.85

    a_dhole = a / dhole;
    width_dhole = width / dhole;
    Abr = t2 * dhole;
    At = (width - dhole)*t1;
    
    switch (idMaterial_orejeta) {
        case 0:
            kt = -0.0742*a_dhole + 0.9038;
        break;
        case 1:
            kt = -0.0667*a_dhole + 0.9333;
        break;
        case 2:
            kt = -0.0597*a_dhole  + 0.9286;
        break;
        case 3:
            kt = -0.0597*a_dhole  + 0.9286;
        break;
        case 4:
            kt = -0.0528*a_dhole + 0.9239;
        break;
        case 5:
            kt = -0.0403*a_dhole + 0.9214;
        break;
    }

    Ptu = kt*Ftu*(width - dhole)*t2;

    Pbru=kbr*Ftu*dhole*t2;

    Pu= Math.min(Ptu,Pbru);
    Py=C*(Ftyx/Ftux)*Pu;

    Pallow = Math.min(Ptu,Pstrength);
    ms1 = Pallow/(Paplicada*FF) - 1;

    Pallow2 = Math.min(Pbru,Pstrength);
    ms2 = Pallow2/(Paplicada*FF) - 1;

    Pallow3 = Math.min(Py,Pstrength);
    ms3= Pallow3/(Paplicada*FF) - 1;

    document.querySelector("#kt").value = kt.toFixed(2);

    document.querySelector("#ed_tension").value = a_dhole.toFixed(4);
    document.querySelector("#ed_bearing").value = a_dhole.toFixed(4);
    document.querySelector("#ed_yield").value = a_dhole.toFixed(4);
    document.querySelector("#ed1").value =  a_dhole.toFixed(4);
    document.querySelector("#w_dhole").value = width_dhole.toFixed(4);
    document.querySelector("#abr").value = Abr.toFixed(4);
    document.querySelector("#at").value = At.toFixed(4);    
    document.querySelector("#ptu").value = Ptu.toFixed(0);
    document.querySelector("#MOS").value = ms1.toFixed(3);
    document.querySelector("#pbru").value = Pbru.toFixed(0);
    document.querySelector("#MOS2").value = ms2.toFixed(3);
    document.querySelector("#py").value = Py.toFixed(0);
    document.querySelector("#MOS3").value = ms3.toFixed(3);

    if(ms1 < MS) {
        bg = '#FFC7CE';
        fn = '#9C0006';
        resultado = 'No aceptable';
    } else if (ms1 <= MS*1.5) {
        bg = '#FFEB9C';
        fn = '#9C5700';
        resultado = 'Aceptable';    
    } else if (ms1 > MS*1.5){
        bg = '#C6EFCE';
        fn = '#006100';
        resultado = 'Aceptable';             
    }

    if(ms2 < MS) {
        bg2 = '#FFC7CE';
        fn2 = '#9C0006';
        resultado2 = 'No aceptable';
    } else if (ms2 <= MS*1.5) {
        bg2 = '#FFEB9C';
        fn2 = '#9C5700';
        resultado2 = 'Aceptable';    
    } else if (ms2 > MS*1.5){
        bg2 = '#C6EFCE';
        fn2 = '#006100';
        resultado2 = 'Aceptable';             
    }

    if(ms3 < MS) {
        bg3 = '#FFC7CE';
        fn3 = '#9C0006';
        resultado3 = 'No aceptable';
    } else if (ms3 <= MS*1.5) {
        bg3 = '#FFEB9C';
        fn3 = '#9C5700';
        resultado3 = 'Aceptable';    
    } else if (ms3 > MS*1.5){
        bg3 = '#C6EFCE';
        fn3 = '#006100';
        resultado3 = 'Aceptable';             
    }
      
    document.querySelector('#resultado').style.background = bg;
    document.querySelector('#resultado').style.color = fn;
    document.querySelector('#resultado').value = resultado;
    
    document.querySelector('#resultado2').style.background = bg2;
    document.querySelector('#resultado2').style.color = fn2;
    document.querySelector('#resultado2').value = resultado2;

    document.querySelector('#resultado3').style.background = bg3;
    document.querySelector('#resultado3').style.color = fn3;
    document.querySelector('#resultado3').value = resultado3;
}