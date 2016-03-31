import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm(){
      this.set('updateBlogForm', true);
    },
    update(blog) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        date: this.get('date'),
        text: this.get('text'),
      };
      this.set('updateBlogForm', false);
      this.sendAction('update', blog, params);
    },
    cancel(){
      this.set('updateBlogForm', false);
    }
  }
});
