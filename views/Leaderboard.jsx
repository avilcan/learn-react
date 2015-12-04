var Participant = require("./Participant");
var ProParticipant = require("./ProParticipant");
var Participants = require("../stores/Participants");
var Likes = require("../stores/Likes");
var _ = require("underscore");
module.exports = React.createClass({
	componentDidMount:function() {
		var that = this;
		//listen is function from Reflux
	      Participants.listen(function(){
	      		that.forceUpdate();
	      });
	      Likes.listen(function(){
	      	that.forceUpdate();
	      });
	},
	getParticipants:function(participants,likesData){
		return participants.map(function(p){
			return p.get("isPro") ?(<ProParticipant 
						key={p.get("_id")} 
						participantData={p} />):(<Participant 
												key={p.get("_id")} 
												participantData={p}/>)
		});
	},
	render:function(){
		var participants = Participants.getParticipants();
		var likesData = Likes.getLikesData();
		return (<div className="panel panel-default">
			  <div className="panel-heading">Leaderboard</div>
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
				{this.getParticipants(participants,likesData)}
			</tbody>	  	
			  </table>
			</div>);
	}
});