const bodyParser = require('body-parser');
const cropperjs = require('cropperjs');


var image = bodyParser.getElementById('image');

console.log(bodyParser);

var cropper = new Cropper(image, {
  aspectRatio: 16 / 9,
  crop: function(event) {
    console.log(event.detail.x);
    console.log(event.detail.y);
    console.log(event.detail.width);
    console.log(event.detail.height);
    console.log(event.detail.rotate);
    console.log(event.detail.scaleX);
    console.log(event.detail.scaleY);
  }
});
