class Github {
  constructor() {
    this.clientID = "def597b32102fbeaf5af";
    this.clientSecret = "a469007f5b5553df36661f760f3865c239e6dcbc";
    this.perPage = 10;
    this.sort = "asc";
  }
  async getUser(username) {
    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.clientID}&client_secret=${this.clientSecret}`
    );

    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${this.perPage}&sort=${this.sort}?client_id=${this.clientID}&client_secret=${this.clientSecret}`
    );

    const profile = await profileRes.json();
    const repos = await repoRes.json();

    // console.log(profile);

    // birden fazla veriyi return yapmak icin dizi veya obje kullanmamiz lazim
    return { profile, repos }; // burda obje yontemini kullandik
  }
}

export default Github;
