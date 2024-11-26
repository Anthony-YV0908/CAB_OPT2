

if (sap.n) {
    sap.n.Planet9.function({
        id: "AuditLog",
        method: "Save",
        data: {
            dateStart: Date.now(),
            dateEnd: Date.now(),
            changedBy: "System",
            content: JSON.stringify({ name: "planet9_custom_login" }),
            objectKey: "b6f4a550-cce9-48a2-933c-f25582260ae6",
            objectName: "inLoginPassword",
            objectType: "sap.m.Input",
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

if (sap.n) {
    sap.n.Planet9.function({
        id: "AuditLog",
        method: "Save",
        data: {
            dateStart: Date.now(),
            dateEnd: Date.now(),
            changedBy: "System",
            content: JSON.stringify({ name: "planet9_custom_login" }),
            objectKey: "b6f4a550-cce9-48a2-933c-f25582260ae6",
            objectName: "inLoginPassword",
            objectType: "sap.m.Input",
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