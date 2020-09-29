$.getJSON("https://spreadsheets.google.com/feeds/list/1eKwB8lNfsVdGB_BOfa7t4z1ZWtSp_pvy4E_jUKTTOlg/5/public/values?alt=json", data => {
  var labels = [];
  var averagenumbers = [];
  var yournumbers = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$statement']['$t']);
    yournumbers.push(Number(e['gsx$yourresp']['$t']));
    averagenumbers.push(Number(e['gsx$avgresp']['$t']));
  });
  var question1 = "Assessment encourages learning.";
  var question2 = "Assessment provides feedback on learning to both the student and the teacher.";
  var question3 = "Assessment documents competency and skill development.";
  var question4 = "Assessment allows students to be graded or ranked.";
  var question5 = "Assessment validates certification and licence procedures for professional practice.";
  var question6 = "Assessment allows benchmarks to be established for standards.";
  var question7 = "Assessment provides feedback on the efficacy of pedagogical choices.";
  var question8 = "Assessment informs changes to curriculum.";
  var question9 = "Assessment allows students to extend themselves academically.";
  var question10 = "Assessment encourages students to show creativity and individuality.";
  new Chart(document.getElementById('myChart'), {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Your input',
        data: yournumbers,
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        borderColor: 'rgb(76, 175, 80)',
        pointBackgroundColor: 'rgb(76, 175, 80)',
        notes: [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10]
      }, {
        label: "Your peers' average input",
        data: averagenumbers,
        backgroundColor: 'rgba(54, 162, 235,0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        notes: [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10]
      }]
    },
    options: {
      tooltips: {
        callbacks: {
          title: (tooltipItem, data) => data.labels[tooltipItem[0].index]
        }
      },
      scale: {
        ticks: {
          max: 10,
          min: 0,
          stepSize: 2}
      },
      legend: {
        position: 'bottom'
      },
      responsive: true,
    }
  });
});