/*
    This code snippet makes an API call within a script, offering options for API requests. 
    The parameters 'data' and 'body' can be used interchangeably, with 'body' taking precedence
*/
// Import the necessary modules
// var axios = modules.axios;

// // Define the data to send
// var data = {
//   "detail":{
//             "username": "bori",
//             "name": "borokt",
//             "email": "tet@gmal.com",
//             "mobile": "123123",
//             "phone": "qweqweqwe",
//             "password": "123qwe"
//         },
// };

// // Make the API call
// axios.post("http://localhost:8080/api/functions/User/Save", data)
//   .then(function(response) {
//     // Handle the response
//     console.log("API response:", response.data);
//   })
//   .catch(function(error) {
//     // Handle any errors
//     console.error("API error:", error);
//   });
// Import the uuid module
// const uuid = modules.uuid;

// // Generate a unique identifier
// const id = uuid();

// // Log the generated UUID
// console.log(id);

// var opts = {
//     // method: 'POST',
    
//     data: {
//         "detail":{
//             // "id": "639277f5-1ba5-4781-893e-1bea3d5a826b",
//             "username": "bori",
//             "name": "borokt",
//             "email": "tet@gmal.com",
//             "mobile": "123123",
//             "phone": "qweqweqwe",
//             "password": "123qwe",
//         },
//     }
    
// }

// try {
//     // Send api request.
//     var response = await apis.Save(opts);
//     // Log response data
//     console.log(response.data)
//     console.log("Sending API request with opts:", opts);
// } catch(error) {
//     log.error("Error in request: ", error);
//     return fail();
// }

// Data to be submitted to the API
// const data = {
//   "detail": {
//     "username": "bori",
//     "name": "borokt",
//     "email": "tet@gmal.com",
//     "mobile": "123123",
//     "phone": "qweqweqwe",
//     "password": "123qwe"
//   },
// };

// const apiUrl = 'http://localhost:8080/api/functions/User/Save';

// fetch(apiUrl, {
//     method: 'POST',  // HTTP method
//     headers: {
//         'Content-Type': 'application/json',  // Specify JSON content
//     },
//     body: JSON.stringify(data)  // Convert the data to JSON format
// })
// .then(response => {
//     // Check if the response is okay (status 200-299)
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();  // Only parse the JSON if the response is okay
// })
// .then(responseData => {
//     // Handle the response data (check for success or error)
//     console.log('Data saved successfully:', responseData);
// })
// .catch(error => {
//     // Handle any errors
//     console.error('Error during API request:', error);
// });

// Import the necessary modules
// const http = modules.http;

// // Define the API endpoint and the request handler function
// const apiEndpoint = 'api/functions/User/Save';

// function handleRequest(request, response) {
//   // Set the response headers
//   response.setHeader('Content-Type', 'application/json');
//   response.setHeader('Access-Control-Allow-Origin', '*');

//   // Check the request method
//   if (request.method === 'GET') {
//     // Handle GET request
//     const users = [
//       { name: 'John Doe' },
//       { name: 'Jane Smith' },
//     ];

//     // Send the response with the users data
//     response.statusCode = 200;
//     response.end(JSON.stringify(users));
//   } else if (request.method === 'POST') {
//     // Handle POST request
//     let body = '';

//     // Read the request body
//     request.on('data', (chunk) => {
//       body += chunk;
//     });

//     // Process the request body
//     request.on('end', () => {
//       const user = JSON.parse(body);

//       // Save the user to the database or perform any other necessary actions

//       // Send the response with the saved user data
//       response.statusCode = 201;
//       response.end(JSON.stringify(user));
//     });
//   } else {
//     // Handle unsupported request methods
//     response.statusCode = 405;
//     response.end();
//   }
// }


// const os = modules.os;

// // Get the actual hostname
// const hostname = os.hostname();

// // Check if the hostname contains ".local" (common for local development)
// const isLocal = hostname.includes('.local');

// // If it's a local development environment, remove the ".local" suffix
// const actualHostname = isLocal ? hostname.replace('.local', '') : hostname;

// console.log('Actual Hostname:', actualHostname);


// // Import the necessary modules
// const axios = modules.axios;

// // Define the API endpoint URL
// const apiUrl = 'http://localhost:8080/api/functions/User/Save';

// // Define the data to be submitted
// const data = {
//   name: 'John Doe',
//   email: 'johndoe@example.com',
//   username: 'johndoe'
// };

// // Define the headers for the request (if required)
// const headers = {
//   'Content-Type': 'application/json',
// };

// // Make the API call using the axios module
// axios.post(apiUrl, data, { headers })
//   .then(response => {
//     console.log('API response:', response.data);
//     // Handle the response data as needed
//   })
//   .catch(error => {
//     console.error('API error:', error);
//     // Handle the error as needed
//   });




// const bcrypt = modules.bcrypt;
// const plainTextPassword = 'qwe123';
// const salt = bcrypt.genSaltSync(10);
// const hashedpassword = "$2b$10$sqlj1GRSHKxgEHPUoM3vUumJTGiXPibbEJaIZjQ92Ju6wSDvsyxB2";
// // const hashedPassword = ;

