// initiate new vue instance
// new keyword followed by 'Vue' obj
new Vue({
	// el stand for element property and the 
	// value is the class or id of that element
	el: '#main',
	// data obj includes all 'data' inside the defined element
	data: {
		// inject dynamic title
		title: 'Becoming a Vue Ninja',
		name: 'Tai',
		url: 'youtube.com',
		classes: ['one', 'two'],
		wage: 100,
		coords: {
			x: 0,
			y: 0
		}
	},
	// inject methods object
	methods: {
		// include argument parameter
		greet(time){
								   // use string interpolation to include time and name
			return `Hello and good ${time}, ${this.name}`
		},
		changeWage(amount){
			this.wage += amount
		},
		logEvent(e){
			console.log(e);
		},
		logCoords(i){
			this.coords.x = i.offsetX
			this.coords.y = i.offsetY
		}
	}
})