'use strict'
window.addEventListener('load', function () {
    var bike = {
        color: 'black',
        brand: 'nike',
        speed: '60km',
        brake: 'yes',
        changeColor: function(new_color){
          this.color = new_color;
        }
    }
    bike.changeColor('blue');
    console.log(bike)
})