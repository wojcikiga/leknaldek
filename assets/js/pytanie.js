var config = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [
				12, 5
			],
			backgroundColor: [
				'#82DEFE',
				'transparent',
			],
			borderWidth: 0,

			label: 'Dataset 1'
		}],
	},
	options: {
		responsive: true,
		cutoutPercentage: 70,
		aspectRatio: 1,
		layout: {
			padding: {
				left: 0,
				right: 0,
				top: -10,
				bottom: 0
			}
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	}
};

var config2 = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [
				3, 6, 2
			],
			backgroundColor: [
				'red',
				'#67ee3e',
				'transparent',
			],
			borderWidth: 0,

			label: 'Dataset 1'
		}],
	},
	options: {
		responsive: true,
		cutoutPercentage: 70,
		aspectRatio: 1,
		layout: {
			padding: {
				left: 0,
				right: 0,
				top: -10,
				bottom: 0
			}
		},
		animation: {
			easing: 'easeInOutQuad',
			duration: 1000,
			animateScale: true,
			animateRotate: true
		}
	}
};


$(document).ready(function () {
	var ctx = $('#result_chart')
	var chart = new Chart(ctx, config)
	var ctx2 = $('#result_chart2')
	var chart2 = new Chart(ctx2, config2)


})