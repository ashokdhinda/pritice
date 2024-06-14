

// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.getElementById('login-form');
//     const fetchTodosButton = document.getElementById('fetch-todos');
//     const todoList = document.getElementById('todo-list');
//     const notification = document.getElementById('notification');
//     const todoSection = document.getElementById('todo-section');
//     const loginSection = document.getElementById('login-section');
    
//     let userAuthToken = null;
//     let userId = null;

//     loginForm.addEventListener('submit', async (event) => {
//         event.preventDefault();
//         const username = document.getElementById('username').value;
//         const password = document.getElementById('password').value;

//         try {
//             const response = await fetch('https://json-with-auth.onrender.com/user/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ username, password })
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 userAuthToken = data.accessToken;
//                 userId = data.user.id;
                
//                 localStorage.setItem('localAccessToken', userAuthToken);
//                 localStorage.setItem('userId', userId);

//                 notification.textContent = `Hey ${username}, welcome back!`;
//                 loginSection.style.display = 'none';
//                 todoSection.style.display = 'block';
//             } else {
//                 const errorData = await response.json();
//                 notification.textContent = `Login failed: ${errorData.message}`;
//             }
//         } catch (error) {
//             console.error('Error logging in:', error);
//             notification.textContent = 'Login failed: An error occurred.';
//         }
//     });

//     fetchTodosButton.addEventListener('click', async () => {
//         try {
//             const response = await fetch(`https://json-with-auth.onrender.com/todos?userId=${userId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${userAuthToken}`
//                 }
//             });

//             if (response.ok) {
//                 const todos = await response.json();
//                 todoList.innerHTML = '';

//                 todos.forEach(todo => {
//                     const listItem = document.createElement('li');
//                     const checkbox = document.createElement('input');
//                     checkbox.type = 'checkbox';
//                     checkbox.checked = todo.completed;
//                     checkbox.addEventListener('change', () => toggleTodoCompletion(todo.id, checkbox.checked));
                    
//                     listItem.appendChild(checkbox);
//                     listItem.appendChild(document.createTextNode(todo.title));
//                     todoList.appendChild(listItem);
//                 });
//             } else {
//                 const errorData = await response.json();
//                 console.error('Error fetching todos:', errorData.message);
//             }
//         } catch (error) {
//             console.error('Error fetching todos:', error);
//         }
//     });

//     async function toggleTodoCompletion(todoId, completed) {
//         try {
//             const response = await fetch(`https://json-with-auth.onrender.com/todos/${todoId}`, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${userAuthToken}`
//                 },
//                 body: JSON.stringify({ completed })
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 console.error('Error updating todo:', errorData.message);
//             }
//         } catch (error) {
//             console.error('Error updating todo:', error);
//         }
//     }
// });
