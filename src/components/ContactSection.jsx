import React, { useState } from 'react';
import sunsetBg from '../assets/1b19403bab4a63c4a66d546899489ea83c44c42e.jpg';
import SectionHeader from './common/SectionHeader';
import CTAButton from './common/CTAButton';
import { SERVICES_DATA } from '../data/servicesData';
import { REFERRAL_OPTIONS } from '../data/companyData';
import '../App.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    industry: '',
    service: '',
    referral: '',
    requirements: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section pt-6 pb-5">
      <div className="contact-banner-wrapper position-relative d-flex align-items-center justify-content-center my-4 my-lg-5">
        <div className="contact-banner-arches position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex align-items-center justify-content-center">
          <svg
            className="contact-arch-svg outer-arch"
            viewBox="0 0 1166 504"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M583 1.5C743.836 1.5 889.375 29.6815 994.648 75.1855C1047.29 97.9387 1089.79 124.993 1119.11 154.959C1148.43 184.918 1164.5 217.709 1164.5 252C1164.5 286.291 1148.43 319.082 1119.11 349.041C1089.79 379.007 1047.29 406.061 994.648 428.814C889.375 474.319 743.836 502.5 583 502.5C422.164 502.5 276.625 474.319 171.352 428.814C118.712 406.061 76.2089 379.007 46.8867 349.041C17.5712 319.082 1.5 286.291 1.5 252C1.5 217.709 17.5712 184.918 46.8867 154.959C76.2089 124.993 118.712 97.9387 171.352 75.1855C276.625 29.6815 422.164 1.5 583 1.5Z"
              stroke="#FFA600"
              strokeWidth="3"
            />
          </svg>
          <svg
            className="contact-arch-svg inner-arch"
            viewBox="0 0 1019 441"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M509.44 1.5C649.964 1.50002 777.113 26.1229 869.074 65.873C915.057 85.7492 952.175 109.378 977.774 135.54C1003.37 161.695 1017.38 190.303 1017.38 220.204C1017.38 250.105 1003.37 278.713 977.774 304.868C952.175 331.03 915.057 354.659 869.074 374.535C777.113 414.285 649.964 438.908 509.44 438.908C368.917 438.908 241.768 414.285 149.807 374.535C103.823 354.659 66.7063 331.03 41.1064 304.868C15.5133 278.713 1.50002 250.105 1.5 220.204C1.5 190.303 15.5133 161.695 41.1064 135.54C66.7063 109.378 103.823 85.7492 149.807 65.873C241.768 26.1229 368.917 1.5 509.44 1.5Z"
              stroke="#FFA600"
              strokeWidth="3"
            />
          </svg>
        </div>
        <img
          src={sunsetBg}
          alt="Contact Network Background"
          className="contact-banner-bg position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />
        <div className="contact-banner-content position-relative z-3 text-center px-3 py-4 py-lg-5">
          <SectionHeader
            title="CONTACT"
            highlightedText="US"
            highlightClass="highlight-orange"
            className="contact-main-title mb-3"
          />
          <p className="contact-banner-desc mx-auto">
            Have a question or need a digital solution? Get in touch with our team to discuss your requirements and explore the right solution for your business.
          </p>
        </div>
      </div>

      <div className="container-fluid px-3 px-md-4 px-lg-5 contact-form-wrapper mt-4 mt-lg-5 pt-3">
        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-12 col-lg-5 text-center text-lg-start contact-left-info">
            <h4 className="contact-get-touch mb-2">Get in Touch</h4>
            <h3 className="contact-amazing-title mb-3">
              Let’s build something amazing together
            </h3>
            <p className="contact-left-desc mb-0">
              Tell us about your project and we'll get back to you within one business day with a clear plan and estimate.
            </p>
          </div>

          <div className="col-12 col-lg-7 mt-5">
            <div className="contact-gold-border-card p-3 p-sm-4 p-md-5 rounded-4 mt-5">
              <div className="contact-right-form">
                {submitted ? (
                  <div className="text-center p-4 p-md-5 bg-dark bg-opacity-50 rounded-4 border border-secondary">
                    <h3 className="highlight-orange fw-bold fs-4 mb-2">
                      Enquiry Submitted Successfully!
                    </h3>
                    <p className="text-light small mb-3">
                      We typically respond within 24 hours.
                    </p>
                    <CTAButton
                      onClick={() => setSubmitted(false)}
                      className="enquire-now-btn mt-2"
                      style={{ cursor: 'pointer' }}
                    >
                      Send Another Message
                    </CTAButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 mb-3">
                      <div className="col-12 col-md-6 form-group">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="form-input-control"
                        />
                      </div>

                      <div className="col-12 col-md-6 form-group">
                        <label className="form-label">Email-Address</label>
                        <input
                          type="email"
                          required
                          placeholder="Your@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="form-input-control"
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-12 col-md-6 form-group">
                        <label className="form-label">Mobile Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="-91 0000000000"
                          value={formData.mobile}
                          onChange={(e) =>
                            setFormData({ ...formData, mobile: e.target.value })
                          }
                          className="form-input-control"
                        />
                      </div>

                      <div className="col-12 col-md-6 form-group">
                        <label className="form-label">Business Industry</label>
                        <input
                          type="text"
                          placeholder="eg, Retail, Healthcare"
                          value={formData.industry}
                          onChange={(e) =>
                            setFormData({ ...formData, industry: e.target.value })
                          }
                          className="form-input-control"
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-12 col-md-6 form-group">
                        <label className="form-label">Service Required</label>
                        <select
                          required
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="form-input-control"
                        >
                          <option value="">Select a service</option>
                          {SERVICES_DATA.map((svc) => (
                            <option key={svc.id} value={svc.title}>
                              {svc.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-12 col-md-6 form-group">
                        <label className="form-label">
                          How did you know about us?
                        </label>
                        <select
                          value={formData.referral}
                          onChange={(e) =>
                            setFormData({ ...formData, referral: e.target.value })
                          }
                          className="form-input-control"
                        >
                          <option value="">Select an option</option>
                          {REFERRAL_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group mb-4">
                      <label className="form-label">Business Goals</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us what you're looking to build, improve, or grow..."
                        value={formData.requirements}
                        onChange={(e) =>
                          setFormData({ ...formData, requirements: e.target.value })
                        }
                        className="form-input-control"
                        style={{ resize: 'none' }}
                      />
                    </div>

                    <div className="text-center">
                      <CTAButton type="submit" className="share-req-btn">
                        Share Your Requirements
                      </CTAButton>

                      <p className="respond-time-text mt-2 mb-0">
                        We Typically Respond within 24 hours
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

