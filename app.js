const searchKey = document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");
const template = document.querySelector("#template");
const loader = document.querySelector(".loader");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (searchKey.value.trim().length == 0) {
    alert("Come on, don't be silly! Type something!");
  } else {
    loader.style.display = "block";
    getInfo();
  }
  searchKey.value = "";
});
const getInfo = (data) => {
  fetch(`https://superhero-search.p.rapidapi.com/?hero=${searchKey.value}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "superhero-search.p.rapidapi.com",
        "x-rapidapi-key": "280c756bf2mshe920eb0eb1ce901p16668bjsn010ad9d415f4"
      }
    })
    .then(data => data.json())
    .then(data => {
      loader.style.display = "none";
      if (data.name === "Batman") {
        data.biography.fullName = "Bruce Wayne";
        data.biography.placeOfBirth = "Gotham City";
        data.work.occupation = "Businessman";
        data.images.lg = "https://images.squarespace-cdn.com/content/v1/5106cf89e4b04827cc5fc5bb/1464183470879-OPDRDHFHVBLUPMMZ4W19/ke17ZwdGBToddI8pDm48kJJfqOaFnXyXp8QgVK7GFFpZw-zPPgdn4jUwVcJE1ZvWxYb2krSYGNt8NUBfJA7VeEJFbgE-7XRK3dMEBRBhUpwKkMp-KrScvAEhGgcXECd6RvS4HVgnnO9YSxuNBnNcFZ3S8GIl5rZltFpvn_OeOd4/image-asset.jpeg";
      }
      template.innerHTML = `
      <div class=" col-lg-12">
        <div class="col-md-4 mb-4 mt-4">
          <img alt="" title="" class="img-circle d-block img-thumbnail isTooltip mt-5 mb-5 " src="${data.images.lg}" data-original-title="Usuario">
        </div>
        <div class="row">
          <div class="col-md-6 mt-5 pt-5">
            <ul class="list-group align-items-center">
             <li class="list-group-item">
                <label class="">Name:</label>
                <p class="">${data.name}</p>
              </li>
              <li class="list-group-item">
                <label class="">Real name :</label>
                <p class="">${data.biography.fullName}</p>
              </li>
               <li class="list-group-item d-flex justify-content-between align-items-center">
                <label class="" 1>Gender: </label>
                <p class="">${data.appearance.gender}</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <label class="">Place of birth:</label>
                <p class="">${data.biography.placeOfBirth}</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <label class="">Day Job: </label>
                <p class="">${data.work.occupation}</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <label class="">Affilliations: </label>
                <p class="">${data.connections.groupAffiliation}</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <p>Strength</p>
                <div class="progress md-progress" style="height: 20px; background-color: #121212;">
                  <div class="progress-bar bg-success" role="progressbar" style="width: ${data.powerstats.strength}%; height: 20px" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${data.powerstats.strength}%</div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <p>Intelligence</p>
                <div class="progress md-progress" style="height: 20px; background-color: #121212;">
                  <div class="progress-bar bg-success" role="progressbar" style="width: ${data.powerstats.intelligence}%; height: 20px" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${data.powerstats.intelligence}%</div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <p>Combat</p>
                <div class="progress md-progress" style="height: 20px; background-color: #121212;">
                  <div class="progress-bar bg-success" role="progressbar" style="width: ${data.powerstats.combat}%; height: 20px" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${data.powerstats.combat}%</div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <p>Speed</p>
                <div class="progress md-progress" style="height: 20px; background-color: #121212;">
                  <div class="progress-bar bg-success" role="progressbar" style="width: ${data.powerstats.speed}%; height: 20px" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${data.powerstats.speed}%</div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <p>Durability</p>
                <div class="progress md-progress" style="height: 20px; background-color: #121212;">
                  <div class="progress-bar bg-success" role="progressbar" style="width: ${data.powerstats.durability}%; height: 20px" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${data.powerstats.durability}%</div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <p>Power</p>
                <div class="progress md-progress" style="height: 20px; background-color: #121212;">
                  <div class="progress-bar bg-success" role="progressbar" style="width: ${data.powerstats.power}%; height: 20px" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${data.powerstats.power}%</div>
                </div>
              </li>
            </ul>
          </div>
          </li>
          </ul>
        </div>
      </div>`;
    })
    .catch(err => {
      loader.style.display = "none";
      console.error(err);
      alert("Oops! We did not find any result for that one");
    });
}
