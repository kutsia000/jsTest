const getData = (country,language) =>{
    let data = [];

    let tempCountry  = require(`./${country}.json`);
    let countryData = tempCountry.illustrations;

    let langData;

    if(country==="Geo"){
        switch (language){
            case "en":
                langData = require(`./en.json`);
                break;
            case "ru":
                langData = require(`./ru.json`);
                break;
            default :
                langData = require(`./ka.json`);
                break;
        }
    }

    else if(country==="Ind"){
        switch (language) {
            case "hindi" :
                langData=require(`./hindi.json`);
                break;
            default :
                langData = require(`./en.json`);
                break;
        }
    }

    countryData.forEach(element => {
        let IllustrationObject = {};
        IllustrationObject.url = element.image;
        IllustrationObject.text = langData[element.text] ? langData[element.text] : "";
        data.push(IllustrationObject);
    });

    return data;
} 

let result = getData("Ind","hindi");

console.log(result);