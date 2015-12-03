var participants = require("../data/Participants.json");
var Reflux = require("reflux");
var Actions = require("../actions/Actions");
var _ = require("underscore");
module.exports = Reflux.createStore({
	init:function(){
		this._participants = null;
		this.listenTo(Actions.addParticipant,this.addParticipant);
		this.listenTo(Actions.updateParticipant,this.updateParticipant);
	},
	addParticipant:function(data){
		this._participants.push(data);
		this.trigger();
	},
	updateParticipant:function(id,data){
		var participant = _.find(this._participants,p=>p._id === id);
		if (participant) {
			_.extend(participant,data);
			this.trigger();
		}
	},
	getParticipants:function(){
		if (!this._participants){
			// call server
			this._participants = participants;
		}
		return this._participants
	}
});