

function addadmin()
{ 

    var name=document.getElementById('name').value
    var phone=document.getElementById('phone').value
    var username=document.getElementById('username').value
    var mail=document.getElementById('mail').value
    var password=document.getElementById('password').value
    var database= firebase.database()
        var adminref=database.ref('/admins/'+username).set({
        email: mail,
        lg: 1,
        lt: 0,
        password: password,
        username: username,
        phone:phone,
        name:name
      });


}

function deleteadmin()
{ 
    var admin=document.getElementById('username').value
    var database= firebase.database()
    var ref=database.ref('/admins/'+admin)
   return ref.remove()
    
 // return firebase.database().ref().update();
    
    //return ref.remove()


}
function updateadmin()
{ 
   
    
    var name=document.getElementById('name').value
    var phone=document.getElementById('phone').value
    var username=document.getElementById('username').value
    var mail=document.getElementById('mail').value
    var password=document.getElementById('password').value
    var adminref=database.ref('/admins/'+'hj7').set({
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
function readadmin()
{ 
    var database= firebase.database()
    var admin=document.getElementById('name').value
    var adminref=database.ref('/admins/'+admin)
    adminref.once('value',function(snapshot)
        {
            console.log(snapshot.val())


        });


}