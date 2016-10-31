angular.module('inventory').factory('UserMaker', function(){
  function CreateUser(user,pw) {

      this.username = user;
      this.pw = pw;
      this.time = Date.now();

  }
  return {
    create: CreateUser
  };
});
