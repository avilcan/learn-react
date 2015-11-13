var Participant = require("./Participant");
module.exports = React.createClass({
	render:function(){
		return (<div class="panel panel-default">
			  <div class="panel-heading">Panel heading</div>
			  <table class="table">
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
				<Participant />
			</tbody>	  	
			  </table>
			</div>);
	}
});