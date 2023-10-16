function createImg(src, alt) {
    let img = document.createElement('img');
    let container = document.querySelector('.container');
    img.src = src;
    img.alt = alt;
    container.append(img);
}
//'MIDpdacjifSU395EcnZAHn79VQE9eBWwNLyGOHkV'


async function loadImg(){
    let url = new URL('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?');
    url.searchParams.set('sol', 900);
    url.searchParams.set('camera', 'pancam');
    url.searchParams.set('api_key', 'MIDpdacjifSU395EcnZAHn79VQE9eBWwNLyGOHkV');
    let resp = await fetch(url);
    let convertedData = await resp.json();
    let src = '';
    for(let i = 0; i < 5; i++){
        src = convertedData.photos[i].img_src;
        createImg(src, 'PanCam')
    }
    //let imgSrc = convertedData.photos[2].img_src;
    

}

loadImg();