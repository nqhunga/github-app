// init Github
const github = new GitHub;
// init UI
const ui = new UI;
// Search input
const searchUser = document.getElementById('searchUser');

//Search input event listeners
searchUser.addEventListener('keyup',(e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
    // Make HTTP call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show Alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show profile
          // console.log(data);
          
          ui.showProfileUser(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }

});