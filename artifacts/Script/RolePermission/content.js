  // const RoleId = '767a33ac-8c9f-4320-8f7c-141ca1e84f6a';
  // const ParentModuleId = 'c71c4ee3-a0e9-46c1-80db-0a78db33af13';  // The UUID you want to use

  // const dataToInsert = [
  //   {RoleId, ParentModuleId},
  //   {RoleId, ParentModuleId},
  //   {RoleId, ParentModuleId},
  //   {RoleId, ParentModuleId},
  //   {RoleId, ParentModuleId},
  // ];

  // Insert multiple rows at once
  // await entities.role_permission.save(dataToInsert);
  // console.log('Data inserted successfully');
  // insertData().catch(console.error);

  // async function insertRolePermission() {
  // const repository = entities.role_permission;
  // const roleId = '767a33ac-8c9f-4320-8f7c-141ca1e84f6a';
  // const parentModuleId = 'c71c4ee3-a0e9-46c1-80db-0a78db33af13'; 
  // const subModuleId = 'c8622062-a5bc-4869-9148-8b9f675ff9cc';
  // // Prepare the data for multiple records with the same ParentModuleId
  // const dataToInsert = [
  //   { id: '3d13a613-20cd-463f-8c99-28d946261feb', RoleId: roleId, ParentModuleId: parentModuleId, SubModuleId: subModuleId, Create: true, Read: true, Update: true, Delete: true },
  //   { id: 'cacd595f-3bbc-4e06-95b0-621926018dd3', RoleId: roleId, ParentModuleId: parentModuleId, SubModuleId: subModuleId, Create: true, Read: false, Update: false, Delete: false },
  //   { id: '0e158ed8-29a7-4cfe-97da-96f9484955f5', RoleId: roleId, ParentModuleId: parentModuleId, SubModuleId: subModuleId, Create: false, Read: false, Update: false, Delete: false },
  //   // Add more records as needed
  // ];
  const data = req.body;
  // Insert the records into the table; UUIDs for `id` will be auto-generated
  try{
  await entities.roles_permissions.save(data);
  complete();
  return res.status(200).json({ message: 'Permissions inserted successfully.' });
  } catch (error){
  return res.status(500).json({ message: 'Error inserting entity:', error: error.message });
  }




// const { v4: uuidv4 } = require('uuid');  // Import UUID v4 generator

// var roleId = '767a33ac-8c9f-4320-8f7c-141ca1e84f6a';  // Same RoleId for all records
// var parentModuleId = 'c71c4ee3-a0e9-46c1-80db-0a78db33af13';  // Same ParentModuleId for all records
// var subModuleId = 'c8622062-a5bc-4869-9148-8b9f675ff9cc';
// var createdBy = 'admin';
// var updatedBy = 'admin';

// // Number of records you want to insert
// var numberOfRecords = 3;  // Change this to the number of records you need

// // Prepare an array to hold all records to insert
// var dataToInsert = [];

// // Loop to create multiple records with duplicate RoleId and ParentModuleId
// for (let i = 0; i < numberOfRecords; i++) {
//   dataToInsert.push(
//     { 
//       // id: uuidv4(),  // Generate a unique id for each record
//       RoleId: roleId, 
//       ParentModuleId: parentModuleId,
//       SubModuleId: subModuleId,  // You can keep the same or generate a new SubModuleId if needed
//       Create: true,
//       Read: true,
//       Update: false,
//       Delete: false,
//       createdBy: createdBy,
//       updatedBy: updatedBy
//     },
//     { 
//       // id: uuidv4(),  // Generate a unique id for each record
//       RoleId: roleId, 
//       ParentModuleId: parentModuleId,
//       SubModuleId: subModuleId,  // You can keep the same or generate a new SubModuleId if needed
//       Create: true,
//       Read: true,
//       Update: true,
//       Delete: false,
//       createdBy: createdBy,
//       updatedBy: updatedBy
//     },
//     { 
//       // id: uuidv4(),  // Generate a unique id for each record
//       RoleId: roleId, 
//       ParentModuleId: parentModuleId,
//       SubModuleId: subModuleId,  // You can keep the same or generate a new SubModuleId if needed
//       Create: true,
//       Read: false,
//       Update: false,
//       Delete: false,
//       createdBy: createdBy,
//       updatedBy: updatedBy
//     }
//   );
// }

// // Insert all records at once into the database
// const qq = await entities.role_permission.createQueryBuilder()
//     .insert()
//     .values(dataToInsert)
//     .execute();

// console.log(dataToInsert);  // Output the result of the insert

// const { v4: uuidv4 } = require('uuid');  // Import UUID v4 generator

