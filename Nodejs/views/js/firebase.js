

function addadmin()
{ 
    var database= firebase.database()
    var ref=database.ref('/admins')
    // var adminref=database.ref('/admins/'+'username').set({
    //     username: 'shm',
    //     email: 'kee',
    //     profile_picture : 'fsf'
    //   });
    var admin=document.getElementById('name').value
    
    
    return ref.push(admin)


}