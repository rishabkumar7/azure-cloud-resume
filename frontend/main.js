window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});


const functionApi = 'https://rishabcloudresume.azurewebsites.net/api/Counter';

const getVisitCount = () => {
  let count = 30;
  fetch(functionApi)
    .then(response => {
      return response.json()
    })
    .then(response => {
      count = response;
      console.log("Hello 👋, you are visitor number - " + count);
      document.getElementById('counter').innerText = count;
    }).catch(function (error) {
      console.log(error);
    });
  return count;
}