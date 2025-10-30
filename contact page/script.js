
        // Regex patterns for validation
        const patterns = {
            firstName: /^[a-zA-Z\s'-]{2,}$/,
            lastName: /^[a-zA-Z\s'-]{2,}$/,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phone: /^[\d\s\-\+\(\)]{10,}$/,
            message: /^.{10,}$/
        };

        const form = document.getElementById('contactForm');
        const fields = ['firstName', 'lastName', 'email', 'phone', 'message'];

        // Validate individual field
        function validateField(fieldId) {
            const field = document.getElementById(fieldId);
            const errorDiv = field.nextElementSibling;
            let isValid = true;
            let errorMsg = '';

            const value = field.value.trim();

            if (fieldId === 'firstName' || fieldId === 'lastName') {
                if (!value) {
                    errorMsg = `${fieldId === 'firstName' ? 'First' : 'Last'} name is required`;
                    isValid = false;
                } else if (!patterns[fieldId].test(value)) {
                    errorMsg = `${fieldId === 'firstName' ? 'First' : 'Last'} name must contain only letters`;
                    isValid = false;
                }
            } else if (fieldId === 'email') {
                if (!value) {
                    errorMsg = 'Email is required';
                    isValid = false;
                } else if (!patterns.email.test(value)) {
                    errorMsg = 'Please enter a valid email address';
                    isValid = false;
                }
            } else if (fieldId === 'phone') {
                if (!value) {
                    errorMsg = 'Phone number is required';
                    isValid = false;
                } else if (!patterns.phone.test(value)) {
                    errorMsg = 'Please enter a valid phone number';
                    isValid = false;
                }
            } else if (fieldId === 'message') {
                if (!value) {
                    errorMsg = 'Message is required';
                    isValid = false;
                } else if (!patterns.message.test(value)) {
                    errorMsg = 'Message must be at least 10 characters long';
                    isValid = false;
                }
            }

            if (isValid) {
                field.classList.remove('error');
                field.classList.add('success');
                errorDiv.classList.remove('show');
            } else {
                field.classList.remove('success');
                field.classList.add('error');
                errorDiv.textContent = errorMsg;
                errorDiv.classList.add('show');
            }

            return isValid;
        }

        // Real-time validation
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            field.addEventListener('blur', () => validateField(fieldId));
            field.addEventListener('input', () => {
                if (field.classList.contains('error') || field.classList.contains('success')) {
                    validateField(fieldId);
                }
            });
        });

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let allValid = true;
            fields.forEach(fieldId => {
                if (!validateField(fieldId)) {
                    allValid = false;
                }
            });

            if (allValid) {
                const successMsg = document.getElementById('successMessage');
                successMsg.classList.add('show');

                // Reset form
                form.reset();
                fields.forEach(fieldId => {
                    const field = document.getElementById(fieldId);
                    field.classList.remove('error', 'success');
                });

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.classList.remove('show');
                }, 5000);
            }
        });

        // Toggle checkbox function
        function toggleCheckbox(element) {
            element.classList.toggle('checked');
        }
