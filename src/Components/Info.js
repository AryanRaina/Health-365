import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth,faBone,faStethoscope,faBrain } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Heart Disease"
          description="Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Dental Care"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          icon={faTooth}
        />

        <InformationCard
          title="OPD"
          description="Welcome to our Outpatient Department (OPD), where we prioritize your 
            well-being and convenience. Our OPD offers a wide range of medical services for 
            non-emergency cases, including routine check-ups, preventive care, and management 
            of chronic conditions. With our dedicated team of healthcare professionals, we strive 
            to provide timely consultations and personalized treatment plans to address your health concerns effectively."
          icon={faStethoscope}
        />

        <InformationCard
          title="Ortho Disease"
          description="Step into our Orthopedic Care department for expert treatment of musculoskeletal
            conditions. Our team of orthopedic specialists is dedicated to restoring your mobility, alleviating pain, 
            and improving your quality of life. From sports injuries to degenerative conditions, we offer advanced 
            diagnostics and comprehensive treatment options tailored to your specific needs."
          icon={faBone}
        />

        <InformationCard
          title="Neuro Disease"
          description="Welcome to our Neurology Services, where we specialize in the diagnosis and management of neurological 
            conditions. Our experienced neurologists and neurosurgeons utilize cutting-edge technology to provide accurate assessments 
            and personalized treatment plans for disorders of the nervous system. Whether you're dealing with headaches, seizures, or 
            movement disorders, you can trust our compassionate team to provide expert care and support every step of the way."
          icon={faBrain}
        />
      </div>
    </div>
  );
}

export default Info;
