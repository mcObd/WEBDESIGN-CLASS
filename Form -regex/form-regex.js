// Meta and Special characters in Regualr Expressions
/*
Meta Characters
Meta characters are symbols with special meanings in a regex. They help define the structure and behavior of the pattern. These characters are not matched literally unless escaped with a backslash (\).
Examples;

. – Matches any character except a newline (unless the s flag is used).

^ – Matches the beginning of a string or line.

$ – Matches the end of a string or line.

* – Matches zero or more occurrences of the preceding character.

+ – Matches one or more occurrences.

? – Matches zero or one occurrence, or makes the preceding pattern optional.

[] – Used for character sets (e.g., [a-z] matches any lowercase letter). e.g: [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9

Quantifiers
{n}: Matches exactly 'n' occurrences.
    Example: /\d{3}/ matches exactly 3 digits (e.g., "123").
{n,}: Matches at least 'n' occurrences.
	Example: /\d{3,}/ matches at least 3 digits.
{n,m}: Matches between 'n' and 'm' occurrences.
	Example: /\d{2,5}/ matches between 2 and 5 digits.


(): Capture and group 
Groups expressions and captures matched substrings. 
Example: /(abc)+/ matches "abc", "abcabc", etc.
\d: Matches any digit (0-9).

[^] - Negated character set. Matches any character 'not' inside the brackets. Example: /[^aeiou]/ matches any character that is not a vowel.

|: Alternation (or) Matches patterns on either side.
Example: /cat|dog/ matches either "cat" or "dog".

\ – Used to escape meta characters or as part of special sequences like \d, \w, etc.

Special Characters
Special characters are a subset of meta characters but with specific predefined functionalities in regex. These characters often represent shorthand forms for more complex patterns.

Examples of Special Characters;

\d – Matches any digit ([0-9]).

\D: Matches any non-digit. Example: /\D/ matches "a", "b", etc.

\w – Matches any word character (alphanumeric and underscore).

\W: Matches any non-word character. Example: /\W/ matches "!", " ", etc.

\s: Matches any whitespace character (spaces, tabs, newlines).
Example: /\s/ matches " " or "\n".

\S: Matches any non-whitespace character.
Example: /\S/ matches "a", "1", etc.

*/
// script.js
document.getElementById('signupForm').addEventListener('submit', function (e) {
    // Prevent the default form submission
    e.preventDefault();

    // Clear previous error messages
    clearErrors();

    // Get form field values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate inputs
    let isValid = true;

    if (username.length < 3 || username.length > 15) {
        showError('usernameError', 'Username must be between 3 and 15 characters.');
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    if (isValid) {
        alert('Form Submitted Successfully!');
        // You can now submit the form data or send it to a server
    }
});

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(error => {
        error.style.display = 'none';
    });
}

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}