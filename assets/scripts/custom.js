$(document).ready(function () {
    // Hide the category filters initially
    $('.hidden-filter').hide();

    // Add a click event listener to the "Categories" button
    $('.filter-categories').click(function () {
        // Toggle the visibility of the category filters
        $('.hidden-filter').toggle();
    });
});