// ! if3, if4, if5, if9, if11, if17, if18, case8, case9, case12
// ?__________________________________________________________
// ! if1. Butun son berilgan. Agar berilgan son musbat bo`lsa, 1 ga oshiring, aks holda 2 ga kamaytiring.


// let num = -10;
// if (num >= 0) {
//   console.log(`son musbat +1ga oshirildi: ${num + 1}`);
// } else if (num < 0) {
//   console.log(`son manfiy -2ga kamaydi: ${num - -2}`);
// } else {
//   console.log('false');
// }


// ? task__________________________________________________________
// ! if2. Uchta son bering. Shu sonlar orasidan nechta musbat va manfiy son borligi aniqlansin.


// let num1 = 'qq';
// let num2 = 2;
// let num3 = 0;
// if (num1 > 0) {
//   console.log(`+musbat ${num1}`)
// } else if (num1 < 0) {
//   console.log(`-manfiy ${num1}`)
// } else if (num1 == 0) {
//   console.log(`o'rta son: ${num1}`)
// } else {
//   console.log('error')
// }

// if (num2 > 0) {
//   console.log(`+musbat ${num2}`)
// } else if (num2 < 0) {
//   console.log(`-manfiy ${num2}`)
// } else if (num2 == 0) {
//   console.log(`o'rta son: ${num2}`)
// } else {
//   console.log('error');
// }

// if (num3 > 0) {
//   console.log(`+musbat ${num3}`)
// } else if (num3 < 0) {
//   console.log(`-manfiy ${num3}`)
// } else if (num3 == 0) {
//   console.log(`o'rta son: ${num3}`);
// } else {
//   console.log('error');
// }


// ? task__________________________________________________________
// ! if3. Uchta son berilgan. Shu sonlarni avval kichigini keyin kattasini ekranga chiqarilsin.


// let num1 = 4;
// let num2 = 4;
// let num3 = 6;
// if (num1 >= num2 && num1 >= num3) {
//   console.log(`katta son ${num1}`);
// } else if (num2 >= num1 && num2 >= num3) {
//   console.log(`katta son ${num2}`);
// } else if (num3 >= num1 && num3 >= num2) {
//   console.log(`katta son ${num3}`);
// } else {
//   console.log('error');
// }
// if (num1 <= num2 && num1 <= num3) {
//   console.log(`kishik son ${num1}`);
// } else if (num2 <= num1 && num2 <= num3) {
//   console.log(`kishik son ${num2}`);
// } else if (num3 <= num1 && num3 <= num2) {
//   console.log(`kishik son ${num3}`);
// } else {
//   console.log('error');
// }


// ? task__________________________________________________________
// ! if4. Uchta butun son berilgan. Shu sonlarni ikkitasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.


// let num1 = 3;
// let num2 = 2;
// let num3 = 2;
// if (num1 == num2 || num1 == num3) {
//   console.log(`teng son ${num1}`);
// } else if (num2 == num1 || num2 == num3) {
//   console.log(`teng son ${num2}`);
// } else if (num3 == num1 || num3 == num1) {
//   console.log(`teng son ${num3}`);
// } else {
//   console.log('error');
// }
// if (num1 !== num2 && num1 !== num3) {
//   console.log(`teng emas son ${num1}`);
// } else if (num2 !== num1 && num2 !== num3) {
//   console.log(`teng emas son ${num2}`);
// } else if (num3 !== num1 && num3 !== num1) {
//   console.log(`teng emas son ${num3}`);
// } else {
//   console.log('error');
// }


// ? task__________________________________________________________
// ! if5. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.
// ! agar x < -2 yoki x > 2 bo’lsa 2 * x
// ! aks holda -3 * x;


// let num = 1;
// if (num < -2 || num > 2 ) {
//   console.log(`son -2da yoki 2dan katta ${num} x 2 = ${num * 2}`);
// } else if (num * -3) {
//   console.log(`son -2da yoki 2dan kichik ${num} x -3 = ${num * -3}`);
// }


