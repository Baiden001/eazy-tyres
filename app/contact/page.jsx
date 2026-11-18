
import { PageHead } from '../../components/Ui';
import ContactForm from '../../components/ContactForm';
import { CONTACT } from '../../lib/data';
import { pageMeta } from '../../lib/site-config';

export const metadata = pageMeta(
  'Contact',
  'Contact Eazy Road Tyres in Tarkwa, Ghana by WhatsApp, phone or email for truck tyres, trailer tyres, commercial fleet tyres, fitment and emergency support.',
  '/contact'
);

export default function Contact() {
  return (
    <>
      <PageHead
        title="Contact"
        sub="Tell us what you run and what you need."
      />

      <section className="blk two">
        <div>
          <h2>{CONTACT.name}</h2>

          <p>
            <b>Location</b>
            <br />
            {CONTACT.location}
          </p>

          <p>
            <b>Telephone</b>
            <br />
            <a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a>
          </p>

          <p>
            <b>Email</b>
            <br />
            <a href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
          </p>

          <p>
            <b>Website</b>
            <br />
            <a
              href={CONTACT.web}
              target="_blank"
              rel="noopener noreferrer"
            >
              eazytyres.ashelitegroups.com
            </a>
          </p>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
