// Function to fetch JSON data from file
function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

// init carousel
function initSplide(idElement){
    var splide = new Splide(idElement, {
        type: "loop",
        perPage: 2,
        perMove: 1,
        mediaQuery: 'min',
        breakpoints: {
            767: {
                perPage: 3,

            },
            1024: {
                perPage: 4,
            },
        },
        gap: '1rem',
        pagination: false,
    }).mount();
}

// get all movie
function getList(parentElement, sectionSlide){
    fetchJSONFile('/assets/json/data.json', function (data) {
        let parent = $(parentElement);
        getTemplate(data, parent)
        initSplide(sectionSlide);
    });
}

// get all movie by genre
function getListByGenre(parentElement, sectionSlide, genra){
    fetchJSONFile('/assets/json/data.json', function (data) {
        let parent = $(parentElement);
        let newData = data.filter( film => (film.genra).toLowerCase() == genra.toLowerCase())
        getTemplate(newData, parent)
        initSplide(sectionSlide);
    });
}

// get one movie by slug 
function getFilmDetailsBySlug(slug, parentElement){
    fetchJSONFile('/assets/json/data.json', function (data) {
        let film = data.find( film => film.slug == slug);
        let parent = $(parentElement);

        getTemplateDetails(film, parent);
    });
}

// get list data and put into parent element 
function getTemplate(data, parent){
    data.forEach(function (item){
        let template = `
            <li class="splide__slide">
                <div class="card shadow-lg rounded">
                    <img src="${ item.image }" class="card-img w-100 h-100" alt="image">
                    <div class="card-img-overlay item-description">
                        <h6 class="card-title mb-0">${ item.name }</h6>
                        <p class="card-text"><small>Rate: ${ item.rate }</small></p>
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-2">
                    <a href="/details.html?slug=${ item.slug }" class="btn btn-danger px-5">Play</a>
                </div>
            </li>
        `;
        parent.append(template);
    });
}

// get details data and put into parent element
function getTemplateDetails(data, parent){
    let template = `
        <div class="mv-details-img">
            <img src="${ data.image }" class="img-fluid w-100" id="mv-image"
                alt="Movie Poster">
        </div>
        <div class="mv-details-content w-100">
            <div class="text-white">
                <div class="row">
                    <div class="col-md-8">
                        <h2><span id="mv-name">${ data.name }</span></h2>
                        <p>
                            <strong>Description:</strong> <span id="mv-description">${ data.description }</span>
                        </p>
                    </div>
                    <div class="col-md-4">
                        <p><strong>Genre:</strong> <span id="mv-genre">${ data.genra }</span></p>
                        <p><strong>Cast:</strong> <span id="mv-cast">${ data.cast }</span></p>
                        <p><strong>Rate:</strong> <span id="mv-rate">${ data.rate }</span></p>
                    </div>
                </div>
            </div>
        </div>`;

    parent.append(template);
}