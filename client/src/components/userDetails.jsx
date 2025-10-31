import { useState } from "react";
import { Camera, User, Mail, Phone, Check,Save, MapIcon } from "lucide-react";
import "../styles/userDetails.css";
import axios from "axios";

export default function UserDetailsForm() {
  const [formData, setFormData] = useState({
    name: JSON.parse(localStorage.getItem("user")).userDetails.name,
    email: JSON.parse(localStorage.getItem("user")).userDetails.email,
    mobile: "",
    profileImage: JSON.parse(localStorage.getItem("user")).userDetails.picture,
    location:""
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        setErrors({ ...errors, image: "Image size should be less than 5MB" });
        return;
      }

      setFormData({ ...formData, profileImage: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setErrors({ ...errors, image: null });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length <= 10) {
        setFormData({ ...formData, [name]: digitsOnly });
      }
      return;
    }

    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (formData.mobile.length !== 10) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    } else if (formData.location.trim().length < 2) {
      newErrors.location = "Location must be at least 2 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          profileImage: null,
          location:""
        });
        setImagePreview(null);
      }, 2000);
      UploadData();
    }
  };

  const changeId = ()=>{
    if (localStorage.getItem("user")) {
      localStorage.clear();
      window.location.reload();
    }
  }

  const UploadData = async () => {
    const res = await axios.post("http://localhost:5000/signUp",formData)
  };

  return (
    <>
      <div className="header">
        <div className="header-top">
          <div className="logo">LocalBazar</div>
        </div>
      </div>
      <div className="user-form-container">
        <div className="user-form-card">
          <div className="form-decoration-1"></div>
          <div className="form-decoration-2"></div>

          <div className="form-content">
            <div className="form-header">
              <h2 className="form-title">Complete Sign Up</h2>
              <p className="form-subtitle">Please fill in your information</p>
            </div>

            <div className="form-fields">
              <div className="image-upload-container">
                <div className="image-upload-wrapper">
                  <div className="profile-image-circle">
                    {!formData.profileImage ? (
                      <User className="profile-placeholder-icon" />
                    ) : (
                      <img
                        src={formData.profileImage}
                        alt="Profile"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>

                  <label htmlFor="profile-upload" className="camera-button">
                    <Camera className="camera-icon" />
                    <input
                      id="profile-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden-input"
                      disabled
                    />
                  </label>
                </div>
              </div>

              {/* <p
              className="text-sm text-gray-500"
              style={{ textAlign: "center" }}
            >
              Click camera icon to upload photo
            </p> */}

              {errors.image && (
                <p
                  className="error-message"
                  style={{ textAlign: "center", marginTop: "-1rem" }}
                >
                  {errors.image}
                </p>
              )}

              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <User />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`form-input ${errors.name ? "error" : ""}`}
                  />
                </div>
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <Mail />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`form-input ${errors.email ? "error" : ""}`}
                    disabled
                  />
                </div>
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number</label>
                <div className="mobile-input-group">
                  <div className="country-code">
                    <Phone />
                    +91
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10 digit number"
                    maxLength="10"
                    className={`mobile-input ${errors.mobile ? "error" : ""}`}
                  />
                </div>
                {errors.mobile && (
                  <p className="error-message">{errors.mobile}</p>
                )}
                <p className="helper-text">Enter 10 digit mobile number</p>
              </div>

              <div className="form-group">
                <label className="form-label">Location</label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <MapIcon />
                  </div>
                  <input
                    type="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. T-6/12"
                    className={`form-input ${errors.location ? "error" : ""}`}
                  />
                </div>
                {errors.location && (
                  <p className="error-message">{errors.location}</p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={submitted}
                className={`submit-button ${submitted ? "success" : ""}`}
              >
                {submitted ? (
                  <>
                    <Check className="success-icon" />
                    Submitted Successfully!
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Submit Details
                  </>
                )}
              </button>
            </div>

            {submitted && (
              <div className="success-message">
                Your details have been saved successfully!
              </div>
            )}
            <a
              onClick={() => changeId()}
              style={{ color: "#4338ca", cursor: "pointer" }}
            >
              Change EmailID
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
