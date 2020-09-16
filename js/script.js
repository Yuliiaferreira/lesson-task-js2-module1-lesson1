const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad";

const resultsHtml = document.querySelector(".results");

async function requestToTheApi() {
   try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        newHtml(json.data)
    }

    catch (error) {
        console.log(error);
        resultsHtml.innerHTML ="error";

    } 
}
requestToTheApi();

function newHtml(data) {
    resultsHtml.innerHTML = "";

    for (let i = 0; i < 7; i++) {
        resultsHtml.innerHTML += `<div class="results"> 
                                    <h2>${data[i].name}</h2>
                                    <p>${data[i].birthday}</p>
                                    <p>${data[i].nickname}</p>
                                    <span>${data[i].occupation}</span>
                                    </div>`;
    }
}
