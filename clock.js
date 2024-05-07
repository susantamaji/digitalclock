function clock(){
    
    // access the hours/minute/seconds
    let hours=document.getElementById('hours')
    let minutes=document.getElementById('minutes')
    let second=document.getElementById('seconds')
    let period=document.getElementById('period')

    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();

// jakhon AM or PM takhon dhakanaor jano
    let ampm= h>=12 ? "PM" : "AM";

// second menutes and hours rr 12tar por 1  bosanor jano condition
    if(h>12){
        h=h-12
    }    

// second menutes and hours rr agaa 0 bosanor jano condition
    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(h<10)?"0"+s:s;

// show korar jano
    hours.innerHTML=h;
    minutes.innerHTML=m;
    second.innerHTML=s;
    period.innerHTML=ampm;
};
setInterval(clock,1000);