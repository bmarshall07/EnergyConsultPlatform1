<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $fullName = htmlspecialchars($_POST["fullName"]);
    $specialization = htmlspecialchars($_POST["specialization"]);
    $experience = htmlspecialchars($_POST["experience"]);
    $keySkills = htmlspecialchars($_POST["keySkills"]);
    $certifications = htmlspecialchars($_POST["certifications"]);
    $projects = htmlspecialchars($_POST["projects"]);

    // Display the submitted data
    echo "<h1>Profile Submitted Successfully!</h1>";
    echo "<p><strong>Full Name:</strong> $fullName</p>";
    echo "<p><strong>Specialization:</strong> $specialization</p>";
    echo "<p><strong>Experience:</strong> $experience</p>";
    echo "<p><strong>Key Skills:</strong> $keySkills</p>";
    echo "<p><strong>Certifications:</strong> $certifications</p>";
    echo "<p><strong>Notable Projects:</strong> $projects</p>";
} else {
    // If the form wasn't submitted, redirect back to the Join page
    header("Location: join.html");
    exit();
}
?>
