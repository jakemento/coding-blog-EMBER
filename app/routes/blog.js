import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blog', params.blog_id);
  },
  actions: {
    update(blog, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          blog.set(key,params[key]);
        }
      });
      blog.save();
      this.transitionTo('index');
    },
    destroyBlog(blog) {
      blog.destroyRecord();
      this.transitionTo('index');
    },
    saveC(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('blog');
    },

    editComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
      this.transitionTo('blog', params.blog);
    },

    deleteComment(comment) {
      comment.destroyRecord();
    }
  }
});