// ? task__________________________________________________________
// ! if6. Berilgan sonni "musbat toq", "musbat juft", "nol", “manfiy juft”, “manfiy toq” ekranga yozilsin.


// let num = -11;
// if (num % 2 !== 0 && num > 0) {
//   console.log(`+musbat toq son: ${num}`);
// } else if (num === 0) {
//   console.log(`nol son: ${num}`);
// } else if (num % 2 === 0 && num > 0) {
//   console.log(`+musbat juft son: ${num}`);
// } else if (num % 2 === 0) {
//   console.log(`-manfiy juft son: ${num}`);
// } else if (num % 2 !== 0) {
//   console.log(`-manfiy toq son: ${num}`);
// } else {
//   console.log('error');
// }


// ? task__________________________________________________________
// ! if1. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshirilsin, aks holda o`zgartirilmasin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.


// let num = 20;
// if (num >= 0) {
//   console.log(`son musbat +1ga oshirildi: ${num + 1}`);
// } else {
//   console.log('false');
// }


// ? task__________________________________________________________
// ! if2. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshiring, agar manfiy bo`lsa 2 ga kamaytiring. Agar 0 ga teng bo`lsa, 10 ni o`zlashtirsin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.


// let num = -70;
// if (num > 0) {
//   console.log(`son musbat +1ga oshirildi: ${num + 1}`);
// } else if (num < 0) {
//   console.log(`son manfiy -2ga kamaydi: ${num - -2}`);
// } else if (num === 0) {
//   console.log(num = 10);
// } else {
//   console.log('false');
// }


// ? task__________________________________________________________
// ! if3. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.


// let num = -2;
// let num2 = -2;
// let num3 = 2;
// if (num > 0) {
//   console.log(`+musbat son: ${num}`);
// } else if (num < 0) {
//   console.log(`-manfiy son: ${num}`);
// } else {
//   console.log('error');
// } if (num2 > 0) {
//   console.log(`+musbat son: ${num2}`);
// } else if (num2 < 0) {
//   console.log(`-manfiy son: ${num2}`);
// } else {
//   console.log('error');
// } if (num3 > 0) {
//   console.log(`+musbat son: ${num3}`);
// } else if (num3 < 0) {
//   console.log(`-manfiy son: ${num3}`);
// } else {
//   console.log('error');
// }


// ? task__________________________________________________________
// ! if4. Ikkita butun son berilgan. Shu sonlarning kattasini aniqlovchi programma tuzilsin.


// let num = 0;
// let num2 = 0;
// if (num > num2) {
//   console.log(num);
// } else if (num2 > num) {
//   console.log(num2);
// } else {
//   console.log('error');
// }


// ? task__________________________________________________________
// ! if5. Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi programma tuzilsin.


// let num = 100;
// let num2 = 20;
// if (num < num2) {
//   console.log(num);
// } else if (num2 < num) {
//   console.log(num2);
// } else {
//   console.log('error');
// }


// ? task__________________________________________________________
// ! if6. Ikkita butun son berilgan. Shu sonlarning avval kattasini keyin kichigini ekranga chiqaruvchi programma tuzilsin.


// let num = 120;
// let num2 = 220;
// if (num > num2) {
//   console.log(num);
// } else if (num2 > num) {
//   console.log(num2);
// } if (num < num2) {
//   console.log(num);
// } else if (num2 < num) {
//   console.log(num2);
// } else if (num == num2) {
//   console.log(`teng ${num} = ${num2}`);
// } else {
//   console.log('error');
// }



// ? task__________________________________________________________
// ! if9. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B bu sonlarning kattasini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.



// let num = 2102;
// let num2 = 202;
// if (num == num2) {
//   console.log(`teng ${num} = ${num2} + ${num + num2}`);
// } else if (num && num2) {
//   console.log(`${num + '0'} ${num2 + '0'}`);
// } else {
//   console.log('error');
// }


