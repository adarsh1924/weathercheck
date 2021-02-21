class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "Rourkela";
  }

  populateUI(data) {
    //de-structure vars

    //add them to inner HTML

    document.getElementById('city-name').innerHTML = `
            ${data.name}
            <!-- <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6>
                <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>

            </div>
        </div> -->


        `;
        document.getElementById('temp').innerHTML = `
            ${data.main.temp} K



            `;

            document.getElementById('humidity').innerHTML = `
                ${data.main.humidity} %



                `;
  }


  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
