import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(blog) {
      if (confirm('do you really want to delete this blog post?')){
        this.sendAction('destroyBlog', blog);
      }
    }
  }
});
