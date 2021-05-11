window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});


const functionApi = 'https://rishabresume.azurewebsites.net/api/HttpTrigger1?code=HDldDyHHM2jSTsRA283DMOL9FYdlsJYXg5Z3Hie25d7aYjWwaMsqTw==';

const getVisitCount = () => {
  let count = 30;
  fetch(functionApi)
    .then(response => {
      return response.json()
    })
    .then(response => {
      console.log("Hello👋, this visit is being counted.");
      count = response;
      document.getElementById('counter').innerText = count;
    }).catch(function (error) {
      console.log(error);
    });
  return count;
}