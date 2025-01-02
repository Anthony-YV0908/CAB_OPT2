if (sap.n) {
    sap.n.Shell.attachBeforeDisplay(function(startParams) {
        const userId = AppCache.userInfo.id; // Assuming you have the user ID from the AppCache

        var apiUrl = '/api/serverscript/getuserrole/Send'; // Your API URL

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ UserId: userId }) // Send UserId in the request body
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data successfully received:', data); // Log the response data

            if (data && data.data) {
                // Handle the data received from the backend (groupedResult)
                console.log('Processed data:', data.data);

                // Iterate over each user and their ParentModules
                data.data.forEach(user => {
                    user.ParentModules.forEach(module => {
                        if (module.ParentName === "References" && module.isActive === 1) {
                            oReferences.setVisible(true);
                        }else if(AppCache.userInfo.username === "admin"){
                            oReferences.setVisible(true);
                        }

                        if (module.ParentName === "Transaction" && module.isActive === 1) {
                            oTransaction.setVisible(true);

                        }else if(AppCache.userInfo.username === "admin"){
                            oTransaction.setVisible(true);
                        }

                        if (module.ParentName === "Reports" && module.isActive === 1) {
                            oReports.setVisible(true);

                        }else if(AppCache.userInfo.username === "admin"){
                            oReports.setVisible(true);
                        }

                        if (module.ParentName === "UserMaintenance" && module.isActive === 1) {
                            oUserMaintenance.setVisible(true);

                        }else if(AppCache.userInfo.username === "admin"){
                            oUserMaintenance.setVisible(true);
                        }

                        if (module.ParentName === "Utilities" && module.isActive === 1) {
                            oUtilities.setVisible(true);

                        }else if(AppCache.userInfo.username === "admin"){
                            oUtilities.setVisible(true);
                        }
                    });
                });
            } else {
                console.error('No data found:', data.message);
            }
        })
        .catch(error => {
            console.error('Error in sending data:', error);
        });
    });
}


// if (sap.n) {
//     sap.n.Shell.attachBeforeDisplay(function(startParams) {
//        oAdminDashboard.setVisible(true);
//        oReferences.setVisible(true);
//        oTransaction.setVisible(true);
//        oReports.setVisible(true);
//        oUserMaintenance.setVisible(true);
//        oUtilities.setVisible(true);
//     });
// }

