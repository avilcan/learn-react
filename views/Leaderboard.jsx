var Participant = require("./Participant");
var Participants = require("../stores/Participants");
var _ = require("underscore");
module.exports = React.createClass({
	componentDidMount:function() {
		//listen is function from Reflux
	      Participants.listen(function(){
	      		this.forceUpdate();
	      });
	},
	getParticipants:function(participants){
		return _.map(participants, function(p){
			return (<Participant participantData={p} />)
		});
	},
	render:function(){
		var participants = Participants.getParticipants();
		return (<div className="panel panel-default">
			  <div className="panel-heading">Panel heading</div>
			  <table className="table">
				<thead>
			  <tr>
			    <th>#</th>
			    <th>Name</th>
			    <th>Age</th>
			    <th>Gender</th>
			    <th>Likes</th>
			  </tr>
			</thead>
			<tbody>
				{this.getParticipants(participants)}
			</tbody>	  	
			  </table>
			</div>);
	}
});