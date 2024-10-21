
const seriesUrl = `https://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${pubkey}&hash=${hash}`;

async function fetchSeries() {
    try {
        const response = await fetch(seriesUrl);
        const data = await response.json();
        displaySeries(data.data.results);
    } catch (error) {
        console.error('Error al fetch series: ', error);
    }
}

// Función para mostrar las series en tarjetas
function displaySeries(series) {
    const container = document.createElement('div');
    container.id = 'series-container';
    document.body.appendChild(container);
    
    series.forEach(serie => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${serie.title}</h3>
            <img src="${serie.thumbnail.path}.${serie.thumbnail.extension}" alt="${serie.title}" />
        `;
        container.appendChild(card);
    });
}

// Llamar a la función para obtener las series
fetchSeries();
