import React, { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';

const ProfilePhotoUpload = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const videoRef = useRef(null);
  const fileInputRef = useRef(null); // Ref for file input
  const [stream, setStream] = useState(null);

  const handleTabClick = (tab) => {
    setImageSrc(null)
    setSelectedFile(null)
    setActiveTab(tab);
    if (tab === "takePhoto") {
      startVideoStream();
    } else if (stream) {
      stopVideoStream();
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setImageSrc(URL.createObjectURL(e.target.files[0])); // For preview
  };

  const handleFileUpload = async () => {
    var bearertoken = localStorage.getItem("Logtoken")
    console.log(bearertoken)
    if (!selectedFile && !imageSrc) {
      alert("Please select a file or take a photo before uploading.");
      return;
    }

    const formData = new FormData();
    if (selectedFile) {
      formData.append("profile_image", selectedFile);
    } else if (imageSrc) {
      const blob = await fetch(imageSrc).then((res) => res.blob());
      formData.append("profile_image", blob, "photo.jpg");
    }

    try {
      const response = await fetch(
        "https://social-network-backend.sharpbody-p.com/public/api/update-profile-photo",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + bearertoken, // Replace with your actual token
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Profile photo updated successfully:", data);
        setImageSrc(null)
        setSelectedFile(null)
        toast.success("Profile Photo Successfully Update!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // alert("Profile photo updated successfully!");
        localStorage.setItem("userinfo",JSON.stringify(data))
      } else {
        console.error("Failed to update profile photo.");
        // alert("Failed to update profile photo.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      // alert("Error uploading file.");
    }
  };

  const startVideoStream = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const stopVideoStream = () => {
    stream.getTracks().forEach((track) => track.stop());
    setStream(null);
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const photoURL = canvas.toDataURL("image/jpeg");
    setImageSrc(photoURL);
    stopVideoStream(); // Stop video stream after capturing
  };

  const handleSelectFileClick = () => {
    // Trigger the file input when the button is clicked
    fileInputRef.current.click();
  };

  return (
    <>
      <div>
        <h3>Change Profile Photo</h3>
        <div className="no-members-container" style={{ marginBottom: "20px" }}>
          <div className="no-members-message">
            <span className="no-members-icon">🔍</span>
            <span>
              Your profile photo will be used on your profile and throughout the site.
              If there is a Gravatar associated with your account email, we will use
              that, or you can upload an image from your computer.
            </span>
          </div>
        </div>

        <div className="tabs">
          <button className="porfile-photo" onClick={() => handleTabClick("upload")}>
            Upload
          </button>
          <button className="porfile-photo" onClick={() => handleTabClick("takePhoto")}>
            Take Photo
          </button>
        </div>

        {activeTab === "upload" && (
          <div className="upload-container">
            <input
              type="file"
              id="fileUpload"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <div className="upload-box">
              <div className="upload-area">
                <p>Drop your file here</p>
                <button onClick={handleSelectFileClick}>Select your file</button>
              </div>
            </div>
            {selectedFile && (
              <div>
                <p>Selected file: {selectedFile.name}</p>
                <img src={imageSrc} alt="Selected Preview" style={{ width: "100px", height: "100px" }} />
                <button onClick={handleFileUpload}>Upload</button>
              </div>
            )}
          </div>
        )}

        {activeTab === "takePhoto" && (
          <div className="take-photo-container">
            {!imageSrc && <video ref={videoRef} autoPlay />}
            {imageSrc && (
              <img src={imageSrc} alt="Captured Preview" style={{ width: "100px", height: "100px" }} />
            )}
            {!imageSrc && (
              <button onClick={capturePhoto}>Capture Photo</button>
            )}
            {imageSrc && <button onClick={handleFileUpload}>Upload Photo</button>}
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default ProfilePhotoUpload;
