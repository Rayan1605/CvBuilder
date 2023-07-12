// regex for validation
const strRegex =  /^[a-zA-Z\s]*$/; // containing only letters
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Sure! This is a regular expression that is used to validate email addresses.
// It checks if the input string matches the pattern of a valid email address.
// Let me break it down for you:
//
// ^ and $ are anchors that specify the start and end of the string, respectively.
// This ensures that the entire string must match the pattern, not just a part of it.
// The first part (([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+")) matches the
// local part of the email address (the part before the ‘@’ symbol). It allows for two formats:
// The first format ([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*) allows for any character
// except for special characters <>()\[\]\\.,;:\s@" and also allows for periods .
// as long as they are not the first or last character and not consecutive.
// The second format (".+") allows for any character inside double quotes,
// including special characters and spaces.
// The @ symbol separates the local part from the domain part of the email address.
// The second part ((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+
// [a-zA-Z]{2,})) matches the domain part of the email address (the part after the ‘@’ symbol).
// It also allows for two formats:
// The first format (\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]) allows for an
// IP address enclosed in square brackets.
// The second format (([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}) allows for a domain name with at least
// two characters after the last period.


const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
/* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
const digitRegex = /^\d+$/;

const mainForm = document.getElementById('cv-form');
const validType = { // Making an Object
    TEXT: "text",
    TEXT_EMP : "text-emp",
    EMAIL: "email",
    DIGIT: "digit",
    PHONENo: "phoneNO",
    ANY: "any",
}
//Time to get User Input
let firstnameElem = mainForm.firstname,
    middlenameElem = mainForm.middlename,
    lastnameElem = mainForm.lastname,
    imageElem = mainForm.image,
    designationElem = mainForm.designation,
    addressElem = mainForm.address,
    emailElem = mainForm.email,
    phonenoElem = mainForm.phoneno,
    summaryElem = mainForm.summary;

// This is what we are going to attach too with the above elements
let nameDsp = document.getElementById('fullname_dsp'),
    imageDsp = document.getElementById('image_dsp'),
    phonenoDsp = document.getElementById('phoneno_dsp'),
    emailDsp = document.getElementById('email_dsp'),
    addressDsp = document.getElementById('address_dsp'),
    designationDsp = document.getElementById('designation_dsp'),
    summaryDsp = document.getElementById('summary_dsp'),
    projectsDsp = document.getElementById('projects_dsp'),
    achievementsDsp = document.getElementById('achievements_dsp'),
    skillsDsp = document.getElementById('skills_dsp'),
    educationsDsp = document.getElementById('educations_dsp'),
    experiencesDsp = document.getElementById('experiences_dsp');

const fetchValues = (attrs, ...nodeLists) => { // is a JavaScript function declaration that uses the rest parameter syntax ...nodeLists to represent an indefinite number of arguments as an array. This function takes in two parameters: attrs and ...nodeLists. The first parameter attrs is a single value, while the second parameter ...nodeLists represents an array of values. This syntax allows you to pass any number of arguments to the function, which will be collected into an array and assigned to the nodeLists variable.

}





















