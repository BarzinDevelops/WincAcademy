const functions = {
    isNull: function() {
      return null;
    },
    checkValue: function(x) {
        console.log('argument is:', x)
      return x;
    },
    createUser: function() {
      const user = { 
        firstName: 'Brad' 
      };
      user['lastName'] = 'Traversy';
      console.log('user is', user);
      return user;
    }
  };
  
  module.exports = functions;