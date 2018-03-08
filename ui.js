class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfileUser(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Respos: ${user.public_repos}</span>
            <span class="badge badge-warning">Public Respos: ${user.public_gists}</span>
            <span class="badge badge-success">Public Respos: ${user.followers}</span>
            <span class="badge badge-info">Public Respos: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = '';
    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-warning">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Folks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // output repos
    document.getElementById('repos').innerHTML = output;
  } 
  // show alert message
  showAlert(message, className) {
    // Clear any alert
    this.clearAlert();
    // create div
    const div = document.createElement('div');
    // add class to div
    div.className = className;
    // add content to div
    div.appendChild(document.createTextNode(message));
    // get container
    const container = document.querySelector('.searchContainer');
    // get search 
    const search = document.querySelector('.search');
    container.insertBefore(div, search);

    // clear alert message after 3 secs
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if(currentAlert) {
      currentAlert.remove();
    }
  }
  // clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }

  
}