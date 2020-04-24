const searchKey = document.querySelector("#searchInput");
fetch("https://superhero-search.p.rapidapi.com/?hero=thanos", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "superhero-search.p.rapidapi.com",
      "x-rapidapi-key": "280c756bf2mshe920eb0eb1ce901p16668bjsn010ad9d415f4"
    }
  })
  .then(data => data.json())
  .then(data => {
    // console.log(data)
    console.log(data.name)
    console.log(data.biography.fullName)
    console.log(data.biography.placeOfBirth)
    console.log(data.appearance.gender)
    console.log(data.powerstats.intelligence)
    console.log(data.powerstats.combat)
    console.log(data.powerstats.speed)
    console.log(data.powerstats.strength)
    console.log(data.powerstats.durability)
    console.log(data.powerstats.power)
    console.log(data.work.occupation)
    console.log(data.images.lg)
    console.log(data.connections.groupAffiliation)
  })
  .catch(err => {
    console.error(err);
  });
