var mybtn= document.getElementById('mybtn')
mybtn.addEventListener( 'click' , function(){
    window.location.href= 'singin.html';
});


  makan = {}
  makan = JSON.parse(localStorage.getItem('email'));

// console.log();

  document.getElementById('message').innerHTML = 'welcom ' + makan.namee

  
   

