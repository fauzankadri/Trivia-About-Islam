var ques = {
  'Which of these is a pillar of Islam':
['Shahadah (testimony)','Believe in the existence of Allah', 'Belive in Qadr (devine preordainment)', 'Go for friday congregation'],
'Which of these is a pillar of Iman':
['Believe in the existence Allah','Believe in the sahabahs','To offer Qiyam (night prayer)','Iqamat-as-Salat (prayer)'],
'What is the meaning of La ilaha illa-Allah':
['None has the right to be worshipped but Allah','Allah is one', 'To worship Allah','Allah is the greatest'],
'Where is Allah':
['He is above the heavens','He is everywhere', 'He is at Masjid Al-Haram','He is at every masjid'],
'Which is the best of all prayers':
['Asr','Maghrib','Fajr',"Jum'uah"],
'Who was the first prophet of Allah':
['Adam (a.s.)', 'Nuh (a.s.)','Muhammad', 'Ibrahim (a.s.)'],
'Who was the first messenger of Allah':
['Nuh (a.s.)', 'Adam (a.s.)', 'Muhammad', 'Ibrahim (a.s.)'],
'Which prophet came to the people of Ad (giants)':
['Hud (a.s.)','Nuh (a.s.)','Ibrahim (a.s.)','Lut (a.s.)'],
'What does the name Muhammad mean':
['The praise worthy','The greatest','The honoured','The best of all'],
'At what age did Muhammad (pbuh) receive the revelation':
['40','20','30','50'],
'Who was the first wife of Muhammad (pbuh)':
['Khadijah (r.a.)', 'Ayesha (r.a.)', 'Zaynab (r.a.)', 'Hafsa (r.a.)'],
'What is the name of the first battle of Islam':
['The Battle of Badr', 'The Battle of Uhud', 'The Battle of the Trench', 'The Battle of Khaybar'],
'Who was the first martyr in Islam':
['Sumaiyah (r.a.)', 'Khadijah (r.a.)', 'Bilal (r.a.)', 'Abu-Sufyan (r.a.)'],
'When Muhammad (pbuh) reached Masjid-al-Aqsa, who did he lead in prayer':
['All the prophets', 'All the Sahabas', 'The locals who resided there', 'The 5 great prophets'],
'What was given to Muhammad (pbuh) through Isra and Miraj':
['Salah', 'The Quran', 'Reassurance of Allah', '5 pillars of Islam'],
'To whom was the Taurat revealed to':
['Musa (a.s.)', 'Ibrahim (a.s.)', 'Isa (a.s.)', 'Nuh (a.s.)'],
'What is the first revelation of the Quran':
['Iqra', 'Surah al-Fatiha', 'Alif Laam Meen', 'Bismillah'],
'Who gave the first adhan':
['Bilal (r.a.)', 'Abu-Bakr (r.a.)', 'Umar (r.a.)', 'Ali (r.a.)'],
"What happened between Yusuf (a.s) and his owner's wife (while he was a slave)":
['She asked him to sleep with him', 'She asked him to marry him', 'She asked him to leave and never come back', 'She asked him to kill his owner'],
"Who took care of Musa (a.s) when his mother couldn't":
["Firaun's wife (Aasyiah)", 'His sister', 'His brother (Harun (a.s))', 'his aunt'],
'What was the advise Musa (a.s.) gave to Muhammad (s.a.w.) during Isra and Miraj':
['Reduce the daily prayer', 'Increase the daily prayer', 'Ask Allah for victory', 'Reduce the Zakat']
}
var atp = ['second', 'third', 'fourth', 'fifth'];
var atp2 = 6;
var used = [];
var keys = shuffle(Object.keys(ques));
var num = 0;
var streak = 0;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function check(value, ans){
  return value == ans;
}


$(document).ready(function(){
  function setup(){

    if (keys.length == 0){
      keys = shuffle(Object.keys(ques));
      if (atp.length != 0){
        $('#num').text(atp.shift());
      }
      else{
        $('#num').text(atp2 + 'th');
        atp++;
      }
    }
    q = keys.pop();
    ans = ques[q][0];
    n = ques[q].slice();
    opt = shuffle(n);


      $("#name").text(q);
      $("#option1").text(opt[0]);
      $("#option2").text(opt[1]);
      $("#option3").text(opt[2]);
      $("#option4").text(opt[3]);
      $("#streak").text("Streak: "+streak);
    }


  function validity(){
    $("#response").fadeIn();
    if(valid){
      $("#rsp").fadeOut().promise().done(function () {
        $("#rsp").text("Mashallah");
        $("#rsp").fadeIn();

      });
      streak++;
      setup();

    }
    else{
      $("#streak").text("Streak: 0");
      streak = 0;
      $("#rsp").fadeOut().promise().done(function () {
        $("#rsp").text("Astagfirullah");
        $("#rsp").fadeIn();

      });
    }
  }


  setup();
  var valid = false;

  $('#option1').click(function(){
    valid = check(opt[0], ans);
    validity();
  });

  $('#option2').click(function(){
    valid = check(opt[1], ans);
    validity();
  });

  $('#option3').click(function(){
    valid = check(opt[2], ans);
    validity();
  });

  $('#option4').click(function(){
    valid = check(opt[3], ans);
    validity();
  });

  $(".btn").mouseup(function(){
    $(this).blur();
})



});
