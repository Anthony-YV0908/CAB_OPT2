const data = req.body;
// Insert the records into the table; UUIDs for `id` will be auto-generated
try {
    // Assuming findOne returns the record from the database
    const info = await entities.tbl_user.findOne(data);

    // If the record is found, send the ID in the response
    if (info) {
        return res.status(200).json({
            message: 'OK.',
            // UserId: info.UserId,  // Displaying the ID in the response
            // UserRole: info.UserRole
        });
    } else {
        return res.status(404).json({ message: 'User not found.' });
    }

} catch (error) {
    // If an error occurs, return a 500 error with the error message
    return res.status(500).json({ message: 'Error:', error: error.message });
}
