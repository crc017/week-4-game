

      
  $(".enemies").hide();


  $(".characters"). mouseenter(function () {
        $(this).animate({ height: "150px" });
        var charName = $("<div>");
        charName.text(this.id);
        
        $(".characterSelected").html(charName);
      });

  $(".characters").mouseleave(function() {
        $(this).animate({height: "100px" });
        
  });


 $(document).ready(function() {

  
  $(".characters").one("click", function() {
        
        var charSelected = $("<div>");

        $(".characters").fadeOut();
        $(this).fadeIn();

        var charName = $("<div>");
        charName.text(this.id);

        var selectedChar = this.id
       

        var characterInfo = {
            life: 120,
            attack: 35
        }

         var characterLife = $("<div>");
                      characterLife.addClass("characterLife")
                      characterLife.text("Life: "+characterInfo.life).attr("characters")
                      characterLife.appendTo("#charDisplay")
                      


                    //Start game
                     $(".enemies").fadeIn();


                      var calvinInfo = {
                        life: 80,
                        counterAttack: 10
                      };

                      var jimmyInfo = {
                        life: 100,
                        counterAttack: 40
                      }

                      var tammyInfo = {
                        life: 110,
                        counterAttack: 20
                      }

                      $(".battleGround").append("Click to Attack:")

                      //Calvin Life and Counter
                      var calvinLife = $("<div>");
                      var calvinCounter = $("<div>")
                      calvinLife.addClass("calvinLife")
                      calvinLife.text("Life: "+calvinInfo.life).attr("Calvin")
                      calvinCounter.addClass("calvinCounter")
                      calvinCounter.text("Counter Attack: "+calvinInfo.counterAttack).attr("Calvin")
                      calvinLife.appendTo("#Calvin")
                      calvinCounter.appendTo("#Calvin")

                       //Jimmy Life and Counter
                      var jimmyLife = $("<div>");
                      var jimmyCounter = $("<div>")
                      jimmyLife.addClass("jimmyLife")
                      jimmyLife.text("Life: "+jimmyInfo.life).attr("Jimmy")
                      jimmyCounter.addClass("jimmyCounter")
                      jimmyCounter.text("Counter Attack: "+jimmyInfo.counterAttack).attr("Jimmy")
                      jimmyLife.appendTo("#Jimmy")
                      jimmyCounter.appendTo("#Jimmy")

                       //Tammy Life and Counter
                      var tammyLife = $("<div>");
                      var tammyCounter = $("<div>")
                      tammyLife.addClass("tammyLife")
                      tammyLife.text("Life: "+tammyInfo.life).attr("Tammy")
                      tammyCounter.addClass("tammyCounter")
                      tammyCounter.text("Counter Attack: "+tammyInfo.counterAttack).attr("Tammy")
                      tammyLife.appendTo("#Tammy")
                      tammyCounter.appendTo("#Tammy")

          $(".enemies").on("click", function() {
              $(this).fadeOut();
              $(this).fadeIn();
              var victory = [];
              ["0", "0", "0"]
               var hit = (this.id);
               
               console.log(calvinInfo.life);
               console.log(hit);


                  //Damage given and received
                        switch(hit) {
                            case "Calvin":
                            calvinInfo.life = calvinInfo.life - characterInfo.attack;
                            characterInfo.life = characterInfo.life - calvinInfo.counterAttack
                            console.log("yeahyeahyeah");
                            break;
                            case "Jimmy":
                            jimmyInfo.life = jimmyInfo.life - characterInfo.attack;
                            characterInfo.life = characterInfo.life - jimmyInfo.counterAttack
                            break;
                            case "Tammy":
                            tammyInfo.life = tammyInfo.life - characterInfo.attack;
                            characterInfo.life = characterInfo.life - tammyInfo.counterAttack
                            break;
                        }
                        calvinLife.html("Life: " + calvinInfo.life)
                        jimmyLife.html("Life: " + jimmyInfo.life)
                        tammyLife.html("Life: " + tammyInfo.life)

                        if(calvinInfo.life < 1){
                          $("#Calvin").fadeOut();
                          victory.push("0");
                        }
                        if(tammyInfo.life < 1){
                          $("#Tammy").fadeOut();
                          victory.push("0");
                        }
                        if(jimmyInfo.life < 1){
                          $("#Jimmy").fadeOut();
                          victory.push("0");
                        } 

                        if(victory[2] === "0"){
                          $(".characterSelected").html("VICTORY!!!!")
                           $(".battleGround").empty();
                           $("#charDisplay").html("");
                        }else if(characterInfo.life < 1){
                          $(".characterSelected").html("DEFEAT!!!!")
                          $("#charDisplay").fadeOut();
                        }

                        characterLife.html("Life: " + characterInfo.life)
                        characterInfo.attack = characterInfo.attack + 10
                        



            });

                  
                });

            return false;
  });