// const isMatch = await bcrypt.compare(plainTextPassword, hashedpassword);

// if (isMatch) {
//     console.log('Passwords match');
// } else {
//     console.log('Passwords do not match');
// }
// const requestData = {
//     username: "bori",
//     name: "borokt",
//     email: "tet@gmal.com",
//     mobile: "123123",
//     phone: "qweqweqwe",
//     password: "123qwe"
// };

// fetch('http://localhost:8080/api/functions/User/Save', {
//     method: 'POST',  // Specify the HTTP method as POST
//     headers: {
//         'Content-Type': 'application/json',  // Set the request header to indicate we're sending JSON data
//     },
//     body: JSON.stringify(requestData)  // Convert the requestData object to JSON format
// })
// .then(response => {
//     // Log the response status and Content-Type for debugging purposes
//     console.log('Response Status:', response.status);
//     console.log('Response Content-Type:', response.headers.get('Content-Type'));

//     if (!response.ok) {
//         // If the response is not OK (e.g., status is 4xx or 5xx), throw an error
//         throw new Error(`Request failed with status: ${response.status}`);
//     }

//     // Check if the response is JSON
//     const contentType = response.headers.get('Content-Type');
//     if (!contentType || !contentType.includes('application/json')) {
//         // If it's not JSON, throw an error
//         throw new Error(`Expected JSON response, but got ${contentType}`);
//     }

//     // If everything is okay, parse the response as JSON
//     return response.json();
// })
// .then(data => {
//     console.log('Response data:', data);  // Handle the API response data
// })
// .catch(error => {
//     console.error('Error during request:', error);  // Log any errors that occur during the request
// });

// Additional debugging: Log raw response text in case it's HTML or not JSON
// fetch('http://localhost:8080/api/functions/User/Save', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(requestData)
// })
// .then(response => response.text())  // Use .text() to get raw response body as text
// .then(rawData => {
//     console.log('Raw Response Data:', rawData);  // Log the raw response content
// })
// .catch(error => {
//     console.error('Error during request (raw text):', error);  // Handle errors for raw response
// });


// const requestData = {
//     // method: "POST",  // Ensure the method is defined (e.g., POST, PUT, GET, etc.)


//             username: "bori",
//             name: "borokt",
//             email: "tet@gmal.com",
//             mobile: "123123",
//             phone: "qweqweqwe",
//             password: "123qwe"


// };

// // Perform the API call to the backend login endpoint
//     fetch('http://localhost:8080/api/functions/User/Save', {  // Make sure the URL matches your backend endpoint
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestData)  // Convert data to JSON string
//     })
//     .then(response => response.json())  // Parse the response JSON
//     .then(data => {
//         console.log(data);
//         // Check if login was successful and JWT token is returned
//         // if (data.message === 'Login successful' && data.token) {
//         //     console.log('Login Successful:', data);

//         //     // Save the JWT token in localStorage (or sessionStorage)
//         //     // localStorage.setItem('authToken', data.token);

//         //     // Optionally, you can now navigate to a protected page
//         //     oApp.to(ToolPage);  // Example page transition (replace ToolPage with your actual page name)
//         // } else {
//         //     console.error('Login failed:', data.message);
//         //     // Optionally, show an error message to the user
//         // }
//     })
//     .catch(error => {
//         console.error('Error during login:', error);
//     });


// const crypto = modules.crypto;

// // Encrypt the password
// function encryptPassword(password) {
//   const cipher = crypto.createCipher('aes-256-cbc', 'encryptionKey');
//   let encryptedPassword = cipher.update(password, 'utf8', 'hex');
//   encryptedPassword += cipher.final('hex');
//   return encryptedPassword;
// }

// // Decrypt the password
// function decryptPassword(encryptedPassword) {
//   const decipher = crypto.createDecipher('aes-256-cbc', 'encryptionKey');
//   let decryptedPassword = decipher.update(encryptedPassword, 'hex', 'utf8');
//   decryptedPassword += decipher.final('utf8');
//   return decryptedPassword;
// }

// // Example usage
// const password = 'myPassword';

// const encryptedPassword = encryptPassword(password);
// console.log('Encrypted password:', encryptedPassword);

// const decryptedPassword = decryptPassword(encryptedPassword);
// console.log('Decrypted password:', decryptedPassword);


// Assuming you have a table definition named "users" with an "email" column

// Fetch the table data
// const tableData = tables.tbl_users.getData();

// // Extract the email column
// const emailColumn = tableData.map(row => row.EmailAddress);

// // Display the email values
// console.log(emailColumn);




// Replace with your actual API endpoint
// const email = 'jade.lapore@radenta.com';  // User email input
// const password = 'qwe123';  // User password input

// // Define the API URL for login
// const apiUrl = 'http://localhost:8080/api/entity/tbl_users';  // API endpoint for login

// // Encode credentials in base64 (Basic Auth format)
// const credentials = btoa('admin:123qwe');  // Replace with your username and password for Basic Auth

// // Set up the request body with email and password (to match the expected login format)
// const requestBody = {
//     email: email,
//     password: password
// };

