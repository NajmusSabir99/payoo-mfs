document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Button is Clicked');
    const phn =  document.getElementById('phoneN').value;
    const pin =  document.getElementById('pin').value;
    if(phn === '5' && pin ==='1234'){
        window.location.href = '/home.html';
    }else{
        alert('Wrong Phone or Pin');
    }
})