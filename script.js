window.addEventListener("load", init);



function init() {
    // Get the "Hozzáadás" button
    const addButton = document.querySelector('.hozzaad');
  
    // Add a click event listener to the button
    addButton.addEventListener('click', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the form input values
      const imgUrl = document.getElementById('furl').value;
      const name = document.getElementById('fnev').value;
      const type = document.getElementById('ftipus').value;
      const replica = document.getElementById('freplika').value;
      const ar = document.getElementById('far').value;
  
      // Create a new element with the input values
      const newElement = document.createElement('tr');
      newElement.innerHTML += `
        <td><img src="kepek/${imgUrl}.jpg" alt="${name}"></td>
        <td>${name}</td>
        <td>${type}</td>
        <td>${replica}</td>
        <td>${ar}</td>
        <td><button class="delete">Delete</button></td>
      `;
  
      // Append the new element to the "article" section
      const article = document.querySelector('tbody');
      article.appendChild(newElement);
  
      // Add a click event listener to the delete button
      const deleteButton = newElement.querySelector('.delete');
      deleteButton.addEventListener('click', function(event) {
        event.preventDefault();
        newElement.remove();
      });
    });
  }