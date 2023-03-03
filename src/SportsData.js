import axios from "axios";

class SportsData {
  constructor() {
    this.test = this.callGeneral();
  }

  async callGeneral() {
    let lesInfosGenerales = null;

    await axios
      .get("./generalMocked.json")
      .then((response) => {
        lesInfosGenerales = response.data[0].todayScore;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(lesInfosGenerales);
    return lesInfosGenerales;
  }

  // Getter
  getTest() {
    return this.test;
  }
}

export default SportsData;
