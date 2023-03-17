import axios from "axios";

class SportsData {
  constructor() {
    this.test = this.callGeneral();
  }

  /*callGeneral = async () => {
    let lesInfosGenerales = null;

    axios
      .get("./generalMocked.json")
      .then((response) => {
        lesInfosGenerales = response.data[0];
        console.log(lesInfosGenerales);
      })
      .catch((error) => {
        console.log(error);
      });

    return lesInfosGenerales;
  };*/

  callGeneral = async () => {
    try {
      const response = await fetch("./generalMocked.json");
      const data = await response.json();
      const lesInfosGenerales = data;
      console.log(lesInfosGenerales);
      return lesInfosGenerales;
    } catch (error) {
      console.log(error);
    }
  };

  // Getter
  getTest() {
    return this.test;
  }
}

export default SportsData;