// var repository = entities.role_permission;
// var roleId = '767a33ac-8c9f-4320-8f7c-141ca1e84f6a';  // Same RoleId for all records
// var parentModuleId = 'c71c4ee3-a0e9-46c1-80db-0a78db33af13';  // Same ParentModuleId for all records
// var subModuleId = 'c8622062-a5bc-4869-9148-8b9f675ff9cc';
// var createdBy = 'admin';
// var updatedBy = 'admin';

// // Number of records you want to insert
// var numberOfRecords = 10;  // Change this to the number of records you need

// // Prepare the data for multiple records with the same RoleId and ParentModuleId
// var dataToInsert = [];
// for (let i = 0; i < numberOfRecords; i++) {
//   dataToInsert.push({
//     // id: uuidv4(),  // Generate unique id for each record
//     RoleId: roleId, 
//     ParentModuleId: parentModuleId,
//     SubModuleId: subModuleId,
//     Create: true,
//     Read: true,
//     Update: false,
//     Delete: false,
//     createdBy: createdBy,
//     updatedBy: updatedBy
//   });
// }

// // Insert many records at once
// const qq = await entities.role_permission.createQueryBuilder()
//     .insert()
//     .values(dataToInsert)
//     .execute();


// console.log(qq);
// var repository = entities.role_permission;
// var roleId = '767a33ac-8c9f-4320-8f7c-141ca1e84f6a';
// var parentModuleId = 'c71c4ee3-a0e9-46c1-80db-0a78db33af13'; 
// // var subModuleId = 'c8622062-a5bc-4869-9148-8b9f675ff9cc';
// var createdBy = 'admin';
// var updatedBy = 'admin';

// // Prepare the data for multiple records with the same ParentModuleId
// var dataToInsert = [
//   { RoleId: roleId, ParentModuleId: parentModuleId, Create: true, Read: true, Update: false, Delete: false, createdBy: createdBy, updatedBy: updatedBy },
//   { RoleId: roleId, ParentModuleId: parentModuleId, Create: true, Read: true, Update: true, Delete: false, createdBy: createdBy, updatedBy: updatedBy },
//   { RoleId: roleId, ParentModuleId: parentModuleId, Create: true, Read: false, Update: false, Delete: false, createdBy: createdBy, updatedBy: updatedBy },
//   // Add more records as needed
// ];
// // Insert many
// // const query = await entities.role_permission.createQueryBuilder()
// //     .insert()
// //     .values(dataToInsert)
// //     .execute();
//     // complete();
// // Insert the records into the table
// var query = await repository.save(dataToInsert);
// complete();
// // console.log(dataToInsert);
// console.log('Multiple RolePermissions inserted successfully.');
// console.log(dataToInsert);
// }

// insertRolePermission('767a33ac-8c9f-4320-8f7c-141ca1e84f6a', 'c71c4ee3-a0e9-46c1-80db-0a78db33af13').catch(console.error);
// // const data = req.body; // request data body.
// const data = req.body;

// try{
//     await entities.role_permission.createQueryBuilder()
//     .insert()
//     .values(data)
//     .execute();
// } catch (error){
//       console.error('Error saving entity:', error);
// }
// const rolePermissionsData = req.body; // Ensure this is mapped correctly

// await entities.role_permission.createQueryBuilder()
//   .insert()
//   .values(rolePermissionsData)
//   .onConflict(`("RoleId", "ParentModuleId", "SubModuleId")`) // Columns that will be checked for conflicts
//   .merge()  // Update existing rows if conflict occurs
//   .execute();


// log.info(data);
// // // Assuming you have received the response data from the server API
// // const responseData = req.body;

// // // Convert the response data to JSON format
// // const result = JSON.stringify(responseData);

// // // Set the appropriate response headers
// // response.setHeader("Content-Type", "application/json");
// // response.setHeader("Access-Control-Allow-Origin", "*");

// // // Send the response back to App Designer
// // response.send(result);


// // const responseData = req.body;
// // console.log(req.body)
// // // Convert the response data to JSON format
// // const result = JSON.stringify(responseData);

// // // Set the appropriate response headers
// // response.setHeader("Content-Type", "application/json");
// // response.setHeader("Access-Control-Allow-Origin", "*");

// // // Send the response back to App Designer
// // response.end(result);


// // Set the appropriate response headers
// response.setHeader("Content-Type", "application/json");
// response.setHeader("Access-Control-Allow-Origin", "*");

// // Create the response object
// const responseData = {
//   message: "Hello from the server!"
// };

// // Convert the response data to JSON format
// const result = JSON.stringify(responseData);

// // Send the response back to App Designer
// response.end(result);


// const data = req.body;
// await entities.role_permission.save(req.body);
// // // Assuming that req.body is an array of role_permission objects
// // for (let i = 0; i < data.length; i++) {
// //     const permission = data[i];

