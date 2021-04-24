window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});


const localApi = 'http://localhost:7071/api/GetResumeCounter';
//const functionApi = 'https://getresumecounterfunctionapp.azurewebsites.net/api/GetResumeCounter?code=jp4rx3wuLEzaXvSFeBKaq08RGiVCwRtpAA1Cdxdc15c9ZGjM79tWjg=='; 

const getVisitCount = () => {
  let count = 30;
  fetch(localApi)
    .then(response => {
      return response.json()
    })
    .then(response => {
      console.log("Website called function API.");
      count = response.count;
      document.getElementById('counter').innerText = count;
    }).catch(function (error) {
      console.log(error);
    });
  return count;
}