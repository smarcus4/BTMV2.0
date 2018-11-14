// OBJECTS FOR CHARACTER ABILITIES

var Champions = [{
    "name" :"Hero",
    "attacks": [{
        "attkName": "Hero Kick",
        "damage": Math.floor((Math.random() * 13) + 6),
        "moves": 10
    },
    {
       "attkName": "Leg Sweep",
       "damage": Math.floor((Math.random() * 10) + 5) ,
       "moves": 9
    },
    {
        "attkName": "Defense Boost",
        "damage": Math.floor((Math.random() * 10) + 5),
        "moves": 2
    }]
},
{
    "name": "Sidekick",
    "attacks": [{
        "attkName": "Helmet Smash",
        "damage": Math.floor((Math.random() * 8) + 3),
        "moves": 10
    },
    {
        "attkName": "Grapple Shot",
        "damage": Math.floor((Math.random() * 13) + 7),
        "moves": 5
    },
    {
        "attkName": "Defense Boost",
        "damage": Math.floor((Math.random() * 6) + 1),
        "moves": 3
    }]
},
{
    "name": "Shadowtaken",
    "attacks": [{
        "attkName": "Kungfu Sweep",
        "damage": Math.floor((Math.random() * 14) + 4),
        "moves": 15
    },
    {
        "attkName": "Shadowstrike",
        "damage": Math.floor((Math.random() * 10) + 6),
        "moves": 5
    },
    {
        "attkName": "Defense Boost",
        "damage": Math.floor((Math.random() * 18) + 10),
        "moves": 1
    }]
},
{
    "name": "Mothman",
    "attacks": [{
        "attkName": "Wingstorm Strike",
        "damage": Math.floor((Math.random() * 12) + 5),
        "moves": 10
    },
    {
        "attkName": "Air Drop",
        "damage": Math.floor((Math.random() * 15) + 9),
        "moves": 7
    },
    {
        "attkName": "Defense Boost",
        "damage": Math.floor((Math.random() * 10) + 7),
        "moves": 4
    }]
}

];





function run(){
    // var character="Hero";
    $(".testing").empty();
    $(".movesLeft").empty();
    event.preventDefault();
    var character=arr[0].charName
    const x = Champions
    for(var i=0; i<x.length; i++){
        const list = x[i];
        for(var j=0; j<list.attacks.length; j++){
            var attacks = list.attacks[j];
            if(character==list.name){

                $(".testing").append("<button class='abilitiesBtn' id='testtest' data-attribute='"+attacks.attkName+"'>" +attacks.attkName +"</button>" +"<br>");
                $(".movesLeft").append("<h5>"+ attacks.attkName+ " moves: " +  attacks.moves + "</h5>");
                
            }
            
    
        }
    }
   


}












var attacksArr = ["holder"];
var arr = ["holder"];
itemsArr = ["holder"];
var arrBoss = ["holder"];
var characterMaker = function(charName, attack, defense, intellect) {
    this.charName =  charName;
    this.attack =  attack;
    this.defense = defense;
    this.intellect =  intellect;
};

$("#submitPassword").on("click", function(event) {
    event.preventDefault();
    // var pleasework = {
    //     password: $("#passwordYo").val().trim()
    // };
    // console.log(pleasework);
    var password = $("#passwordYo").val().trim()
    

    $.ajax("/characterAPI", {
        type: "GET",
        // data: pleasework
    }).then(function(data) {
        for(i=0; i<data.length; i++){
            if(data[i].pass===password){
                var char = data[i];
                arr.splice(0,1,char, char.itemOne, char.itemTwo, char.itemThree);
            }    
        }

        $("#passwordform").addClass("fadeIn animated hidden");

    });
    
    $("#passwordform").addClass("fadeOutUp animated hidden");
    $("#gamePage").removeClass("hidden");
    $("#startbossone").removeClass("hidden");
    $("#gamePage").removeClass("hidden");
    // $("#startbossone").removeClass("hidden")
    // $("#startbosstwo").removeClass("hidden")

    // $("#startbossthree").removeClass("hidden")
});

