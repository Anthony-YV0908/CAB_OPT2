// if(sap.n){
//     sap.n.Shell.attachBeforeDisplay(function(startParams){
//     oRoleId.setText(startParams.data.id);
// var options = {
//     parameters: {
//         "where": JSON.stringify({ "RoleId": startParams.data.id })
//     }
// };

// apigetAllRolesPermissions(options)
//     .then(response => {
//         // Log the full response to inspect
//         // console.log('API Response:', response);

//         // Make sure the response is an array and has at least one object
//         if (Array.isArray(response) && response.length > 0) {
//             // Access the first object in the array (or choose the relevant one based on your logic)
//             const isParentModuleActive = response[0].isParentModuleActive;

//             // Log the value of isParentModuleActive
//             console.log(isParentModuleActive);

//             // Set the switch state
//             if (isParentModuleActive !== undefined) {
//                 oReferencesSwitch.setState(isParentModuleActive);
                            
                // const bState = oReferencesSwitch.getState();

                // if(bState == true){
                // oAirports.setVisible(true);
                // oAirlines.setVisible(true);
                // oGlobalRegion.setVisible(true);
                // oCountry.setVisible(true);
                // oRegion.setVisible(true);
                // oProvince.setVisible(true);
                // oState.setVisible(true);
                // oCity.setVisible(true);
                // }else{
                // oAirports.setVisible(false);
                // oAirlines.setVisible(false);
                // oGlobalRegion.setVisible(false);
                // oCountry.setVisible(false);
                // oRegion.setVisible(false);
                // oProvince.setVisible(false);
                // oState.setVisible(false);
                // oCity.setVisible(false);
                // }

//             } else {
//                 console.error("isParentModuleActive is missing or undefined in the first object");
//             }
//         } else {
//             console.error("API response is not an array or is empty");
//         }
//     })
//     .catch(function(error) {
//         console.error("API Error:", error); // Handle any error that occurred during the API call
//     });

// List of switches mapped to ParentModuleId values
// const switches = {
//     "c71c4ee3-a0e9-46c1-80db-0a78db33af13": oReferencesSwitch,
//     "ebb334ce-091e-46fa-ad58-07da0249167a": oTransactionSwitch,
//     "79333d76-b67b-4f36-863d-54114139cbf4": oReportsSwitch,
//     "43571883-eebb-494a-a6d4-967c5eb0962f": oUserMaintenanceSwitch,
//     "dcf6a6b2-092e-43a8-af8b-ae9fb7fc804b": oUtilitiesSwitch
// };

// // Prepare options for the API call
// var options = {
//     parameters: {
//         "where": JSON.stringify({ "RoleId": startParams.data.id })
//     }
// };

// apigetAllRolesPermissions(options)
//     .then(response => {
//         // Check if the response is an array and has at least one object
//         if (Array.isArray(response) && response.length > 0) {
//             // Loop through each entry in the response
//             response.forEach(permission => {
//                 const parentModuleId = permission.ParentModuleId;
//                 const isParentModuleActive = permission.isParentModuleActive;

//                 // Check if the parent module id is in the switches object
//                 if (switches[parentModuleId] !== undefined) {
//                     // Set the state for the parent module switch based on isParentModuleActive
//                     switches[parentModuleId].setState(isParentModuleActive);

//                     // Retrieve the state and log it to the console
//                     const bState = switches[parentModuleId].getState();
//                     console.log(`For ParentModuleId: ${parentModuleId}, Set state to: ${bState}`);
//                 } else {
//                     console.warn(`No switch found for ParentModuleId: ${parentModuleId}`);
//                 }
//             });
//         } else {
//             console.error("API response is not an array or is empty");
//         }
//     })
//     .catch(function(error) {
//         console.error("API Error:", error); // Handle any error that occurred during the API call
//     });
// List of switches mapped to ParentModuleId values and their child elements
// const modulesAndChildren = {
//     "c71c4ee3-a0e9-46c1-80db-0a78db33af13": {
//         switch: oReferencesSwitch,
//         children: [
//             oAirports, oAirlines, oGlobalRegion, oCountry, oRegion, oProvince, oState, oCity
//         ]
//     },
//     "ebb334ce-091e-46fa-ad58-07da0249167a": {
//         switch: oTransactionSwitch,
//         children: [
//             oFlightSchedule, oFlightCancelation, oFlightDelay
//         ]
//     },
//     "79333d76-b67b-4f36-863d-54114139cbf4": {
//         switch: oReportsSwitch,
//         children: [
//             oRFlightSchedule, oScheduleByAirline, oOtpReports
//         ]
//     },
//     "43571883-eebb-494a-a6d4-967c5eb0962f": {
//         switch: oUserMaintenanceSwitch,
//         children: [
//             oUserAccess, oAuditTrail
//         ]
//     },
//     "dcf6a6b2-092e-43a8-af8b-ae9fb7fc804b": {
//         switch: oUtilitiesSwitch,
//         children: [
//             oMonthlyOTPSys, oMonthlyOTPAirlines
//         ]
//     }
// };

