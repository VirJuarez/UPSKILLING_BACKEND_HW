
module.exports= (req, res) => {
    const {id} = req.params
    const ch = axios.get(`http://database:8004/Character/${id}`)
    res.status(200).json(ch);
  }