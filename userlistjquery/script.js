$(document).ready(function() {
    function fetchUsers() {
      $.get({
        url: "https://api.github.com/users",  
        method: 'GET',
        success: function(users) {
          
          $('.user-list').empty();
  
          users.forEach(function(user) {
            var userItem = `
              <div class="user-item">
                <img src="${user.avatar_url}" alt="${user.name}" />
                <div class="user-details">
                  <h5 class="user-login">${user.login}</h5>
                  <h4 class="user-id">${user.id}</h4> 
                </div>
              </div>
            `;
            $('.user-list').append(userItem);
          });
        },
        error: function(error) {
          console.log('Error fetching users:', error);
        }
      });
    }
  
    fetchUsers();
  });
  