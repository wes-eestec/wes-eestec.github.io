// Function to calculate the day of the week from a date string
function getDayOfWeek(dateString) {
    const daysOfWeek = ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"];
    const [day, month, year] = dateString.split('.').map(Number);
    const date = new Date(`${year}-${month}-${day}`);
    return daysOfWeek[date.getDay()];
}

// Function to compare dates and times
function compareEvents(eventA, eventB) {
    const [dayA, monthA, yearA] = eventA.date.split('.').map(Number);
    const [dayB, monthB, yearB] = eventB.date.split('.').map(Number);
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;

    // If dates are the same, compare times
    const [hourA, minuteA] = eventA.time.split(':').map(Number);
    const [hourB, minuteB] = eventB.time.split(':').map(Number);
    if (hourA < hourB) return -1;
    if (hourA > hourB) return 1;
    if (minuteA < minuteB) return -1;
    if (minuteA > minuteB) return 1;
    return 0;
}

// Fetch the JSON data
fetch('src/assets/scripts/events.json')
    .then((response) => response.json())
    .then((data) => {
        const eventsContainer = document.getElementById('EVENTS-CONTAINER');

        if (!data.show_events) {
          eventsContainer.innerHTML = '<div class="flex flex-col rounded-xl bg-wesyellow-400 p-8 space-y-16"><p>Raspored dolazi uskoro!</p></div';
          return;
        }

        // Sort events by date and time
        data.events.sort(compareEvents);

        // Group events by date
        const eventsByDate = data.events.reduce((acc, event) => {
            if (!acc[event.date]) {
                acc[event.date] = [];
            }
            acc[event.date].push(event);
            return acc;
        }, {});

        // Loop through each date group and generate HTML
        Object.keys(eventsByDate).forEach((date) => {
            const events = eventsByDate[date];
            const dayOfWeek = getDayOfWeek(date);

            const eventHTML = `
                <div class="flex flex-col rounded-xl bg-wesyellow-400 p-8 space-y-16">
                    <div class="flex flex-col md:flex-row">
                        <div class="font-sans md:font-display text-base md:text-xl md:mr-24 tracking-tight">
                            <p class="inline md:block">${dayOfWeek},</p>
                            <p class="-mt-1 inline md:block">${date}</p>
                        </div>
                        <div class="space-y-8 md:space-y-12">
                            ${events.map(event => `
                                <div>
                                    <h2 class="text-3xl md:text-4xl tracking-tight leading-9 hyphens-auto md:hyphens-none">${event.name}</h2>
                                    <h3 class="text-lg md:text-xl mb-2 md:mb-4 mt-4 md:mt-2 tracking-tight font-sans font-bold">${event.lecturer}</h2>
                                    <p class="font-sans text-sm md:text-base">
                                        <span class="py-1 px-1.5 mr-2 md:mr-2.5 bg-wesgray-950 text-wesyellow-400 rounded-md md:rounded-lg">${event.time}</span>
                                        <span class="font-bold -ml-2">${event.location}</span>
                                    </p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;

            // Append the event HTML to the container
            eventsContainer.insertAdjacentHTML('beforeend', eventHTML);
        });
    })
    .catch((error) => {
        console.error('Error fetching event data:', error);
    });