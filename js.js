// - **Amailoyt!**
// // 1. Kiritilgan son
// //    100 dan katta yoki kichikligini aniqlab bersin.

// let son = +prompt(`son kitgazing `," ")

// if(son => 100 ){document.write(`siz kiritgan son ${son} => 100 dan kata `)}
// else if(son <= 100 ){document.write(`siz kiritgan son ${son} =>  100 dan kichik `)}
// else{document.write("xato malumot kirazdingiz ")}



// // 2. Kiritilgan son
// //    juft va 100dan katta bo'lsa "Tog'ri" degan so'z chiqarsin
// //    aks holda "Noto'g'ri" degan so'zni chiqarsin.

// let son = +prompt(`son kitgazing `," ")

// if(son % 2 == 0 && son > 100  ){document.write(`kiritgan son ${son}  => Tog'ri`)}
// // else if(son <= 100 ){document.write(`siz kiritgan son ${son} =>  100 dan kichik `)}
// else{document.write("Noto'g'ri")}




// // 3. Parol kiritilsin
// //    kiritilgan parol "soff2023" ga teng bo'lsa "Hush kelibsiz"
// //    aks holda parol noto'g'ri degan so'zni chiqarib bering


// let parol = prompt("parol ,soff2023, kirgazing "," ")

// if(parol === "soff2023" ){
//    document.write(`Hush kelibsiz : `)
// }else{document.write(`parol noto'g'ri `)}





// // 4. Ikta son kiritlsin
// //    Kiritilgan sonlar Ikkisi ham Toq Yoki Juft ekanligini aniqlang yoki
// //    misol uchun: 5 va 7 => natija: ikkisi ham toq
// //    misol uchun: 56 va 24 => natija: ikkisi ham Juft
// //    misol uchun: 56 va 23 => natija: Juft ham Toq ham bor

// let son1 = +prompt(`son kitgazing `," ")
// let son2 = +prompt(`son kitgazing `," ")

// if(son1 % 2 === 0 && son2 % 2 === 0){document.write(`${son1 } => ${son2} natija: ikkisi ham Juft`)}
// else if(son1 % 2 === 1 && son2 % 2 === 1){document.write(`${son1 } => ${son2} natija: ikkisi ham toq`)}
// else if(son1 % 2 === 1 || son2 % 2 === 1 && son1 % 3 === 0 || son2 % 3 === 0){document.write(`${son1 } => ${son2} jujt ham toq ham bor`)}
// else{" hato malumot kirgazdindiz raqam kirgazing "}





// // 5. Ikta son kiritlsin
// //    Kiritilgan sonlarning juftisini 3 ga oshirib, toq sonini esa
// //    3 karra kamaytirib beruvchi dastur tuzib bering.
// //    misol uchun: 4 va 3 => natija: 7 va -6

// let son1 = +prompt(`son kitgazing `," ")
// let son2 = +prompt(`son kitgazing `," ")

// if(son1 % 2 == 0 || son1 % 3 == 0){
//    document.write(son1 + 3, ` => `,son1-10)
// } 
// else if(son2 % 2 == 0 || son2 % 3 == 0){
//    document.write( `${son2+3}`,` => `,`-${son2-10}` )
// }else{"xatao"}


// - **UYGA VAZIFA!**
//     - 1-masala
//     Ikki xonali son berilgan. console oynasida birinchi o'nlik xonasidagi son, ikkinchi
//     birlar xonasidagi son chiqarilsin va raqamlar yig'indisi xisoblansin
// let x = +prompt("2 honali sonkirgazing", " ")

//  let onlik = Math.floor(x/10)
//  let birlik = x % 10
//  document.write(`onlik hona =>  ${ onlik}  birlik hona => ${birlik} <br> Yigindi ===  ${ onlik+birlik}`)


//     - 2-masala
//     Ikki xonali son berilgan. Uning raqamlar o'rni almashganda son hosil qilib bering. m-u: 25 в‡’ 52, 61 в‡’ 16, 94 в‡’ 49, v.k

   // let x = +prompt("2 honali sonkirgazing", " ")
   //  let onlik = Math.floor(x/10)
   //  let birlik = x % 10
   //  document.write(onlik,birlik ,"<br>")
   //  let a = birlik;
   //  let b = onlik;
   // document.write(a,b)
  


//     - 3-masala
//     A kesma va B kesma berilgan. A kesma ichida B kesmadan necha marta joylashtirish mumkin?

//  let a = +prompt("a kesmani uzunligini kirgazing "," ")
//  let b = +prompt("b kesmani uzunligini kirgazing "," ")

//  let x = a/b;
//  Math.floor(x)
//  document.write(x)

//     - 4-masala
//     4 xonali sonlarni 1000lar 100lar 10lar va birlar xonasidagi sonni chiqaradigan dastur yasab bering.
//     - Yuqoridagi misollardan tashqari darsda koвЂ™rilgan misollarni yana qayta oвЂ™zi mustaqil yozib tahlil qilib kelish.


// let x = +prompt("4 honali sonkirgazing", " ")
//    //  let onlik = Math.floor(x/10)
//     let minglik = Math.floor(x / 1000)
//     let yuzlar = Math.floor(x / 100%10)
//     let onlar = Math.floor(x / 10%10)
//     let birlar = Math.floor(x %10)
//   document.write(`Minglik honasi => ${minglik} Yuzlik => ${yuzlar}  O'nlik => ${onlar}  Birlik => ${birlar}`)
   
    
//     QoвЂ™shimcha Ustoz tomonida boshqa misollar ham boвЂ™lsa berilishi tafsiya beriladi.




