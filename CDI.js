
var aplicacao, aplicacaoInicial, CDI, desc, cdi, lucro, prazo, pDias;

aplicacaoInicial = 1000;
aplicacao = aplicacaoInicial;
CDI = 0.0290;
rendimentoCDI = (140*CDI)/100;
CDI = rendimentoCDI;
prazo = 3;
pDias = prazo * 365;
    
    console.log("Valor da aplicação: R$ " + aplicacao + "\n" +
        "Taxa de rendimento: " + (CDI * 100).toFixed(2) + "%" + "\n" +
        "Prazo em anos: " + prazo + "\n" +
        "Prazo em dias: " + pDias + "\n" +
        "------------------------------");
    for (i = 1; i <= prazo; i++) {
        aplicacao = (aplicacao * CDI) + aplicacao;
        console.log("Resultado " + i + "º ano: " + aplicacao.toFixed(2));
    }
    console.log("----------------------------------------");
    console.log("Saldo bruto: " + aplicacao.toFixed(2));
    console.log("Taxa do CDI: " + (CDI*100).toFixed(2) + "%");
    
    if (pDias <= 180) {
        desc = 22.5;
    } else if (pDias > 180 && pDias <= 360) {
        desc = 20;
    } else if (pDias > 360 && pDias <= 720) {
        desc = 17.5;
    } else {
        desc = 15;
    }
    lucro = (aplicacao - aplicacaoInicial).toFixed(2);
    aplicacao = aplicacao - ((lucro*desc)/100);
    console.log("Desconto IR: " + desc + "%");
    console.log("Valor IR: " + ((lucro*desc)/100).toFixed(2));
    console.log("Saldo líquido: " + aplicacao.toFixed(2));