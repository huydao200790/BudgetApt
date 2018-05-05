import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
export default Controller.extend({

  firebaseApp :service(),
  actions: {
    createUser() {
      var email = this.get('emailAddressS');
      var password = this.get('textS');
        //  var userID = this.get('session.currentUser.uid');
       const auth = this.get('firebaseApp').auth();
       auth.createUserWithEmailAndPassword(email, password).then(function(userResponse){
            var user = this.store.createRecord('signup',{
                id: userResponse.uid,
                email: userResponse.email,
                password:userResponse.password
                }).catch(function(e){alert(e);});
            //save to database
            user.save();
          }).catch(function(error) {alert(error);});
  }
}
});
