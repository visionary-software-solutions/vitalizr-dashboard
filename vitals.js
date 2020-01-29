var weights = document.getElementById('weights');
var myChart = new Chart(weights, {
    type: 'line',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Body Weight',
            data: [
            {t: moment().subtract(7, 'days'), y: 12},
            {t: moment().subtract(6, 'days'), y: 19},
            {t: moment().subtract(5, 'days'), y: 31},
            {t: moment().subtract(4, 'days'), y: 22},
            {t: moment().subtract(3, 'days'), y: 17},
            {t: moment().subtract(2, 'days'), y: 28},
            {t: moment().subtract(1, 'days'), y: 70}],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(128, 32, 76, 0.7)',
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(31, 247, 115, 0.5)',
            ],
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                },
                ticks: {
                    major: {
                        fontStyle: 'bold',
                        fontColor: '#FF0000'
                    }
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'value'
                }
            }]
        }
    }
});