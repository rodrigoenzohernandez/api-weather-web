exports.showIndex = async (req, res) => {
  try {
    res.view('/views/index.ejs', { text: 'text' })
  } catch (err) {
    console.log(err)
  }
}