// // Prepare options for the API call
// var options = {
//     parameters: {
//         "where": JSON.stringify({ "RoleId": startParams.data.id })
//     }
// };

// apigetAllRolesPermissions(options)
//     .then(response => {
//         // Check if the response is an array and has at least one object
//         if (Array.isArray(response) && response.length > 0) {
//             // Loop through each entry in the response
//             response.forEach(permission => {
//                 const parentModuleId = permission.ParentModuleId;
//                 const isParentModuleActive = permission.isParentModuleActive;

//                 // Check if the parent module id is in the modulesAndChildren object
//                 if (modulesAndChildren[parentModuleId] !== undefined) {
//                     const bState = isParentModuleActive; // State for the parent module

//                     // Set the state for the parent module switch
//                     modulesAndChildren[parentModuleId].switch.setState(bState);

//                     // Log the state of the parent module switch
//                     console.log(`For ParentModuleId: ${parentModuleId}, Set state to: ${bState}`);

//                     // Set the visibility of all child elements based on the parent module state
//                     modulesAndChildren[parentModuleId].children.forEach(child => {
//                         child.setVisible(bState); // If bState is true, visibility is true, else false
//                     });
//                 } else {
//                     console.warn(`No module found for ParentModuleId: ${parentModuleId}`);
//                 }
//             });
//         } else {
//             console.error("API response is not an array or is empty");
//         }
//     })
//     .catch(function(error) {
//         console.error("API Error:", error); // Handle any error that occurred during the API call
//     });
// const modulesAndPermissions = { 
//     "c71c4ee3-a0e9-46c1-80db-0a78db33af13": {
//         switch: oReferencesSwitch,
//         children: [
//             { child: oAirports, permissions: {
//                 Create: oAirportsCreateSwitch,
//                 Read: oAirportsReadSwitch,
//                 Update: oAirportsUpdateSwitch,
//                 Delete: oAirportsDeleteSwitch
//             }},
//             { child: oAirlines, permissions: {
//                 Create: oAirlinesCreateSwitch,
//                 Read: oAirlinesReadSwitch,
//                 Update: oAirlinesUpdateSwitch,
//                 Delete: oAirlinesDeleteSwitch
//             }},
//             { child: oGlobalRegion, permissions: {
//                 Create: oGlobalRegionCreateSwitch,
//                 Read: oGlobalRegionReadSwitch,
//                 Update: oGlobalRegionUpdateSwitch,
//                 Delete: oGlobalRegionDeleteSwitch
//             }},
//             { child: oCountry, permissions: {
//                 Create: oCountryCreateSwitch,
//                 Read: oCountryReadSwitch,
//                 Update: oCountryUpdateSwitch,
//                 Delete: oCountryDeleteSwitch
//             }},
//             { child: oRegion, permissions: {
//                 Create: oRegionCreateSwitch,
//                 Read: oRegionReadSwitch,
//                 Update: oRegionUpdateSwitch,
//                 Delete: oRegionDeleteSwitch
//             }},
//             { child: oProvince, permissions: {
//                 Create: oProvinceCreateSwitch,
//                 Read: oProvinceReadSwitch,
//                 Update: oProvinceUpdateSwitch,
//                 Delete: oProvinceDeleteSwitch
//             }},
//             { child: oState, permissions: {
//                 Create: oStateCreateSwitch,
//                 Read: oStateReadSwitch,
//                 Update: oStateUpdateSwitch,
//                 Delete: oStateDeleteSwitch
//             }},
//             { child: oCity, permissions: {
//                 Create: oCityCreateSwitch,
//                 Read: oCityReadSwitch,
//                 Update: oCityUpdateSwitch,
//                 Delete: oCityDeleteSwitch
//             }}
//         ]
//     },
//     "ebb334ce-091e-46fa-ad58-07da0249167a": {
//         switch: oTransactionSwitch,
//         children: [
//             { child: oFlightSchedule, permissions: {
//                 Create: oFlightScheduleCreateSwitch,
//                 Read: oFlightScheduleReadSwitch,
//                 Update: oFlightScheduleUpdateSwitch,
//                 Delete: oFlightScheduleDeleteSwitch
//             }},
//             { child: oFlightCancelation, permissions: {
//                 Create: oFlightCancelationCreateSwitch,
//                 Read: oFlightCancelationReadSwitch,
//                 Update: oFlightCancelationUpdateSwitch,
//                 Delete: oFlightCancelationDeleteSwitch
//             }},
//             { child: oFlightDelay, permissions: {
//                 Create: oFlightDelayCreateSwitch,
//                 Read: oFlightDelayReadSwitch,
//                 Update: oFlightDelayUpdateSwitch,
//                 Delete: oFlightDelayDeleteSwitch
//             }}
//         ]
//     },
//     "79333d76-b67b-4f36-863d-54114139cbf4": {
//         switch: oReportsSwitch,
//         children: [
//             { child: oRFlightSchedule, permissions: {
//                 Create: oRFlightScheduleCreateSwitch,
//                 Read: oRFlightScheduleReadSwitch,
//                 Update: oRFlightScheduleUpdateSwitch,
//                 Delete: oRFlightScheduleDeleteSwitch
//             }},
//             { child: oScheduleByAirline, permissions: {
//                 Create: oScheduleByAirlineCreateSwitch,
//                 Read: oScheduleByAirlineReadSwitch,
//                 Update: oScheduleByAirlineUpdateSwitch,
//                 Delete: oScheduleByAirlineDeleteSwitch
//             }},
//             { child: oOtpReports, permissions: {
//                 Create: oOtpReportsCreateSwitch,
//                 Read: oOtpReportsReadSwitch,
//                 Update: oOtpReportsUpdateSwitch,
//                 Delete: oOtpReportsDeleteSwitch
//             }}
//         ]
//     },
//     "43571883-eebb-494a-a6d4-967c5eb0962f": {
//         switch: oUserMaintenanceSwitch,
//         children: [
//             { child: oUserAccess, permissions: {
//                 Create: oUserAccessCreateSwitch,
//                 Read: oUserAccessReadSwitch,
//                 Update: oUserAccessUpdateSwitch,
//                 Delete: oUserAccessDeleteSwitch
//             }},
//             { child: oAuditTrail, permissions: {
//                 Create: oAuditTrailCreateSwitch,
//                 Read: oAuditTrailReadSwitch,
//                 Update: oAuditTrailUpdateSwitch,
//                 Delete: oAuditTrailDeleteSwitch
//             }}
//         ]
//     },
//     "dcf6a6b2-092e-43a8-af8b-ae9fb7fc804b": {
//         switch: oUtilitiesSwitch,
//         children: [
//             { child: oMonthlyOTPSys, permissions: {
//                 Create: oMonthlyOTPSysCreateSwitch,
//                 Read: oMonthlyOTPSysReadSwitch,
//                 Update: oMonthlyOTPSysUpdateSwitch,
//                 Delete: oMonthlyOTPSysDeleteSwitch
//             }},
//             { child: oMonthlyOTPAirlines, permissions: {
//                 Create: oMonthlyOTPAirlinesCreateSwitch,
//                 Read: oMonthlyOTPAirlinesReadSwitch,
//                 Update: oMonthlyOTPAirlinesUpdateSwitch,
//                 Delete: oMonthlyOTPAirlinesDeleteSwitch
//             }}
//         ]
//     }
// };

