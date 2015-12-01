var Reflux = require("reflux");
var Likes = require("../data/Likes.json");
var Actions = require("../actions/Actions");
var _ = require("underscore");
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
			this.likes = Likes
		}

		return this.likes;
	},
	like:function(userId) {
		var likeObj = _.find(this.likes, like => like.userId === userId);
		if (likeObj) {
			likeObj.numOfLikes++
			likeObj.likedByUser = true;
			this.trigger();
		}
	},
	unlike:function(userId) {
		var likeObj = _.find(this.likes, like => like.userId === userId);
		if (likeObj) {
			likeObj.numOfLikes--
			likeObj.likedByUser = false;
			this.trigger();
		}
	}
})