document.addEventListener('DOMContentLoaded', function () {
    fetch('src/assets/scripts/events.json')
      .then((response) => response.json())
      .then((data) => {
        const eventsContainer = document.getElementById('HOMEPAGE-EVENTS-CONTAINER');
        const today = new Date();

        // Function to format the date
        function formatDate(dateString) {
          const [day, month] = dateString.split('.').map(Number);
          const paddedDay = String(day).padStart(2, '0');
          const paddedMonth = String(month).padStart(2, '0');
          return `${paddedDay}.${paddedMonth}.`;
        }

        // Filter and sort events to get the upcoming events
        const upcomingEvents = data.filter(event => {
          const [day, month, year] = event.date.split('.').map(Number);
          const eventDate = new Date(year, month - 1, day);
          return eventDate >= today;
        }).sort((a, b) => {
          const [dayA, monthA, yearA] = a.date.split('.').map(Number);
          const [dayB, monthB, yearB] = b.date.split('.').map(Number);
          const dateA = new Date(yearA, monthA - 1, dayA);
          const dateB = new Date(yearB, monthB - 1, dayB);
          return dateA - dateB;
        }).slice(0, 4); // Get the first four upcoming events

        // Generate HTML for the upcoming events
        const eventsHTML = upcomingEvents.map(event => `
          <p>${formatDate(event.date)} - <strong>${event.name}</strong></p>
        `).join('');

        // Append the events HTML to the container
        eventsContainer.innerHTML = eventsHTML;
      })
      .catch((error) => {
        console.error('Error fetching event data:', error);
      });
});