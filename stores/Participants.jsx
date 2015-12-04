var participants = require("../data/Participants.json");
var Reflux = require("reflux");
var Actions = require("../actions/Actions");
var _ = require("underscore");
var Immutable = require("immutable");
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
		var index = this._participants.findIndex(p=>p.get("_id") === id);
		if (index !== -1) {
			var updatedParticipant = this._participants.get(index).merge(data);
			this._participants = this._participants.set(index,updatedParticipant);
			this.trigger();
		}
	},
	getParticipants:function(){
		if (!this._participants){
			// call server
			this._participants = Immutable.fromJS(participants);
		}
		return this._participants
	}
});