// Custom Fonts for boss fights.
function changeFont() {
    if(arr[0].charName === "Hero") {
        $(".colorMeRad").addClass("hero-font");
    }
    if(arr[0].charName === "Sidekick") {
        $(".colorMeRad").addClass("sidekick-font");
    }
    if(arr[0].charName === "Shadowtaken") {
        $(".colorMeRad").addClass("shadowtaken-font");
    }
    if(arr[0].charName === "Mothman") {
        $(".colorMeRad").addClass("mothman-font");
    }
}

// Character image to display
function charImage(x) {
    if (x == "Mothman") {
        $(".charnamedisplay").attr("src", "../public/assets/images/fight/heroes/mothman-fight.png");
    }
    else if (x == "Sidekick") {
        $(".charnamedisplay").attr("src", "../public/assets/images/fight/heroes/sidekick-fight.png");
    }
    else if (x == "Hero") {
        $(".charnamedisplay").attr("src", "../public/assets/images/fight/heroes/hero-fight.png");
    }
    else if (x == "Shadowtaken") {
        $(".charnamedisplay").attr("src", "../public/assets/images/fight/heroes/shadowtaken-fight.png");
    }
    else {
        // document.write('<div id="wrongPassDIV" style="width:75%"><h1 style="text-align:center;">Wrong password brawler!<br></h1><img src="../public/assets/images/wrong-password.png"><br></div>');    
        $('div').addClass('hidden');
        $("#wrongPasswordContainer").removeClass('hidden')
        $("#wrongPassword").removeClass('hidden')
    }

}

$("#backtogamepage").on("click", function(event) {
    event.preventDefault();
    
    $("#gamePage").removeClass("hidden");
    $("#winlosediv").addClass("hidden");

});

$(".ditchFight").on("click", function(event) {
    event.preventDefault();
    run();
    $("#gamePage").removeClass("hidden");
    $("#winlosediv, #bossonescreen, #bosstwoscreen, #bossthreescreen").addClass("hidden");
});

$("#startbossone").on("click", function(event) {
    event.preventDefault();
    $("#startbossone").addClass("rubberBand animated");
    $("#bossonescreen").removeClass("hidden fadeOutDown");
    $("#bossonescreen").addClass("fadeInUp animated");
    $("#gamePage").addClass("hidden");
    charImage(arr[0].charName)
    // $(".charnamedisplay").text(arr[0].charName);
    $(".usernamedisplay").text(arr[0].userName);
    var boss = new characterMaker("Bunch o' Thugs", 1, 250, 25);
    arrBoss.splice(0,1,boss);
    $(".bossnamedisplay").text(arrBoss[0].charName);
    console.log(arrBoss[0]);
    console.log("This is the arr[0].charName");
    console.log(arr[0].charName);
    changeFont();
    run();
    game1();
});

$("#startbosstwo").on("click", function(event) {
    event.preventDefault();
    $("#winlosediv").addClass("hidden");
    $("#bosstwoscreen").removeClass("hidden fadeOutDown");
    $("#bosstwoscreen").addClass("fadeInUp animated");
    $("#gamePage").addClass("hidden");
    $(".charnamedisplay").text(arr[0].charName);
    $(".usernamedisplay").text(arr[0].userName);
    var boss = new characterMaker("Ninja Three", 1, 400, 35);
    arrBoss.splice(0,1,boss);
    $(".bossnamedisplay").text(arrBoss[0].charName);
    $(".playerattackstat").text("ON YOUR MARK!");
    $(".bossattackstat").text("THEY GOT YOU IN THIER SIGHTS!!!!");
    console.log(arrBoss[0]);
    changeFont();
    run();
    game2()
});

$("#startbossthree").on("click", function(event) {
    event.preventDefault();
    $("#winlosediv").addClass("hidden");
    $("#bossthreescreen").removeClass("hidden fadeOutDown");
    $("#bossthreescreen").addClass("fadeInUp animated");
    $("#gamePage").addClass("hidden");
    $(".charnamedisplay").text(arr[0].charName);
    $(".usernamedisplay").text(arr[0].userName);
    var boss = new characterMaker("Robo-Bot", 1, 550, 50);
    arrBoss.splice(0,1,boss);
    $(".bossnamedisplay").text(arrBoss[0].charName);
    $(".playerattackstat").text("INSTALL McAFee ON THIS Guy!!");
    $(".bossattackstat").text("IT'S PENETRATING YOUR BACK FIREWALL");
    console.log(arrBoss[0]);
    changeFont();
    run();
    game3()
});


