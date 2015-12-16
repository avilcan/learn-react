var Reflux = require("reflux");
var Likes = require("../data/Likes.json");
var Actions = require("../actions/Actions");
var _ = require("underscore");
var Immutable = require("immutable");
module.exports = Reflux.createStore({
	init:function(){
		this.likes = null;

		//listen to Actions
		this.listenTo(Actions.like,this.like);
		this.listenTo(Actions.unlike,this.unlike);
	},
	getLikesData:function(){
		if (!this.likes) {
			//usually you will make a server request here now we're getting mocked data
			this.likes = Immutable.fromJS(Likes);
		}

		return this.likes;
	},
	like:function(userId) {
		this.updateNumOfLikes(userId,true);
	},
	unlike:function(userId) {
		this.updateNumOfLikes(userId,false)
	},
	updateNumOfLikes:function(id,likedByUser){
		var index = this.likes.findIndex(like => like.get("userId") === id);
		if (index === -1) {
			return;
		}
		var currentLikeData = this.likes.get(index);
		var currentNumOfLikes = currentLikeData.get("numOfLikes");
		var updatedLikeData = likedByUser ? currentLikeData.set("numOfLikes",currentLikeData++):
											currentLikeData.set("numOfLikes",currentLikeData--);
		updatedLikeData = updatedLikeData.set("likedByUser",likedByUser);
		this.likes = this.likes.set(index,updatedLikeData);
		this.trigger();
	}
})