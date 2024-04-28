function parPass() {
    // Retrieve values from input fields
    var fullName = document.querySelector('input[placeholder="Your fullname"]').value;
    var childFullName = document.querySelector('input[placeholder="Child\'s fullname"]').value;
    var schoolName = document.querySelector('input[placeholder="School\'s name"]').value;
    var standard = document.querySelector('.btn:nth-child(6)').value; // Assuming this is the select for standard
    var section = document.querySelector('.btn:nth-child(8)').value; // Assuming this is the select for section
    var email = document.querySelector('input[placeholder="Email Id"]').value;
    var mobileNumber = document.querySelector('input[placeholder="Mobile Number"]').value;

    // Create an object to hold the data
    var formData = {
        fullName: fullName,
        childFullName: childFullName,
        schoolName: schoolName,
        standard: standard,
        section: section,
        email: email,
        mobileNumber: mobileNumber
    };

    // Send the data to the server
    // You need to replace 'your-server-script.php' with the actual URL of your server-side script
    fetch('your-server-script.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle success response from server
        console.log('Data sent successfully:', data);
        // You can redirect or show a success message here
    })
    .catch(error => {
        // Handle errors
        console.error('There was an error sending the data:', error);
        // You can display an error message to the user here
    });
    window.location="parent-1.html";
}
