var labels = [
    "Grunder i programmering",
    "Användbarhet och tillg..",
    "Användargränssnitt",
    "Utvecklingsmiljöer",
    "Användning av frameworks",
    "Dokumentation och testning",
    "2D/3D objekt",
    "Animering",
    "kompilatorprogrammering",
    
];
var data = [
    70,
    30,
];
var pie = document.getElementById("pieChart").getContext('2d');
var myChart = new Chart(pie, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [
            {
                data: data,
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(192, 0, 0, 1)'],
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "green", "blue", "purple", "red"],
                data: [2,1,3,2,3,3,3,4,2]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Colors election"
        }
    }
});