// // Prepare options for the API call
// var options = {
//     parameters: {
//         "where": JSON.stringify({ "RoleId": startParams.data.id })
//     }
// };

// apigetAllRolesPermissions(options)
//     .then(response => {
//         // Check if the response is an array and has at least one object
//         if (Array.isArray(response) && response.length > 0) {
//             // Loop through each entry in the response
//             response.forEach(permission => {
//                 const parentModuleId = permission.ParentModuleId;
//                 const isParentModuleActive = permission.isParentModuleActive;

//                 // Check if the parent module id is in the modulesAndPermissions object
//                 if (modulesAndPermissions[parentModuleId] !== undefined) {
//                     const bState = isParentModuleActive; // State for the parent module

//                     // Set the state for the parent module switch
//                     modulesAndPermissions[parentModuleId].switch.setState(bState);

//                     // Log the state of the parent module switch
//                     console.log(`For ParentModuleId: ${parentModuleId}, Set state to: ${bState}`);

//                     // Set the visibility of all child elements based on the parent module state
//                     modulesAndPermissions[parentModuleId].children.forEach(child => {
//                         // Set visibility of the child module based on the parent's state
//                         child.child.setVisible(bState); 

//                         // Iterate through the permissions for each child and set their states
//                         Object.keys(child.permissions).forEach(permissionName => {
//                             const permissionSwitch = child.permissions[permissionName];
//                             const permissionState = permissionSwitch.getState();
//                             console.log(`For Permission ${permissionName} of ${child.child.constructor.name}, state is: ${permissionState}`);
//                         });
//                     });
//                 } else {
//                     console.warn(`No module found for ParentModuleId: ${parentModuleId}`);
//                 }
//             });
//         } else {
//             console.error("API response is not an array or is empty");
//         }
//     })
//     .catch(function(error) {
//         console.error("API Error:", error); // Handle any error that occurred during the API call
//     });


