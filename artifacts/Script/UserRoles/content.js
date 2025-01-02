// let fieldCatalog = [
//   { key: "PRAO", text: "PRAO" },
//   { key: "CAB", text: "CAB" },
//   { key: "User", text: "User" },
//   { key: "Admin", text: "Admin" },
//   { key: "Airline", text: "Airline" }
// ];
 
// result.data = fieldCatalog;
// complete();
// Function to fetch roles from the database

const entity = await entities.roles.createQueryBuilder("alias")
    .getMany();  // This will return all roles

// Check if we received data
if (entity && entity.length > 0) {
    console.log("Fetched Roles: ", entity);
    
    // Map the entity data to the desired format (key-value pairs)
    let fieldCatalog = entity.map(role => ({
        key: role.id,   // Assuming each role entity has a `key` property
        text: role.Name  // Assuming each role entity has a `text` property
    }));

    // Set the result.data with the dynamically fetched fieldCatalog
    result.data = fieldCatalog;
    complete();
} else {
    console.log("No roles found in the database.");
    result.data = [];  // Set to an empty array if no roles found
}