var playerDefense = ["holder"];
var bossDefense = ["holder"];
var game1 = function() {
    
    if(playerDefense[0]>0){
        playerDefense.splice(0,1,playerDefense[0]);
    }else if(playerDefense[0]<=0){
        playerDefense.splice(0,1,arr[0].defense);
    }else{
        playerDefense.splice(0,1, arr[0].defense);
    }

    bossDefense.splice(0,1,arrBoss[0].defense);

    console.log(playerDefense);
    console.log(bossDefense);
    console.log(arr)
    console.log(arrBoss)
    
 

    $(".playerattack").text("\nATK: " + arr[0].attack);
    $(".playerdefense").text("\nDEF: " + playerDefense[0]);
    $(".playerintellect").text("\nINT: " + arr[0].intellect);


    $(".testing").on("click","#testtest", function(){
        var character = arr[0].charName
        var div = document.getElementById("testtest");
        var this1 = $(this).attr("data-attribute");
  
     
         for(var i=0; i<Champions.length; i++){
             const list = Champions[i];
             for(var j=0; j<list.attacks.length; j++){
                 var attacks = list.attacks[j];

                 if(character==list.name){
                     div.setAttribute("data-json", JSON.stringify(attacks)); 

                     
                     if(attacks.attkName== this1){
                         console.log(attacks);
                         attacksArr.splice(0,1,attacks.attkName, attacks.damage,attacks.moves)
                        //  attacks.moves = attacksArr[2];

     
                         if(attacks.moves>0){
                             attacks.moves-= 1;
                             $(".movesLeft").empty();
                             $(".movesLeft").append("<h5>"+ attacks.attkName+ " moves: " +  attacks.moves + "</h5>");
                             $(".movesLeft").addClass("tada animated");

                             bossAttack();
     
     
     
                         }else if(attacks.moves <1){
                             $(".movesLeft").html("out of that ability");
     
                         }
                         console.log("READ THIS");
                         console.log(attacks.damage);
                         console.log(attacks.moves);

                         // $(".movesLeft").empty();
                         // $(".movesLeft").append("<h4>"+"Attacks left: "+ attacks.attkName+ " " +  attacks.moves + "</h4>");
                    }

     
                    

     
     
                 }

                 
             }

            
         }
         
         
         // attacks.moves== attacks.moves- 1;
        
     abilityAttack();
     ifBossDead();
       
     })

    


   




    for(var i=0; i<arr.length; i++){
        var item1 = arr[1];
        var item2= arr[2];
        var item3 = arr[3];
        if(item1 !=="none"){
            $(".itemsEquip").text("Equipped Item:\n" +item1+"\n");

        }
        if(item2 !=="none"){
            $(".itemsEquip").text("Equipped Item:\n" +item2+"\n");
        }
        if(item3 !=="none"){
            $(".itemsEquip").text("Equipped Item:\n" +item3+"\n");
        }
    }

    $(".bossattack").text("\nATK: " + arrBoss[0].attack);
    $(".bossdefense").text("\nDEF: " + bossDefense[0]);
    $(".bossintellect").text("\nINT: " + arrBoss[0].intellect);

    var playerAttack = function() {
        var attack = arr[0].attack;
        var intellect = arr[0].intellect;

        if ((Math.floor((Math.random() * 100) + 1)) <= intellect) {
            $(".playerattackstat").text("ATTACK!");
            $(".playerattackstat").addClass("tada animated");
            var damage = (bossDefense[0] - attack);
            bossDefense.splice(0, 1, damage);
            console.log("player attacked" + "\nboss hp:" + bossDefense);
            $(".bossdefense").text("\nDEF: " + bossDefense[0]);
            ifBossDead();
            bossAttack();
            return;
        }
        else {
            $(".playerattackstat").text("MISSED!?");
            $(".playerattackstat").addClass("flip animated");
            console.log("player missed");
            bossAttack();
            return;
        }   
    }

    var bossAttack = function() {
        var attack = arrBoss[0].attack;
        attack= Math.round(Math.floor((Math.random()*1)+1)+attack);
        var intellect = arrBoss[0].intellect;
        console.log("BOSS DMG");
        console.log(attack);
        if ((Math.floor((Math.random() * 100) + 1)) <= intellect) {
            $(".bossattackstat").text("YOU'VE TAKEN A BLOW!");
            var damage = (playerDefense[0] - attack);
            playerDefense.splice(0, 1, damage);
            console.log("boss attacked" + "\nplayer hp:" + playerDefense);
            $(".playerdefense").text("\nDEF: " + playerDefense[0]);
            ifYouDead();
        }
        else {
            $(".bossattackstat").text("YOU'VE DODGED!");
            console.log("boss missed");
        }
    };

    $("#playerButtonb1").on("click", function(event) {
        event.preventDefault();
        $(".movesLeft").empty();
        playerAttack();
        console.log("B1Button");
    });
    // $("#playerButtonb2").on("click", function(event) {
    //     event.preventDefault();
    //     console.log(playerDefense)
    //     console.log(bossDefense);
    //     playerAttack();
    //     console.log("B2Button");
    // });
    // $("#playerButtonb3").on("click", function(event) {
    //     event.preventDefault();
    //     playerAttack();
    //     console.log("B3Button");
    // });

    console.log("Player life: " + playerDefense);
    console.log("Boss life: " + bossDefense);

    var ifBossDead = function() {
        if (bossDefense[0] <= 0) {
            hideAllBossDivs();
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#defeatedBossImg").removeClass("hidden");
            $("#winlosetext").text("Rejoice " + arr[0].userName);
            // playerDefense = ["whatPlayer"];
            bossDefense = ["whatBoss"];
            console.log(playerDefense);
            console.log(bossDefense);
            $("#startbosstwo").removeClass("hidden");
            $(".game-screen").css("backgroundImage", "url(../public/assets/images/levels/boss-fight-level-2.png)"); //this is changing the background
            return console.log("fight end and you won");
        }
    }

    var ifYouDead = function() {
        if (playerDefense[0] <= 0) {
            hideAllBossDivs();
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#defeatedBossImg").addClass("hidden");
            $("#winlosetext").text("Your life " + arr[0].userName + " will be forgotten");
            $("#winlosetext").append("<br><br><button><a href = '/gamepage' style='text-decoration:none'>GET A NEW SLICE OF BOLONEY CHUMP</a></button>");
            console.log(playerDefense);
            console.log(bossDefense);
            return console.log("fight end and you loss");
        }
    }



    var abilityAttack = function(){
        var ability = parseInt(attacksArr[1]);

        var abilityName = attacksArr[0];
        var moves = attacksArr[2];
        if((abilityName=="Defense Boost") && (moves>0)){
            ability = Math.round(Math.floor((Math.random() *20)+15) + ability);
          
            $(".playerdefense").text("\nDEF: " + (parseInt(playerDefense[0])+ability));
     
            playerDefense.splice(0,1, (parseInt(playerDefense[0])+ability));
            console.log("STUFF");
            console.log(playerDefense[0]);



        }else{
            
            ability = Math.round(Math.floor((Math.random() *500)+100) /ability);
            var damageBoss = (bossDefense[0] - ability);
        }
    
    
        if(moves>0 && abilityName!=="Defense Boost"){
            bossDefense.splice(0, 1, damageBoss);
    
            $(".bossdefense").text("\nDEF: " + damageBoss);
        }
        
        if(ability >30 && moves>0){
            $(".playerattackstat").text("CRITICAL HIT: " + ability);
            console.log("hm");
            console.log(moves);
            console.log(ability);
    
        }else if(ability <30 && moves>0){
            $(".playerattackstat").text("HIT: " + ability);

        }else{
            $(".playerattackstat").empty();
        }
    
        ifBossDead();
    }
    
};


