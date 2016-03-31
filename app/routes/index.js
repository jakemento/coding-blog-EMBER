import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog');
  },
  actions: {
    destroyBlog(blog) {
      blog.destroyRecord();
      this.transitionTo('index');
    },
    save3(params) {
      var newBlog = this.store.createRecord('blog', params);
      newBlog.save();
      this.transitionTo('index');
    }
  }
});
