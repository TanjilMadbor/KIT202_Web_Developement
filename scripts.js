
//tanjil


//Java Script code For reversing the Posts in index.html
document.addEventListener("DOMContentLoaded",()=>{
  const container=document.querySelector("body"); // Select the body
  const posts=Array.from(container.querySelectorAll(".post"));  //Select all the posts which are inside the body

  posts.reverse(); // Reverse the Posts Order 

  posts.forEach(post=>container.appendChild(post)); // Append each post in reverse order
}
);


// java Script code for reversing the posts in older.html
document.addEventListener("DOMContentLoaded",()=>{
    const container=document.querySelector("main.old_container"); // Selecting the old_container where posts are present
    const posts=Array.from(container.querySelectorAll(".post"));  //Select all the posts which associated the 'post' class

    posts.reverse(); // Reverse the Post Order 

    posts.forEach(post=>container.appendChild(post)); // Append each post in reverse
}
);

//junaead
// handle login form validation

document.addEventListener("DOMContentLoaded", function() {
  // Ensure the page loads from the top (prevents mid-scroll starts)
  window.scrollTo(0, 0);

  // Handle Login Form validation
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {

     // Get a reference to the username input field (used for login)
      const user = document.getElementById("username");
      // Get a reference to the password input field (used for login)
      const pass = document.getElementById("password");
      // Get a reference to the element where login error messages will be shown
      const errmsg = document.getElementById("errorMessage");

      // Add submit listener to validation fields before login
      loginForm.addEventListener("submit", function(e) {
          const u = user.value.trim();// remove spaces from username
          const p = pass.value.trim();// remove spaces from 

          if (u === "" || p === "") {
              e.preventDefault();
              errmsg.style.display = "block";
              user.classList.add("error");
              pass.classList.add("error");
          } else {
              e.preventDefault();
              
              errmsg.style.display = "none";
              user.classList.remove("error");
              pass.classList.remove("error");
              location.href = "index.html"; // go to homepage
          }
      });
  }

  // handle registration Form validation
  const regForm = document.getElementById("registrationForm");
  if (regForm) {
      // Attach an event listner to handle the form submit event 
      regForm.addEventListener("submit", function(e) {
          //prevent the default form submission to allow for validation first
          e.preventDefault();

          // Grab all the input values and trim any accidental spaces
          const uname = document.getElementById("username").value.trim();
          //grt the email input value and remove any extra spaces
          const mail = document.getElementById("email").value.trim();
          //Get the password input value(no trim for password to preserve user intent)
          const pwd = document.getElementById("password").value;
          //Get the confirm password input value(also untrimmed)
          const cpwd = document.getElementById("confirmPassword").value;
          //Get the element where error messages will be displayed
          const out = document.getElementById("formError");

          //Clear any previous error message before checking again
          out.innerText = ""; // clear previous messages

          // Check empty fields
          if (!uname || !mail || !pwd || !cpwd) {
              out.innerText = "Please fill in all fields.";
              return;
          }

          // Validate email format
          const emailok = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
          if (!emailok.test(mail)) {
              out.innerText = "Please enter a valid email address.";
              return;
          }

          // Validate password strength
          const strong = pwd.length >= 8 && /[A-Z]/.test(pwd) && /\d/.test(pwd);
          if (!strong) {
              out.innerText = "Password must be at least 8 characters, include a capital letter and a number.";
              return;
          }

          // Check password confirmation
          if (pwd !== cpwd) {
              out.innerText = "Passwords do not match.";
              return;
          }

          // If everything checks out, redirect to homepage
          window.location.href = "index.html";
      });
  }
});



 //istiaq
// JS for write post page


const postForm = document.getElementById("postForm");
const postTitle = document.getElementById("postTitle");
const content = document.getElementById("content");
const tags =  document.getElementById("tags");
const errorMessage = document.getElementById("postErrorMessage");

// character count logic
const counter = document.createElement("div");
counter.style.textAlign = "right";
counter.style.fontSize = "0.9rem";
counter.style.color = "#0666ab";

 //Place the counter immediatley following the content textarea
content.parentNode.insertBefore(counter, content.nextSibling);

//Every time a user fills in the content area,the charcter count is updated
content.addEventListener("input", () => {
  const count = content.value.length;
  counter.textContent = `Characters: ${count}/500`;//Displaying currrent charcter count
});

// logic for validation
postForm.addEventListener("submit",function(e){
  e.preventDefault();
  //gets the user input
  const title = postTitle.value.trim();
  const tagValue = tags.value.trim();
  const body =content.value.trim();
  
  //cehcks that if there any empty slot

  if (title === "" || tagValue === "" || body=== ""){
    errorMessage.textContent= "All feilds(title,tags,and content) must be filled out.";
    errorMessage.style.display = "block";
  }

  // to check that the title do not cross the  limit of 80 characters
  else if (title.length>80){
    errorMessage.textContent = "Title cannot exceed 80 characters.";
    errorMessage.style.display="block";

    //checks for the validdation pass

  }else{
    errorMessage.style.display ="none";// prevent any previous message to pop up
    alert("✅ Post submitted succesfully!");// sucess message
    window.location.href="index.html";// shift to homepage after pressing the publish buttuon
  }

  } );