var game2 = function() {

    if(playerDefense[0]>0){
        playerDefense.splice(0,1,playerDefense[0]);
    }else if(playerDefense[0]<=0){
        playerDefense.splice(0,1,arr[0].defense);
    }else{
        playerDefense.splice(0,1, arr[0].defense);
    }
    console.log(playerDefense)
    bossDefense.splice(0,1,arrBoss[0].defense);

    console.log(bossDefense);
    console.log(arr);
    console.log(arrBoss);
    

    $(".playerattack").text("\nATK: " + arr[0].attack);
    $(".playerdefense").text("\nDEF: " + playerDefense);
    $(".playerintellect").text("\nINT: " + arr[0].intellect);

    $(".bossattack").text("\nATK: " + arrBoss[0].attack);
    $(".bossdefense").text("\nDEF: " + bossDefense[0]);
    $(".bossintellect").text("\nINT: " + arrBoss[0].intellect);


    $(".testing").on("click","#testtest", function(){
        var character = arr[0].charName
        var div = document.getElementById("testtest");
        var this1 = $(this).attr("data-attribute");
  
     
         for(var i=0; i<Champions.length; i++){
             const list = Champions[i];
             for(var j=0; j<list.attacks.length; j++){
                 var attacks = list.attacks[j];

                 if(character==list.name){
                     div.setAttribute("data-json", JSON.stringify(attacks)); 

                     
                     if(attacks.attkName== this1){
                         console.log(attacks);
                         attacksArr.splice(0,1,attacks.attkName, attacks.damage,attacks.moves)
                        //  attacks.moves = attacksArr[2];

     
                         if(attacks.moves>0){
                             attacks.moves-= 1;
                             $(".movesLeft").empty();
                             $(".movesLeft").append("<h5>"+ attacks.attkName+ " moves: " +  attacks.moves + "</h5>");
                             $(".movesLeft").addClass("tada animated");

                            bossAttack();
     
     
     
                         }else if(attacks.moves <1){
                             $(".movesLeft").html("out of that ability");
     
                         }

                         // $(".movesLeft").empty();
                         // $(".movesLeft").append("<h4>"+"Attacks left: "+ attacks.attkName+ " " +  attacks.moves + "</h4>");
                    }

     
                    

     
     
                 }

                 
             }

            
         }
         
         
         // attacks.moves== attacks.moves- 1;
        
     abilityAttack();
     ifBossDead();
       
     })
    
    var abilityAttack = function(){
        var ability = parseInt(attacksArr[1]);

        var abilityName = attacksArr[0];
        var moves = attacksArr[2];
        if((abilityName=="Defense Boost") && (moves>0)){
            ability = Math.round(Math.floor((Math.random() *20)+15) + ability);
          
            $(".playerdefense").text("\nDEF: " + (parseInt(playerDefense[0])+ability));
     
            playerDefense.splice(0,1, (parseInt(playerDefense[0])+ability));
            console.log("STUFF");
            console.log(playerDefense[0]);



        }else{
            
            ability = Math.round(Math.floor((Math.random() *500)+100) /ability);
            var damageBoss = (bossDefense[0] - ability);
        }
    
    
        if(moves>0 && abilityName!=="Defense Boost"){
            bossDefense.splice(0, 1, damageBoss);
    
            $(".bossdefense").text("\nDEF: " + damageBoss);
        }
        
        if(ability >30 && moves>0){
            $(".playerattackstat").text("CRITICAL HIT: " + ability);
    
        }else if(ability <30 && moves>0){
            $(".playerattackstat").text("HIT: " + ability);

        }else{
            $(".playerattackstat").empty();
        }
    
        ifBossDead();
    }

    


    var playerAttack = function() {
        var attack = arr[0].attack;
        var intellect = arr[0].intellect;
    

        if ((Math.floor((Math.random() * 100) + 1)) <= intellect) {
            $(".playerattackstat").text("ATTACK!");
            $(".playerattackstat").addClass("tada animated");
            $(".charnamedisplay").addClass("bounce animated");
            $(".boss-image").addClass("wobble animated");
            var damage = (bossDefense[0] - attack)
            bossDefense.splice(0, 1, damage);
            console.log("player attacked" + "\nboss hp:" + bossDefense);
            $(".bossdefense").text("\nDEF: " + bossDefense[0]);
            ifBossDead();
            bossAttack();
            return
        }
        else {
            $(".playerattackstat").text("MISSED!?");
            $(".playerattackstat").addClass("flip animated");
            $(".charnamedisplay").addClass("pulse animated");
            $(".boss-image").addClass("tada animated");
            console.log("player missed");
            bossAttack();
            return
        }
    }

    var bossAttack = function() {
        var attack = arrBoss[0].attack;
        var intellect = arrBoss[0].intellect;
        attack= Math.round(Math.floor((Math.random()*1)+1)+attack);

        if ((Math.floor((Math.random() * 100) + 1)) >= intellect) {
            $(".bossattackstat").text("YOU'VE TAKEN A BLOW!");
            var damage = (playerDefense[0] - attack);
            playerDefense.splice(0, 1, damage);
            console.log("boss attacked" + "\nplayer hp:" + playerDefense);
            $(".playerdefense").text("\nDEF: " + playerDefense[0]);
            ifYouDead();
        }
        else {
            $(".bossattackstat").text("YOU'VE DODGED!");
            console.log("boss missed");
        }
    };

    // $("#playerButtonb1").on("click", function(event) {
    //     event.preventDefault();
    //     playerAttack();
    //     console.log("B1Button");
    // });
    $("#playerButtonb2").on("click", function(event) {
        event.preventDefault();
        console.log(playerDefense);
        console.log(bossDefense);
        $(".movesLeft").empty();
        playerAttack();
        
        console.log("B2Button");
    });
    // $("#playerButtonb3").on("click", function(event) {
    //     event.preventDefault();
    //     playerAttack();
    //     console.log("B3Button");
    // });

    console.log("Player life: " + playerDefense[0]);
    console.log("Boss life: " + bossDefense);

    var ifBossDead = function() {
        if (bossDefense[0] <= 0) {
            hideAllBossDivs();
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#defeatedBossImg").removeClass("hidden");
            $("#winlosetext").text("Boss has been defeated! Rejoice " + arr[0].userName);
            // playerDefense = ["whatPlayer"];
            bossDefense = ["whatBoss"];
            console.log(playerDefense);
            console.log(bossDefense);
            $("#startbossthree").removeClass("hidden");
            $(".game-screen").css("backgroundImage", "url(../public/assets/images/levels/boss-fight-level-3.png)"); //this is changing the background
            return console.log("fight end and you won");
        }
    }

    var ifYouDead = function() {
        if (playerDefense[0] <= 0) {
            hideAllBossDivs();
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#defeatedBossImg").addClass("hidden");
            $("#winlosetext").text("Your life " + arr[0].userName + " will be forgotten");
            $("#winlosetext").append("<br><br><button><a href = '/gamepage' style='text-decoration:none'>GET A NEW SLICE OF BOLONEY CHUMP</a></button>");
            console.log(playerDefense);
            console.log(bossDefense);
            return console.log("fight end and you loss");
        }
    }
};
var game3 = function() {
    if(playerDefense[0]>0){
        playerDefense.splice(0,1,playerDefense[0]);
    }else if(playerDefense[0]<=0){
        playerDefense.splice(0,1,arr[0].defense);
    }else{
        playerDefense.splice(0,1, arr[0].defense);
    } 
    
    bossDefense.splice(0,1,arrBoss[0].defense);

    console.log(playerDefense);
    console.log(bossDefense);
    console.log(arr);
    console.log(arrBoss);
    

    $(".playerattack").text("\nATK: " + arr[0].attack);
    $(".playerdefense").text("\nDEF: " + playerDefense[0]);
    $(".playerintellect").text("\nINT: " + arr[0].intellect);
    $(".bossattack").text("\nATK: " + arrBoss[0].attack);
    $(".bossdefense").text("\nDEF: " + bossDefense[0]);
    $(".bossintellect").text("\nINT: " + arrBoss[0].intellect);

   

    var playerAttack = function() {
        var attack = arr[0].attack;
        var intellect = arr[0].intellect;

        if ((Math.floor((Math.random() * 100) + 1)) <= intellect) {
            $(".playerattackstat").text("ATTACK!");
            $(".playerattackstat").addClass("tada animated");
            var damage = (bossDefense[0] - attack);
            bossDefense.splice(0, 1, damage);
            console.log("player attacked" + "\nboss hp:" + bossDefense);
            $(".bossdefense").text("\nDEF: " + bossDefense[0]);
            ifBossDead();
            bossAttack();
            return;
        }
        else {
            $(".playerattackstat").text("MISSED!?");
            $(".playerattackstat").addClass("flip animated");
            console.log("player missed");
            bossAttack();
            return;
        }
    }

    var bossAttack = function() {
        var attack = arrBoss[0].attack;
        var intellect = arrBoss[0].intellect;
        attack= Math.round(Math.floor((Math.random()*1)+1)+attack);


        if ((Math.floor((Math.random() * 100) + 1)) <= intellect) {
            $(".bossattackstat").text("YOU'VE TAKEN A BLOW!");
            var damage = (playerDefense[0] - attack);
            playerDefense.splice(0, 1, damage);
            console.log("boss attacked" + "\nplayer hp:" + playerDefense);
            $(".playerdefense").text("\nDEF: " + playerDefense[0]);
            ifYouDead();
        }
        else {
            $(".bossattackstat").text("YOU'VE DODGED!");
            console.log("boss missed");
        }
    };

    // $("#playerButtonb1").on("click", function(event) {
    //     event.preventDefault();
    //     playerAttack();
    //     console.log("B1Button");
    // });
    // $("#playerButtonb2").on("click", function(event) {
    //     event.preventDefault();
    //     console.log(playerDefense)
    //     console.log(bossDefense);
    //     playerAttack();
    //     console.log("B2Button");
    // });
    $("#playerButtonb3").on("click", function(event) {
        event.preventDefault();
        $(".movesLeft").empty();
        playerAttack();
        console.log("B3Button");
    });

    console.log("Player life: " + playerDefense);
    console.log("Boss life: " + bossDefense);

    var ifBossDead = function() {
        if (bossDefense[0] <= 0) {
            hideAllBossDivs();
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#defeatedBossImg").removeClass("hidden");
            $("#winlosetext").text("YOU'VE SAVED METRO CITY!");
            // playerDefense = ["whatPlayer"];
            bossDefense = ["whatBoss"];
            console.log(playerDefense);
            console.log(bossDefense);
            // $("#startbosstwo").removeClass("hidden")
            return console.log("fight end and you won");
        }
    }

    var ifYouDead = function() {
        if (playerDefense[0] <= 0) {
            hideAllBossDivs();
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#defeatedBossImg").addClass("hidden");
            $("#winlosetext").text("Your life " + arr[0].userName + " will be forgotten");
            $("#winlosetext").append("<br><br><button><a href = '/gamepage' style='text-decoration:none'>GET A NEW SLICE OF BOLONEY CHUMP</a></button>");
            console.log(playerDefense);
            console.log(bossDefense);
            return console.log("fight end and you loss");
        }
    }

    var abilityAttack = function(){
        var ability = parseInt(attacksArr[1]);

        var abilityName = attacksArr[0];
        var moves = attacksArr[2];
        if((abilityName=="Defense Boost") && (moves>0)){
            ability = Math.round(Math.floor((Math.random() *20)+15) + ability);
          
            $(".playerdefense").text("\nDEF: " + (parseInt(playerDefense[0])+ability));
     
            playerDefense.splice(0,1, (parseInt(playerDefense[0])+ability));
            console.log("STUFF");
            console.log(playerDefense[0]);



        }else{
            
            ability = Math.round(Math.floor((Math.random() *500)+100) /ability);
            var damageBoss = (bossDefense[0] - ability);
        }
    
    
        if(moves>0 && abilityName!=="Defense Boost"){
            bossDefense.splice(0, 1, damageBoss);
    
            $(".bossdefense").text("\nDEF: " + damageBoss);
        }
        
        if(ability >30 && moves>0){
            $(".playerattackstat").text("CRITICAL HIT: " + ability);
    
        }else if(ability <30 && moves>0){
            $(".playerattackstat").text("HIT: " + ability);

        }else{
            $(".playerattackstat").empty();
        }
    
        ifBossDead();
    }

    
    

};
var hideAllBossDivs = function () {
    $(".bossdiv").removeClass("fadeInUp");
    $(".bossdiv").addClass("fadeOutDown hidden");
};




