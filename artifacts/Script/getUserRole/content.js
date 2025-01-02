
// const data  = req.body;
// try {
//         // Call the deletePermissions function to delete the records
//         // await entities.roles_permissions.delete(ids);

//         // Return a success response
//         return res.status(200).json({ message: 'Data successfully received', data });
//     } catch (error) {
//         // Return an error response if something goes wrong
//         return res.status(500).json({ message: 'Error data did not receive', error: error.message });
//     }


// const data = req.body;
// try {
//     // const userId = data.userId;  // Get the userId from the incoming request body
//     const userId = "86e37d7a-99bd-4ff7-8084-9dca3febc63e";
//     // Fetch data using LEFT JOINs
//     const result = await entities.tbl_user
//         .createQueryBuilder("user") // Start with tbl_user entity
//         // Left join with roles using the user_role in tbl_user
//         .leftJoinAndSelect("roles", "role", "role.id = user.UserRole")
//         // Left join with roles_permissions using role_id
//         .leftJoinAndSelect("roles_permissions", "rolePerm", "rolePerm.RoleId = role.id")
//         // Left join with parent_module using the parent_module_name in tbl_user
//         .leftJoinAndSelect("parent_module", "parent", "parent.id = rolePerm.ParentModuleId")
//         // Select the required fields
//         .select([
//             "user.id AS UserId",
//             "parent.Name AS ParentName", 
//             "role.id AS RoleId", 
//             "rolePerm.RoleId AS ParentModuleId", 
//             "rolePerm.isParentModuleActive AS isActive"
//         ])
//         // Filter by the userId
//         .where("user.id = :userId", { userId })
//         .getRawMany();

//     // // If no data is found, return a custom message
//     // if (result.length === 0) {
//     //     return res.status(404).json({ message: 'No data found for the specified user' });
//     // }
//     console.log(result);
//     // Return a success response with the result
//     // return res.status(200).json({ message: 'Data successfully received', data: result });
// } catch (error) {
//     console.log(error);
//     // Return an error response if something goes wrong
//     // return res.status(500).json({ message: 'Error while processing data', error: error.message });
// }
// const data = await entities.tbl_user.createQueryBuilder("alias")
//     .leftJoinAndSelect("tableToJoin", "table", "table.foreignKey = alias.id")
//     .getRawMany()
// try {
//     // Hardcoded userId (example)
//     const userId = "86e37d7a-99bd-4ff7-8084-9dca3febc63e";
    
//     // Fetch data using LEFT JOINs
//     const result = await entities.tbl_user
//         .createQueryBuilder("user") // Start with tbl_user entity
//         // Left join with roles using the user_role in tbl_user
//         .leftJoinAndSelect("roles", "user", "roles.id = user.UserRole")
//         // Left join with roles_permissions using role_id
//         .leftJoinAndSelect("roles_permissions", "roles", "roles_permissions.RoleId = roles.id")
//         // Left join with parent_module using the ParentModuleId in roles_permissions
//         .leftJoinAndSelect("parent_module", "roles_permissions", "parent_module.id = roles_permissions.ParentModuleId")
//         // Select the required fields
//         .select([
//             "user.UserId AS UserId",
//             "parent_module.Name AS ParentName", 
//             "roles.id AS RoleId", 
//             "roles_permissions.ParentModuleId AS ParentModuleId", 
//             "roles_permissions.isParentModuleActive AS isActive"
//         ])
//         // Filter by the userId
//         .where("user.UserId = :userId", { userId })
//         .getRawMany();

//     // If no data is found, you can handle it accordingly
//     if (result.length === 0) {
//         // return res.status(404).json({ message: 'No data found for the specified user' });
//     }

//     // Log and return the result
//     console.log(result);
//     // Return a success response with the result
//     // return res.status(200).json({ message: 'Data successfully received', data: result });
// } catch (error) {
//     console.log(error);
//     // Return an error response if something goes wrong
//     // return res.status(500).json({ message: 'Error while fetching data', error: error.message });
// }
// try {
//     // Hardcoded userId (example)
//     const userId = "86e37d7a-99bd-4ff7-8084-9dca3febc63e";
    
//     // Fetch data using LEFT JOINs
//     const result = await entities.tbl_user
//         .createQueryBuilder("user") // Start with tbl_user entity
//         // Left join with roles using the UserRole column in tbl_user
//         .leftJoinAndSelect("user.UserRole", "role") // Join the roles table (alias: role)
//         // Left join with roles_permissions using the RoleId from the roles table
//         .leftJoinAndSelect("role.roles_permissions", "rolePerm") // Join roles_permissions (alias: rolePerm)
//         // Left join with parent_module using the ParentModuleId in roles_permissions
//         .leftJoinAndSelect("rolePerm.parent_module", "parent") // Join parent_module (alias: parent)
//         // Select the required fields
//         .select([
//             "user.id AS UserId", // Select user.id as UserId
//             "parent.name AS ParentName", // Select parent_module name as ParentName
//             "role.id AS RoleId", // Select role.id as RoleId
//             "rolePerm.parentModuleId AS ParentModuleId", // Select ParentModuleId from roles_permissions
//             "rolePerm.isParentModuleActive AS isActive" // Select isParentModuleActive from roles_permissions
//         ])
//         // Filter by the userId
//         .where("user.id = :userId", { userId })
//         .getRawMany(); // Execute the query and return raw data

