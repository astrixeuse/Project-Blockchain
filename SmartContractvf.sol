// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

contract VclassCertData {

   
   address owner ;

   constructor () {

       owner = msg.sender ;
   }

    modifier onlyowner() {
 
   require(msg.sender == owner) ;
  _;
  }

    struct studentinfo {
    string hash;
    string  studentName ;
    string  studentLastname;
    uint256  birthday ;
    string   birthplace ;
    string  school ;
    uint256  gyear ;
    uint    idDiploma ;
    string  certtitle ;
    string  faculty;
    string  speciality ;
    }
   
    mapping(uint =>studentinfo) datalist ;
    

    function  insertstudentinfo(
    string memory _hash,     
    string  memory _studentName ,
    string  memory _studentLastname ,
    uint256  _birthday ,
    string memory _birthplace ,
    string memory _school ,
    uint256  _gyear ,
    uint     _idDiploma ,
    string memory _certtitle ,
    string memory _faculty ,
    string memory _speciality )  public  {

        datalist[_idDiploma].hash = _hash;
        datalist[_idDiploma].studentName = _studentName ;
        datalist[_idDiploma].studentLastname = _studentLastname;
        datalist[_idDiploma].birthday = _birthday ;
        datalist[_idDiploma].birthplace = _birthplace ;
        datalist[_idDiploma].school = _school ;
        datalist[_idDiploma].gyear = _gyear ;
        datalist[_idDiploma].idDiploma = _idDiploma ;
        datalist[_idDiploma].certtitle = _certtitle ;
        datalist[_idDiploma].faculty = _faculty ;
        datalist[_idDiploma].speciality = _speciality ;

        emit OnInsert(msg.sender, _hash, _studentName, _studentLastname, _birthday, _birthplace, _school, _gyear, _idDiploma, _certtitle, _faculty, _speciality);

    }

    
     function getHash(uint _idDiploma) public view returns (string memory) {

         return  datalist[_idDiploma].hash ;
    }
    function getstudentName(uint _idDiploma) public view returns (string memory) {

         return  datalist[_idDiploma].studentName ;
    }
    function getstudentLastname(uint _idDiploma) public view returns (string memory) {

         return  datalist[_idDiploma].studentLastname ;
    }
    function getbirthday(uint _idDiploma) public view returns (uint256 ) {

         return datalist[_idDiploma].birthday  ;
    }
    function getbirthplace(uint _idDiploma) public view returns (string memory) {

         return datalist[_idDiploma].birthplace  ;
    }
      function getschool(uint _idDiploma) public view returns (string memory) {

         return  datalist[_idDiploma].school;
    }
      function getgyear(uint _idDiploma) public view returns (uint256 ) {

         return  datalist[_idDiploma].gyear;
    }
      function getidDiploma(uint _idDiploma) public view returns (uint ) {

         return datalist[_idDiploma].idDiploma ;
    }
      function getcerttitle(uint _idDiploma) public view returns (string memory) {

         return datalist[_idDiploma].certtitle ;
    }
      function getfaculty(uint _idDiploma) public view returns (string memory) {

        return datalist[_idDiploma].faculty ;
    }
      function getspeciality(uint _idDiploma) public view returns (string memory) {

         return datalist[_idDiploma].speciality  ;
    }

    

   
    event OnInsert ( 
    address user ,
    string _hash,
    string  _studentName ,
    string  _studentLastname,
    uint256  _birthday,
    string  _birthplace ,
    string  _school ,
    uint256  _gyear ,
    uint _idDiploma ,
    string  _certtitle ,
    string _faculty ,
    string  _speciality) ;


}
