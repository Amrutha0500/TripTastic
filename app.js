const sliderImgs = ["https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/01/04135214/feature-94-1600x900.jpg", "https://cdn.pixabay.com/photo/2023/11/01/11/16/lake-8357182_1280.jpg", "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?cs=srgb&dl=pexels-apasaric-1285625.jpg&fm=jpg", "https://loveincorporated.blob.core.windows.net/contentimages/gallery/2fd3e19e-cf66-4cf1-b55b-869ded28c419-Knaresborough.jpg", "https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?cs=srgb&dl=pexels-josh-hild-1270765-2422461.jpg&fm=jpg", "https://loveincorporated.blob.core.windows.net/contentimages/gallery/2fd3e19e-cf66-4cf1-b55b-869ded28c419-Knaresborough.jpg"];
let sliderImage = document.querySelector('.background-image');
let sliderGrids = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000);

const changeSliderImage = () => {
    sliderGrids.map((gridItem, index) => {
        setTimeout(() => {
            gridItem.classList.remove('hide');

            setTimeout(() => {

                if(index == sliderGrids.length - 1){
                    if(currentImage >= sliderImgs.length - 1){
                        currentImage = 0;
                    } else{
                        currentImage++;
                    }

                    sliderImage.src = `${sliderImgs[currentImage]}`;

                    sliderGrids.map((item, i) => {
                        setTimeout(() => {
                            item.classList.add('hide')
                        }, i * 100);
                    })

                }

            }, 100);

        }, index * 100);
    })
}