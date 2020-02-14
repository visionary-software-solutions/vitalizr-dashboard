
function populateVital(model) {
    var template = document.querySelector("#vital-template");
    var clone = template.content.cloneNode(true);
    var result = Mustache.render(template.innerHTML, model);
    document.getElementById(model.id +"s").outerHTML = result;
    var myChart = new Chart(document.getElementById(model.id), {
    type: "line",
    data: {
        datasets: [{
            label: model.vital,
            data: model.data.map((datum) =>  {
                var obj = new Object();
                obj.t = moment.unix(datum.time);
                obj.y = datum.quantity;
                return obj;
            }),
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: "time",
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Date"
                },
                ticks: {
                    major: {
                        fontStyle: "bold",
                        fontColor: "#FF0000"
                    }
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "value"
                }
            }]
        }
    }
});
}

function fetchFrom(url, element) {
    fetch(url).then((response) => {
     return response.json();
  })
  .then((myJson) => {
    element.data = myJson; 
    populateVital(element);
  });
}

const user = "7ab35698-21f9-463e-8e74-bd3d56109336";
const endpoint = "http://vitalizr.visionarysoftware.solutions/vital/:poop:/" + user;
[ { vital : "Weight", id : "weight" },
  { vital: "Pulse", id : "bpm" },
  { vital: "Body Fat %", id : "fat" },
  { vital: "BMI", id : "bmi" },
  { vital: "SpO2", id: "o2" },
  { vital: "Body Water %", id : "water" },
  { vital: "Body Temperature", id : "temp" },
  { vital: "Blood Sugar", id : "sugar" },
  { vital: "Blood Pressure", id : "bp" } ].forEach(element => { fetchFrom(endpoint.replace(":poop:", element.id), element); });
