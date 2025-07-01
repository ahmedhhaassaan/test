var namee =  document.getElementById("name")
var email =  document.getElementById("email")
var password =  document.getElementById("password")
var mybtn = document.getElementById('buttonn')

var list = []

mybtn.addEventListener( 'click' , function(){
     addPerson = { 
        namee:namee.value,
        email:email.value,
        password:password.value,
    } 
var found = false;
for (var i = 0; i < list.length; i++) {
  if (email.value === list[i].email) { 
    found = true;
    break;
  }
}
if (found) {
  massage.classList.remove('d-none');
  massage.classList.add('d-block');
} else {
  list.push(addPerson);
  localStorage.setItem('list', JSON.stringify(list));
  clearData();
  massage.classList.add('d-none');
  massage.classList.remove('d-block');
}
})
function clearData(){
    namee.value='';
    email.value='';
    password.value='';
}

function validName(){
    var rejex = /^[A-Z][a-z]{2,20}$/
    var text = namee.value
    var alertMassage = document.getElementById('alertMassage')
  if(rejex.test(text)){
        namee.classList.add('is-valid')
        namee.classList.remove('is-invalid')
        alertMassage.classList.remove('d-none')
        alertMassage.classList.add('d-none')
        return true
    }else{
        namee.classList.add('is-invalid')
        namee.classList.remove('is-valid')
        alertMassage.classList.add('d-none')
        alertMassage.classList.remove('d-none')
        return false
  };
};
function validEmail(){
    var rejex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    var text = email.value
    var alertMas = document.getElementById('wrapMassage')
    if(rejex.test(text)){
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
        alertMas.classList.remove('d-none')
        alertMas.classList.add('d-none')
        return true
    }else{
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        alertMas.classList.add('d-none')
        alertMas.classList.remove('d-none')
        return false
    };
};
function validPassword(){
    var rejex = /^[0-9]{4,}$/
    var text = password.value
    var massage = document.getElementById('massage')

  if(rejex.test(text)){

        password.classList.add('is-valid')
        password.classList.remove('is-invalid')
        massage.classList.remove('d-none')
        massage.classList.add('d-none')
        return true
    }else{
        password.classList.add('is-invalid')
        password.classList.remove('is-valid')
        massage.classList.add('d-none')
        massage.classList.remove('d-none')
        return false
  };
};  