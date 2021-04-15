window.onload = function() {
    
    var myButton = document.getElementById('my-button');
    var buttonForm = document.getElementById("btn-form");
    var buttonMandatory = document.getElementById("btn-mandatory");
    var modalForm = document.getElementById("modal-form");
    var modalRequire = document.getElementById("modal-mandatory");
    
    myButton.onclick = function(event){
        
        event.preventDefault();
        
        var email = document.getElementById("email").value;
        var telephone = document.getElementById("telephone").value;

        var fields = ["surname","firstname","telephone","email","message"];

        
            if (checkEmptyFields(fields,modalRequire)) {
            if (validateTelephone(telephone) && validateEmail(email)){
                for (field of fields) {
                    let input = field;
                    let value = document.getElementById(field).value;
                    if (input === "telephone"){
                        if (!(value === ""|| (!value.trim().length)))
                            console.log(input.toUpperCase()+": "+value);
                    } else {
                        console.log(input.toUpperCase()+": "+value);
                    }
                }
                modalForm.style.display = "block";
                emptyFields(fields);      
            }   }
        
    }

    buttonForm.onclick = function() {
       modalForm.style.display = "none";
      }
    
    buttonMandatory.onclick = function() {
        modalRequire.style.display = "none";
    }
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);     
}

function validateTelephone(tel){
    if (tel === "" || (!tel.trim().length))
        return true;

    const re = /^\d+$/;
    return re.test(String(tel));
}

function  emptyFields(fields){
    for (field of fields)
        document.getElementById(field).value = "";
}




  window.onclick = function(event) {
    var modalForm = document.getElementById("modal-form");
    var modalRequire = document.getElementById("modal-mandatory");

    if (event.target == modalForm) {
        modalForm.style.display = "none";
    }

    if (event.target == modalRequire) {
        modalRequire.style.display = "none";
      }
  }


  
function checkEmptyFields(fields,modalRequire){ 
    for (field of fields){
        if (field !== "telephone"){
            let v = document.getElementById(field).value;
            if (v === "" || (!v.trim().length)){
                modalRequire.style.display = "block";
                return false;
            }
        }
        
    }
    return true;
}
