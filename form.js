window.onload = function() {
    
    var myButton = document.getElementById('my-button');
    
    myButton.onclick = function(event){
        
        event.preventDefault();
        
        var email = document.getElementById("email").value;
        var telephone = document.getElementById("telephone").value;

        var fields = ["surname","firstname","telephone","email","message"];

        
        if (checkEmptyFields(fields)){
            if (validateTelephone(telephone) && validateEmail(email)){
                for (field of fields) {
                    let input = field;
                    let value = document.getElementById(field).value;
                    if (input === "telephone"){
                        if (!(value === ""|| (!value.trim().length)))
                            console.log(input.charAt(0).toUpperCase() + input.slice(1)+": "+value);
                    } else {
                        console.log(input.charAt(0).toUpperCase() + input.slice(1)+": "+value);
                    }
                }
                    
                emptyFields(fields);      
            }   
        }
    }
}

function checkEmptyFields(fields){ 
    for (field of fields){
        if (field !== "telephone"){
            let v = document.getElementById(field).value;
            if (v === "" || (!v.trim().length)){
                alert("All fields marked * are mandatory");
                return false;
            }
        }
        
    }
    return true;
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

