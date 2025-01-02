
const { ids } = req.body;
try {
        // Call the deletePermissions function to delete the records
        await entities.roles_permissions.delete(ids);

        // Return a success response
        return res.status(200).json({ message: 'Permissions deleted successfully' });
    } catch (error) {
        // Return an error response if something goes wrong
        return res.status(500).json({ message: 'Error deleting permissions', error: error.message });
    }