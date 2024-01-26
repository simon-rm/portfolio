//assign gallery img to fullscreen modal image when clicked
function showImg() {
    document.getElementById("fullscreen-image").src=this.src;
}

const elementIds = ["sign-up", "who-we-are", "what-we-do", "our-mission", "gallery"];

// Loop through each element ID and create Waypoints
elementIds.forEach(function(elementId) {
    const element = document.getElementById(elementId);
    element.style.visibility="hidden"
    // Create Waypoint for each element
    const waypoint = new Waypoint({
        element: element,
        handler: function(direction) {
            if (direction === "down") {
                element.style.visibility="visible";
                element.classList.add("animate__animated", "animate__fadeInUp");
            }
        },
        offset: "50%",
    });

});

/*
const sign_up_section = document.getElementById("sign-up");
const sign_up_section_WP = new Waypoint({
    element: sign_up_section,
    handler: function(direction) {
        if(direction === "down") {
            sign_up_section.classList.add("animate__animated", "animate__fadeInUp");
        }
    },
    offset: "500px",
    enabled: false
});
document.addEventListener("DOMContentLoaded", function() {
    sign_up_section_WP.enable();
});
*/