function getInfo(){
    var emailInfo = document.getElementById("txtEmail").value
    var nomeInfo = document.getElementById("txtNome").value
    var endInfo = document.getElementById("txtEnd").value
    var cepInfo = document.getElementById("txtCEP").value
    var simOuNao = document.getElementById("slc").value
    var sim = document.getElementById("sim").value
    var firstName = nomeInfo.split(" ");
    var firstName = firstName.slice(0,1);
    if(emailInfo && nomeInfo && endInfo && cepInfo){
        if(simOuNao == sim){
            alert("Obrigado "+firstName+ " vamos te enviar em tempo real novidades sobre o desenvolvimento do app, e assim que estiver pronto, já vamos te disponibilizar")
        }
        else{
            alert("Obrigado "+firstName+ " assim que o aplicativo estiver pronto, já vamos te disponibilizar")
        }
    }else{
        alert("Informações invalidas, verifique se os campos foram preenchidos corretamente")
    }
    console.log("Email:"+emailInfo+" Nome:"+nomeInfo+" Endereço:"+endInfo+" CEP:"+cepInfo)
}            
function clean(){
    document.getElementById("txtEmail").value =""
    document.getElementById("txtNome").value = ""
    document.getElementById("txtEnd").value = ""
    document.getElementById("txtCEP").value = ""
}

function home(){
    var casa = confirm("Deseja voltar para home?");
    if(casa==true){
        window.location = "../index.html"
    }
}
        