// ? task__________________________________________________________
// ! if11. Uchta son berilgan. Shu sonlarni o`ratachasi (ya'ni katta va kichik sonlar orasidagi son) ni aniqlovchi programma tuzilsin.


// let num1 = 1;
// let num2 = 1;
// let num3 = 1;

// let max = num1;
// if (num2 > max) {
//   max = num2;
// }
// if (num3 > max) {
//   max = num3;
// }

// let min = num1;
// if (num2 < min) {
//   min = num2;
// }
// if (num3 < min) {
//   min = num3
// }

// let mid;
// if (num1 != max && num1 != min) {
//   mid = num1
// } else if (num2 != max && num2 != min) {
//   mid = num2
// } else if (num3 != max && num3 != min) {
//   mid = num3
// } else {
//   console.log('error');
// }

// console.log(`Katta son: ${max}`);
// console.log(`Kichik son: ${min}`);
// console.log(`O'rta son: ${mid}`);


// ? task__________________________________________________________
// ! if12. Uchta son berilgan. Shu sonlarning yig'indisi eng katta bo'ladigan ikkitasini ekranga chiqaruvchi programma tuzilsin.


// let num1 = 1;
// let num2 = 5;
// let num3 = 20;

// sum1 = num1 + num2;
// sum2 = num2 + num3;
// sum3 = num3 + num1;
// if (sum1 > sum2 && sum1 > sum3) {
//   console.log(`katta yig'indi ${sum1}`);
// } else if (sum2 > sum1 && sum2 > sum3) {
//   console.log(`katta yig'indi ${sum2}`);
// } else if (sum3 > sum1 && sum3 > sum2) {
//   console.log(`katta yig'indi ${sum3}`);
// } else {
//   console.log('error');
// }

// let max = num1;
// if (max < num2) {
//   max = num2;
// }
// if (max < num3) {
//   max = num3;
// }
// let min = num1;
// if (min > num2) {
//   min = num2;
// }
// if (min > num3) {
//   min = num3;
// }
// let mid;
// if (num1 !== max && num1 !== min) {
//   mid = num1;
// } else if (num2 !== max && num2 !== min) {
//   mid = num2;
// } else if (num3 !== max && num3 !== min) {
//   mid = num3;
// }
// console.log(`katta son ${max}`);
// console.log(`orta son ${mid}`);




















// if13. A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o`sish tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.

// if14. A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o'sish yoki kamayish tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.

// if15. To`rtta butun son berilgan. Shu sonlarni uchtasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.

// if16. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.

// agar x≤ 0 bo’lsa -x;
// agar 0<x<2; x^2
// agar x≥2 bo’lsa 4


// if17. Yil berilgan (musbat butun son). Berilgan yilda nechta kun borligini aniqlovchi programma tuzilsin. Kabisa yilida 366 kun bor, kabisa bo'lmagan yilda 365 kun bor. Kabisa yil deb 4 ga karrali yillarga aytiladi. Lekin 100 ga karrali yillar ichida faqat 400 ga karrali bo'lganlari kabisa yil hisoblanadi. Masalan 300, 1300 va 1900 kabisa yili emas. 1200 va 2000 kabisa yili.

// if18. 1-999 oraliqdagi sonlar berilgan. Berilgan sonni "ikki xonali juft son", "uch xonali toq son" va x.k. ekranga yozadigan programma tuzilsin.

//

// Case1. K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5 gacha oraliqqa tegishli bo`lmasa "xato" deb chiqarilsin.

// Case2. Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish")

// Case3. Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma tuzilsin.

// Case4. Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr, 2-kilometr, 3-metr, 4-millimeter, 5- santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5 oraliqda) va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning uzunligini metrlarda ifodalofchi programma tuzilsin.

