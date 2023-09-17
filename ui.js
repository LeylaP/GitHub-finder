class UI {
  constructor() {
    this.profile = document.getElementById("profile");
    this.reposArea = document.getElementById("repos");
    this.alerArea = document.getElementById("alert");
  }

  showProfile(data) {
    console.log(data);
    this.profile.innerHTML = `
        <div class="row border p-4 my-4">
        
        <div class="col-md-3">
          <img class="img-fluid rounded" src=${data.avatar_url} alt="" />
          <a target="_blank" class="btn btn-primary mt-3 w-100" href="${
            data.html_url
          }">Profili Goster</a>
        </div>
        
        <div class="col-md-9">
          <div class="d-flex flex-row justify-content-around">
            <p class="badge bg-primary fs-6 mt-1">Acik Repolar: ${
              data.public_repos
            }</p>
            <p class="badge bg-secondary fs-6 mt-1">Acik Gistler: ${
              data.public_gists
            }</p>
            <p class="badge bg-success fs-6 mt-1">Takipciler: ${
              data.followers
            }</p>
            <p class="badge bg-info fs-6 mt-1">Takip Edilenler: ${
              data.following
            }</p>
          </div>

          <ul class="list-group mt-5">
            <li class="list-group-item">Hakkinda: ${data.bio}</li>
            <li class="list-group-item">Sirker: ${data.company}</li>
            <li class="list-group-item">Website: ${data.blog}</li>
            <li class="list-group-item">Konum: ${data.location}</li>
            <li class="list-group-item">Hesap Olusturma: ${new Date(
              data.created_at
            ).toLocaleDateString()}</li>
          </ul>
        </div>
      </div>
        `;
  }

  // repolari ekrana yazmak

  showRepos(repos) {
    repos.forEach((repo) => {
      // console.log(repo);
      this.reposArea.innerHTML += `
      <div class="border row p-3 mb-4">
          <div class="col-md-6">
            <a href="${repo.html_url}">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge bg-primary">Yildin: ${repo.stargazers_count}</span>
            <span class="badge bg-secondary">Izleyenler: ${repo.watchers}</span>
            <span class="badge bg-success">Fork'lar: ${repo.forks_count}</span>
          </div>
        </div>
      `;
    });
    // console.log(repos);
  }

  // uyari mesaji veren fonksion
  showAlert(message, classname) {
    const div = document.createElement("div");
    div.classList.add("alert");
    div.classList.add(classname);
    div.innerHTML = message;
    this.alerArea.appendChild(div);

    // Alert i 3 saniye sonra kaldiriyoruz
    setTimeout(() => {
      div.remove();
    }, 2000);
  }
}

export default UI;
