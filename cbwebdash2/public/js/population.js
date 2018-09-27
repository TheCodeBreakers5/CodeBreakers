$(document).ready(function(){  
    drawChart(0,0,0,0,"");
    var maleCount = "";
    var femaleCount = "";
    var childrenCount = "";
    var srcitizenCount = "";
    var totalCount = "";
      $('#dataTable').DataTable({  
           "ajax"     :     "flatfileDB/population.json",  
           "columns"     :     [  
                {     "data"     :     "AreaName"},  
                {     "data"     :     "TotalMen"},  
                {     "data"     :     "TotalWomen"},  
                {     "data"     :     "TotalChildren"},
                {     "data"     :     "SeniorCitizen"},
                {     "data"     :     "AreaPopulation"}
               
               
           ]  
      });  
    
     var table = $('#dataTable').DataTable();
     
    $('#dataTable tbody').on('click', 'tr', function () {
        var data = table.row( this ).data();
        drawChart(data.TotalMen,data.TotalWomen,data.TotalChildren,data.SeniorCitizen,data.AreaName);
    } );
    

     
 }); 

function drawChart(x,y,z,w,v){
    var ctx = document.getElementById("population-chart");
     var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Male", "Female", "Children", "Senior Citizens"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd"],
                    data: [x,y,z,w]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: v
            },
            responsive:true,
            maintainAspectRatio : false,
            scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }]
    }
            
        }
    });
}