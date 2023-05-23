// const Film= require("../data")
const axios = require("axios")

module.exports= async (req, res) => {
    const {data} = await axios.get("http://database:8004/Film")
    res.status(200).json(data);
  };
  