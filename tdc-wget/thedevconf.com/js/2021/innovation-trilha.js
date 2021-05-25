//$(window).load(function () {

    $(".descricao").shorten({
        "showChars": 300,
        "moreText": "+",
        "lessText": "-",
    });

    var dataAtual = new Date();
    var dataInicio = new Date("February 2, 2021 15:30:00");
    var dataFinal = new Date("March 25, 2021 13:59:59");
    
    if (dataAtual < dataInicio || dataAtual > dataFinal) {
        console.log("Condição de data rejeitada");
        $(".btn-inscricao").addClass("disabled");
    }

    if (dataAtual < dataInicio) {
        $(".btn-inscricao").text("INSCRIÇÕES EM BREVE!").attr({title: "Aguarde a abertura de inscrições em breve"});
    }

    if (dataAtual > dataFinal) {
        $(".btn-inscricao").text("INSCRIÇÕES ENCERRADAS!").attr({title: "As inscrições online estão encerradas"});
    }                    

//});