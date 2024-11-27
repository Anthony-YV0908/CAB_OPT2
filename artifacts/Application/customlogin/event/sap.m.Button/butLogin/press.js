let logonid = inLoginTypes.getSelectedKey() || 'local';
let logonType = ModelData.FindFirst(formLogons, 'id', logonid);

inLoginName.setValueState();
inLoginPassword.setValueState();

let rec = {
    username: inLoginName.getValue().toLowerCase(),
    password: inLoginPassword.getValue(),
    logonid: logonid
};

// Custom Login App - Mobile Client
if (isMobile) {
    AppCache.LogonCustom(rec);
    inLoginName.setValue();
    inLoginPassword.setValue();
    return;
}

if (inLoginName.getVisible() && !rec.username) {
    if (!rec.username) inLoginName.setValueState('Error');
    return;
}

if (inLoginPassword.getVisible() && !rec.password) {
    if (!rec.password) inLoginPassword.setValueState('Error');
    return;
}

// Logon local
if (logonid === 'local') {
    logonLocal(rec);
    return;
}

switch (logonType.type) {

    case 'sap':
        logonSAP(rec, logonType);       
        break;

    case 'azure-bearer':
        AppCacheLogonAzure.Logon(logonType);
        break;

    case 'saml':
        logonSAML(logonType);
        break;

    case 'ldap':
        logonLDAP(rec, logonType);
        break;

    case 'oauth2':
        logonOauth2(logonType);
        break;

    case 'openid-connect':
        logonOpenIDConnect(logonType);
        break;

    default:
        console.error('Unhandled logon type');
        break;

}

if (sap.n) {
    sap.n.Planet9.function({
        id: "AuditLog",
        method: "Save",
        data: {
            dateStart: Date.now(),
            dateEnd: Date.now(),
            changedBy: "System",
            content: JSON.stringify({ name: "customlogin" }),
            objectKey: "f10b0336-fd6a-44ba-a26b-e71f3c6aeffe",
            objectName: "butLogin",
            objectType: "sap.m.Button",
            action: "Interaction"
        },
        success: function(data) {
            // Handle success
        },
        error: function(data) {
            // Handle error
        }
    });
};