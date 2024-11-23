// // Select the "Tutors" button
// const tutorsButton = document.querySelector('a[href="#tutors"]');

// // Add click event listener to the "Tutors" button
// tutorsButton.addEventListener('click', (event) => {
//     event.preventDefault(); // Prevent default anchor behavior
//     const tutorsSection = document.getElementById('tutors'); // Get the Tutors section

//     if (tutorsSection) {
//         // Scroll to the Tutors section smoothly
//         tutorsSection.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     } else {
//         console.warn('Tutors section not found!');
//     }
// });

// // Grab the search form
// const searchForm = document.getElementById("searchForm");

// // Add an event listener to handle form submission
// searchForm.addEventListener("submit", (event) => {
//     event.preventDefault(); // Prevent default form submission

//     // Get the input value
//     const subjectInput = document.getElementById("subjectInput").value.trim();

//     if (subjectInput) {
//         // Redirect to the tutors page with the subject as a query parameter
//         window.location.href = `tutors.html?subject=${encodeURIComponent(subjectInput)}`;
//     } else {
//         alert("Please enter a subject to search.");
//     }
// });


// Parse the query string to get the subject
const urlParams = new URLSearchParams(window.location.search);
const subject = urlParams.get("subject");

if (subject) {
    const tutorCards = document.querySelectorAll(".tutor-card");
    let found = false;

    // Loop through each tutor card and check the "data-specialized" attribute
    tutorCards.forEach(card => {
        const specialties = card.dataset.specialized.toLowerCase();

        if (specialties.includes(subject.toLowerCase())) {
            // Show matching card
            card.style.display = "block";
            found = true;
        } else {
            // Hide non-matching card
            card.style.display = "none";
        }
    });

    // If no cards match, display a message
    if (!found) {
        document.getElementById("tutorCards").innerHTML = `
            <p class="text-center text-gray-700 text-lg font-semibold">
                No tutors found for "${subject}".
            </p>`;
    }
} else {
    // If no subject is passed in the URL, show all cards
    document.querySelectorAll(".tutor-card").forEach(card => card.style.display = "block");
}
