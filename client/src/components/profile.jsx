import { useState, useEffect } from "react";
import {
  Camera,
  User,
  Mail,
  Phone,
  Check,
  Save,
  MapIcon,
  LogOut,
} from "lucide-react";
import "../styles/userDetails.css";

export default function Profile() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/userDetails`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        const newData = fetchedData.details.filter(
          (datas) =>
            datas.email ==
            JSON.parse(localStorage.getItem("user")).userDetails.email
        );
        updateFields(newData[0]);
        /* updateFields(fetchedData.details[0]); */
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateFields = (x) => {
    const arr = ["name", "email", "mob", "location", "picture"];

    arr.map((item, index) => {
      setFormData((prevData) => ({
        ...prevData,
        [item]: x[item],
      }));
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mob: "",
    location: "",
    picture: "",
  });

  const logout = () => {
    if (localStorage.getItem("user")) {
      localStorage.clear();
      window.location.reload();
      window.location.href = `${import.meta.env.VITE_CLIENT_URL}/`;
    }
  };

  return (
    <>
      
      <div className="user-form-container">
        <div className="user-form-card">
          <div className="form-decoration-1"></div>
          <div className="form-decoration-2"></div>

          <div className="form-content">
            <div className="form-header">
              <h2 className="form-title">Profile</h2>
            </div>

            <div className="form-fields">
              <div className="image-upload-container">
                <div className="image-upload-wrapper">
                  <div className="profile-image-circle">
                    {!formData.picture ? (
                      <User className="profile-placeholder-icon" />
                    ) : (
                      <img
                        src={formData.picture}
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
                      className="hidden-input"
                      disabled
                    />
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <User />
                  </div>
                  <div
                    type="text"
                    placeholder="Enter your full name"
                    className={`form-input`}
                  >
                    {formData.name}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <Mail />
                  </div>
                  <div className={`form-input`} disabled>
                    {formData.email}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number</label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <Phone />
                  </div>
                  <div className={`form-input`}>{formData.mob}</div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Address</label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <MapIcon />
                  </div>
                  <div className={`form-input`}>{formData.location}</div>
                </div>
              </div>

              <button className={`submit-button`} onClick={() => logout()}>
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
