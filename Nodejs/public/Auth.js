function checkifLoggedIn()
        {
            firebase.auth().onAuthStateChanged(function(user){
                if(user)
                {
                    console.log(user)
                    document.getElementById('google-signin').setAttribute('style', 'display:none; visibility : hidden;');
                    document.getElementById('signout').setAttribute('style', 'display:inline-block; visibility : visible;');


                }else
                {
                    document.getElementById('google-signin')
                    .setAttribute('style', 'display:inline-block; visibility :visible;');
                    document.getElementById('signout')
                    .setAttribute('style', 'display:none; visibility : hidden;');
                    document.getElementById('map')
                    .setAttribute('style', 'display:none; visibility : hidden;');
                }
            })
             
        }
function signoutfromGoogle()
{
    firebase.auth().signOut();
    
}
window.onload=function()
{
    checkifLoggedIn();
}
function signInWithGoogle()
{
    var googleAuthProvider= new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(googleAuthProvider)
    .then(function(data)
    {
        var idToken = data.credential.idToken
    
        console.log(data)
    })
    .catch(function(error)
    {
        console.log(error)
    })
}