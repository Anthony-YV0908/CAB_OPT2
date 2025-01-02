const data = req.body;  // Assuming you pass RoleId in the request body

try {
    // Query the roles_permissions table to fetch only the desired fields
    const entity = await entities.roles_permissions
        .createQueryBuilder("alias")
        .select(["alias.id", "alias.RoleId", "alias.ParentModuleId", "alias.isParentModuleActive"]) // Select only required fields
        .where("alias.RoleId = :RoleId", { RoleId: data.RoleId }) // Make sure to pass RoleId correctly
        .getMany();  // Retrieve all matching records

    // Return the selected fields from the query result
    return res.status(200).json({
        // message: 'Permissions fetched successfully.',
        data: entity  // Send the selected fields only
    });
} catch (error) {
    // Handle any errors during the query execution
    return res.status(500).json({
        message: 'Error fetching permissions',
        error: error.message || 'Unknown error occurred',  // Provide a detailed error message
    });
}
