 var email = document.getElementById('email')
 var password = document.getElementById('password') 
 var mybtn = document.getElementById('button')   



 var makhzan = []
 makhzan = JSON.parse(localStorage.getItem('list'));

 mybtn.addEventListener( 'click' , function(){
     for ( var i = 0  ; i < makhzan.length ; i++ ){
        if(email.value == makhzan[i].email &&
            password.value == makhzan[i].password){
                window.location.href='home.html'; 

              localStorage.setItem( 'email' , JSON.stringify(makhzan[i]))   
            }
            }  

 clearData()     
})

function clearData(){
    email.value='';
    password.value='';
};

function validEmail(){
    var rejex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    var text = email.value
    var alertMas = document.getElementById('alertMas')
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
