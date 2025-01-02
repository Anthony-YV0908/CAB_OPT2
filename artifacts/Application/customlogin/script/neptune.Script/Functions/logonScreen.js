let logonScreen = {
    smtpVerified: false,
    isExternal: false,
    sapData: undefined,

    getLogonTypes: function () {
        let query = '';

        // From Browser
        if (location.pathname.toLowerCase().indexOf('/launchpad/') > -1) {
            let path = location.pathname.split('/');
            query = '?launchpad=' + path[path.length - 1];
        }

        $.ajax({
            type: 'GET',
            url: '/user/logon/types' + query,
            success: function (data) {
                logonScreen.setSettings(data);
            },
            error: function (result, status) {

            }
        });
    },

    setSettings: function (data) {
        data.logonTypes.sort(sort_by('name', false));

        logonScreen.smtpVerified = data.showForgotPassword;

        // If SMTP is verified -> Show forgotpassword
        if (logonScreen.smtpVerified && !isMobile) {
            linkForgot.setVisible(true);
        } else {
            linkForgot.setVisible(false);
        }

        // External Registration of Users 
        if (data.launchpadIsExternal) logonScreen.isExternal = true;

        // Logon Types
        let idps = [];

        // Add Local Login
        if (!data.disableLocalAuth) {
            inLoginTypes.addItem(new sap.ui.core.Item({
                key: 'local',
                text: 'Local'
            }));
        }

        // Add Other Login 
        data.logonTypes.forEach(function (item) {
            if (!item.show) return;

            switch (item.type) {
                case 'saml':
                case 'ldap':
                case 'azure-bearer':
                case 'oauth2':
                case 'openid-connect':
                case 'sap':
                    logonScreen.addFormLogon(item);
                    break;
            }
        });

        // Set Default Selected 
        let selectedLoginType = localStorage.getItem('selectedLoginType');

        if (data.defaultLoginIDP) {
            data.logonTypes.forEach(function (item) {
                if (data.defaultLoginIDP === item.id) inLoginTypes.setSelectedKey(item.id);
            });
        } else if (selectedLoginType) {
            inLoginTypes.setSelectedKey(selectedLoginType);
        } else {
            inLoginTypes.setSelectedKey('local');
            if (data.disableLocalAuth) {
                inLoginTypes.setSelectedItem(inLoginTypes.getItems()[0]);
            } else {
                inLoginTypes.setSelectedKey('local');
            }
        }

        // Set hide/show username/password
        logonScreen.setInputFields();


        // Get System Name/Description 
        if (data.settings.name) txtLoginSubTitle1.setText(data.settings.name);
        if (data.settings.description) txtLoginSubTitle2.setText(data.settings.description);

        // Launchpad Config 
        if (data.settingsLaunchpad && data.settingsLaunchpad.config) {
            if (data.settingsLaunchpad.config.hideLoginSelection) inLoginTypes.setVisible(false);
            if (data.settingsLaunchpad.config.loginTitle) txtLoginSubTitle1.setText(data.settingsLaunchpad.config.loginTitle);
            if (data.settingsLaunchpad.config.loginSubTitle) txtLoginSubTitle2.setText(data.settingsLaunchpad.config.loginSubTitle);
        }

        // Background Image 
        if (data.customizing.length === 1) {
            if (data.customizing[0].loginImage) {
                document.documentElement.style.setProperty('--backgroundImage', 'url(' + data.customizing[0].loginImage + ')');
            }
        }

        // Customizing
        if (data.customizing.length === 1) {

            // Background Color     
            setTimeout(function () {
                if (data.customizing[0].loginBackgroundColor) {
                    let style = document.createElement('style');
                    style.innerHTML = '.nepPanLogon { background-color: ' + data.customizing[0].loginBackgroundColor + ' !important}' + '.sapUiTheme-sap_fiori_3_dark .nepPanLogon { background-color: ' +
                        data.customizing[0].loginBackgroundColor + ' !important}' +
                        document.head.appendChild(style);
                }
            }, 200);

            // Texts 
            if (data.customizing[0].txtLogin1Enable) {
                panLinks.setVisible(true);
                linkLoginText1.setText(data.customizing[0].txtLogin1Label);
                linkLoginText1.setVisible(true);
                text1 = data.customizing[0].txtLogin1;
            }

            if (data.customizing[0].txtLogin2Enable) {
                panLinks.setVisible(true);
                linkLoginText2.setText(data.customizing[0].txtLogin2Label);
                linkLoginText2.setVisible(true);
                linkLoginSep1.setVisible(true);
                text2 = data.customizing[0].txtLogin2;
            }

            if (data.customizing[0].txtLogin3Enable) {
                panLinks.setVisible(true);
                linkLoginText3.setText(data.customizing[0].txtLogin3Label);
                linkLoginText3.setVisible(true);
                linkLoginSep2.setVisible(true);
                text3 = data.customizing[0].txtLogin3;
            }
        }

        // Call Custom Settings 
        setSettingsCustom(data);
    },

    setInputFields: function () {

        let logonid = inLoginTypes.getSelectedKey() || 'local';

        localStorage.setItem('selectedLoginType', logonid);

        linkLogoff.setVisible(false);
        linkCode.setVisible(false);
        linkForgot.setVisible(false);

        // Logon local
        if (logonid === 'local' || logonid == 'sap') {
            inLoginName.setVisible(true);
            inLoginPassword.setVisible(true);
            if (logonScreen.isExternal) linkCode.setVisible(true);
            if (logonScreen.smtpVerified && !isMobile) linkForgot.setVisible(true);
            localStorage.removeItem('p9logonData');
            return;
        }        

        // Logon others
        let logonType = ModelData.FindFirst(formLogons, 'id', logonid);
        localStorage.setItem('p9logonData', JSON.stringify(logonType));

        switch (logonType.type) {

            case 'azure-bearer':
            case 'openid-connect':
                linkLogoff.setVisible(true);
                inLoginName.setVisible(false);
                inLoginPassword.setVisible(false);
                break;

            case 'saml':
                inLoginName.setVisible(false);
                inLoginPassword.setVisible(false);
                break;

            case 'oauth2':
                inLoginName.setVisible(false);
                inLoginPassword.setVisible(false);
                break;

            default:
                inLoginName.setVisible(true);
                inLoginPassword.setVisible(true);
                break;

        }
    },

    addFormLogon: function (data) {
        formLogons.push(data);

        inLoginTypes.addItem(new sap.ui.core.Item({
            key: data.id,
            text: data.name
        }));

        inLoginTypes.setVisible(true);
    },

    requestActivationCode: function (rec) {
        const url = isMobile ? AppCache.Url : '';
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: url + '/user/activation',
            data: JSON.stringify(rec),
            success: function (data) {
                jQuery.sap.require('sap.m.MessageToast');
                sap.m.MessageToast.show(data.status);
            },
            error: function (result, status) {
                jQuery.sap.require('sap.m.MessageToast');
                sap.m.MessageToast.show(result.responseJSON.status);
            }
        });
    },


