// src/components/ContactModal/ContactModal.js
import React from 'react';
import './ContactModal.css';

function ContactModal() {
  return (
    <div className="modal fade" id="contactModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-header bg-dark-green text-white d-flex justify-content-between align-items-center py-2 px-3">
            <h5 id="contactModalLabel" className="modal-title fs-6 mb-0">
            Contact Dry Pandas
            </h5>
            <button type="button" className="btn-close btn-close-white m-0 p-1" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-0">
            <div className="container-fluid">
              <div className="row g-0 flex-column flex-lg-row">
                {/* Left: Info */}
                <div className="col-12 col-lg-6 contact-info-section p-6">
                  <h6 className="text-dark-green mb-2"><i className="bi bi-info-circle-fill me-1"></i>Our Info</h6>
                  <div className="contact-item bg-light-green p-2 rounded mb-2">
                    <i className="bi bi-telephone-fill text-dark-green fs-6"></i>
                    <span className="fs-6">+91 7708509046 <br/> <span>+91 8220353966</span> </span>
                  </div>
                  <div className="contact-item bg-light-green p-2 rounded mb-2">
                    <i className="bi bi-envelope-fill text-dark-green fs-6"></i>
                    <span className="fs-6">drypandafoods@gmail.com</span>
                  </div>
                  <div className="contact-item bg-light-green p-2 rounded mb-2">
                    <i className="bi bi-geo-alt-fill text-dark-green fs-6"></i>
                    <span className="fs-6">Visakhapatnam, AP</span>
                  </div>
                  <div className="map-container mt-2 rounded overflow-hidden border border-light-green">
                    <iframe
                      src="https://maps.google.com/maps?q=Visakhapatnam&output=embed"
                      loading="lazy"
                      className="w-100"
                      height="120"
                      style={{ border: 0 }}
                      title="Map"
                    ></iframe>
                  </div>
                </div>
                {/* Right: Form */}
                <div className="col-12 col-lg-6 p-3">
                  <h6 className="text-dark-green mb-2"><i className="bi bi-send-fill me-1"></i>Send Message</h6>
                  <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!') }}>
                    <div className="mb-2">
                      <input type="text" className="form-control form-control-sm border-light-green" placeholder="Your Name" required />
                    </div>
                    <div className="mb-2">
                      <input type="tel" pattern="\d{10}"  className="form-control form-control-sm border-light-green" placeholder="Mobile Number" required />
                    </div>
                    <div className="mb-2">
                      <input type="email" pattern="[a-zA-Z0-9._%+-]+@gmail\.com" className="form-control form-control-sm border-light-green" placeholder="Email" required />
                    </div>
                    <div className="mb-2">
                      <textarea className="form-control form-control-sm border-light-green" rows="2" placeholder="Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark-green w-100 py-2 d-flex align-items-center justify-content-center gap-2">
                    <i className="bi bi-send-fill"></i>
                    <span>Send Message</span>
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
