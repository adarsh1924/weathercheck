class Fetch {
  async getCurrent(input) {
    const myKey = "6569f8651ee55bd6681f8e02e0c1e6cd";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
