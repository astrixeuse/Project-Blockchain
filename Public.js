var httpProvider;
let web3;
let SContract;
let key = "1";
var elText;



async function Generate(){
    console.log("generate here")

    const numberContractAddress = "0x75aAAe64a340Dd83ffBbD66250fC67D06dA42289"
    const numberContractABI =[{"inputs": [{"internalType": "string","name": "_hash","type": "string"},{"internalType": "string","name": "_studentName","type": "string"},{"internalType": "string","name": "_studentLastname","type": "string"},{"internalType": "uint256","name": "_birthday","type": "uint256"},{"internalType": "string","name": "_birthplace","type": "string"},{"internalType": "string","name": "_school","type": "string"},{"internalType": "uint256","name": "_gyear","type": "uint256"},{"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"internalType": "string","name": "_certtitle","type": "string"},{"internalType": "string","name": "_faculty","type": "string"},{"internalType": "string","name": "_speciality","type": "string"}],"name": "insertstudentinfo","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "string","name": "_hash","type": "string"},{"indexed": false,"internalType": "string","name": "_studentName","type": "string"},{"indexed": false,"internalType": "string","name": "_studentLastname","type": "string"},{"indexed": false,"internalType": "uint256","name": "_birthday","type": "uint256"},{"indexed": false,"internalType": "string","name": "_birthplace","type": "string"},{"indexed": false,"internalType": "string","name": "_school","type": "string"},{"indexed": false,"internalType": "uint256","name": "_gyear","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"indexed": false,"internalType": "string","name": "_certtitle","type": "string"},{"indexed": false,"internalType": "string","name": "_faculty","type": "string"},{"indexed": false,"internalType": "string","name": "_speciality","type": "string"}],"name": "OnInsert","type": "event"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthday","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthplace","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getcerttitle","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getfaculty","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getgyear","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getHash","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getidDiploma","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getschool","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getspeciality","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentLastname","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentName","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}]
    httpProvider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545")
    let SContract = new ethers.Contract(numberContractAddress, numberContractABI, httpProvider)

    try
    {
    
    key = document.getElementById("key").value;
    
        if(isNaN(key))
        throw("Votre identificateur est invalide");
        
        if(!key)
            throw("Veuillez entrer votre identificateur");
        
    }   
    catch(err)
    {
        alert(err);
    }
    

    var idd
    try{
        idd = await SContract.getidDiploma(parseInt(key));
        if(idd._hex == '0x00')
        throw(console.log(idd))
    }
    catch(err)
    {
        alert("Identificateur non existant..");
    }

    if(idd._hex != '0x00'){
        localStorage.setItem("KEY",key);
        window.location.href = "diplome.html";
    }

}

async function Affiche(){
    const numberContractAddress = "0x75aAAe64a340Dd83ffBbD66250fC67D06dA42289"
    const numberContractABI =[{"inputs": [{"internalType": "string","name": "_hash","type": "string"},{"internalType": "string","name": "_studentName","type": "string"},{"internalType": "string","name": "_studentLastname","type": "string"},{"internalType": "uint256","name": "_birthday","type": "uint256"},{"internalType": "string","name": "_birthplace","type": "string"},{"internalType": "string","name": "_school","type": "string"},{"internalType": "uint256","name": "_gyear","type": "uint256"},{"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"internalType": "string","name": "_certtitle","type": "string"},{"internalType": "string","name": "_faculty","type": "string"},{"internalType": "string","name": "_speciality","type": "string"}],"name": "insertstudentinfo","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "string","name": "_hash","type": "string"},{"indexed": false,"internalType": "string","name": "_studentName","type": "string"},{"indexed": false,"internalType": "string","name": "_studentLastname","type": "string"},{"indexed": false,"internalType": "uint256","name": "_birthday","type": "uint256"},{"indexed": false,"internalType": "string","name": "_birthplace","type": "string"},{"indexed": false,"internalType": "string","name": "_school","type": "string"},{"indexed": false,"internalType": "uint256","name": "_gyear","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"indexed": false,"internalType": "string","name": "_certtitle","type": "string"},{"indexed": false,"internalType": "string","name": "_faculty","type": "string"},{"indexed": false,"internalType": "string","name": "_speciality","type": "string"}],"name": "OnInsert","type": "event"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthday","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthplace","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getcerttitle","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getfaculty","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getgyear","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getHash","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getidDiploma","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getschool","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getspeciality","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentLastname","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentName","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}]
    let httpProvider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545")
    SContract = new ethers.Contract(numberContractAddress, numberContractABI, httpProvider)

    key = localStorage.getItem("KEY");

    var name, lastname, birthd, birthp, school, gyear, idD, certt, fac, spec;

    name = await SContract.getstudentName(key);
    lastname = await SContract.getstudentLastname(key);
    birthd = await SContract.getbirthday(key);
    birthp = await SContract.getbirthplace(key);
    school = await SContract.getschool(key);
    gyear = await SContract.getgyear(key);
    idD = await SContract.getidDiploma(key);
    certt = await SContract.getcerttitle(key);
    fac = await SContract.getfaculty(key);
    spec = await SContract.getspeciality(key);

    document.getElementById("name").innerHTML = name;
    document.getElementById("lastname").innerHTML = lastname;
    document.getElementById("id").innerHTML = idD;
    document.getElementById("birthdate").innerHTML = birthd;
    document.getElementById("birthplace").innerHTML = birthp;
    document.getElementById("gyear").innerHTML = gyear;
    document.getElementById("school").innerHTML = school;
    document.getElementById("cert").innerHTML = certt;
    document.getElementById("fac").innerHTML = fac;
    document.getElementById("spec").innerHTML = spec;


}

console.log(key);
async function codeQr(){
    const numberContractAddress = "0x75aAAe64a340Dd83ffBbD66250fC67D06dA42289"
    const numberContractABI =[{"inputs": [{"internalType": "string","name": "_hash","type": "string"},{"internalType": "string","name": "_studentName","type": "string"},{"internalType": "string","name": "_studentLastname","type": "string"},{"internalType": "uint256","name": "_birthday","type": "uint256"},{"internalType": "string","name": "_birthplace","type": "string"},{"internalType": "string","name": "_school","type": "string"},{"internalType": "uint256","name": "_gyear","type": "uint256"},{"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"internalType": "string","name": "_certtitle","type": "string"},{"internalType": "string","name": "_faculty","type": "string"},{"internalType": "string","name": "_speciality","type": "string"}],"name": "insertstudentinfo","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "string","name": "_hash","type": "string"},{"indexed": false,"internalType": "string","name": "_studentName","type": "string"},{"indexed": false,"internalType": "string","name": "_studentLastname","type": "string"},{"indexed": false,"internalType": "uint256","name": "_birthday","type": "uint256"},{"indexed": false,"internalType": "string","name": "_birthplace","type": "string"},{"indexed": false,"internalType": "string","name": "_school","type": "string"},{"indexed": false,"internalType": "uint256","name": "_gyear","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"indexed": false,"internalType": "string","name": "_certtitle","type": "string"},{"indexed": false,"internalType": "string","name": "_faculty","type": "string"},{"indexed": false,"internalType": "string","name": "_speciality","type": "string"}],"name": "OnInsert","type": "event"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthday","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthplace","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getcerttitle","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getfaculty","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getgyear","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getHash","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getidDiploma","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getschool","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getspeciality","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentLastname","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentName","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}]
    let httpProvider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545")
    SContract = new ethers.Contract(numberContractAddress, numberContractABI, httpProvider)

    var qrcode = new QRCode("qrcode");
    console.log("éuwu")
    console.log(key)
    key = localStorage.getItem("KEY");
    console.log(key)
    elText = await SContract.getHash(key);
    console.log(elText)

    qrcode.makeCode("HASH:<" + elText + ">L'IDENTIFICATEUR:<" + key + ">");

   

}

  async function Hasheuse(){
    const numberContractAddress = "0x75aAAe64a340Dd83ffBbD66250fC67D06dA42289"
    const numberContractABI =[{"inputs": [{"internalType": "string","name": "_hash","type": "string"},{"internalType": "string","name": "_studentName","type": "string"},{"internalType": "string","name": "_studentLastname","type": "string"},{"internalType": "uint256","name": "_birthday","type": "uint256"},{"internalType": "string","name": "_birthplace","type": "string"},{"internalType": "string","name": "_school","type": "string"},{"internalType": "uint256","name": "_gyear","type": "uint256"},{"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"internalType": "string","name": "_certtitle","type": "string"},{"internalType": "string","name": "_faculty","type": "string"},{"internalType": "string","name": "_speciality","type": "string"}],"name": "insertstudentinfo","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "string","name": "_hash","type": "string"},{"indexed": false,"internalType": "string","name": "_studentName","type": "string"},{"indexed": false,"internalType": "string","name": "_studentLastname","type": "string"},{"indexed": false,"internalType": "uint256","name": "_birthday","type": "uint256"},{"indexed": false,"internalType": "string","name": "_birthplace","type": "string"},{"indexed": false,"internalType": "string","name": "_school","type": "string"},{"indexed": false,"internalType": "uint256","name": "_gyear","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"indexed": false,"internalType": "string","name": "_certtitle","type": "string"},{"indexed": false,"internalType": "string","name": "_faculty","type": "string"},{"indexed": false,"internalType": "string","name": "_speciality","type": "string"}],"name": "OnInsert","type": "event"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthday","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthplace","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getcerttitle","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getfaculty","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getgyear","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getHash","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getidDiploma","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getschool","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getspeciality","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentLastname","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentName","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}]
    let httpProvider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545")
    SContract = new ethers.Contract(numberContractAddress, numberContractABI, httpProvider)

    let hash;
    hash = document.getElementById("hash").value;
    key = document.getElementById("keyy").value;


    var _hash;
    var idd
    
    try{

        if(!hash || !key || isNaN(key))throw("Veuillez verifier que vous avez bien insérer vos infos")

        idd = await SContract.getidDiploma(parseInt(key));

        if(idd._hex == '0x00')throw("Diplôme falsifié")

        _hash = await SContract.getHash(parseInt(key));


        if(hash != _hash)throw("Diplôme falsifié")
        
    }
    catch(err)
    {
        alert("Erreur..."+ err);
    }

    if(hash == _hash){
    alert("Diplome Certifié!!!!!")        
    }
     

  }