//UYGA VAZIFA!**
//     1. Foydalanuvchi biror bir son kiritadi. Dasturingiz kiritilgan son toq yoki juft ekanligini aniqlashi kerak.

// let birirbirSon = +prompt("birortason kirgazing " , "")

// if(birirbirSon % 2 === 0){
//    document.write(`sizkirgizgan ${birirbirSon} juft son `)
// }else{
//    document.write(`sizkirgizgan ${birirbirSon} toq son `)
// }

//     2. Foydalanuvchi 3 ta son kiritadi. Shu uchta sonning ichidan eng kattasini ekranga chiqaring.

// let birinchiSon = prompt("birinchiSon ni kirgazing " , "")
// let ikkinchiSon = prompt("ikkinchiSon ni kirgazing " , "")
// let uchinchiSon = prompt("uchinchiSon ni kirgazing " , "")

// if(birinchiSon >= ikkinchiSon && birinchiSon>=uchinchiSon){
//    document.write(`siz kiritgan ${birinchiSon}  eng kata` )
// }else if(ikkinchiSon >= birinchiSon && ikkinchiSon>=uchinchiSon){
//    document.write(`siz kiritgan ${ikkinchiSon}  eng kata`)
// } else if(uchinchiSon >= birinchiSon && uchinchiSon>=ikkinchiSon){
//    document.write(`siz kiritgan ${uchinchiSon}  eng kata`)
// }else{
//    document.write("xato")
// }


//     3. Foydalanuvchi biror son kiritadi. Kiritilgan son 3 ga bo'linsa ekranga "FIZZ", 5 ga bo'linsa "Buzz", 3ga va 5ga bo'linsa esa "FIZZBUZZ" degan yozuv chiqsin.
  
// let birirbirSon = +prompt("birortason kirgazing " , "")

// if(birirbirSon % 3 === 0 && birirbirSon % 5 === 0){
//   document.write("FIZZBUZZ")
// } else if(birirbirSon % 5 === 0){
//    document.write("Buzz")
// }else if(birirbirSon % 3 === 0){
//    document.write("FIZZ")
// }else{
//    document.write("xato")
// }

//     4. Foydalanuvchi yilni kiritadi. Dastur esa kiritilgan yil kabisa yilimi yoqmi aytishi kerak.

//     5. Foydalanuvchi n son kiritadi. n gacha bo'lgan sonlarning ko' paytamasini toping
//     Masalan
//     Input: 3
//     Output: 6 (Chunki 1*2*3=6)

//     6. Baxolash sistemasi. Ball (0 dan 100gacha) kiritilganda 5 yoki 4 yoki 3 yoki qolib ketganini chiqaruvchi dastur tuzib bering.

// let ball = prompt("olgan ball ingizni kirgazing","")

// if(ball > 60 && ball <= 72 ){document.write(`siz ${ball} oldingiz bu 3-baho`)}
// else if(ball >=73 && ball <= 89){document.write(`siz ${ball} oldingiz bu 4-baho`)}
// else if(ball >=90 && ball <= 100){document.write(`siz ${ball} oldingiz bu 5-baho`)}
// else(document.write(`siz ${ball} ball oldingiz 3 baldan ham pas siz sesiyadan ota olmadingiz`))


//     7. Agar soat 9:00 bilan 18:00 oraligвЂ™ida boвЂ™lganida вЂњOfis ochiqвЂќ, agar soat 18:00 bilan 9:00 oraligвЂ™ida boвЂ™lganida вЂњOfis yopiqвЂќ degan soвЂ™zni console oynasiga chiqarib beruvchi dastur tuzib bering. 

// let Vaqt = prompt("vaqtni  kirgazing","")
// if(Vaqt => 9 && Vaqt <= 18){document.write(`siz kirgizgan vaqtda ${Vaqt} oraligвЂ™ida boвЂ™lganida вЂњOfis ochiqвЂќ`)}
// else if(Vaqt => 18 && Vaqt <= 9){document.write(`siz kirgizgan vaqtda ${Vaqt} oraligвЂ™ida boвЂ™lganida вЂњOfis yopiqвЂќ`)}
// else(`ish vaqti emas  ....`)


//     8. Kiritilga yosh qaysi levelda ekanligni aniqlab beruvchi dastur yozib bering.
 
// document.getElementById(yosh)
let yosh = +prompt("yoshingizni kirgazing","")
if(yosh >= 1 && yosh <=3){document.write(`Chaqaloq в‡’${yosh} =>  1-3 oraligi`)}
else if(yosh >= 4 && yosh <=6){document.write(`Go'dak в‡’${yosh} =>   4-6 oraligi`)}
else if(yosh >= 7 && yosh <=12){document.write(`Nola в‡’${yosh} =>  7-12  oraligi`)}
else if(yosh >= 13 && yosh <=18){document.write(`O'smir в‡’${yosh}  =>  13-18 oraligi`)}
else if(yosh >= 18 && yosh <=20){document.write(`O'spirin в‡’${yosh} =>   18-20 oraligi`)}
else if(yosh >= 21 && yosh <=40){document.write(`Erkak в‡’${yosh} =>   21-40 oraligi`)}
else if(yosh >= 41 && yosh <=60){document.write(`Amaki в‡’${yosh} =>   41-60 oraligi`)}
else if(yosh>=60){document.write(`Bobo в‡’${yosh}  =>   60 + oraligi`)}
else(" siz notog'ri malumot kirgazdingiz !!" )
        
//         Chaqaloq в‡’ 1-3
//         Go'dak  в‡’ 4-6
//         Nola  в‡’  7-12
//         O'smir  в‡’ 13-18
//         O'spirin в‡’ 18-20
//         Erkak в‡’ 21-40
//         Amaki  в‡’  41 - 60
//         Bobo в‡’ 60+




