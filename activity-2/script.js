$.getJSON("https://spreadsheets.google.com/feeds/list/1eKwB8lNfsVdGB_BOfa7t4z1ZWtSp_pvy4E_jUKTTOlg/6/public/values?alt=json", data => {
  var labels = [];
  var averagenumbers = [];
  var yournumbers = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$statement']['$t']);
    yournumbers.push(Number(e['gsx$yourresp']['$t']));
    averagenumbers.push(Number(e['gsx$avgresp']['$t']));
  });
  var a2q1 = "Learning outcomes are usually expressed as knowledge, skills, or attitudes."
  var a2q2 = "Learning outcomes are statements which describe a desired condition."
  var a2q3 = "Learning outcomes are statements that specify what learners will know or be able to do as a result of a learning activity."
  var a2q4 = "Learning outcomes must be observable, measurable and be demonstrated by the learner."
  var a2q5 = "Learning outcomes should be assessable to determine the gap between an existing and a desired condition."
  var a2q6 = "Learning outcomes should cover student character as much as, if not more than, knowledge."
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
        notes: [a2q1,a2q2,a2q3,a2q4,a2q5,a2q6]
      }, {
        label: "Your peers' average input",
        data: averagenumbers,
        backgroundColor: 'rgba(54, 162, 235,0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        notes: [a2q1,a2q2,a2q3,a2q4,a2q5,a2q6]
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
          max: 3,
          min: 0,
          stepSize: 1}
      },
      legend: {
        position: 'bottom'
      },
      responsive: true,
    }
  });
});