//     // If no data is found, handle it accordingly
//     if (result.length === 0) {
//         console.log("No data found for the specified user.");
//         // You can return a 404 response here if needed
//     }

//     // Log and return the result
//     console.log(result);
//     // Return a success response with the result
//     // return res.status(200).json({ message: 'Data successfully received', data: result });

// } catch (error) {
//     console.log(error);
//     // Handle any errors and return an error response
//     // return res.status(500).json({ message: 'Error while fetching data', error: error.message });
// }

// try {
//     // Hardcoded userId (example)
//     const userId = "86e37d7a-99bd-4ff7-8084-9dca3febc63e";
    
//     // Fetch data using LEFT JOINs
//     const result = await entities.tbl_user
//         .createQueryBuilder("user") // Start with tbl_user entity
//         // Left join with roles using the UserRole field in tbl_user
//         .leftJoinAndSelect("roles", "role", "role.id = user.UserRole")
//         // Left join with roles_permissions using role.id
//         .leftJoinAndSelect("roles_permissions", "rolePerm", "rolePerm.RoleId = role.id")
//         // Left join with parent_module using ParentModuleId in roles_permissions
//         .leftJoinAndSelect("parent_module", "parent", "parent.id = rolePerm.ParentModuleId")
//         // Select the required fields
//         .select([
//             "user.UserId AS UserId", // user id as UserId
//             "role.id AS RoleId", // role id as RoleId
//             "role.Name AS RoleName",
//             "parent.Name AS ParentName",
//             "parent.id AS ParentModuleId", // parent_module id as ParentModuleId
//             "rolePerm.isParentModuleActive AS isActive" // isParentModuleActive from roles_permissions
//         ])
//         // Filter by the userId (assuming userId is provided in the request body)
//         .where("user.UserId = :userId", { userId })
//         .getRawMany();

//     // If no data is found, handle it accordingly
//     // if (result.length === 0) {
//     //     return res.status(404).json({ message: 'No data found for the specified user' });
//     // }

//     // Log and return the result
//     console.log(result);
//     // return res.status(200).json({ message: 'Data successfully received', data: result });
// } catch (error) {
//     console.log(error);
//     // return res.status(500).json({ message: 'Error while fetching data', error: error.message });
// }



// try {
//     const userId = req.body.UserId;
//     // Hardcoded userId (example)
//     // const userId = "86e37d7a-99bd-4ff7-8084-9dca3febc63e";
    

//     // Fetch data using LEFT JOINs
//     const result = await entities.tbl_user
//         .createQueryBuilder("user") // Start with tbl_user entity
//         // Left join with roles using the UserRole field in tbl_user
//         .leftJoinAndSelect("roles", "role", "role.id = user.UserRole")
//         // Left join with roles_permissions using role.id
//         .leftJoinAndSelect("roles_permissions", "rolePerm", "rolePerm.RoleId = role.id")
//         // Left join with parent_module using ParentModuleId in roles_permissions
//         .leftJoinAndSelect("parent_module", "parent", "parent.id = rolePerm.ParentModuleId")
//         // Select the required fields
//         .select([
//             "user.UserId AS UserId", // user id as UserId
//             "role.id AS RoleId", // role id as RoleId
//             "role.Name AS RoleName",
//             "parent.Name AS ParentName",
//             "parent.id AS ParentModuleId", // parent_module id as ParentModuleId
//             "rolePerm.isParentModuleActive AS isActive" // isParentModuleActive from roles_permissions
//         ])
//         // Filter by the userId (assuming userId is provided in the request body)
//         .where("user.UserId = :userId", { userId })
//         .getRawMany();

//     // Process the result to group ParentModuleName and ParentModuleId into arrays, along with isActive status
//     const groupedResult = result.reduce((acc, item) => {
//         // Find the user in the accumulator
//         let user = acc.find(user => user.UserId === item.UserId);

//         if (!user) {
//             // If the user does not exist in the accumulator, create a new object for them
//             user = {
//                 UserId: item.UserId,
//                 RoleId: item.RoleId,
//                 RoleName: item.RoleName,
//                 ParentModules: [], // Initialize an empty array for ParentModules
//                 // isActive: item.isActive
//             };
//             acc.push(user);
//         }

//         // Push the ParentModuleName and ParentModuleId, along with the isActive flag into the ParentModules array
//         user.ParentModules.push({
//             ParentModuleId: item.ParentModuleId,
//             ParentName: item.ParentName,
//             isActive: item.isActive // Add the isActive flag here
//         });

