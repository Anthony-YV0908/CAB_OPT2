let fieldCatalog = [];

fieldCatalog.push({ name: "UserId", label: "USER ID", type: "text"});
fieldCatalog.push({ name: "FirstName", label: "First Name", type: "text"});
fieldCatalog.push({ name: "MiddleName", label: "Middle Name", type: "text" });
fieldCatalog.push({ name: "LastName", label: "Last Name", type: "text" });
fieldCatalog.push({ name: "Suffix", label: "Suffix", type: "text" });
fieldCatalog.push({ name: "UserName", label: "User Name ", type: "text" });
fieldCatalog.push({ name: "ContactNumber", label: "Contact Number", type: "text" });
fieldCatalog.push({ name: "EmailAddress", label: "Email Address", type: "text" });
fieldCatalog.push({ name: "UserRole", label: "User Role", type: "text" });
fieldCatalog.push({ name: "CreationUserId", label: "Creation User Id", type: "Bigint" });
fieldCatalog.push({ name: "CreationTime", label: "Creation Time", type: "Timestamp With Time Zone" });
fieldCatalog.push({ name: "LastModifierUserId", label: "Last Modifier User Id", type: "Bigint" });
fieldCatalog.push({ name: "LastModificationTime", label: "Last Modification Time", type: "Timestamp With Time Zone" });
fieldCatalog.push({ name: "DeleterUserId", label: "Deleter User Id", type: "Bigint" });
fieldCatalog.push({ name: "DeletionTime", label: "Deletion Time", type: "Timestamp With Time Zone" });
fieldCatalog.push({ name: "IsDeleted", label: "Is Deleted", type: "Smallint" });
fieldCatalog.push({ name: "Password", label: "Password", type: "text" });
fieldCatalog.push({ name: "UserGender", label: "User Gender", type: "text" });
fieldCatalog.push({ name: "IsNewUser", label: "Is New User", type: "Bigint" });
fieldCatalog.push({ name: "ReqToChangePassword", label: "Req To Change Password", type: "Bigint" });
fieldCatalog.push({ name: "IsLockedOut", label: "Is Locked Out", type: "Bigint" });
fieldCatalog.push({ name: "IsActive", label: "Is Active", type: "Bigint" });
fieldCatalog.push({ name: "PRAOAirportCode", label: "PRAO Airport Code", type: "text" });
fieldCatalog.push({ name: "PRAOStartDate", label: "PRAO Start Date", type: "text" });
fieldCatalog.push({ name: "PRAOEndDate", label: "PRAO End Date", type: "text" });
fieldCatalog.push({ name: "PRAOBatch", label: "PRAO Batch", type: "Bigint" });
fieldCatalog.push({ name: "PRAORemarks", label: "PRAO Remarks", type: "text" });
fieldCatalog.push({ name: "AirlineCode", label: "Airline Code", type: "text" });
fieldCatalog.push({ name: "OTP", label: "OTP", type: "text" });
result.data = fieldCatalog;

complete();
