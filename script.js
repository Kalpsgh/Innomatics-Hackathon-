const searchBar = document.getElementById('search-bar');
const resultsContainer = document.getElementById('search-results');

searchBar.addEventListener('input', handleSearch);

function handleSearch() {
    const query = searchBar.value.trim().toLowerCase();

    if (query.length < 2) { resultsContainer.innerHTML = ''; resultsContainer.style.display = 'none'; return; } fetch(`(https://api.example.com/countries?query=${query})) .then(response=> response.json())
    .then(data => {
    const resultsHtml = data.results.map(item => `
        < div >
        <strong>${item.country}</strong> - ${ item.capital }
    </div >
        `).join('');
    resultsContainer.innerHTML = resultsHtml;
    resultsContainer.style.display = 'block';
    })
    .catch(error => {
    console.error(error);
    resultsContainer.innerHTML = '<div>Something went wrong. Please try again.</div>';
    resultsContainer.style.display = 'block';
    });
    }


