

var gamer_name,gamer_health,computer_health ;
gamer_name=document.getElementById("gamer_name");
gamer_health=document.getElementById("gamer_health");
g_health=document.getElementById("g_health");
c_health=document.getElementById("c_health");
computer_health=document.getElementById("computer_health");
gamer_ammo=document.getElementById("gamer_ammo");
computer_ammo=document.getElementById("computer_ammo");
g_ammo=document.getElementById("g_ammo");
c_ammo=document.getElementById("c_ammo");

butonlar = document.getElementById("butonlar")
attack= document.getElementById("attack")

win=document.getElementById("win")
lose=document.getElementById("lose")

girdi=prompt("Savaş Oyununa Hoş geldiniz! İsminiz Nedir?")
gamer_name.innerText=girdi



var choices = ["attack","defence","reload","heal"]
var c_choice, c_damage, g_damage
function saldir(){
  butonlar.style.display="none";
  c_choice = choices[Math.floor(Math.random()*4)] //butona bastığım anda tekrardan belirlemesi lazım.
  if (c_ammo.innerText<=0){  //ekrandan aldığın bilgileri .innerText ile aldığını unutma!
    while (c_choice==="attack"){c_choice = choices[Math.floor(Math.random()*4)]}
  }

  if (c_choice==="attack"){
    c_damage=Number(Math.floor(Math.random()*250+1))
    g_damage=Number(Math.floor(Math.random()*250+1))
    computer_health.style.backgroundColor="red"
    gamer_health.style.backgroundColor="red"
    c_health.innerText-=g_damage
    g_health.innerText-=c_damage
    g_ammo.innerText-=1
    c_ammo.innerText-=1
    setTimeout(function(){butonlar.style.display="block";computer_health.style.backgroundColor="white";gamer_health.style.backgroundColor="white";},2000)
  }
  else if (c_choice==="defence"){
    computer_health.style.backgroundColor="Blue"
    g_ammo.innerText-=1
    setTimeout(function(){butonlar.style.display="block"; computer_health.style.backgroundColor="white"},1500)
  }
  else if (c_choice==="reload"){
    g_damage=Number(Math.floor(Math.random()*250+1))
    c_health.innerText-=g_damage
    computer_health.style.backgroundColor="red";
    computer_ammo.style.backgroundColor="sandybrown";
    g_ammo.innerText-=1
    c_ammo.innerText = Number(c_ammo.innerText)+1 //ekrandan aldığım tüm bilgiler string old için ve toplamada sıkıntı string toplamasına dönüştüğü için buraya dikkat etmek gerek
    setTimeout(function (){butonlar.style.display="block"; computer_health.style.backgroundColor="white"; computer_ammo.style.backgroundColor="white"},2000)
  }
  else if (c_choice==="heal"){
    g_damage=Number(Math.floor(Math.random()*250+1))
    let heal=Number(Math.floor(Math.random()*150+1))
    g_ammo.innerText-=1
    computer_health.style.backgroundColor="greenYellow"
    c_health.innerText= Number(c_health.innerText) + heal
    setTimeout(function (){computer_health.style.backgroundColor="red"; c_health.innerText-=g_damage},1000)
    setTimeout(function (){butonlar.style.display="block"; computer_health.style.backgroundColor="white"},2000)
  }

  if (g_ammo.innerText==0){attack.style.display="none"}
  if (c_health.innerText<=0){setTimeout(function (){win.style.display="block"},800)}
  if (g_health.innerText<=0){setTimeout(function (){lose.style.display="block"},800)}

}
function savun(){
  butonlar.style.display="none";
  c_choice = choices[Math.floor(Math.random()*4)]
  if (c_ammo.innerText<=0){
    while (c_choice==="attack"){c_choice = choices[Math.floor(Math.random()*4)]}
  }

  if (c_choice==="attack"){
    gamer_health.style.backgroundColor="blue"
    c_ammo.innerText-=1
    setTimeout(function (){butonlar.style.display="block";gamer_health.style.backgroundColor="white"},2000)
  }
  if (c_choice==="defence"){
    gamer_health.style.backgroundColor="blue"
    computer_health.style.backgroundColor="blue"
    setTimeout(function (){butonlar.style.display="block";gamer_health.style.backgroundColor="white";computer_health.style.backgroundColor="white"},2000)
  }
  if (c_choice==="reload"){
    gamer_health.style.backgroundColor="blue"
    computer_ammo.style.backgroundColor="sandybrown"
    c_ammo.innerText=Number(c_ammo.innerText)+1
    setTimeout(function (){butonlar.style.display="block";gamer_health.style.backgroundColor="white";computer_ammo.style.backgroundColor="white"},2000)
  }
  if (c_choice==="heal"){
    gamer_health.style.backgroundColor="blue"
    computer_health.style.backgroundColor="lightGreen"
    let heal=Number(Math.floor(Math.random()*150+1))
    c_health.innerText =Number(c_health.innerText) +heal
    setTimeout(function (){butonlar.style.display="block";gamer_health.style.backgroundColor="white";computer_health.style.backgroundColor="white"},2000)
  }

  if (c_health.innerText<=0){setTimeout(function (){win.style.display="block"},800)}
  if (g_health.innerText<=0){setTimeout(function (){lose.style.display="block"},800)}
}
function mermi(){
  butonlar.style.display="none";
  c_choice = choices[Math.floor(Math.random()*4)]
  if (c_ammo.innerText<=0){
    while (c_choice==="attack"){c_choice = choices[Math.floor(Math.random()*4)]}
  }

  if (c_choice==="attack"){
    g_ammo.innerText=Number(g_ammo.innerText)+1
    gamer_ammo.style.backgroundColor="sandybrown"
    gamer_health.style.backgroundColor="red"
    c_damage=Number(Math.floor(Math.random()*250+1))
    g_health.innerText-=c_damage
    setTimeout(function (){butonlar.style.display="block"; gamer_health.style.backgroundColor="white"; gamer_ammo.style.backgroundColor="white"},2000)
  }
  else if (c_choice==="defence"){
    g_ammo.innerText=Number(g_ammo.innerText)+1
    gamer_ammo.style.backgroundColor="sandybrown"
    computer_health.style.backgroundColor="blue"
    setTimeout(function (){butonlar.style.display="block"; computer_health.style.backgroundColor="white"; gamer_ammo.style.backgroundColor="white"},2000)
  }
  else if (c_choice==="reload"){
    g_ammo.innerText=Number(g_ammo.innerText)+1
    gamer_ammo.style.backgroundColor="sandybrown"
    c_ammo.innerText=Number(c_ammo.innerText)+1
    computer_ammo.style.backgroundColor="sandybrown"
    setTimeout(function (){butonlar.style.display="block"; gamer_ammo.style.backgroundColor="white"; computer_ammo.style.backgroundColor="white"},2000)
  }
  else if (c_choice==="heal"){
    g_ammo.innerText=Number(g_ammo.innerText)+1
    gamer_ammo.style.backgroundColor="sandybrown"
    let heal=Number(Math.floor(Math.random()*150+1))
    computer_health.style.backgroundColor="lightGreen"
    c_health.innerText= Number(c_health.innerText)+heal
    setTimeout(function (){butonlar.style.display="block"; gamer_ammo.style.backgroundColor="white";computer_health.style.backgroundColor="white"},2000)
  }

  attack.style.display="block"
  if (c_health.innerText<=0){setTimeout(function (){win.style.display="block"},800)}
  if (g_health.innerText<=0){setTimeout(function (){lose.style.display="block"},800)}
}
function iyiles(){
  butonlar.style.display="none";
  c_choice = choices[Math.floor(Math.random()*4)]
  if (c_ammo.innerText<=0){
    while (c_choice==="attack"){c_choice = choices[Math.floor(Math.random()*4)]}
  }

  if (c_choice==="attack"){
    c_damage=Number(Math.floor(Math.random()*250+1))
    let heal=Number(Math.floor(Math.random()*150+1))
    g_health.innerText = Number(g_health.innerText)+heal
    gamer_health.style.backgroundColor="lightGreen"
    setTimeout(function (){gamer_health.style.backgroundColor="red"; g_health.innerText-=c_damage},1000)
    setTimeout(function (){butonlar.style.display="block";gamer_health.style.backgroundColor="white"},2000)
  }
  if (c_choice==="defence"){
    let heal=Number(Math.floor(Math.random()*150+1))
    g_health.innerText = Number(g_health.innerText)+heal
    gamer_health.style.backgroundColor="lightGreen"
    computer_health.style.backgroundColor="blue"
    setTimeout(function (){butonlar.style.display="block";gamer_health.style.backgroundColor="white";computer_health.style.backgroundColor="white"},2000)
  }
  if (c_choice==="reload"){
    let heal=Number(Math.floor(Math.random()*150+1))
    g_health.innerText = Number(g_health.innerText)+heal
    gamer_health.style.backgroundColor="lightGreen"
    computer_ammo.style.backgroundColor="sandyBrown"
    c_ammo.innerText=Number(c_ammo.innerText)+1
    setTimeout(function (){butonlar.style.display="block";gamer_health.style.backgroundColor="white"; computer_ammo.style.backgroundColor="white"},2000)
  }
  if (c_choice==="heal"){
    let c_heal=Number(Math.floor(Math.random()*150+1))
    let g_heal=Number(Math.floor(Math.random()*150+1))
    g_health.innerText = Number(g_health.innerText)+g_heal
    c_health.innerText = Number(c_health.innerText)+c_heal
    gamer_health.style.backgroundColor="lightGreen"
    computer_health.style.backgroundColor="lightGreen"
    setTimeout(function (){butonlar.style.display="block";gamer_health.style.backgroundColor="white";computer_health.style.backgroundColor="white"},2000)
  }

  if (c_health.innerText<=0){setTimeout(function (){win.style.display="block"},800)}
  if (g_health.innerText<=0){setTimeout(function (){lose.style.display="block"},800)}
}




//// sanırım direkt fonksiyonlar üzerinden gitmem gerek çünkü ben butona bastığım anda bütün işlevlerin gerçekleşmesi gerek, while ile yapamam çünkü while durmaz beni beklemez
// var choices = ["attack","defence","reload","heal"]
// while (true){   //oyun sürekli tekrar edicek ve her oyun başında sürekli olarak yapacağım şeyleri while'ın başına koymalıyım. Önce ben BİR TANE input sonra bilgisayar bir tane input vermeli ve sonra gerekli prosedürlere göre işlemler gerçekleşmeli. (olay sürekli olması değil butonlara basılınca olmasında, butonlara basmayı da display ile sınırlandırmam gerek!)
//   var c_choice = choices[Math.floor(Math.random()*4)]
//   if (p_choice===""){}
//
//   break
// }

// daha clean ve anlaşılabilir bir kod yazmak için daha fazla fonksiyon kullanmak gerek.
// mesela attack kısmını bir sürü yerde kullanıyorum ve ben 1 fonksiyonu değişitirerek tüm attack'lere etki edebilmem gerek yoksa tek tek değiştirmek zorunda kalırım
