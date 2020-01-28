const media = require('./mediaLoader.js');

const getParty = (request, response) => {
  media.loadFile(request, response, '../client/party.mp4', 'video/mp4');
};

module.exports.getParty = getParty;