//         return acc;
//     }, []);

//     // If no data is found, handle it accordingly
//     if (groupedResult.length === 0) {
//         return res.status(404).json({ message: 'No data found for the specified user' });
//     }
//     console.log('Received userId:', userId); // Log to check if userId is received
//     // Log and return the result
//     console.log(JSON.stringify(groupedResult, null, 2)); // Format the result for better readability
//     return res.status(200).json({ message: 'Data successfully received', data: groupedResult });
// } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: 'Error while fetching data', error: error.message });
// }


// WORKING CODE
//  try {
//         const userId = req.body.UserId; // Get userId from request body

//         // Query with LEFT JOINS using TypeORM
//         const result = await entities.tbl_user
//             .createQueryBuilder("user")
//             .leftJoinAndSelect("roles", "role", "role.id = user.UserRole")
//             .leftJoinAndSelect("roles_permissions", "rolePerm", "rolePerm.RoleId = role.id")
//             .leftJoinAndSelect("parent_module", "parent", "parent.id = rolePerm.ParentModuleId")
//             .select([
//                 "user.UserId AS UserId",
//                 "role.id AS RoleId",
//                 "role.Name AS RoleName",
//                 "parent.Name AS ParentName",
//                 "parent.id AS ParentModuleId",
//                 "rolePerm.isParentModuleActive AS isActive"
//             ])
//             .where("user.UserId = :userId", { userId })
//             .getRawMany();

//         // Process the result to group ParentModuleName and ParentModuleId into arrays, along with isActive status
//         const groupedResult = result.reduce((acc, item) => {
//             let user = acc.find(user => user.UserId === item.UserId);
//             if (!user) {
//                 user = {
//                     UserId: item.UserId,
//                     RoleId: item.RoleId,
//                     RoleName: item.RoleName,
//                     ParentModules: []
//                 };
//                 acc.push(user);
//             }

//             user.ParentModules.push({
//                 ParentModuleId: item.ParentModuleId,
//                 ParentName: item.ParentName,
//                 isActive: item.isActive
//             });

//             return acc;
//         }, []);

//         // If no data is found
//         if (groupedResult.length === 0) {
//             return res.status(404).json({ message: 'No data found for the specified user' });
//         }

//         // Send the response back to the frontend
//         return res.status(200).json({
//             message: 'Data successfully received',
//             data: groupedResult
//         });

//     } catch (error) {
//         // Handle errors
//         console.error(error);
//         return res.status(500).json({ message: 'Error while fetching data', error: error.message });
//     }
// WORKING CODE



 try {
        const userId = req.body.UserId; // Get userId from the request body

        // Query with LEFT JOINS using TypeORM
        const result = await entities.tbl_user
            .createQueryBuilder("user")
            .leftJoinAndSelect("roles", "role", "role.id = user.UserRole")
            .leftJoinAndSelect("roles_permissions", "rolePerm", "rolePerm.RoleId = role.id")
            .leftJoinAndSelect("parent_module", "parent", "parent.id = rolePerm.ParentModuleId")
            .select([
                "user.UserId AS UserId",
                "role.id AS RoleId",
                "role.Name AS RoleName",
                "parent.Name AS ParentName",
                "parent.id AS ParentModuleId",
                "rolePerm.isParentModuleActive AS isActive"
            ])
            .where("user.UserId = :userId", { userId })
            .getRawMany();

        // Process the result to group ParentModuleName and ParentModuleId into arrays, along with isActive status
        const groupedResult = result.reduce((acc, item) => {
            let user = acc.find(user => user.UserId === item.UserId);
            if (!user) {
                user = {
                    UserId: item.UserId,
                    RoleId: item.RoleId,
                    RoleName: item.RoleName,
                    ParentModules: []
                };
                acc.push(user);
            }

            // Push the ParentModuleName and ParentModuleId, along with the isActive flag into the ParentModules array
            user.ParentModules.push({
                ParentModuleId: item.ParentModuleId,
                ParentName: item.ParentName,
                isActive: item.isActive
            });

            return acc;
        }, []);

        // Removing duplicates in ParentModules based on ParentName
        groupedResult.forEach(user => {
            // Create a Set to track unique ParentName
            const uniqueParentNames = new Set();
            user.ParentModules = user.ParentModules.filter(module => {
                if (uniqueParentNames.has(module.ParentName)) {
                    return false;  // Skip if ParentName is already encountered
                } else {
                    uniqueParentNames.add(module.ParentName);
                    return true;
                }
            });
        });

        // If no data is found
        if (groupedResult.length === 0) {
            return res.status(404).json({ message: 'No data found for the specified user' });
        }

        // Send the response back to the frontend
        return res.status(200).json({
            message: 'Data successfully received',
            data: groupedResult
        });

    } catch (error) {
        // Handle errors
        console.error(error);
        return res.status(500).json({ message: 'Error while fetching data', error: error.message });
    }