// //     // Check if the role_permission already exists for this RoleId and SubModuleId
// //     const existingPermission = await entities.role_permission.findOne({
// //         where: {
// //             RoleId: permission.RoleId,
// //             ParentModuleId: permission.ParentModuleId,
// //             SubModuleId: permission.SubModuleId, // Add any other fields that should be unique together
// //         }
// //     });

// //     if (existingPermission) {
// //         // Handle existing record (update or skip)
// //         // Option 1: Update the existing record
// //         await entities.role_permission.update(existingPermission.id, permission);
// //     } else {
// //         // Option 2: Save the new record
// //         await entities.role_permission.save(permission);
// //     }
// // }
// try {
//     const data = req.body; // Assuming req.body contains the JSON data
//     await entities.role_permission.save(data);
// } catch (error) {
//     console.error("Error saving data", error);
//     // Handle the error as needed
// }

// const insertPermissions = async (req, res) => {
//   const permissions = req.body;  // assuming the body contains an array of permissions

//   try {
//     // Loop through each permission and insert or update it
//     for (const permission of permissions) {
//       // Check if a permission with the same RoleId, ParentModuleId, and SubModuleId exists
//       const existingPermission = await await entities.role_permission.findOne({
//         where: {
//           RoleId: permission.RoleId,
//           ParentModuleId: permission.ParentModuleId,
//           SubModuleId: permission.SubModuleId,
//         }
//       });

//       if (existingPermission) {
//         // If it exists, update the record
//         await entities.role_permission.update(existingPermission.id, permission);
//       } else {
//         // If it doesn't exist, insert a new record
//         const newPermission = entities.role_permission.create(permission);
//         await entities.role_permission.save(newPermission);
//       }
//     }

//     res.status(200).send({ message: 'Permissions inserted/updated successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Something went wrong' });
//   }
// };

// // const insertPermissions = async (req, res) => {
//   const permissions = req.body;  // The incoming data (array of permissions)

//   try {
//     // Loop through each permission object in the body
//     for (const permission of permissions) {
//       // Check if a record with the same RoleId, ParentModuleId, and SubModuleId already exists
//       const existingPermission = await entities.role_permission.findOne({
//         where: {
//           RoleId: permission.RoleId,
//           ParentModuleId: permission.ParentModuleId,
//           SubModuleId: permission.SubModuleId,
//         },
//       });

//       if (existingPermission) {
//         // If the permission already exists, update it with new values
//         await entities.role_permission.update(existingPermission.id, permission);
//       } else {
//         // If the permission doesn't exist, create and insert a new record
//         const newPermission = entities.role_permission.create(permission);
//         await entities.role_permission.save(newPermission);
//       }
//     }

//     // Respond with a success message
//     res.status(200).send({ message: 'Permissions inserted/updated successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Something went wrong while inserting/updating permissions' });
//   }
// // };
// async function processSaveRolePermission() {
//   const rolePermissions = req.body.map(rolePermissionData => {
//     const rolePermission = new rolePermission();
//     rolePermission.Create = rolePermissionData.Create;
//     rolePermission.Delete = rolePermissionData.Delete;
//     rolePermission.ParentModuleId = rolePermissionData.ParentModuleId;
//     rolePermission.Read = rolePermissionData.Read;
//     rolePermission.RoleId = rolePermissionData.RoleId;
//     rolePermission.SubModuleId = rolePermissionData.SubModuleId;
//     rolePermission.Update = rolePermissionData.Update;
//     return rolePermission;
//   });

//   await entities.role_permission.save(rolePermissions);

//   return {
//     status: "OK"
//   };
// }


// switch (req.query.method) {
//   case "Get":
//     result.data = await processGet();
//     break;
//   case "Delete":
//     result.data = await processDelete();
//     break;
//   case "Save":
//     result.data = await processSave();
//     break;
//   case "List":
//     result.data = await processList();
//     break;
//   case "SaveRolePermission": // Add this case
//     result.data = await processSaveRolePermission();
//     break;
//   default:
//     break;
// }

// //   const permissions = req.body;  // The incoming data (array of permissions)

//   try {
//     // Use the `save` method to insert multiple records in bulk
//     await entities.role_permission.save(req.body);

//     // Respond with a success message
//     res.status(200).send({ message: 'Permissions inserted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Something went wrong while inserting permissions' });
//   }
// //   complete();

// const { getConnection } = modules.typeorm;
// const { YourEntity } = entities;

// const { roleId, parentModuleId, submoduleId, data } = req.body;

// const entitiesToSave = data.map((item) => ({
//   roleId,
//   parentModuleId,
//   submoduleId,
//   ...item,
// }));

// const connection = await getConnection();
// const savedEntities = await entities.role_permission.save(entitiesToSave);

// console.log(savedEntities);



