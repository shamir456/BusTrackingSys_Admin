

function adduser()
{ 

    var name=document.getElementById('name').value
    var phone=document.getElementById('phone').value
    var username=document.getElementById('username').value
    var mail=document.getElementById('mail').value
    var password=document.getElementById('password').value
    var database= firebase.database()
        var adminref=database.ref('/users/'+username).set({
        email: mail,
        lg: 1,
        lt: 0,
        password: password,
        username: username,
        phone:phone,
        name:name
      });


}

function deleteuser()
{ 
    var username=document.getElementById('username').value
    var database= firebase.database()
    var ref=database.ref('/users/'+username)
   return ref.remove()
    
 


}
function updateauser()
{ 
   
    
    var name=document.getElementById('name').value
    var phone=document.getElementById('phone').value
    var username=document.getElementById('username').value
    var mail=document.getElementById('mail').value
    var password=document.getElementById('password').value
    var adminref=database.ref('/users/'+username).set({
        name: name,
        mail: mail,
        lg: 1,
        lt: 0,
        password: password,
        username: username,
        phone:phone
      });
    
   // return ref.push(admin)


}
function readuser()
{ 
    var database= firebase.database()
    var user=document.getElementById('name').value
    var ref=database.ref('/users/'+user)
    ref.once('value',function(snapshot)
        {
            console.log(snapshot.val())


        });


}