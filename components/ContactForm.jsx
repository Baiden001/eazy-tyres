
'use client';

import { useState } from 'react';
import { BRAND_DETAILS, WA } from '../lib/data';

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key) => (data.get(key) || '').toString().trim();

    const nextErrors = {};
    if (!value('name')) nextErrors.name = 'Please enter your full name.';
    if (!value('phone')) nextErrors.phone = 'Please enter a phone number.';
    if (!value('vehicle')) nextErrors.vehicle = 'Please select a vehicle type.';
    if (!value('quantity')) nextErrors.quantity = 'Please enter the quantity required.';

    setErrors(nextErrors);
    setSent(false);

    if (Object.keys(nextErrors).length) return;

    const enquiry = [
      'Hello Eazy Road Tyres, I would like to request a tyre quotation.',
      '',
      `Name: ${value('name')}`,
      `Phone: ${value('phone')}`,
      value('company') ? `Company / Fleet: ${value('company')}` : null,
      `Vehicle type: ${value('vehicle')}`,
      value('size') ? `Tyre size: ${value('size')}` : 'Tyre size: Please advise',
      value('brand') ? `Preferred brand: ${value('brand')}` : 'Preferred brand: No preference',
      `Quantity: ${value('quantity')}`,
      value('location') ? `Delivery / service location: ${value('location')}` : null,
      value('message') ? `Additional details: ${value('message')}` : null,
    ].filter(Boolean).join('\n');

    window.open(
      `${WA}?text=${encodeURIComponent(enquiry)}`,
      '_blank',
      'noopener,noreferrer'
    );

    setSent(true);
    form.reset();
  };

  const Field = ({ name, label, children }) => (
    <label className="f" htmlFor={name}>
      {label}
      {children}
      {errors[name] && (
        <span className="err" role="alert">{errors[name]}</span>
      )}
    </label>
  );

  return (
    <div className="quote-form-wrap">
      <div className="quote-form-heading">
        <span>REQUEST A QUOTE</span>
        <h2>Tell us what you need.</h2>
        <p>
          Share a few details about your vehicle and tyre requirements.
          We’ll help you find a suitable option.
        </p>
      </div>

      <form className="quote-form" onSubmit={submit} noValidate>
        <div className="quote-fields">
          <Field name="name" label="Full name *">
            <input
              id="name"
              name="name"
              autoComplete="name"
              aria-invalid={!!errors.name}
            />
          </Field>

          <Field name="phone" label="Phone number *">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+233..."
              aria-invalid={!!errors.phone}
            />
          </Field>

          <Field name="company" label="Company / fleet name">
            <input
              id="company"
              name="company"
              autoComplete="organization"
            />
          </Field>

          <Field name="vehicle" label="Vehicle type *">
            <select
              id="vehicle"
              name="vehicle"
              defaultValue=""
              aria-invalid={!!errors.vehicle}
            >
              <option value="" disabled>Select vehicle type</option>
              <option>Tipper / heavy truck</option>
              <option>Trailer</option>
              <option>Light commercial truck</option>
              <option>Pickup</option>
              <option>SUV</option>
              <option>Saloon car</option>
              <option>Other / not sure</option>
            </select>
          </Field>

          <Field name="size" label="Tyre size">
            <input
              id="size"
              name="size"
              placeholder="e.g. 315/80R22.5 or 265/65R17"
            />
          </Field>

          <Field name="brand" label="Preferred tyre brand">
            <select id="brand" name="brand" defaultValue="">
              <option value="">No preference / please advise</option>
              {BRAND_DETAILS.map((brand) => (
                <option key={brand.name}>{brand.name}</option>
              ))}
            </select>
          </Field>

          <Field name="quantity" label="Quantity required *">
            <input
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 4"
              aria-invalid={!!errors.quantity}
            />
          </Field>

          <Field name="location" label="Delivery / service location">
            <input
              id="location"
              name="location"
              placeholder="e.g. Tarkwa, Accra, Takoradi"
              autoComplete="address-level2"
            />
          </Field>

          <Field name="message" label="Additional details">
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your load, terrain, usage or other requirements."
            />
          </Field>
        </div>

        <button className="btn" type="submit">
          Continue to WhatsApp <span aria-hidden="true">→</span>
        </button>

        <p className="quote-form-note">
          Your enquiry will open in WhatsApp so you can review and send it to our team.
        </p>

        {sent && (
          <p className="ok" role="status">
            Your enquiry has been prepared in WhatsApp. Please send the message to complete your request.
          </p>
        )}
      </form>
    </div>
  );
}
