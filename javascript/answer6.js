var slider_img = document.querySelector('slider-img');
        var image = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg'];
        var i = 0;

        function prev() {
            if (i <= 0) i = image.length;
            i--;
            return setimg();
        }

        function next() {
            if (i >= image.length - 1) i = -1;
            i++;
            return setimg();

        }

        function setimg() {
            return slider_img.setAttribute('src', 'img/' + image[i]);
        }