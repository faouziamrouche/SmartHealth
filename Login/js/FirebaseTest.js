(function(){
	  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBAU9BYcwcQNkfhG8zkolc_qPhu6dlQGJk",
    authDomain: "smarthealth-8a874.firebaseapp.com",
    databaseURL: "https://smarthealth-8a874.firebaseio.com",
    projectId: "smarthealth-8a874",
    storageBucket: "smarthealth-8a874.appspot.com",
    messagingSenderId: "562237265635"
  };
  firebase.initializeApp(config);
	  var email= document.getElementById('emailzone');
	  var pass= document.getElementById('passwordzone');
	  var email2= document.getElementById('emailzone2');
	  var pass2= document.getElementById('passwordzone2');
	  var log = document.getElementById('logbutton');
	  var signin = document.getElementById('signbutton');
	  var logout = document.getElementById('logoutbutton');

	  log.addEventListener('click', e=>{
	  	var txtemail=email.value;
	  	var txtpass=pass.value;
	  	var auth=firebase.auth();
	  	var promise= auth.signInWithEmailAndPassword(txtemail,txtpass);
	  	promise.catch(e=>console.log(e.message));
	  });

	  signin.addEventListener('click', e=>{
	  	var txtemail=email.value;
	  	var txtpass=pass.value;
	  	var auth=firebase.auth();
	  	var promise= auth.createUserWithEmailAndPassword(txtemail,txtpass);
	  	promise.catch(e=>console.log(e.message));
	  });

	  /*logout.addEventListener('click', e=>{
	  	firebase.auth().signOut();
	  });

	  firebase.auth().onAuthStateChanged(firebaseUser => {
	  	if (firebaseUser) {
	  		email.classList.add('hide');
	  		pass.classList.add('hide');
	  		log.classList.remove('smoothscroll','button','stroke');
	  		signin.classList.remove('smoothscroll','button','stroke');
	  		log.classList.add('hide');
	  		signin.classList.add('hide');
	  		logout.classList.remove('hide');
	  		logout.classList.add('smoothscroll','button','stroke');

	  	}
	  	else{
	  		email.classList.remove('hide');
	  		pass.classList.remove('hide');
	  		log.classList.remove('hide');
	  		signin.classList.remove('hide');
	  		log.classList.add('smoothscroll','button','stroke');
	  		signin.classList.add('smoothscroll','button','stroke');
	  		logout.classList.remove('smoothscroll','button','stroke');
	  		logout.classList.add('hide');
	  	}
	  }
	  );*/
}());
