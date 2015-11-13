module.exports = Reflux.createStore({
	initialize:function(){
		this._participants = null;
	},
	getParticipants:function(){
		if (!this._participants){

		}
		return this._participants
	}
});