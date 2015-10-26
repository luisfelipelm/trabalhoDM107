var ChartController = {
    data: [
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Pedidos Novos"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Pedidos Entregues"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Pedidos em Transporte"
        }
    ],
    
    options: [
        {
            //Boolean - Whether we should show a stroke on each segment
            segmentShowStroke : true,

            //String - The colour of each segment stroke
            segmentStrokeColor : "#fff",

            //Number - The width of each segment stroke
            segmentStrokeWidth : 2,

            //Number - The percentage of the chart that we cut out of the middle
            percentageInnerCutout : 0, // This is 0 for Pie charts

            //Number - Amount of animation steps
            animationSteps : 100,

            //String - Animation easing effect
            animationEasing : "easeOutBounce",

            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate : true,

            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale : false,

            //String - A legend template
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

        }
    ],
        
	init: function () {
        ChartController.countSstatus();

	},
    
    
    countSstatus: function () {
        var 
            statusNew = 0,
            statusInTransport = 0,
            statusDelivered = 0,
            list = DeliveryService.getList(function(list) {
                console.log(list);
                list.forEach(function(delivery) {
                    if(delivery.status == 'NEW'){
                        statusNew += 1;
                    } 
                    else if(delivery.status == 'IN TRANSPORT'){
                        statusInTransport += 1;           
                    }
                    else{
                        statusDelivered += 1;
                    }
                });
                 ChartController.setDataChart(statusNew, statusInTransport, statusDelivered);
            });       
	},
    
    setDataChart: function (statusNew, statusInTransport, statusDelivered) {
        var list = ChartController.data;
			list.forEach(function(slice) {
                if(slice.label == 'Pedidos Novos'){
                    slice.value = statusNew;
                }
                else if(slice.label == 'Pedidos Entregues'){
                    slice.value = statusDelivered;
                }else{
                    slice.value = statusInTransport;
                }
            });
               
        var ctx = document.getElementById('myChart').getContext("2d");              
        var myPieChart = new Chart(ctx).Pie(ChartController.data, ChartController.options);       

	}
};
    
    //initialization
ChartController.init();