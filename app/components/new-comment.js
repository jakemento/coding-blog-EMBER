import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveA() {
     var params = {
       text: this.get('text'),
       author: this.get('author'),
       post: this.get('post'),
     };
     this.set('addNewComment', false);
     this.sendAction('saveB', params);
   },
   cancel() {
     this.set('addNewComment', false);
   }
 }
});
