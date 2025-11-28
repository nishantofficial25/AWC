const jwt = require("jsonwebtoken");

function setuser(user) {
  return jwt.sign(user,'nishant')
}

const token = JSON.parse(localStorage.getItem("user")).token;

function getuser() {
  return jwt.verify(token, "nishant");
}

module.exports = {
  setuser,
  getuser,
};

/* const encryptionKey = "your-secret-key"; // Keep this secure, e.g., in an environment variable

// Encrypt data before storing

export const setdata = (dat) => {
  const newobj = [{
    name:dat.name,
    email:dat.email,
    picture:dat.picture
  }]
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(newobj),
    encryptionKey
  ).toString();
  localStorage.setItem("myEncryptedData", encryptedData);
};

// Decrypt data when retrieving

export const getData = () => {
  const storedEncryptedData = localStorage.getItem("myEncryptedData");

   if (storedEncryptedData) { 
    const decryptedBytes = CryptoJS.AES.decrypt(
      storedEncryptedData,
      encryptionKey
    );
    const decryptedData = JSON.parse(
      decryptedBytes.toString(CryptoJS.enc.Utf8)
    );
    return decryptedData;
  } 
}; */
