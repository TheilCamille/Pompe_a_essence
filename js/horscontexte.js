$( function() {

    $("#box").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });
    $("#log").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });
    $("#finish").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });


    $( "#opener").on( "click", function() {
        $( "#box" ).dialog( "open");
    });
    $( "input" ).on( "click", function() {
        $( "#box" ).dialog( "close");
        $( "#log" ).dialog( "open");
        $( "#log" ).html( $( "input:checked" ).val() + " selectionné. </br><label></br>Entrez votre numéro de carte bleue pour déclencher la distribution.<input type='text' id='cb'/></label><input type='button' value='valider' id='end'/>" ).css('color','white');

        $("#end").on( "click", function() {
            if ($("#cb").val() == 1234) {
                $( "#log" ).dialog( "close");
                $( "#finish" ).dialog( "open");
            }
            
            else is (&("#cb").val() == "") {
                $("#end").hide();
                alert("aucune valeur détecté, vueillez réessayer.");
                $("#log").dialog("open");
            }
                     
            else ($("#cb").val() != 1234) {
                $("#end").hide();
                alert("Le code n'est pas valide, veuillez réessayer.");
                window.location.reload();
            }
        });

    });


});