// WORKING CODE HERE
// const modulesAndPermissions = { 
//     "c71c4ee3-a0e9-46c1-80db-0a78db33af13": {
//         switch: oReferencesSwitch,
//         children: [
//             { child: oAirports, subModuleId: "c8622062-a5bc-4869-9148-8b9f675ff9cc", permissions: {
//                 Create: oAirportsCreateSwitch,
//                 Read: oAirportsReadSwitch,
//                 Update: oAirportsUpdateSwitch,
//                 Delete: oAirportsDeleteSwitch
//             }},
//             { child: oAirlines, subModuleId: "7b6b7e59-4fbf-4ac0-b91e-049662800e56", permissions: {
//                 Create: oAirlinesCreateSwitch,
//                 Read: oAirlinesReadSwitch,
//                 Update: oAirlinesUpdateSwitch,
//                 Delete: oAirlinesDeleteSwitch
//             }},
//             { child: oGlobalRegion, subModuleId: "dc983f4b-9ef5-4646-885f-fc4d4bdb7605", permissions: {
//                 Create: oGlobalRegionCreateSwitch,
//                 Read: oGlobalRegionReadSwitch,
//                 Update: oGlobalRegionUpdateSwitch,
//                 Delete: oGlobalRegionDeleteSwitch
//             }},
//             { child: oCountry, subModuleId: "34004299-6aa7-432b-81fe-d54e8f55500b", permissions: {
//                 Create: oCountryCreateSwitch,
//                 Read: oCountryReadSwitch,
//                 Update: oCountryUpdateSwitch,
//                 Delete: oCountryDeleteSwitch
//             }},
//             { child: oRegion, subModuleId: "e83af29a-70da-4603-829e-c9e7acb14f47", permissions: {
//                 Create: oRegionCreateSwitch,
//                 Read: oRegionReadSwitch,
//                 Update: oRegionUpdateSwitch,
//                 Delete: oRegionDeleteSwitch
//             }},
//             { child: oProvince, subModuleId: "11b61dd3-54d6-4f13-a39d-c87cb2715db7", permissions: {
//                 Create: oProvinceCreateSwitch,
//                 Read: oProvinceReadSwitch,
//                 Update: oProvinceUpdateSwitch,
//                 Delete: oProvinceDeleteSwitch
//             }},
//             { child: oState, subModuleId: "5394a1eb-3ca6-4c37-b2f7-5899df8c0dd5", permissions: {
//                 Create: oStateCreateSwitch,
//                 Read: oStateReadSwitch,
//                 Update: oStateUpdateSwitch,
//                 Delete: oStateDeleteSwitch
//             }},
//             { child: oCity, subModuleId: "177732d2-b829-4477-bcb4-6f3e392b3eba", permissions: {
//                 Create: oCityCreateSwitch,
//                 Read: oCityReadSwitch,
//                 Update: oCityUpdateSwitch,
//                 Delete: oCityDeleteSwitch
//             }}
//         ]
//     },
//     "ebb334ce-091e-46fa-ad58-07da0249167a": {
//         switch: oTransactionSwitch,
//         children: [
//             { child: oFlightSchedule, subModuleId: "321be5ea-fedc-49af-95a6-98030fb277a3", permissions: {
//                 Create: oFlightScheduleCreateSwitch,
//                 Read: oFlightScheduleReadSwitch,
//                 Update: oFlightScheduleUpdateSwitch,
//                 Delete: oFlightScheduleDeleteSwitch
//             }},
//             { child: oFlightCancelation, subModuleId: "03e5a41f-5de3-4555-99eb-24549666a439", permissions: {
//                 Create: oFlightCancelationCreateSwitch,
//                 Read: oFlightCancelationReadSwitch,
//                 Update: oFlightCancelationUpdateSwitch,
//                 Delete: oFlightCancelationDeleteSwitch
//             }},
//             { child: oFlightDelay, subModuleId: "ffd51e68-bcbd-442c-b219-372a3cb47dad", permissions: {
//                 Create: oFlightDelayCreateSwitch,
//                 Read: oFlightDelayReadSwitch,
//                 Update: oFlightDelayUpdateSwitch,
//                 Delete: oFlightDelayDeleteSwitch
//             }}
//         ]
//     },
//     "79333d76-b67b-4f36-863d-54114139cbf4": {
//         switch: oReportsSwitch,
//         children: [
//             { child: oRFlightSchedule, subModuleId: "b4269f07-83d9-4f17-816a-b3af5d1541d1", permissions: {
//                 Create: oRFlightScheduleCreateSwitch,
//                 Read: oRFlightScheduleReadSwitch,
//                 Update: oRFlightScheduleUpdateSwitch,
//                 Delete: oRFlightScheduleDeleteSwitch
//             }},
//             { child: oScheduleByAirline, subModuleId: "0d8e3e50-6202-4653-8dcf-d03ca0956e2b", permissions: {
//                 Create: oScheduleByAirlineCreateSwitch,
//                 Read: oScheduleByAirlineReadSwitch,
//                 Update: oScheduleByAirlineUpdateSwitch,
//                 Delete: oScheduleByAirlineDeleteSwitch
//             }},
//             { child: oOtpReports, subModuleId: "c9d0df8c-5f97-4daf-8b77-4cc5f90bd3a9", permissions: {
//                 Create: oOtpReportsCreateSwitch,
//                 Read: oOtpReportsReadSwitch,
//                 Update: oOtpReportsUpdateSwitch,
//                 Delete: oOtpReportsDeleteSwitch
//             }}
//         ]
//     },
//     "43571883-eebb-494a-a6d4-967c5eb0962f": {
//         switch: oUserMaintenanceSwitch,
//         children: [
//             { child: oUserAccess, subModuleId: "5edfb0bc-e40a-4e08-97f3-8565d0905d88", permissions: {
//                 Create: oUserAccessCreateSwitch,
//                 Read: oUserAccessReadSwitch,
//                 Update: oUserAccessUpdateSwitch,
//                 Delete: oUserAccessDeleteSwitch
//             }},
//             { child: oAuditTrail, subModuleId: "a56e1101-5668-4e3a-9682-743cdc30b61b", permissions: {
//                 Create: oAuditTrailCreateSwitch,
//                 Read: oAuditTrailReadSwitch,
//                 Update: oAuditTrailUpdateSwitch,
//                 Delete: oAuditTrailDeleteSwitch
//             }}
//         ]
//     },
//     "dcf6a6b2-092e-43a8-af8b-ae9fb7fc804b": {
//         switch: oUtilitiesSwitch,
//         children: [
//             { child: oMonthlyOTPSys, subModuleId: "3f1c4c17-221c-4a99-ae90-52f005c90d48", permissions: {
//                 Create: oMonthlyOTPSysCreateSwitch,
//                 Read: oMonthlyOTPSysReadSwitch,
//                 Update: oMonthlyOTPSysUpdateSwitch,
//                 Delete: oMonthlyOTPSysDeleteSwitch
//             }},
//             { child: oMonthlyOTPAirlines, subModuleId: "050e911f-6681-4a31-8c7f-89687cf464e9", permissions: {
//                 Create: oMonthlyOTPAirlinesCreateSwitch,
//                 Read: oMonthlyOTPAirlinesReadSwitch,
//                 Update: oMonthlyOTPAirlinesUpdateSwitch,
//                 Delete: oMonthlyOTPAirlinesDeleteSwitch
//             }}
//         ]
//     },
//     // Add similar configurations for other modules...
// };

