import sizeOf  from 'image-size';

var dimensions = sizeOf('./static/img/posts/come-installare-projectlibre-su-linux/projectlibre.webp');
console.log(dimensions.width, dimensions.height);