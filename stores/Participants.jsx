var participants = require("../data/Participants.json");
var Reflux = require("reflux");
module.exports = Reflux.createStore({
	initialize:function(){
		this._participants = null;
	},
	getParticipants:function(){
		if (!this._participants){
			// call server
			this._participants = participants;
		}
		return this._participants
	}
});