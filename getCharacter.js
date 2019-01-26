const Axios = require('axios');

const getCharacter = characterId => {
  return Axios.get(`https://www.dndbeyond.com/character/${characterId}/json`)
    .then(res => {
      return res
    }
  )
}

module.exports = {
  getCharacter
}