// var options = {
//     parameters: {
//         "where": JSON.stringify({ "RoleId": startParams.data.id })
//     }
// };

// apigetAllRolesPermissions(options)
//     .then(response => {
//         // Check if the response is an array and has at least one object
//         if (Array.isArray(response) && response.length > 0) {
//             // Loop through each entry in the response
//             response.forEach(permission => {
//                 const parentModuleId = permission.ParentModuleId;
//                 const subModuleId = permission.SubModuleId;
//                 const isParentModuleActive = permission.isParentModuleActive;

//                 // Check if the parent module id exists in the modulesAndPermissions object
//                 if (modulesAndPermissions[parentModuleId] !== undefined) {
//                     const parentModule = modulesAndPermissions[parentModuleId];
//                     const bState = isParentModuleActive; // State for the parent module

//                     // Set the state for the parent module switch
//                     parentModule.switch.setState(bState);

//                     // Log the state of the parent module switch
//                     // console.log(`For ParentModuleId: ${parentModuleId}, Set state to: ${bState}`);

//                     // Loop through each child (submodule) in the parent module
//                     parentModule.children.forEach(child => {
//                         // Set visibility of the child module based on the parent's state
//                         if (child.subModuleId === subModuleId) {
//                             // Set the visibility of the submodule
//                             child.child.setVisible(bState);

