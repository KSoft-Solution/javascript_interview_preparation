// detect device
const detectDeviceTypes = () => {
  /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";
};

console.log(detectDeviceTypes());

//hide elements
const hideElement = (element, removeFromFlow = false) => {
  removeFromFlow
    ? (element.style.display = "none")
    : (element.style.display = "hidden");
};

hideElement(document.getElementById("vis"), true);

//get the parameters from the url
const url = new URL(window.location.href);
url.searchParams.set("name", "ashok");
const paramsValueGet = url.searchParams.get("name");
console.log(paramsValueGet);

//wait function
const wait = (ms) => new Promise((resolve) => setTimeout((resolve, ms)));
const asyncFn = async () => {
  await wait(1000);
  console.log("async");
};

asyncFn();


const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});