// // Set up the fetch request options
// const opts = {
//     method: 'POST',  // POST to submit login credentials
//     headers: {
//         'Authorization': `Basic ${credentials}`,  // Basic Authentication header
//         'Content-Type': 'application/json'  // JSON content type
//     },
//     body: JSON.stringify(requestBody)  // Send the email and password in the body
// };

// try {
//     // Perform the API call
//     const response = await fetch(apiUrl, opts);

//     if (response.ok) {
//         const data = await response.json();  // Parse the response data

//         // Log the response to see the full structure of the data
//         console.log("Response Data:", data);

//         // Check if the token is part of the response data
//         if (data.token) {
//             // Store the JWT token in localStorage or sessionStorage
//             localStorage.setItem('jwtToken', data.token);
//             console.log('Login successful! Token:', data.token);

//             // Optional: Redirect to a protected page (example)
//             // window.location.href = '/dashboard';  // Redirect after login
//         } else {
//             console.error('Login failed: No token returned from API');
//         }
//     } else {
//         // Handle non-2xx HTTP responses (e.g., 401 Unauthorized, 500 Server Error)
//         console.error('Login failed: API responded with status code', response.status);
//         const errorText = await response.text();  // Get the error text for more details
//         console.error('Error message:', errorText);
//     }
// } catch (error) {
//     // Catch any network or other errors
//     console.error('Error during login request:', error);
// }


// const axios = modules.axios;

// async function getEmailAndPasswordFromAPI() {
//   try {
//     const response = await axios.get('http://localhost:8080/api/entity/tbl_users');
//     const data = response.data;
    
//     // Assuming the API response contains an object with email and password properties
//     const email = data.EmailAddress;
//     const password = data.Password;
    
//     return { email, password };
//   } catch (error) {
//     console.error('Error retrieving data from API:', error);
//     throw error;
//   }
// }

// // Example usage
// const { email, password } = await getEmailAndPasswordFromAPI();
// console.log('Email:', email);
// console.log('Password:', password);



// Load the bcrypt module
// var bcrypt = modules.bcrypt;

// // Generate a salt
// var salt = bcrypt.genSaltSync(10);
// // Hash a password
// var password = "samplepassword";
// var hash = bcrypt.hashSync(password, salt);

// // inputData = hash;
// // Compare a password with a hash
// var isMatch = bcrypt.compareSync(password, hash);

// console.log("Password match:", isMatch);
// console.log(hash);


// const dotenv = modules.dotenv;
// dotenv.config({path: "C:/Users/JadeMarkLapore/Downloads/planet9-win-v23.10.7/config/.env.txt"});
// const user_id =  bcrypt.hashSync(process.env.USER_ID, salt);
// process.env.USER_KEY;
// process.env.NODE_ENV;

// console.log(user_id);
// complete();

// Import the jsonwebtoken module
// const jwt = modules.jsonwebtoken;

// // Define the payload for the JWT token
// const payload = {
//   userId: '123456789',
//   username: 'john.doe',
//   role: 'admin',
// };

// // Define the secret key for signing the token
// const secretKey = 'your-secret-key';

// // Generate the JWT token
// const token = jwt.sign(payload, secretKey);

// // Print the generated token
// console.log(token);


// // Import the axios module
// const axios = modules.axios;

// // Define the API endpoint
// const apiUrl = 'http://localhost:8080/api/entity/tbl_users';

// // Define the JWT token
// const token = 'your-jwt-token';

// // Set the authorization header with the JWT token
// const headers = {
//   Authorization: `Bearer ${token}`,
// };

// // Make the API call with JWT authentication
// axios.get(apiUrl, { headers })
//   .then(response => {
//     // Handle the API response
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });
// const userId = "123"; // Replace USER_ID with the ID of the user you want to update or create

// // Check if the user already exists
// const getUserOpts = {
//   body: {
//     id: userId
//   }
// };

// let userExists = false;

// try {
//   const getUserResponse = await apis.Get(getUserOpts);
//   if (getUserResponse.data) {
//     userExists = true;
//   }
// } catch (error) {
//   console.error("Error checking if user exists:", error);
//   // Handle the error
// }

// // Update or create the user based on the existence check
// const saveUserOpts = {
//   body: {
//     detail: {
//       id: userId,
//       // Add the properties you want to update or create for the user
//       idpSource: "local",
//       username: "new_user1",
//       email: "new_email@example.com",
//       password: "123123"
//       // ...
//     }
//   }
// };

// try {
//   let response;
//   if (userExists) {
//     response = await apis.Save(saveUserOpts);
//     console.log("User updated:", response.data);
//   } else {
//     response = await apis.Save(saveUserOpts);
//     console.log("New user created:", response.data);
//   }
//   // Handle the response or perform any additional actions
// } catch (error) {
//   console.error("Error updating or creating user:", error);
//   // Handle the error
// }
// const userId = '6a5793ce-f138-4714-a153-cbbbc7e1b713';
// const opts = {
//   body: { id: userId },
// };

// try {
//   const response = await apis.Delete(opts);
//   console.log(response.data); // Log the response data if needed
// } catch (error) {
//   log.error("Error in request: ", error);
//   return fail();
// }




