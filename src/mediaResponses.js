const media = require('./mediaLoader.js');

const getParty = (request, response) => {
  media.loadFile(request, response, '../client/party.mp4', 'video/mp4');
};

const getBird = (request, response) => {
  media.loadFile(request, response, '../client/bird.mp4', 'video/mp4');
};

const getBling = (request, response) => {
  media.loadFile(request, response, '../client/bling.mp3', 'audio/mpeg');
};

module.exports.getParty = getParty;
module.exports.getBird = getBird;
module.exports.getBling = getBling;