//                             // Set the state for each permission (Create, Read, Update, Delete) for this submodule
//                             Object.keys(child.permissions).forEach(permissionName => {
//                                 const permissionSwitch = child.permissions[permissionName];

//                                 // Fetch the permission state from the API response
//                                 const permissionState = permission[permissionName] === true; // Convert to boolean

//                                 // Set the permission state dynamically
//                                 permissionSwitch.setState(permissionState);
//                                 // console.log(`For Permission ${permissionName} of SubModuleId: ${subModuleId}, state set to: ${permissionState}`);
//                             });
//                         }
//                     });
//                 } else {
//                     console.warn(`No module found for ParentModuleId: ${parentModuleId}`);
//                 }
//             });
//         } else {
//             console.error("API response is not an array or is empty");
//         }
//     })
//     .catch(function(error) {
//         console.error("API Error:", error); // Handle any error that occurred during the API call
//     });
//     });
// }


// if (sap.n) {
//     sap.n.Shell.attachBeforeDisplay(function (startParams) {
//         oRoleId.setText(startParams.data.id);  // Set the role ID in the UI

//         // Define the parent modules (with no children)
//         const modulesAndPermissions = {
//             "c71c4ee3-a0e9-46c1-80db-0a78db33af13": {
//                 switch: oReferencesSwitch
//             },
//             "ebb334ce-091e-46fa-ad58-07da0249167a": {
//                 switch: oTransactionSwitch
//             },
//             "79333d76-b67b-4f36-863d-54114139cbf4": {
//                 switch: oReportsSwitch
//             },
//             "43571883-eebb-494a-a6d4-967c5eb0962f": {
//                 switch: oUserMaintenanceSwitch
//             },
//             "dcf6a6b2-092e-43a8-af8b-ae9fb7fc804b": {
//                 switch: oUtilitiesSwitch
//             },
//             // Add similar configurations for other modules...
//         };

//         // Reset all switch states to false when switching roles
//         Object.keys(modulesAndPermissions).forEach(moduleId => {
//             const parentModule = modulesAndPermissions[moduleId];
//             parentModule.switch.setState(false); // Deactivate the switch for all modules
//         });

