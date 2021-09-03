const url = "https://jsonplaceholder.typicode.com/comments";
let html = "";

async function getData() {
  await fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.forEach(element => {
        html += `
                    <div class="container">
                    <div class="name">${element.name}</div>
                    <div class="email">${element.email}</div>
                    <div class="content">${element.body}</div>
                    </div>      
                    `;
      });
      app.innerHTML = html;
    })
    .catch(error => {
      console.error(`Error!!! ${error}`);
    });
}
getData();