forgotPassword: function () {
    // Set the busy indicator size to "Auto"
    oApp.setBusyIndicatorDelay(0);
    oApp.setBusy(true);

  // Step 2: Send the request to trigger password reset
  $.ajax({
    type: 'POST',
    contentType: 'application/json',
    url: '/user/forgot/generate?launchpad=cab_otp',
    data: JSON.stringify({
      username: inForgotUsername.getValue().toLowerCase()
    }),
    success: function (data) {
      // Step 3: Show the success message once the password reset request is processed
      

      // Step 4: After 300ms, disable the busy state of the app and re-enable the form
      setTimeout(function () {
        // Disable the busy state of the app
        oApp.setBusyIndicatorDelay(0);
        oApp.setBusy(false);

        // Show the login form and hide the forgot password form
        formLogin.setVisible(true);
        formForgot.setVisible(false);
        sap.m.MessageToast.show('A password reset link has been sent to the email address connected with the account');
      }, 3000);
    },
    error: function (xhr, status, error) {
      // Step 5: Handle error scenario (e.g., invalid username, server error, etc.)
      console.error('Error during password reset request:', error);
      sap.m.MessageToast.show('Error processing the password reset request');

      // Step 6: Clear the busy state and re-enable the button in case of error
      oApp.setBusy(false);
      inForgotUsername.setEnabled(true);  // Re-enable the username input field

      // Optionally, show an error message or log the user out, etc.
    }
  });
},





    resetSapPassword: function ({detail, path}) {
        if (inNewPassword.getValue() !== inNewPassword2.getValue()) {
            sap.m.MessageToast.show('Passwords doesn\'t match!');
        } else if (!inNewPassword.getValue()) {
            sap.m.MessageToast.show('Please provide a password');
        } else {
            oApp.setBusy(true);
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: `/user/logon/sap/${path}`,
                data: JSON.stringify({
                    detail,
                    password: inNewPassword.getValue()
                }),
                success: function (data) {
                    oApp.setBusy(false);
                    if (data.status === 'UpdatePassword') {
                        jQuery.sap.require('sap.m.MessageToast');
                        sap.m.MessageToast.show(data.message);
                        inNewPassword.setValueState('Error');
                        inNewPassword2.setValueState('Error');
                    } else {
                        logonScreen.sapData = undefined;
                        location.reload();
                    }
                },
                error: function (result, status) {
                    oApp.setBusy(false);

                    jQuery.sap.require('sap.m.MessageBox');
                    sap.m.MessageBox.show(result.responseJSON.status, {
                        title: 'Error',
                        icon: 'ERROR',
                        actions: ['CLOSE'],
                        onClose: function () { }
                    });

                    inNewPassword.setValueState('Error');
                    inNewPassword2.setValueState('Error');
                }
            });
        }
    },

    resetPassword: function () {
        if (logonScreen.sapData) {
            return logonScreen.resetSapPassword(logonScreen.sapData); 
        }

        const url = new URL(location.href);
        const token = url.searchParams.get('token');
        if (!inNewPassword.getValue()) {
            sap.m.MessageToast.show('Please provide a password');
            inNewPassword.setValueState('Error');
            inNewPassword.setValueStateText('Please provide a password');
        } 
        else if (!inNewPassword2.getValue()) {
            sap.m.MessageToast.show('Please provide a repeat password');
            inNewPassword2.setValueState('Error');
            inNewPassword2.setValueStateText('Please provide a repeat password');
        } 
        else if (inNewPassword.getValue().length < 12 || inNewPassword.getValue().length > 16) {
            sap.m.MessageToast.show('Password must be between 12 and 16 characters');
            inNewPassword.setValueState('Error');
            inNewPassword.setValueStateText('Password must be between 12 and 16 characters');
        } 
        else if (!/[A-Z]/.test(inNewPassword.getValue())) {
            sap.m.MessageToast.show('Password must contain at least one uppercase letter');
            inNewPassword.setValueState('Error');
            inNewPassword.setValueStateText('Password must contain at least one uppercase letter');
        } 
        else if (!/[a-z]/.test(inNewPassword.getValue())) {
            sap.m.MessageToast.show('Password must contain at least one lowercase letter');
            inNewPassword.setValueState('Error');
            inNewPassword.setValueStateText('Password must contain at least one lowercase letter');
        } 
        else if (!/\d/.test(inNewPassword.getValue())) {
            sap.m.MessageToast.show('Password must contain at least one number');
            inNewPassword.setValueState('Error');
            inNewPassword.setValueStateText('Password must contain at least one number');
        } 
        else if (!/[!@#$%^&*]/.test(inNewPassword.getValue())) {
            sap.m.MessageToast.show('Password must contain at least one special character');
            inNewPassword.setValueState('Error');
            inNewPassword.setValueStateText('Password must contain at least one special character');
        } 
        else if (inNewPassword.getValue() !== inNewPassword2.getValue()) {
            sap.m.MessageToast.show('Passwords doesn\'t match');
            inNewPassword.setValueState('Error');
            inNewPassword2.setValueState('Error');
            inNewPassword.setValueStateText('Passwords doesn\'t match');
            inNewPassword2.setValueStateText('Passwords doesn\'t match');
        } else {
            oApp.setBusy(true);
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: '/user/forgot/reset',
                data: JSON.stringify({
                    token,
                    password: inNewPassword.getValue()
                }),
                success: function (data) {
                    oApp.setBusy(false);
                    sap.m.MessageToast.show('Password updated');

                    setTimeout(function () {
                        formNewPassord.setVisible(false);
                        formLogin.setVisible(true);

                        window.history.pushState({}, document.title, location.href.split('?token=')[0]);
                    }, 500);

                },
                error: function (result, status) {
                    oApp.setBusy(false);

                    jQuery.sap.require('sap.m.MessageBox');

                    let responseMsg = (result.responseText === "Unauthorized") ? "The link has expired. Please request a new password reset link." : result.responseJSON.status;
                    
                    sap.m.MessageBox.show(responseMsg, {
                        title: 'Error',
                        icon: 'ERROR',
                        actions: ['CLOSE'],
                        onClose: function () { }
                    });

                    inNewPassword.setValueState('Error');
                    inNewPassword2.setValueState('Error');
                }
            });
        }
    }
}
