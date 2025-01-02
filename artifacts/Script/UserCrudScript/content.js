const { Between, Like, In, Not } = operators;



switch (req.query.method) {



    case "Get":

        result.data = await processGet();  // fetches data

        break;



    case "Delete":

        result.data = await processDelete(); // deletes selected entry

        break;



    case "Save":
  
        result.data = await processSave();   // this is for saving the modified/new entry

        break;
 
       



    case "List":

        result.data = await processList(); // this is for the multiselect lookup and the counter in the header

        break;



    default:

        break;

}

//Calculate employment Time







// Get all the records from the employee database

// const users = await entities.tbl_user.createQueryBuilder("alias").getMany();



// var bcrypt = modules.bcrypt;
// // For each record in the employee database

// for (i = 0; i < users.length; i++) {


// // For each record in the users database
// for (let i = 0; i < users.length; i++) {
//     // Generate a salt
//     var salt = bcrypt.genSaltSync(10);
//     var password = bcrypt.hashSync(users[i].Password, salt);

//     await entities.tbl_user.update({ id: users[i].id }, { Password: password });
// }
// }

complete();



async function processList() {



    let options = {

        where: {}

    };



    // Where

    req.body._settings.fieldsSel.forEach(function (field) {



        if (req.body[field.name]) {



            switch (field.type) {



                case "MultiSelectLookup":

                    options.where[field.name] = In(req.body[field.name]);

                    break;



                default:

                    options.where[field.name] = Like("%" + req.body[field.name] + "%");

                    break

            }



        }



    })



    // Count total number of records

    const count = await entities.tbl_user.count(options);



    // Pagination

    if (req.body._pagination) {

        options.take = req.body._pagination.take;

        options.skip = req.body._pagination.skip;

    }



    // Sorting

    if (req.body._order) {

        options.order = req.body._order

    }



    const accounts = await entities.tbl_user.find(options);



    return {

        result: accounts,

        count: count,

        debug: {

            query: req.query,

            body: req.body,

            options

        }

    };



}



async function processGet() {

    return await entities.tbl_user.findOne({ id: req.body.id });

}



async function processDelete() {
    const userId = req.body.data.UserId;
const delUserOpts = {
  body: {
    id: userId
  }
};

try {
    // Send api request.
    const response = await apis.Delete(delUserOpts);
    await entities.tbl_user.delete(req.body.id);
    // Log response data
    console.log(response.data)
} catch(error) {
    log.error("Error in request: ", error);
    return fail();
}


        // Return a success status
        return { status: 'OK' };

}




// async function processSave(id) {

    

//     await entities.tbl_user.save(req.body);
//     return {

//         status: "OK"
        
//     };
// }

// async function processSave(id) {
//   const name = req.body.Name;

//   try {
//     // Check if the name includes a number
//     if (/\d/.test(name)) {
//       throw new Error("Name should not include numbers");
//     }

//     // Continue with the rest of your code if the name is valid
//     // ...

//     return {
//       status: "OK"
//     };
//   } catch (error) {
//     console.error("Error:", error.message);
//     return {
//       status: "ERROR",
//       message: error.message
//     };
//   }
// }

async function processSave(id){
        
    

        const firstName = req.body.FirstName;
        const middleName = req.body.MiddleName;
        const lastName = req.body.LastName;
        const email = req.body.EmailAddress;
        const password = req.body.Password
    if (!email.includes('@')) {
        throw new Error("Email must contain @");
    }
    // Check if the email contains any of the specified domain extensions
    const domainExtensions = ['.com', '.ph', '.edu', '.gov'];
    const hasValidDomain = domainExtensions.some(extension => email.includes(extension));

    if (!hasValidDomain) {
      throw new Error('Email must contain .com, .ph, .edu, or .gov');
    }
    // Check if the email has a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
    }
    // Regex to allow only letters and spaces (including empty values)
    const nameRegex = /^[A-Za-z\s]*$/;
    // Check if firstName, middleName, or lastName are valid (allowing spaces and empty values)
    if (firstName && !nameRegex.test(firstName)) {
        throw new Error ('First name should only contain letters and spaces');
    }

    if (middleName && !nameRegex.test(middleName)) {
        throw new Error('Middle name should only contain letters and spaces');
    }

    if (lastName && !nameRegex.test(lastName)) {
        throw new Error('Last name should only contain letters and spaces');
    }
    // Validate password length (12-16 characters)
    if (password.length < 12 || password.length > 16) {
        throw new Error('Password must be between 12 and 16 characters');
    }

    // Check if password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        throw new Error('Password must contain at least one uppercase letter');
    }

    // Check if password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        throw new Error('Password must contain at least one lowercase letter');
    }

    // Check if password contains at least one number
    if (!/\d/.test(password)) {
        throw new Error('Password must contain at least one number');
    }

    // Check if password contains at least one special character
    if (!/[!@#$%^&*]/.test(password)) {
        throw new Error('Password must contain at least one special character (!, @, #, $, %, etc.)');
    }

  

  const userId = req.body.UserId;
  const userName = req.body.UserName; // Replace USER_ID with the ID of the user you want to update or create
  // Check if the user already exists
const getUserOpts = {
  body: {
    id: userId,
    username:userName
  }
};

let userExists = false;

try {
  const getUserResponse = await apis.Get(getUserOpts);
  if (getUserResponse.data) {
    userExists = true;
  }
} catch (error) {
  throw new Error('Username Already Exist');
  // Handle the error
}

// Update or create the user based on the existence check
const saveUserOpts = {
  data: {
    detail: {
        id: userId,
        // Add the properties you want to update or create for the user
        idpSource: "local",
        name: req.body.FirstName + " " + (req.body.MiddleName || "") + " " + req.body.LastName,
        mobile: req.body.ContactNumber,
        phone: req.body.ContactNumber,
        requirePasswordReset: true,
        username: req.body.UserName,
        language: "EN",
        email: req.body.EmailAddress,
        password: req.body.Password
        // ...
    }
  }
};

try {
  let response;
  if (userExists) {
    response = await apis.Save(saveUserOpts); // core api
    req.body.UserId = response.data.user.id; //put the core user id response to table database user id
    req.body.Password = response.data.user.password;
    await entities.tbl_user.save(req.body); // table database
    // console.log("User updated:", response.data);
  } else {
    response = await apis.Save(saveUserOpts); // core api
    req.body.UserId = response.data.user.id; //put the core user id response to table database user id
    await entities.tbl_user.save(req.body); // table database
    // console.log("New user created:", response.data);
  }
  // Handle the response or perform any additional actions
} catch (error) {
  throw new Error('Username Already Exist');
  // Handle the error
}
    return {

        status: "OK"
        
    };

    

}




// function validateName(firstname) {
//     // Check if the name is not empty
//     if (firstname.trim() === "") {
//         return "Name cannot be empty.";
//     }

//     // Check if the name only contains letters (with optional spaces)
//     const regex = /^[A-Za-z\s]+$/;
//     if (!regex.test(firstname)) {
//         return "Name can only contain letters and spaces.";
//     }

//     // Check the length of the name (optional: min and max length)
//     if (firstname.length < 2 || firstname.length > 50) {
//         return "Name should be between 2 and 50 characters long.";
//     }

//     // If all validations pass, return a success message
//     return "Name is valid!";
// }

// // Example usage:
// const firstname = req.body.FirstName;  // You can replace this with user input, e.g., from a form
// const result = validateName(firstname);
// console.log(result);  // This will log the validation result