// Case5. Og'irlik birliklari quyidagi tartibda berilgan. 1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5- sentner. Og'irlik birligini bildiruvchi soni berilgan va shu birlikdagi og`irlik qiymati berilgan. Og`irlikni kilogramda ifodalofchi programma tuzilsin.

// Case6. Sanani bildiruvchi ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanani ifodalovchi programma tuzilsin. Kabisa yilida 366 kun, kabisa bo'lmagan yilda 365 kun bor bo'ladi.

// Case7. Ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanadan keyingi sanani ifodalovchi programma tuzilsin.

// Case8. Robot faqat to`rtta tomonga ko`cha oladi ("s"-shimol, "j"-janub, "q"-sharq, "g"-g'arb) va uchta raqamli kamanda: 0-harakni davom ettir, 1-chapga buril, 2-o`ngga buril. Y - robot yo`nalishi va K - kamanda berilgan. Berilgan kamanda bajarilgandan keying robot holatini aniqlovchi programma tuzilsin.

// Case9. O'yin kartasi turlari berilgan 1-g`isht, 2-olma, 3-chillak, 4-qarg`a. 10 lik kartadan katta kartalar quyidagi qiymatlarni o`zlashtirgan: 11-valet, 12-dama, 13-qirol, 14-tuz. Ikkita butun son berilgan N-karta qiymati (6≤ N ≤14), M-karta turi(1≤M ≤4) kiritilganda karta nomlarini (masalan: "olti qarg`a”) chiqarib beruvchi programma tuzilsin.

// Case10. O`quv masalalarini aniqlovchi 10-40 gacha butun son berilgan. Son kiritilganda unga mos so`zlarda ifodalovchi programma tuzilsin. ("yigirmata masala", "o`n uchta masala" va h.k.)

// Case11. 100-999 gacha oraliqdagi sonlarni so'zlarda ifodalovchi programma tuzilsin. (masalan: 123- "bir yuz yigirma uch").

// Case12. Sharq kalendarida 60 yillik davr qabul qilingan. Yil muchali 5 ta rang (yashil, qizil, sariq, oq va qora) va 12 ta hayvon (sichqon, sigir, yo'lbars, quyon, ajdar, ilon, ot, qo`y, maymun, tovuq, it va to’ngizlardan) nomlarining kombinatsiyasidan kelib chiqadi. Yilning raqamiga qarab uning muchalini aniqlovchi programma tuzilsin. 1984-davr boshi: "Yashil sichqon yili".

// Qudrat Abdurahimov ustozimizning C++ dastur nomli kitoblaridan saralab olingan masalalar !


// !__________________________________________________________________
// ! QOSHIMCHA
// !__________________________________________________________________
// ? Uchta son berilgan. Dastur bu sonlarning eng katta, eng kichik, va o'rtacha sonlarini aniqlasin. Agar barcha sonlar teng bo'lsa, ""Barcha sonlar teng"" deb chiqaring.

// let num1 = 21;
// let num2 = 1;
// let num3 = 2;

// let max = num1;
// if (max < num2) {
//   max = num2;
// }
// if (max < num3) {
//   max = num3;
// }
// let min = num1;
// if (min > num2) {
//   min = num2;
// }
// if (min > num3) {
//   min = num3;
// }
// let mid;
// if (num1 !== max && num1 !== min) {
//   mid = num1;
// } else if (num2 !== max && num2 !== min) {
//   mid = num2;
// } else if (num3 !== max && num3 !== min) {
//   mid = num3;
// }

// console.log(`katta ${max}`);
// console.log(`kichik ${min}`);
// console.log(`orta ${mid}`);

// let all_mid;
// if (num1 == num2 && num1 == num3) {
//   all_mid = num1;
// } else if (num2 == num1 && num2 == num3) {
//   all_mid = num2;
// } else if (num3 == num1 && num3 == num2) {
//   all_mid = num3;
// }

// console.log(`barchasi teng ${all_mid}`);
