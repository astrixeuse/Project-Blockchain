var httpProvider;
let web3;
let SContract;

deploy();

async function deploy(){
    const numberContractAddress = "0x75aAAe64a340Dd83ffBbD66250fC67D06dA42289"
    const numberContractABI =[{"inputs": [{"internalType": "string","name": "_hash","type": "string"},{"internalType": "string","name": "_studentName","type": "string"},{"internalType": "string","name": "_studentLastname","type": "string"},{"internalType": "uint256","name": "_birthday","type": "uint256"},{"internalType": "string","name": "_birthplace","type": "string"},{"internalType": "string","name": "_school","type": "string"},{"internalType": "uint256","name": "_gyear","type": "uint256"},{"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"internalType": "string","name": "_certtitle","type": "string"},{"internalType": "string","name": "_faculty","type": "string"},{"internalType": "string","name": "_speciality","type": "string"}],"name": "insertstudentinfo","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "string","name": "_hash","type": "string"},{"indexed": false,"internalType": "string","name": "_studentName","type": "string"},{"indexed": false,"internalType": "string","name": "_studentLastname","type": "string"},{"indexed": false,"internalType": "uint256","name": "_birthday","type": "uint256"},{"indexed": false,"internalType": "string","name": "_birthplace","type": "string"},{"indexed": false,"internalType": "string","name": "_school","type": "string"},{"indexed": false,"internalType": "uint256","name": "_gyear","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"indexed": false,"internalType": "string","name": "_certtitle","type": "string"},{"indexed": false,"internalType": "string","name": "_faculty","type": "string"},{"indexed": false,"internalType": "string","name": "_speciality","type": "string"}],"name": "OnInsert","type": "event"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthday","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthplace","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getcerttitle","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getfaculty","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getgyear","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getHash","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getidDiploma","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getschool","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getspeciality","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentLastname","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentName","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}]
    httpProvider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545")
    web3 =  new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
  
  
  SContract = new ethers.Contract(numberContractAddress, numberContractABI, httpProvider)
  console.log("deployed");
}
async function Submit(){
    function hash(string) {
        const utf8 = new TextEncoder().encode(string);
        return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hashHex = hashArray
            .map((bytes) => bytes.toString(16).padStart(2, '0'))
            .join('');
          return hashHex;
        });
      }
    
    let Account = '';
    let address = prompt("Veuillez saisir votre addresse:","");
    let text;
    let privateKey, textk, name , lastname,birthd,birthp,school,gyear,idD,certt,fac,hashh,idd,tx,wallet;
    web3.eth.getAccounts().then(function(allAccounts){
    
    for (let i = 0;i<allAccounts.length;i++)
    {
      Account += allAccounts[i] 
    }
    
    console.log(Account);
    if(!Account.includes(address) || !address){
      console.log("boucle");
      alert("Erreur...Vérifier votre addresse.")
    }
    else{

    console.log(address);
    console.log(privateKey);
    console.log("address valide");
    }
  })
         console.log(address);
         privateKey = prompt("Veuillez saisir votre clé:", "");
         textk;
         name = document.getElementById("name").value;
         lastname = document.getElementById("lastname").value;
         birthd = document.getElementById("birthday").value;
         birthp = document.getElementById("birthplace").value;
         school = document.getElementById("school").value;
         gyear = document.getElementById("gyear").value;
         idD = document.getElementById("id").value;
         certt = document.getElementById("cert").value;
         fac = document.getElementById("fac").value;
         spec = document.getElementById("spec").value;
         hashh = hash(name + lastname + birthd + birthp + school + gyear + idD + certt + fac + spec);
         if(!name || !lastname || !birthd || !birthp || !school || !gyear || !idD || !certt || !fac || !spec)alert("Erreur...Verifier que vous avez insérer toutes les informations!!")
         if(isNaN(birthd) || isNaN(idD) || isNaN(gyear))alert("Erreur...Veuillez faire attention au dates..leur format doit être numérique!! ex:12012001")

    console.log(address);
    var contractWithSigner = SContract.connect(wallet);
    try{
    ethers.utils.getAddress(address);
     wallet = new ethers.Wallet(privateKey , httpProvider);
    new ethers.Contract( address ,[{"inputs": [{"internalType": "string","name": "_hash","type": "string"},{"internalType": "string","name": "_studentName","type": "string"},{"internalType": "string","name": "_studentLastname","type": "string"},{"internalType": "uint256","name": "_birthday","type": "uint256"},{"internalType": "string","name": "_birthplace","type": "string"},{"internalType": "string","name": "_school","type": "string"},{"internalType": "uint256","name": "_gyear","type": "uint256"},{"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"internalType": "string","name": "_certtitle","type": "string"},{"internalType": "string","name": "_faculty","type": "string"},{"internalType": "string","name": "_speciality","type": "string"}],"name": "insertstudentinfo","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "string","name": "_hash","type": "string"},{"indexed": false,"internalType": "string","name": "_studentName","type": "string"},{"indexed": false,"internalType": "string","name": "_studentLastname","type": "string"},{"indexed": false,"internalType": "uint256","name": "_birthday","type": "uint256"},{"indexed": false,"internalType": "string","name": "_birthplace","type": "string"},{"indexed": false,"internalType": "string","name": "_school","type": "string"},{"indexed": false,"internalType": "uint256","name": "_gyear","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"indexed": false,"internalType": "string","name": "_certtitle","type": "string"},{"indexed": false,"internalType": "string","name": "_faculty","type": "string"},{"indexed": false,"internalType": "string","name": "_speciality","type": "string"}],"name": "OnInsert","type": "event"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthday","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthplace","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getcerttitle","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getfaculty","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getgyear","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getHash","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getidDiploma","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getschool","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getspeciality","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentLastname","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentName","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}] , wallet )
    contractWithSigner = SContract.connect(wallet);
  }
    catch(err)
    {
      alert("Erreur...Insertion échoué.Vérifier votre clé")
    }
    finally{
      ethers.utils.getAddress(address);
       wallet = new ethers.Wallet(privateKey , httpProvider);
      new ethers.Contract( address ,[{"inputs": [{"internalType": "string","name": "_hash","type": "string"},{"internalType": "string","name": "_studentName","type": "string"},{"internalType": "string","name": "_studentLastname","type": "string"},{"internalType": "uint256","name": "_birthday","type": "uint256"},{"internalType": "string","name": "_birthplace","type": "string"},{"internalType": "string","name": "_school","type": "string"},{"internalType": "uint256","name": "_gyear","type": "uint256"},{"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"internalType": "string","name": "_certtitle","type": "string"},{"internalType": "string","name": "_faculty","type": "string"},{"internalType": "string","name": "_speciality","type": "string"}],"name": "insertstudentinfo","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "string","name": "_hash","type": "string"},{"indexed": false,"internalType": "string","name": "_studentName","type": "string"},{"indexed": false,"internalType": "string","name": "_studentLastname","type": "string"},{"indexed": false,"internalType": "uint256","name": "_birthday","type": "uint256"},{"indexed": false,"internalType": "string","name": "_birthplace","type": "string"},{"indexed": false,"internalType": "string","name": "_school","type": "string"},{"indexed": false,"internalType": "uint256","name": "_gyear","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_idDiploma","type": "uint256"},{"indexed": false,"internalType": "string","name": "_certtitle","type": "string"},{"indexed": false,"internalType": "string","name": "_faculty","type": "string"},{"indexed": false,"internalType": "string","name": "_speciality","type": "string"}],"name": "OnInsert","type": "event"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthday","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getbirthplace","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getcerttitle","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getfaculty","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getgyear","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getHash","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getidDiploma","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getschool","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getspeciality","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentLastname","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_idDiploma","type": "uint256"}],"name": "getstudentName","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}] , wallet )
      contractWithSigner = SContract.connect(wallet);
    }

  
      tx = await contractWithSigner.insertstudentinfo(hashh,name,lastname,birthd,birthp,school,gyear,idD,certt,fac,spec);
      await tx.wait();


  idd = await SContract.getidDiploma(parseInt(idD));
  if(idd._hex == '0x00')
  alert("Erreur..."+ err);
  else{alert("Insertion réussite!!!")
  window.location.href = "ajout.html";

}
}

    
