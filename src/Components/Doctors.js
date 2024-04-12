import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import profile5 from "../Assets/profile-5.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health 365. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Krishna Moorthy"
          title="General Surgeons"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Ambika Desai"
          title="Hematologists"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Sushil Razdan"
          title="Neurologist"
          stars="4.7"
          reviews="750"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Anjana Sharma"
          title="General Physician"
          stars="4.8"
          reviews="500"
        />
        <DoctorCard
          img={profile5}
          name="Dr. Ramakrishan Iyer"
          title="Dentist"
          stars="4.6"
          reviews="550"
        />
      </div>
    </div>
  );
}

export default Doctors;
