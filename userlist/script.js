document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');

    function fetchUsers() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', "https://api.github.com/users", true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                const users = JSON.parse(xhr.responseText);
                displayUsers(users);
            } else {
                console.error('Error fetching users:', xhr.statusText);
            }
        };

        xhr.onerror = function() {
            console.error('Request error...');
        };

        xhr.send();
    }

    function displayUsers(users) {
        userList.innerHTML = ''; 
        users.forEach(user => {
            const userItem = document.createElement('div');
            userItem.className = 'user-item';
            userItem.innerHTML = `
                <img src="${user.avatar_url}" alt="${user.name}" />
                <div class="user-login">${user.login}</div>
                <div class="user-id">${user.id}</div>
            `;
            userList.appendChild(userItem);
        });
    }

    fetchUsers();
});
