import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },
    save1() {
     var params = {
       title: this.get('title'),
       author: this.get('author'),
       date: this.get('date'),
       image: this.get('image'),
       text: this.get('text'),
     };
     this.set('addNewBlog', false);
     this.sendAction('save2', params);
   }
 }
});
