Template.timeline.helpers({
    posts: function(){
        console.log('usuarios: ', Meteor.users.findOne({}));
        return Post.list(Meteor.userId());
    }
});