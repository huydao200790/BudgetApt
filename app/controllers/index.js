import Controller from '@ember/controller';
export default Controller.extend({
  actions: {
    saveData() {
      // getting email from session
      var email = this.get('session.currentUser.email');
      var user = this.store.createRecord('index',{
        income:this.get('income'),
        spent:this.get('spent'),
        email:email
      });
      user.save();
    }
  }

});
