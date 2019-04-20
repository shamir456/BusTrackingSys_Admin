function checkifLoggedIn()
        {
            firebase.auth().onAuthStateChanged(function(user){
                if(user)
                {
                    console.log(user)
                    document.getElementById('google-signin')
                .setAttribute('style', 'dispay:none; visibility : hidden')
                document.getElementById('signout')
                .setAttribute('style', 'dispay:inline-block; visibility : visible')


                }else
                {
                    document.getElementById('google-signin')
                    .setAttribute('style', 'dispay:inline-block; visibility :visible')
                    document.getElementById('signout')
                    .setAttribute('style', 'none; visibility : hidden')
    

                }
            })
             
        }
function signout()
{
    firebase.auth().signOut()
    
}
window.onload=function()
{
    checkifLoggedIn()
}
function signInWithGoogle()
{
    var googleAuthProvider= new firebase.auth.GoogleAuthProvider
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