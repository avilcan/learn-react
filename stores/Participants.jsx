var participants = require("../data/Participants.json");
var Reflux = require("reflux");
var Actions = require("../actions/Actions");
module.exports = Reflux.createStore({
	init:function(){
		this._participants = null;
		this.listenTo(Actions.addParticipant,this.addParticipant);
	},
	addParticipant:function(data){
		this._participants.push(data);
		this.trigger();
	},
	getParticipants:function(){
		if (!this._participants){
			// call server
			this._participants = participants;
		}
		return this._participants
	}
});