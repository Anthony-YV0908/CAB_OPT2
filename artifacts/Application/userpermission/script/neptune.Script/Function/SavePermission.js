function onSubmit() {
// WORKING CODE
// const roleId = oRoleId.getText(); 
// var allRolesPermissions = { // the id `existingRecordId` for the existing data in my database
//     parameters: {
//         "select": "id",  
//     }
// };

// apigetAllRolesPermissions(allRolesPermissions);

// var submoduleOpt = {
//     parameters: {
//         "select": "id,Description"  // Fetch id and Description for submodules
//     }
// };

// // Fetch all SubModules
// apigetAllSubModuleId(submoduleOpt)
//     .then(function(response) {
//         // Map submodule descriptions to their corresponding ids
//         var subModuleMapping = {};
//         response.forEach(function(item) {
//             subModuleMapping[item.Description] = item.id;  // Map SubModuleDescription to SubModuleId
//         });

//         var options = {
//             parameters: {
//                 "select": "id,Name"  // Select both id (ParentModuleId) and Name (ParentModuleName) for parent modules
//             }
//         };

//         // Fetch ParentModuleIds and ParentModuleNames from the API
//         apigetAllModuleId(options)
//             .then(function(response) {
//                 var parentModuleMapping = {};
//                 response.forEach(function(item) {
//                     parentModuleMapping[item.Name] = item.id;  // Map ParentModuleName to ParentModuleId
//                 });

//                 // Define the parent and submodule descriptions
//                 var parentModuleName = [
//                     "References",
//                     "Transaction",
//                     "Reports",
//                     "UserMaintenance",
//                     "Utilities"
//                 ];

//                 var subModuleDescription = [
//                     "Airports", "Airlines", "GlobalRegion", "Country", "Region", "Province", "State", "City",
//                     "FlightSchedule", "FlightCancelation", "FlightDelay", "RFlightSchedule", "ScheduleByAirline", "OTPReports",
//                     "UsersAccess", "AuditTrail", "FlightSummary (from system)", "FlightSummary (from airlines)"
//                 ];
                
//                 var parentModules = [
//                     oReferencesSwitch.getState(),
//                     oTransactionSwitch.getState(),
//                     oReportsSwitch.getState(),
//                     oUserMaintenanceSwitch.getState(),
//                     oUtilitiesSwitch.getState()
//                 ];

//                 var subModules = [
//                     // References Submodules (Create, Read, Update, Delete for each submodule)
//                     oAirportsCreateSwitch.getState(), oAirportsReadSwitch.getState(), oAirportsUpdateSwitch.getState(), oAirportsDeleteSwitch.getState(),
//                     oAirlinesCreateSwitch.getState(), oAirlinesReadSwitch.getState(), oAirlinesUpdateSwitch.getState(), oAirlinesDeleteSwitch.getState(),
//                     oGlobalRegionCreateSwitch.getState(), oGlobalRegionReadSwitch.getState(), oGlobalRegionUpdateSwitch.getState(), oGlobalRegionDeleteSwitch.getState(),
//                     oCountryCreateSwitch.getState(), oCountryReadSwitch.getState(), oCountryUpdateSwitch.getState(), oCountryDeleteSwitch.getState(),
//                     oRegionCreateSwitch.getState(), oRegionReadSwitch.getState(), oRegionUpdateSwitch.getState(), oRegionDeleteSwitch.getState(),
//                     oProvinceCreateSwitch.getState(), oProvinceReadSwitch.getState(), oProvinceUpdateSwitch.getState(), oProvinceDeleteSwitch.getState(),
//                     oStateCreateSwitch.getState(), oStateReadSwitch.getState(), oStateUpdateSwitch.getState(), oStateDeleteSwitch.getState(),
//                     oCityCreateSwitch.getState(), oCityReadSwitch.getState(), oCityUpdateSwitch.getState(), oCityDeleteSwitch.getState(),

//                     // Transaction Submodules
//                     oFlightScheduleCreateSwitch.getState(), oFlightScheduleReadSwitch.getState(), oFlightScheduleUpdateSwitch.getState(), oFlightScheduleDeleteSwitch.getState(),
//                     oFlightCancelationCreateSwitch.getState(), oFlightCancelationReadSwitch.getState(), oFlightCancelationUpdateSwitch.getState(), oFlightCancelationDeleteSwitch.getState(),
//                     oFlightDelayCreateSwitch.getState(), oFlightDelayReadSwitch.getState(), oFlightDelayUpdateSwitch.getState(), oFlightDelayDeleteSwitch.getState(),

//                     // Reports Submodules
//                     oRFlightScheduleCreateSwitch.getState(), oRFlightScheduleReadSwitch.getState(), oRFlightScheduleUpdateSwitch.getState(), oRFlightScheduleDeleteSwitch.getState(),
//                     oScheduleByAirlineCreateSwitch.getState(), oScheduleByAirlineReadSwitch.getState(), oScheduleByAirlineUpdateSwitch.getState(), oScheduleByAirlineDeleteSwitch.getState(),
//                     oOtpReportsCreateSwitch.getState(), oOtpReportsReadSwitch.getState(), oOtpReportsUpdateSwitch.getState(), oOtpReportsDeleteSwitch.getState(),

//                     // UserMaintenance Submodules
//                     oUserAccessCreateSwitch.getState(), oUserAccessReadSwitch.getState(), oUserAccessUpdateSwitch.getState(), oUserAccessDeleteSwitch.getState(),
//                     oAuditTrailCreateSwitch.getState(), oAuditTrailReadSwitch.getState(), oAuditTrailUpdateSwitch.getState(), oAuditTrailDeleteSwitch.getState(),

//                     // Utilities Submodules
//                     oMonthlyOTPSysCreateSwitch.getState(), oMonthlyOTPSysReadSwitch.getState(), oMonthlyOTPSysUpdateSwitch.getState(), oMonthlyOTPSysDeleteSwitch.getState(),
//                     oMonthlyOTPAirlinesCreateSwitch.getState(), oMonthlyOTPAirlinesReadSwitch.getState(), oMonthlyOTPAirlinesUpdateSwitch.getState(), oMonthlyOTPAirlinesDeleteSwitch.getState(),
//                 ];

//                 var parentModuleStates = {
//                     References: oReferencesSwitch.getState(),
//                     Transaction: oTransactionSwitch.getState(),
//                     Reports: oReportsSwitch.getState(),
//                     UserMaintenance: oUserMaintenanceSwitch.getState(),
//                     Utilities: oUtilitiesSwitch.getState()
//                 };

//                 var output = [];

//                 // Iterate over parent modules
//                 parentModuleName.forEach((parentModule) => {
//                     if (parentModuleStates[parentModule]) {
//                         var parentModuleId = parentModuleMapping[parentModule];

//                         // Get the submodules for the current parent
//                         var subModulesForCurrentParent = getSubModulesForParent(parentModule);

//                         subModulesForCurrentParent.forEach((subModule) => {
//                             var startIndex = subModuleDescription.indexOf(subModule) * 4;

//                             // Get submodule id from the mapping
//                             var subModuleId = subModuleMapping[subModule];

//                             // Assign permission states directly from the subModules array
//                             var createState = subModules[startIndex];
//                             var readState = subModules[startIndex + 1];
//                             var updateState = subModules[startIndex + 2];
//                             var deleteState = subModules[startIndex + 3];

//                             // Push the submodule with its permission states, including the ParentModuleId and ParentModuleState
//                             output.push({
//                                 "RoleId": roleId,
//                                 "ParentModuleId": parentModuleId,
//                                 "isParentModuleActive": parentModuleStates[parentModule], // Add ParentModuleState here
//                                 "SubModuleId": subModuleId,  // Replaced with the actual SubModuleId
//                                 "Create": createState,
//                                 "Read": readState,
//                                 "Update": updateState,
//                                 "Delete": deleteState
//                             });
//                         });
//                     }
//                 });

//                 // Call the API to save the permissions
//                 apisaveRolePermission(output);  // Send the result to the API
//             })
//             .catch(function(error) {
//                 console.error(error);
//             });
//     })
//     .catch(function(error) {
//         console.error(error);
//     });

// // Function to return the submodules for each parent
// function getSubModulesForParent(parentModule) {
//     switch(parentModule) {
//         case 'References':
//             return [
//                 "Airports", "Airlines", "GlobalRegion", "Country", "Region", "Province", "State", "City"
//             ];
//         case 'Transaction':
//             return [
//                 "FlightSchedule", "FlightCancelation", "FlightDelay"
//             ];
//         case 'Reports':
//             return [
//                 "RFlightSchedule", "ScheduleByAirline", "OTPReports"
//             ];
//         case 'UserMaintenance':
//             return [
//                 "UsersAccess", "AuditTrail"
//             ];
//         case 'Utilities':
//             return [
//                 "FlightSummary (from system)", "FlightSummary (from airlines)"
//             ];
//         default:
//             return [];
//     }
// }

// // Function to save role permissions via API
// function apisaveRolePermission(permissionsData) {
//     var apiUrl = '/api/serverscript/rolepermission/Save';
    
//     fetch(apiUrl, {
//      method: 'POST',
//      headers: {
//          'Content-Type': 'application/json'
//      },
//      body: JSON.stringify(permissionsData)
//  })
//  .then(response => {
//      if (!response.ok) {
//          throw new Error('Network response was not ok');
//      }
//      return response.json();
//  })
//  .then(data => {
//      console.log('Permission data saved successfully:', data);
//  })
//  .catch(error => {
//      console.error('Error saving permissions:', error);
//  });
// }
//// WORKING CODE



//// WORKING CODE
// const roleId = oRoleId.getText(); 

// // Step 1: Fetch existing role permissions
// var allRolesPermissions = {
//     parameters: {
//         "select": "id,RoleId,ParentModuleId,SubModuleId"  // Fetch relevant fields to identify existing permissions
//     }
// };

// apigetAllRolesPermissions(allRolesPermissions)
//     .then(function(existingPermissions) {
//         // Convert the existing permissions into a map for faster lookup
//         var existingPermissionsMap = new Map();
//         existingPermissions.forEach(permission => {
//             const key = `${permission.RoleId}-${permission.ParentModuleId}-${permission.SubModuleId}`;
//             existingPermissionsMap.set(key, permission.id);  // Map a unique key (RoleId + ParentModuleId + SubModuleId) to its ID
//         });

//         // Step 2: Fetch submodules and parent modules, and process them
//         var submoduleOpt = {
//             parameters: {
//                 "select": "id,Description"  // Fetch id and Description for submodules
//             }
//         };

//         apigetAllSubModuleId(submoduleOpt)
//             .then(function(response) {
//                 // Map submodule descriptions to their corresponding ids
//                 var subModuleMapping = {};
//                 response.forEach(function(item) {
//                     subModuleMapping[item.Description] = item.id;  // Map SubModuleDescription to SubModuleId
//                 });

//                 var options = {
//                     parameters: {
//                         "select": "id,Name"  // Select both id (ParentModuleId) and Name (ParentModuleName) for parent modules
//                     }
//                 };

//                 // Fetch ParentModuleIds and ParentModuleNames from the API
//                 apigetAllModuleId(options)
//                     .then(function(response) {
//                         var parentModuleMapping = {};
//                         response.forEach(function(item) {
//                             parentModuleMapping[item.Name] = item.id;  // Map ParentModuleName to ParentModuleId
//                         });

//                         // Define the parent and submodule descriptions
//                         var parentModuleName = [
//                             "References", "Transaction", "Reports", "UserMaintenance", "Utilities"
//                         ];

//                         var subModuleDescription = [
//                             "Airports", "Airlines", "GlobalRegion", "Country", "Region", "Province", "State", "City",
//                             "FlightSchedule", "FlightCancelation", "FlightDelay", "RFlightSchedule", "ScheduleByAirline", "OTPReports",
//                             "UsersAccess", "AuditTrail", "FlightSummary (from system)", "FlightSummary (from airlines)"
//                         ];

//                         var parentModules = [
//                             oReferencesSwitch.getState(),
//                             oTransactionSwitch.getState(),
//                             oReportsSwitch.getState(),
//                             oUserMaintenanceSwitch.getState(),
//                             oUtilitiesSwitch.getState()
//                         ];

//                         var subModules = [
//                             oAirportsCreateSwitch.getState(), oAirportsReadSwitch.getState(), oAirportsUpdateSwitch.getState(), oAirportsDeleteSwitch.getState(),
//                             oAirlinesCreateSwitch.getState(), oAirlinesReadSwitch.getState(), oAirlinesUpdateSwitch.getState(), oAirlinesDeleteSwitch.getState(),
//                             oGlobalRegionCreateSwitch.getState(), oGlobalRegionReadSwitch.getState(), oGlobalRegionUpdateSwitch.getState(), oGlobalRegionDeleteSwitch.getState(),
//                             oCountryCreateSwitch.getState(), oCountryReadSwitch.getState(), oCountryUpdateSwitch.getState(), oCountryDeleteSwitch.getState(),
//                             oRegionCreateSwitch.getState(), oRegionReadSwitch.getState(), oRegionUpdateSwitch.getState(), oRegionDeleteSwitch.getState(),
//                             oProvinceCreateSwitch.getState(), oProvinceReadSwitch.getState(), oProvinceUpdateSwitch.getState(), oProvinceDeleteSwitch.getState(),
//                             oStateCreateSwitch.getState(), oStateReadSwitch.getState(), oStateUpdateSwitch.getState(), oStateDeleteSwitch.getState(),
//                             oCityCreateSwitch.getState(), oCityReadSwitch.getState(), oCityUpdateSwitch.getState(), oCityDeleteSwitch.getState(),

//                             oFlightScheduleCreateSwitch.getState(), oFlightScheduleReadSwitch.getState(), oFlightScheduleUpdateSwitch.getState(), oFlightScheduleDeleteSwitch.getState(),
//                             oFlightCancelationCreateSwitch.getState(), oFlightCancelationReadSwitch.getState(), oFlightCancelationUpdateSwitch.getState(), oFlightCancelationDeleteSwitch.getState(),
//                             oFlightDelayCreateSwitch.getState(), oFlightDelayReadSwitch.getState(), oFlightDelayUpdateSwitch.getState(), oFlightDelayDeleteSwitch.getState(),

//                             oRFlightScheduleCreateSwitch.getState(), oRFlightScheduleReadSwitch.getState(), oRFlightScheduleUpdateSwitch.getState(), oRFlightScheduleDeleteSwitch.getState(),
//                             oScheduleByAirlineCreateSwitch.getState(), oScheduleByAirlineReadSwitch.getState(), oScheduleByAirlineUpdateSwitch.getState(), oScheduleByAirlineDeleteSwitch.getState(),
//                             oOtpReportsCreateSwitch.getState(), oOtpReportsReadSwitch.getState(), oOtpReportsUpdateSwitch.getState(), oOtpReportsDeleteSwitch.getState(),

//                             oUserAccessCreateSwitch.getState(), oUserAccessReadSwitch.getState(), oUserAccessUpdateSwitch.getState(), oUserAccessDeleteSwitch.getState(),
//                             oAuditTrailCreateSwitch.getState(), oAuditTrailReadSwitch.getState(), oAuditTrailUpdateSwitch.getState(), oAuditTrailDeleteSwitch.getState(),

//                             oMonthlyOTPSysCreateSwitch.getState(), oMonthlyOTPSysReadSwitch.getState(), oMonthlyOTPSysUpdateSwitch.getState(), oMonthlyOTPSysDeleteSwitch.getState(),
//                             oMonthlyOTPAirlinesCreateSwitch.getState(), oMonthlyOTPAirlinesReadSwitch.getState(), oMonthlyOTPAirlinesUpdateSwitch.getState(), oMonthlyOTPAirlinesDeleteSwitch.getState()
//                         ];

//                         var parentModuleStates = {
//                             References: oReferencesSwitch.getState(),
//                             Transaction: oTransactionSwitch.getState(),
//                             Reports: oReportsSwitch.getState(),
//                             UserMaintenance: oUserMaintenanceSwitch.getState(),
//                             Utilities: oUtilitiesSwitch.getState()
//                         };

//                         var output = [];

//                         // Iterate over parent modules
//                         parentModuleName.forEach((parentModule) => {
//                             if (parentModuleStates[parentModule]) {
//                                 var parentModuleId = parentModuleMapping[parentModule];

//                                 // Get the submodules for the current parent
//                                 var subModulesForCurrentParent = getSubModulesForParent(parentModule);

//                                 subModulesForCurrentParent.forEach((subModule) => {
//                                     var startIndex = subModuleDescription.indexOf(subModule) * 4;

//                                     // Get submodule id from the mapping
//                                     var subModuleId = subModuleMapping[subModule];

//                                     // Assign permission states directly from the subModules array
//                                     var createState = subModules[startIndex];
//                                     var readState = subModules[startIndex + 1];
//                                     var updateState = subModules[startIndex + 2];
//                                     var deleteState = subModules[startIndex + 3];

//                                     // Construct a unique key for existing permissions comparison
//                                     const permissionKey = `${roleId}-${parentModuleId}-${subModuleId}`;

//                                     // Check if the permission exists in the existing permissions map
//                                     const existingId = existingPermissionsMap.get(permissionKey);

//                                     if (existingId) {
//                                         // If exists, update the record with the existing id
//                                         output.push({
//                                             "id": existingId,
//                                             "RoleId": roleId,
//                                             "ParentModuleId": parentModuleId,
//                                             "isParentModuleActive": parentModuleStates[parentModule],
//                                             "SubModuleId": subModuleId,
//                                             "Create": createState,
//                                             "Read": readState,
//                                             "Update": updateState,
//                                             "Delete": deleteState
//                                         });
//                                     } else {
//                                         // If doesn't exist, insert a new record (id will be generated)
//                                         output.push({
//                                             "RoleId": roleId,
//                                             "ParentModuleId": parentModuleId,
//                                             "isParentModuleActive": parentModuleStates[parentModule],
//                                             "SubModuleId": subModuleId,
//                                             "Create": createState,
//                                             "Read": readState,
//                                             "Update": updateState,
//                                             "Delete": deleteState
//                                         });
//                                     }
//                                 });
//                             }
//                         });

//                         // Step 3: Call the API to save the permissions
//                         apisaveRolePermission(output);  // Send the result to the API
//                     })
//                     .catch(function(error) {
//                         console.error(error);
//                     });
//             })
//             .catch(function(error) {
//                 console.error(error);
//             });
//     })
//     .catch(function(error) {
//         console.error(error);
//     });

// // Function to return the submodules for each parent
// function getSubModulesForParent(parentModule) {
//     switch(parentModule) {
//         case 'References':
//             return [
//                 "Airports", "Airlines", "GlobalRegion", "Country", "Region", "Province", "State", "City"
//             ];
//         case 'Transaction':
//             return [
//                 "FlightSchedule", "FlightCancelation", "FlightDelay"
//             ];
//         case 'Reports':
//             return [
//                 "RFlightSchedule", "ScheduleByAirline", "OTPReports"
//             ];
//         case 'UserMaintenance':
//             return [
//                 "UsersAccess", "AuditTrail"
//             ];
//         case 'Utilities':
//             return [
//                 "FlightSummary (from system)", "FlightSummary (from airlines)"
//             ];
//         default:
//             return [];
//     }
// }

// // Function to save role permissions via API
// function apisaveRolePermission(permissionsData) {
//     var apiUrl = '/api/serverscript/rolepermission/Save';
    
//     fetch(apiUrl, {
//      method: 'POST',
//      headers: {
//          'Content-Type': 'application/json'
//      },
//      body: JSON.stringify(permissionsData)
//  })
//  .then(response => {
//      if (!response.ok) {
//          throw new Error('Network response was not ok');
//      }
//      return response.json();
//  })
//  .then(data => {
//      console.log('Permission data saved successfully:', data);
//  })
//  .catch(error => {
//      console.error('Error saving permissions:', error);
//  });
// }



// const roleId = oRoleId.getText(); 

// // Step 1: Fetch existing role permissions
// var allRolesPermissions = {
//     parameters: {
//         "select": "id,RoleId,ParentModuleId,SubModuleId"  // Fetch relevant fields to identify existing permissions
//     }
// };

// apigetAllRolesPermissions(allRolesPermissions)
//     .then(function(existingPermissions) {
//         // Convert the existing permissions into a map for faster lookup
//         var existingPermissionsMap = new Map();
//         existingPermissions.forEach(permission => {
//             const key = `${permission.RoleId}-${permission.ParentModuleId}-${permission.SubModuleId}`;
//             existingPermissionsMap.set(key, permission.id);  // Map a unique key (RoleId + ParentModuleId + SubModuleId) to its ID
//         });

//         // Step 2: Fetch submodules and parent modules, and process them
//         var submoduleOpt = {
//             parameters: {
//                 "select": "id,Description"  // Fetch id and Description for submodules
//             }
//         };

//         apigetAllSubModuleId(submoduleOpt)
//             .then(function(response) {
//                 // Map submodule descriptions to their corresponding ids
//                 var subModuleMapping = {};
//                 response.forEach(function(item) {
//                     subModuleMapping[item.Description] = item.id;  // Map SubModuleDescription to SubModuleId
//                 });

//                 var options = {
//                     parameters: {
//                         "select": "id,Name"  // Select both id (ParentModuleId) and Name (ParentModuleName) for parent modules
//                     }
//                 };

//                 // Fetch ParentModuleIds and ParentModuleNames from the API
//                 apigetAllModuleId(options)
//                     .then(function(response) {
//                         var parentModuleMapping = {};
//                         response.forEach(function(item) {
//                             parentModuleMapping[item.Name] = item.id;  // Map ParentModuleName to ParentModuleId
//                         });

//                         // Define the parent and submodule descriptions
//                         var parentModuleName = [
//                             "References", "Transaction", "Reports", "UserMaintenance", "Utilities"
//                         ];

//                         var subModuleDescription = [
//                             "Airports", "Airlines", "GlobalRegion", "Country", "Region", "Province", "State", "City",
//                             "FlightSchedule", "FlightCancelation", "FlightDelay", "RFlightSchedule", "ScheduleByAirline", "OTPReports",
//                             "UsersAccess", "AuditTrail", "FlightSummary (from system)", "FlightSummary (from airlines)"
//                         ];

//                         var parentModules = [
//                             oReferencesSwitch.getState(),
//                             oTransactionSwitch.getState(),
//                             oReportsSwitch.getState(),
//                             oUserMaintenanceSwitch.getState(),
//                             oUtilitiesSwitch.getState()
//                         ];

//                         var subModules = [
//                             oAirportsCreateSwitch.getState(), oAirportsReadSwitch.getState(), oAirportsUpdateSwitch.getState(), oAirportsDeleteSwitch.getState(),
//                             oAirlinesCreateSwitch.getState(), oAirlinesReadSwitch.getState(), oAirlinesUpdateSwitch.getState(), oAirlinesDeleteSwitch.getState(),
//                             oGlobalRegionCreateSwitch.getState(), oGlobalRegionReadSwitch.getState(), oGlobalRegionUpdateSwitch.getState(), oGlobalRegionDeleteSwitch.getState(),
//                             oCountryCreateSwitch.getState(), oCountryReadSwitch.getState(), oCountryUpdateSwitch.getState(), oCountryDeleteSwitch.getState(),
//                             oRegionCreateSwitch.getState(), oRegionReadSwitch.getState(), oRegionUpdateSwitch.getState(), oRegionDeleteSwitch.getState(),
//                             oProvinceCreateSwitch.getState(), oProvinceReadSwitch.getState(), oProvinceUpdateSwitch.getState(), oProvinceDeleteSwitch.getState(),
//                             oStateCreateSwitch.getState(), oStateReadSwitch.getState(), oStateUpdateSwitch.getState(), oStateDeleteSwitch.getState(),
//                             oCityCreateSwitch.getState(), oCityReadSwitch.getState(), oCityUpdateSwitch.getState(), oCityDeleteSwitch.getState(),

//                             oFlightScheduleCreateSwitch.getState(), oFlightScheduleReadSwitch.getState(), oFlightScheduleUpdateSwitch.getState(), oFlightScheduleDeleteSwitch.getState(),
//                             oFlightCancelationCreateSwitch.getState(), oFlightCancelationReadSwitch.getState(), oFlightCancelationUpdateSwitch.getState(), oFlightCancelationDeleteSwitch.getState(),
//                             oFlightDelayCreateSwitch.getState(), oFlightDelayReadSwitch.getState(), oFlightDelayUpdateSwitch.getState(), oFlightDelayDeleteSwitch.getState(),

//                             oRFlightScheduleCreateSwitch.getState(), oRFlightScheduleReadSwitch.getState(), oRFlightScheduleUpdateSwitch.getState(), oRFlightScheduleDeleteSwitch.getState(),
//                             oScheduleByAirlineCreateSwitch.getState(), oScheduleByAirlineReadSwitch.getState(), oScheduleByAirlineUpdateSwitch.getState(), oScheduleByAirlineDeleteSwitch.getState(),
//                             oOtpReportsCreateSwitch.getState(), oOtpReportsReadSwitch.getState(), oOtpReportsUpdateSwitch.getState(), oOtpReportsDeleteSwitch.getState(),

//                             oUserAccessCreateSwitch.getState(), oUserAccessReadSwitch.getState(), oUserAccessUpdateSwitch.getState(), oUserAccessDeleteSwitch.getState(),
//                             oAuditTrailCreateSwitch.getState(), oAuditTrailReadSwitch.getState(), oAuditTrailUpdateSwitch.getState(), oAuditTrailDeleteSwitch.getState(),

//                             oMonthlyOTPSysCreateSwitch.getState(), oMonthlyOTPSysReadSwitch.getState(), oMonthlyOTPSysUpdateSwitch.getState(), oMonthlyOTPSysDeleteSwitch.getState(),
//                             oMonthlyOTPAirlinesCreateSwitch.getState(), oMonthlyOTPAirlinesReadSwitch.getState(), oMonthlyOTPAirlinesUpdateSwitch.getState(), oMonthlyOTPAirlinesDeleteSwitch.getState()
//                         ];

//                         var parentModuleStates = {
//                             References: oReferencesSwitch.getState(),
//                             Transaction: oTransactionSwitch.getState(),
//                             Reports: oReportsSwitch.getState(),
//                             UserMaintenance: oUserMaintenanceSwitch.getState(),
//                             Utilities: oUtilitiesSwitch.getState()
//                         };

//                         var output = [];
//                         var deleteIds = [];  // Array to store ids of the permissions that need to be deleted

//                         // Iterate over parent modules
//                         parentModuleName.forEach((parentModule) => {
//                             var parentModuleId = parentModuleMapping[parentModule];
//                             var parentModuleState = parentModuleStates[parentModule];

//                             // If the parent module state is false, prepare for deletion
//                             if (!parentModuleState) {
//                                 // Collect permissions to delete for this parent module and its submodules
//                                 var subModulesForCurrentParent = getSubModulesForParent(parentModule);

//                                 subModulesForCurrentParent.forEach((subModule) => {
//                                     var subModuleId = subModuleMapping[subModule];

//                                     // Construct a unique key for existing permissions comparison
//                                     const permissionKey = `${roleId}-${parentModuleId}-${subModuleId}`;

//                                     // Check if the permission exists in the existing permissions map
//                                     const existingId = existingPermissionsMap.get(permissionKey);

//                                     if (existingId) {
//                                         // Add the permission ID to the delete list
//                                         deleteIds.push(existingId);
//                                     }
//                                 });
//                             } else {
//                                 // Process the permissions for active parent module
//                                 var subModulesForCurrentParent = getSubModulesForParent(parentModule);

//                                 subModulesForCurrentParent.forEach((subModule) => {
//                                     var startIndex = subModuleDescription.indexOf(subModule) * 4;

//                                     // Get submodule id from the mapping
//                                     var subModuleId = subModuleMapping[subModule];

//                                     // Assign permission states directly from the subModules array
//                                     var createState = subModules[startIndex];
//                                     var readState = subModules[startIndex + 1];
//                                     var updateState = subModules[startIndex + 2];
//                                     var deleteState = subModules[startIndex + 3];

//                                     // Construct a unique key for existing permissions comparison
//                                     const permissionKey = `${roleId}-${parentModuleId}-${subModuleId}`;

//                                     // Check if the permission exists in the existing permissions map
//                                     const existingId = existingPermissionsMap.get(permissionKey);

//                                     if (existingId) {
//                                         // If exists, update the record with the existing id
//                                         output.push({
//                                             "id": existingId,
//                                             "RoleId": roleId,
//                                             "ParentModuleId": parentModuleId,
//                                             "isParentModuleActive": parentModuleState,
//                                             "SubModuleId": subModuleId,
//                                             "Create": createState,
//                                             "Read": readState,
//                                             "Update": updateState,
//                                             "Delete": deleteState
//                                         });
//                                     } else {
//                                         // If doesn't exist, insert a new record (id will be generated)
//                                         output.push({
//                                             "RoleId": roleId,
//                                             "ParentModuleId": parentModuleId,
//                                             "isParentModuleActive": parentModuleState,
//                                             "SubModuleId": subModuleId,
//                                             "Create": createState,
//                                             "Read": readState,
//                                             "Update": updateState,
//                                             "Delete": deleteState
//                                         });
//                                     }
//                                 });
//                             }
//                         });

//                         // Step 3: Call the API to delete permissions for false parent modules
//                         deletePermissions(deleteIds);

//                         // Step 4: Call the API to save the new and updated permissions
//                         savePermissions(output);  // Send the result to the API
//                     })
//                     .catch(function(error) {
//                         console.error(error);
//                     });
//             })
//             .catch(function(error) {
//                 console.error(error);
//             });
//     })
//     .catch(function(error) {
//         console.error(error);
//     });

// // Function to return the submodules for each parent
// function getSubModulesForParent(parentModule) {
//     switch(parentModule) {
//         case 'References':
//             return [
//                 "Airports", "Airlines", "GlobalRegion", "Country", "Region", "Province", "State", "City"
//             ];
//         case 'Transaction':
//             return [
//                 "FlightSchedule", "FlightCancelation", "FlightDelay"
//             ];
//         case 'Reports':
//             return [
//                 "RFlightSchedule", "ScheduleByAirline", "OTPReports"
//             ];
//         case 'UserMaintenance':
//             return [
//                 "UsersAccess", "AuditTrail"
//             ];
//         case 'Utilities':
//             return [
//                 "FlightSummary (from system)", "FlightSummary (from airlines)"
//             ];
//         default:
//             return [];
//     }
// }

// // Function to delete role permissions via API
// function deletePermissions(deleteIds) {
//     if (deleteIds.length === 0) return;

//     var apiUrl = '/api/serverscript/rolepermission/Delete';

//     fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ ids: deleteIds })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Permissions deleted successfully:', data);
//     })
//     .catch(error => {
//         console.error('Error deleting permissions:', error);
//     });
// }

// // Function to save role permissions via API
// function savePermissions(permissionsData) {
//     var apiUrl = '/api/serverscript/rolepermission/Save';

//     fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(permissionsData)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Permission data saved successfully:', data);
//     })
//     .catch(error => {
//         console.error('Error saving permissions:', error);
//     });
// }
// WORKING CODE END HERE




const roleId = oRoleId.getText(); 

// Step 1: Fetch existing role permissions
var allRolesPermissions = {
    parameters: {
        "select": "id,RoleId,ParentModuleId"  // Fetch relevant fields to identify existing permissions, excluding SubModuleId
    }
};

apigetAllRolesPermissions(allRolesPermissions)
    .then(function(existingPermissions) {
        // Convert the existing permissions into a map for faster lookup
        var existingPermissionsMap = new Map();
        existingPermissions.forEach(permission => {
            const key = `${permission.RoleId}-${permission.ParentModuleId}`;  // Modified key to exclude SubModuleId
            existingPermissionsMap.set(key, permission.id);  // Map a unique key (RoleId + ParentModuleId) to its ID
        });

        // Step 2: Fetch ParentModules, and process them
        var options = {
            parameters: {
                "select": "id,Name"  // Select both id (ParentModuleId) and Name (ParentModuleName) for parent modules
            }
        };

        // Fetch ParentModuleIds and ParentModuleNames from the API
        apigetAllModuleId(options)
            .then(function(response) {
                var parentModuleMapping = {};
                response.forEach(function(item) {
                    parentModuleMapping[item.Name] = item.id;  // Map ParentModuleName to ParentModuleId
                });

                // Define the parent modules
                var parentModuleName = [
                    "References", "Transaction", "Reports", "UserMaintenance", "Utilities"
                ];

                var parentModules = [
                    oReferencesSwitch.getState(),
                    oTransactionSwitch.getState(),
                    oReportsSwitch.getState(),
                    oUserMaintenanceSwitch.getState(),
                    oUtilitiesSwitch.getState()
                ];

                var parentModuleStates = {
                    References: oReferencesSwitch.getState(),
                    Transaction: oTransactionSwitch.getState(),
                    Reports: oReportsSwitch.getState(),
                    UserMaintenance: oUserMaintenanceSwitch.getState(),
                    Utilities: oUtilitiesSwitch.getState()
                };

                var output = [];
                var deleteIds = [];  // Array to store ids of the permissions that need to be deleted

                // Iterate over parent modules
                parentModuleName.forEach((parentModule) => {
                    var parentModuleId = parentModuleMapping[parentModule];
                    var parentModuleState = parentModuleStates[parentModule];

                    // If the parent module state is false, prepare for deletion
                    if (!parentModuleState) {
                        // Collect permissions to delete for this parent module
                        const permissionKey = `${roleId}-${parentModuleId}`;  // Construct key without SubModuleId

                        // Check if the permission exists in the existing permissions map
                        const existingId = existingPermissionsMap.get(permissionKey);

                        if (existingId) {
                            // Add the permission ID to the delete list
                            deleteIds.push(existingId);
                        }
                    } else {
                        // Process the permissions for active parent module
                        const permissionKey = `${roleId}-${parentModuleId}`;  // Construct key without SubModuleId

                        // Check if the permission exists in the existing permissions map
                        const existingId = existingPermissionsMap.get(permissionKey);

                        if (existingId) {
                            // If exists, update the record with the existing id
                            output.push({
                                "id": existingId,
                                "RoleId": roleId,
                                "ParentModuleId": parentModuleId,
                                "isParentModuleActive": parentModuleState
                            });
                        } else {
                            // If doesn't exist, insert a new record (id will be generated)
                            output.push({
                                "RoleId": roleId,
                                "ParentModuleId": parentModuleId,
                                "isParentModuleActive": parentModuleState
                            });
                        }
                    }
                });

                // Step 3: Call the API to delete permissions for false parent modules
                deletePermissions(deleteIds);

                // Step 4: Call the API to save the new and updated permissions
                savePermissions(output);  // Send the result to the API
            })
            .catch(function(error) {
                console.error(error);
            });
    })
    .catch(function(error) {
        console.error(error);
    });

// Function to delete role permissions via API
function deletePermissions(deleteIds) {
    if (deleteIds.length === 0) return;

    var apiUrl = '/api/serverscript/rolepermission/Delete';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ids: deleteIds })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
            // Use MessageToast with all Options
        sap.m.MessageToast.show(data.message, {
        duration: 3000,                  // default
        width: "15em",                   // default
        my: "center bottom",             // default
        at: "center bottom",             // default
        of: document,                    // default
        offset: "0 0",                   // default
        collision: "fit fit",            // default
        onClose: null,                   // default
        autoClose: true,                 // default
        animationTimingFunction: "ease", // default
        animationDuration: 1000          // default
        });
        // console.log('Permissions deleted successfully:', data);
    })
    .catch(error => {
        console.error('Error deleting permissions:', error);
    });
}

// Function to save role permissions via API
function savePermissions(permissionsData) {
    var apiUrl = '/api/serverscript/rolepermission/Save';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(permissionsData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // showToast();
            // Use MessageToast with all Options
    sap.m.MessageToast.show(data.message, {
        duration: 3000,                  // default
        width: "15em",                   // default
        my: "center bottom",             // default
        at: "center bottom",             // default
        of: document,                    // default
        offset: "0 0",                   // default
        collision: "fit fit",            // default
        onClose: null,                   // default
        autoClose: true,                 // default
        animationTimingFunction: "ease", // default
        animationDuration: 1000,         // default
        customClass: "myCustomToast"
    });

        // console.log('Permission data saved successfully:', data);
    })
    .catch(error => {
        console.error('Error saving permissions:', error);
    });
}
}