//         // Option with the current role ID
//         var apiUrl = '/api/serverscript/rolepermission/Get';

//             fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ "RoleId": startParams.data.id })
//             })

//         // Fetch the permissions for the role
//             .then(response => {
//                 // Check if the response is an array and has at least one object
//                 if (Array.isArray(response) && response.length > 0) {
//                     // Loop through each permission in the response
//                     response.forEach(permission => {
//                         const roleId = permission.RoleId;
//                         const parentModuleId = permission.ParentModuleId;
//                         const isParentModuleActive = permission.isParentModuleActive;

//                         // Log for debugging
//                         // console.log("Checking permission:", permission);
//                         // console.log("RoleId from DB:", roleId);
//                         // console.log("Current RoleId:", startParams.data.id);
//                         // console.log("ParentModuleId:", parentModuleId);
//                         // console.log("isParentModuleActive:", isParentModuleActive);

//                         // Ensure that the permission is for the current role and that isParentModuleActive is true
//                         if (roleId === startParams.data.id && isParentModuleActive === true) {
//                             // Check if the parent module exists in the modulesAndPermissions object
//                             if (modulesAndPermissions[parentModuleId]) {
//                                 const parentModule = modulesAndPermissions[parentModuleId];

//                                 // Only set the state to 'true' for active parent modules
//                                 parentModule.switch.setState(true); // Activate the switch for this role
//                                 // console.log(`For ParentModuleId: ${parentModuleId}, Set state to: true`);
//                             } else {
//                                 console.warn(`No module found for ParentModuleId: ${parentModuleId}`);
//                             }
//                         }
//                     });
//                 } else {
//                     console.error("API response is not an array or is empty");
//                 }
//             })
//             .catch(function (error) {
//                 console.error("API Error:", error); // Handle any errors during the API call
//             });
//     });
// }
// WORKING CODE END HERE


if (sap.n) {
    sap.n.Shell.attachBeforeDisplay(function (startParams) {
        oRoleId.setText(startParams.data.id);  // Set the role ID in the UI

        // Define the parent modules (with no children)
        const modulesAndPermissions = {
            "c71c4ee3-a0e9-46c1-80db-0a78db33af13": {
                switch: oReferencesSwitch
            },
            "ebb334ce-091e-46fa-ad58-07da0249167a": {
                switch: oTransactionSwitch
            },
            "79333d76-b67b-4f36-863d-54114139cbf4": {
                switch: oReportsSwitch
            },
            "43571883-eebb-494a-a6d4-967c5eb0962f": {
                switch: oUserMaintenanceSwitch
            },
            "dcf6a6b2-092e-43a8-af8b-ae9fb7fc804b": {
                switch: oUtilitiesSwitch
            },
            // Add similar configurations for other modules...
        };

        // Reset all switch states to false when switching roles
        Object.keys(modulesAndPermissions).forEach(moduleId => {
            const parentModule = modulesAndPermissions[moduleId];
            parentModule.switch.setState(false); // Deactivate the switch for all modules
        });

        // Option with the current role ID
        var apiUrl = '/api/serverscript/rolepermission/Get';

        // Fetch permissions from the backend
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "RoleId": startParams.data.id })
        })
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            // Check if the response has data
            if (data && Array.isArray(data.data) && data.data.length > 0) {
                // Loop through each permission in the response
                data.data.forEach(permission => {
                    const roleId = permission.RoleId;
                    const parentModuleId = permission.ParentModuleId;
                    const isParentModuleActive = permission.isParentModuleActive;

                    // Ensure that the permission is for the current role and that isParentModuleActive is true
                    if (roleId === startParams.data.id && isParentModuleActive === true) {
                        // Check if the parent module exists in the modulesAndPermissions object
                        if (modulesAndPermissions[parentModuleId]) {
                            const parentModule = modulesAndPermissions[parentModuleId];

                            // Only set the state to 'true' for active parent modules
                            parentModule.switch.setState(true); // Activate the switch for this role
                        } else {
                            console.warn(`No module found for ParentModuleId: ${parentModuleId}`);
                        }
                    }
                });
            } else {
                console.error("API response is not an array or is empty");
            }
        })
        .catch(function (error) {
            console.error("API Error:", error); // Handle any errors during the API call
        });
    });
}

