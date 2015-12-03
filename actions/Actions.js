var Reflux = require("reflux");
window.Actions = {
	"addParticipant":Reflux.createAction(),
	"like":Reflux.createAction(),
	"unlike":Reflux.createAction(),
	"updateParticipant":Reflux.createAction()
}

module.exports = window.Actions;