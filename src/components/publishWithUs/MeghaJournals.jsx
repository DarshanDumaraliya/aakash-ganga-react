import React from "react";

import { JournalImages } from "./data";

const MeghaJournals = () => {
  return (
    <>
      <h2 className="large-title">Aakashganga Mega Journals</h2>

      <img src="assets/images/samaj-shastra-new.png" />

      <p className="pera-text">
        Tanslates to Social Science in Hindi, is an Open Access Mega Journal,
        making high-quality Social Science research accessible to a global
        audience from India.
      </p>

      <p className="pera-text">
        The Mega Journal, welcomes contributions from all subfields within
        social sciences, such as sociology, psychology, anthropology, political
        science, and more. It provides a comprehensive framework for
        understanding and analyzing the complexities of human society, its
        structures, institutions, and interactions. Researchers and scholars
        specializing in Samaj Shastra engage in empirical studies, theoretical
        analyses, and critical examinations of social phenomena, aiming to
        uncover patterns, explore social dynamics, and contribute to the
        existing body of knowledge. Its inclusive approach fosters
        interdisciplinary collaboration, encouraging researchers to explore the
        intersections of different disciplines and promote holistic
        understanding of societal dynamics.
      </p>

      <p className="pera-text">
        Join us on this exciting journey as we redefine the boundaries of social
        science research and strive for a more inclusive and informed world.
      </p>

      <img
        src="assets/images/chanakya-shashtra-new.png"
        className="logo-shastra"
      />

      <p className="pera-text">
        Chanakya Shastra, The Mega Journal of Business and Management, aims to
        provide a platform for researchers, academicians, and practitioners to
        share their cutting-edge insights, transformative ideas, and rigorous
        scholarly research in diverse areas of business and management.
      </p>

      <p className="pera-text">
        Chanakya Shastra derives its name from the ancient Indian text
        attributed to Chanakya, an eminent scholar and advisor to the Mauryan
        Empire.
      </p>

      <p className="pera-text">
        With a broad and inclusive scope, Chanakya Shastra welcomes
        contributions from various disciplines, promoting interdisciplinary
        dialogue and collaboration. We encourage submissions related to general
        management, marketing, finance and accounting, operations and supply
        chain management, human resources management, international business,
        organizational theory and behaviour, business ethics and corporate
        social responsibility, information systems and technology management,
        and business law and regulations amongst others.
      </p>

      <p className="pera-text">
        We also welcome studies that explore emerging trends, disruptive
        technologies, and transformative business models that shape the future
        of organizations.{" "}
      </p>

      <img
        src="assets/images/charakh-shashtra-new.png"
        className="logo-shastra"
      />

      <p className="pera-text">
        Charakh Shastra, The Mega Journal of Medicine aims to be a comprehensive
        platform for the publication of high-quality research in the field of
        medicine, encompassing various disciplines and specialties.
      </p>

      <p className="pera-text">
        The name Charakh Shastra is inspired by Charakh Samhita, written by the
        sage Charakh, which provides valuable insights into the principles of
        disease management, prevention, and overall well-being.
      </p>

      <p className="pera-text">
        We are dedicated to advancing the field of medicine through the
        dissemination of high-quality, peer-reviewed research. With a commitment
        to open access, we aim to make valuable medical knowledge freely
        available to a global audience, ensuring that healthcare professionals,
        researchers, and the general public can benefit from the latest
        advancements in medical science.
      </p>

      <p className="pera-text">
        By promoting evidence-based medicine and highlighting innovative
        approaches to healthcare delivery, our journal aims to improve patient
        outcomes, inform medical practice, and shape the future of medicine.
      </p>
      <div className="row align-items-center mb-4 shastra-logos">
        <div className="col-lg-8 left-logoss">
          {/* <img src="assets/images/samaj-sastra.png">
        <img src="assets/images/chanakya-shastra.png" className="shastra-right">
        <img src="assets/images/charakh-shastra.png">
        <img src="assets/images/abhiyantran-shatra.png" className="shastra-right">
        <img src="assets/images/soochana-shastra.png">
        <img src="assets/images/ayuryoga.png" className="shastra-right">
        <img src="assets/images/vigyan-shastra.png"> */}
          <div
            className="ag_megajournals_img_boxes aos-init aos-animate"
            data-aos="fade-up"
          >
            <ul>
              {JournalImages.map((item) => (
                <li>
                  <div className="ag_megajournals_img">
                    <div className="ag_livesign">
                      <span>Live</span>
                      <img src="assets/images/icon-live.svg" alt="Live Icon" />
                    </div>
                    <img src={item.image} alt="Shastra Image" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <h2 className="university-title">
            Are you a University, Institute or Society that wants to collaborate
            with us?
          </h2>
          <div className="register-button click-here-shastra">
            <button>Click here</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeghaJournals;
