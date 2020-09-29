$.getJSON("https://spreadsheets.google.com/feeds/list/1eKwB8lNfsVdGB_BOfa7t4z1ZWtSp_pvy4E_jUKTTOlg/7/public/values?alt=json", data => {
  var labels = [];
  var fnumbers = [];
  var cnumbers = [];
  var pnumbers = [];
  var mnumbers = [];
  var yournumbers = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$statement']['$t']);
    yournumbers.push(e['gsx$yourresp']['$t']);
    fnumbers.push(Number(e['gsx$fcount']['$t']));
    cnumbers.push(Number(e['gsx$ccount']['$t']));
    pnumbers.push(Number(e['gsx$pcount']['$t']));
    mnumbers.push(Number(e['gsx$mcount']['$t']));
  });
  var a3q1 = ["Knowledge of research methods relevant to the sciences","Your answer was "+yournumbers[0]]
  var a3q2 = ["Knowledge of genetic models (e.g. DNA)","Your answer was "+yournumbers[1]]
  var a3q3 = ["Knowledge of various mnemonics to aid memory","Your answer was "+yournumbers[2]]
  var a3q4 = ["Knowledge of the first 20 chemical elements","Your answer was "+yournumbers[3]]
  var a3q5 = ["Knowledge of the fundamental laws of physics","Your answer was "+yournumbers[4]]
  var a3q6 = ["Knowledge that a ‘primary source’ may be more difficult to","understand than a general textbook. Your answer was "+yournumbers[5]]
  var a3q7 = ["Knowledge of chemical constants (e.g. Avogadro’s number)","Your answer was "+yournumbers[6]]
  var a3q8 = ["Knowledge of the criteria for determining which statistical procedure", "to use with data from an experiment. Your answer was "+yournumbers[7]]
  var a3q9 = ["Knowledge of the different periods of geologic time.","Your answer was "+yournumbers[8]]
  var a3q10 = ["Knowledge of one’s capabilities to perform a particular","task that is accurate. Your answer was "+yournumbers[9]]
  new Chart(document.getElementById('myChart'), {
    type: 'horizontalBar',
    data: {
      labels: [
      a3q1, a3q2, a3q3, a3q4, a3q5, a3q6, a3q7, a3q8, a3q9, a3q10],
      datasets: [{
        label: 'Factual',
        data: fnumbers,
        backgroundColor: 'rgba(255, 99, 132,0.5)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)'
      }, {
        label: "Conceptual",
        data: cnumbers,
        backgroundColor: 'rgba(255, 205, 86,0.5)',
        borderColor: 'rgb(255, 205, 86)',
        pointBackgroundColor: 'rgb(255, 205, 86)'
      }, {
        label: "Procedural",
        data: pnumbers,
        backgroundColor: 'rgba(76, 175, 80,0.5)',
        borderColor: 'rgb(76, 175, 80)',
        pointBackgroundColor: 'rgb(76, 175, 80)'
      }, {
        label: "Metacognitive",
        data: mnumbers,
        backgroundColor: 'rgba(54, 162, 235,0.5)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)'
      }]
    },
    options: {
          tooltips: {
        enabled: false
    },
    hover :{
        animationDuration:0
    },
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero:true,
                fontSize:12
            },
            scaleLabel:{
                display:false
            },
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
    },
    legend:{
      display: true
    },
    }
  });
});