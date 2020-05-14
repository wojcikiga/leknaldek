

var config = {
			type: 'doughnut',
			data: {
              
				datasets: [{
					data: [
						12,5
					
					],
					backgroundColor: [
						'#82DEFE',
                        'transparent',
                        
						
					],
                    borderWidth:0,
                  
					label: 'Dataset 1'
				}],
// 				labels: [
// 					'Red',
// 					'Orange',
// 					'Yellow'
					
// 				]
			},
			options: {
				responsive: false,
                 cutoutPercentage:70,
                aspectRatio: 1,
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: -10,
                        bottom: 0
                    }
                },
			
				// title: {
				// 	display: true,
				// 	text: 'Chart.js Doughnut Chart'
				// },
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		};


$(document).ready(function(){
    

    
    console.log('elo')
    var ctx = $('#result_chart')
    var chart = new Chart(ctx,config)
    
    
//     chart.canvas.parentNode.style.height = '128px';
// chart.canvas.parentNode.style.width = '128px';
    
})