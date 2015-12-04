var ParticipantMixin = {
	getInitialState:function(){
		return {
			expanded:true
		}
	},
	rowClicked:function(){
		this.setState({
			expanded:!this.state.expanded
		});
	}
}

module.exports = ParticipantMixin;