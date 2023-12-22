$(document).ready(function () {
  $("#av1, #av2").on("input", function () {
    $(this).val(function (index, value) {
      var numero = value;

      if (numero < 0 || numero > 10) {
        return false;
      } else {
        return value;
      }
    });

    var av1 = parseFloat($("#av1").val());
    var av2 = parseFloat($("#av2").val());

    if (!isNaN(av1)) {
      var total = av1 + av2;
      var media = total / 2;
      var precisaAv2 = Math.min(10, 14 - av1);
      var precisaAv2Final = Math.min(10, 8 - av1);

      if (isNaN(av2)) {
        if (av1 < 4) {
          $(".result_av1")
            .addClass("borda-sucesso")
            .html(
              "VOCÊ PRECISA TIRAR " +
                precisaAv2Final +
                " PTS NA AV2 PARA IR PARA A FINAL"
            )
            .show();
        } else {
          $(".result_av1")
            .addClass("borda-sucesso")
            .html(
              "VOCÊ PRECISA TIRAR " +
                precisaAv2 +
                " PTS NA AV2 PARA SER APROVADO DIRETO"
            )
            .show();
        }
      } else {
        if (total >= 14) {
          $(".result_media")
            .addClass("borda-sucesso")
            .html("MÉDIA: " + media)
            .show();

          $(".result_av2").addClass("borda-sucesso").html("APROVADO!").show();

          $(".result_media").removeClass("borda-fracasso");
          $(".result_av2").removeClass("borda-fracasso");
          $(".result_final").hide();
          $(".result_reprovado").hide();
        } else if (total >= 8 && total < 14) {
          var precisaFinal = 10 - media;

          $(".result_media")
            .addClass("borda-fracasso")
            .html("MÉDIA: " + media)
            .show();

          $(".result_final").addClass("borda-fracasso").html("FINAL!").show();

          $(".result_av2")
            .addClass("borda-fracasso")
            .html(
              "VOCÊ PRECISA TIRAR " +
                precisaFinal +
                " NA FINAL PARA SER APROVADO"
            )
            .show();

          $(".result_av2").removeClass("borda-sucesso");
          $(".result_reprovado").hide();
        } else {
          $(".result_reprovado")
            .addClass("borda-fracasso")
            .html("REPROVADO!")
            .show();

          $(".result_media")
            .addClass("borda-fracasso")
            .html("MÉDIA: " + media)
            .show();

          $(".result_av2").hide();
          $(".result_final").hide();
        }
      }
    }
  });

  $(".btnResetar").click(function (e) {
    e.preventDefault();

    $("#av1").val("");
    $("#av2").val("");
    $(".result_av1").hide();
    $(".result_av2").hide();
    $(".result_final").hide();
    $(".result_media").hide();
    $(".result_reprovado").hide();
  });
});
