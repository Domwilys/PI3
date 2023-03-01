let dadosAPI = document.querySelector("#dadosapi");
fetch("http://10.0.23.107:10101/api").then((resposta) => {

    resposta.json().then((dados) => {

        dados.search_metadata.map((data) => {

            dadosAPI.innerHTML += [data.search_metadata];

        })

    })

})

