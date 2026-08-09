export const validateName = (name) => {
  const value = name.trim();

  if (!value) {
    return "Please enter your full name.";
  }

  if (value.length < 3) {
    return "Name must be at least 3 characters.";
  }

  const nameRegex = /^[A-Za-z\u0600-\u06FF]+(?:[\s'-][A-Za-z\u0600-\u06FF]+)*$/;

  if (!nameRegex.test(value)) {
    return "Name can only contain letters and spaces.";
  }

  return "";
};

export const validateEmail = (email) => {
  const value = email.trim();

  if (!value) {
    return "Please enter your email.";
  }

  const emailRegex =
    /^(?=[A-Za-z0-9._%+-]*[A-Za-z])[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailRegex.test(value)) {
    return "Please enter a valid email address.";
  }

  return "";
};

export const validatePassword = (password) => {
  if (!password) {
    return "Please enter a password.";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters.";
  }

  if (!/[A-Za-z]/.test(password)) {
    return "Password must contain at least one letter.";
  }

  if (!/[0-9]/.test(password)) {
    return "Password must contain at least one number.";
  }

  return "";
};

export const validatePhone = (phone) => {
  const value = phone.trim();

  if (!value) {
    return "Please enter your phone number.";
  }

  const phoneRegex = /^01[0125][0-9]{8}$/;

  if (!phoneRegex.test(value)) {
    return "Please enter a valid Egyptian phone number (11 digits).";
  }

  return "";
};

export const validateAddress = (address) => {
  const value = address.trim();

  if (!value) {
    return "Please enter your address.";
  }

  if (value.length < 10) {
    return "Address must be at least 10 characters.";
  }

  return "";
};
