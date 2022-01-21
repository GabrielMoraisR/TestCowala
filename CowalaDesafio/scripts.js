function saveInfos(){
    nome = document.getElementById('name-field').value;
    profissao = document.getElementById('profession-field').value;
    telefone = document.getElementById('telephone-field').value;
    ip = document.getElementById('ip_addres').value;

    let infosObj = { 'nome': nome, 'profissao': profissao, 'telefone': telefone, 'IP': ip }

    localStorage.setItem('infosUser', JSON.stringify(infosObj));

    let recuperaInfos = localStorage.getItem('infosUser');

    console.log(recuperaInfos);

}

const addIp = (ip) =>{
    document.getElementById('ip_address').value = ip.ip_address;
}


var xmlhttp = new XMLHttpRequest();
var ip_address = '177.94.81.130';
var auth = '0df79945-7ab8-4ff7-b1d5-28cc0574d5c4';
var url = "https://ipfind.co/?auth=" + auth + "&ip=" + ip_address;

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(this.responseText);
      console.log(result);
    }
    addIp(result);
};

xmlhttp.open("GET", url, true);
xmlhttp.send();
