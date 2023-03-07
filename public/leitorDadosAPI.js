let dadosAPItitle = document.querySelector("#dadosAPItitle");
let dadosAPIcompanyName = document.querySelector("#dadosAPIcompanyName");
let dadosAPIdescription = document.querySelector("#dadosAPIdescription");
let dadosAPIpostedAt = document.querySelector("#dadosAPIpostedAt");
let dadosAPIscheduleType = document.querySelector("#dadosAPIscheduleType");
let dadosAPIlocation = document.querySelector("#dadosAPIlocation");
let imgTest = document.querySelector("#imgtest");
fetch("http://10.0.23.107:10101/api").then((resposta) => {

    resposta.json().then((dados) => {

        dados.jobs_results.map((data) => {

            console.log(data);
            dadosAPItitle.innerHTML += data.title + "<br>" + "<br>";
            dadosAPIcompanyName.innerHTML += data.company_name + "<br>" + "<br>";
            dadosAPIdescription.innerHTML += data.description + "<br>" + "<br>";
            dadosAPIpostedAt.innerHTML += data.detected_extensions.posted_at + "<br>" + "<br>";
            dadosAPIscheduleType.innerHTML += data.detected_extensions.schedule_type + "<br>" + "<br>";
            dadosAPIlocation.innerHTML += data.location + "<br>" + "<br>";

        })

    })

})

