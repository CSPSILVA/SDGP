// Simulate a search function
function search(query) {
    // For demonstration purposes, this just logs to the console
    // In a live scenario, you would likely make an API call to fetch the search results
    console.log("Searching for:", query);

    // Placeholder for search results processing
    // Here you would update the DOM with the received data
}


// Event listener for the search button
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-button');
    const searchBox = document.querySelector('.search-box');

    // Handle click event on the search button
    searchButton.addEventListener('click', () => {
        const query = searchBox.value.trim();
        if (query) {
            search(query);
        } else {
            alert("Please enter search terms.");
        }
    });

    // Handle enter key in the search box
    searchBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchButton.click();
        }
    });

    // Toggle active state on menu items
    const menuItems = document.querySelectorAll('.navbar a');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(el => el.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


// Top Attractions in Sri Lanka
document.addEventListener('DOMContentLoaded', () => {
  fetchAttractions();
});

function fetchAttractions() {
  fetch('/api/attractions/sri-lanka') // Replace with your actual API endpoint
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('attractions-container');
      data.forEach(attraction => {
        container.innerHTML += `
          <div class="attraction-item">
            <img src="${attraction.imageUrl}" alt="${attraction.name}">
            <h3>${attraction.name}</h3>
            <p>${attraction.description}</p>
            <p>From ${attraction.price}</p>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error('Error fetching attractions:', error);
    });
}

// Handler for 'See More' button
document.getElementById('see-more').addEventListener('click', () => {
  window.location.href = '/attractions/sri-lanka'; // Navigate to a new page
});



// Spotlight Destinations on Tourpal
document.addEventListener('DOMContentLoaded', () => {
  fetchDestinations();
});

function fetchDestinations() {
  // Replace with your actual endpoint or API call logic
  fetch('/api/spotlight-destinations')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('destination-container');
      data.forEach(destination => {
        container.innerHTML += `
          <div class="destination-card">
            <img src="${destination.imageUrl}" alt="${destination.name}">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error('Error fetching spotlight destinations:', error);
    });
}



// Where to next?
document.addEventListener('DOMContentLoaded', () => {
  fetchInterests();
  document.querySelector('.left-scroll').addEventListener('click', () => {
    document.querySelector('.interests').scrollBy({ left: -300, behavior: 'smooth' });
  });
  document.querySelector('.right-scroll').addEventListener('click', () => {
    document.querySelector('.interests').scrollBy({ left: 300, behavior: 'smooth' });
  });
});

function fetchInterests() {
  // Replace with the actual API endpoint or logic to fetch data
  fetch('/api/interests/sri-lanka')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.interests');
      data.forEach(interest => {
        container.innerHTML += `
          <div class="destination-card">
            <img src="${interest.imageUrl}" alt="${interest.name}">
            <h3>${interest.name}</h3>
            <!-- other details -->
          </div>
        `;
      });
    })
    .catch(error => {
      console.error('Error fetching interests:', error);
    });
}

