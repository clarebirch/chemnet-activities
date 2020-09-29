$.getJSON("https://spreadsheets.google.com/feeds/list/1eKwB8lNfsVdGB_BOfa7t4z1ZWtSp_pvy4E_jUKTTOlg/8/public/values?alt=json", data => {
  var labels = [];
  var rnumbers = [];
  var unumbers = [];
  var apnumbers = [];
  var annumbers = [];
  var enumbers = [];
  var cnumbers = [];
  var yournumbers = [];
  data.feed.entry.forEach(e => {
    labels.push(e['gsx$statement']['$t']);
    yournumbers.push(e['gsx$yourresp']['$t']);
    rnumbers.push(Number(e['gsx$rcount']['$t']));
    unumbers.push(Number(e['gsx$ucount']['$t']));
    apnumbers.push(Number(e['gsx$apcount']['$t']));
    annumbers.push(Number(e['gsx$ancount']['$t']));
    enumbers.push(Number(e['gsx$ecount']['$t']));
    cnumbers.push(Number(e['gsx$ccount']['$t']));
  });
  var a3q1 = ["Determine a rate law based on a series of experiments.","Your answer was "+yournumbers[0]]
  var a3q2 = ["Determine whether or not the conclusions in a lab report","follow from the results. Your answer was "+yournumbers[1]]
  var a3q3 = ["Given the density, calculate the volume of a specified mass.","Your answer was "+yournumbers[2]]
  var a3q4 = ["Know the single letter codes of the essential amino acids.","Your answer was "+yournumbers[3]]
  var a3q5 = ["Identify the key bond-making or breaking steps in","an organic transformation. Your answer was "+yournumbers[4]]
  var a3q6 = ["Comment on the reasonableness of a hypothesis.","Your answer was "+yournumbers[5]]
  var a3q7 = ["Explain how differences in atmospheric temperature","affect the formation of lightning. Your answer was "+yournumbers[6]]
  var a3q8 = ["Design a study to test a specific hypothesis.","Your answer was "+yournumbers[7]]
  var a3q9 = ["Draw a series of diagrams that illustrate the","process of photosynthesis. Your answer was "+yournumbers[8]]
  var a3q10 = ["Comment on the contextual appropriateness of","a statistical test. Your answer was "+yournumbers[9]]
  new Chart(document.getElementById('myChart'), {
    type: 'horizontalBar',
    data: {
      labels: [
      a3q1, a3q2, a3q3, a3q4, a3q5, a3q6, a3q7, a3q8, a3q9, a3q10],
      datasets: [{
        label: 'Remember',
        data: rnumbers,
        backgroundColor: 'rgba(255, 99, 132,0.5)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)'
      }, {
        label: "Understand",
        data: unumbers,
        backgroundColor: 'rgba(255, 159, 64,0.5)',
        borderColor: 'rgb(255, 159, 64)',
        pointBackgroundColor: 'rgb(255, 159, 64)'
      }, {
        label: "Apply",
        data: apnumbers,
        backgroundColor: 'rgba(255, 205, 86,0.5)',
        borderColor: 'rgb(255, 205, 86)',
        pointBackgroundColor: 'rgb(255, 205, 86)'
      }, {
        label: "Analyse",
        data: annumbers,
        backgroundColor: 'rgba(76, 175, 80,0.5)',
        borderColor: 'rgb(76, 175, 80)',
        pointBackgroundColor: 'rgb(76, 175, 80)'
      }, {
        label: "Evaluate",
        data: enumbers,
        backgroundColor: 'rgba(54, 162, 235,0.5)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
      }, {
        label: "Create",
        data: cnumbers,
        backgroundColor: 'rgba(153, 102, 255,0.5)',
        borderColor: 'rgb(153, 102, 255)',
        pointBackgroundColor: 'rgb(153, 102, 255)',
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