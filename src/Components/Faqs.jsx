import { useState } from 'react';
import styles from './FaqsMenu.module.css';

export default function FaqsMenu() {
  return (
    <div className={styles.accordion}>
      <AccordionItem
        id={1}
        question={'What should I expect during my first visit?'}
      >
        During your initial visit, our licensed therapists will conduct a
        thorough assessment, discussing your medical history and specific
        concerns. This allows us to tailor a personalized treatment plan.
      </AccordionItem>
      <AccordionItem
        id={2}
        question={'What should I wear to my physiotherapy sessions?'}
      >
        Wear comfortable clothing that allows for ease of movement. Depending on
        the nature of your treatment, your therapist may recommend specific
        attire to facilitate the assessment and therapy.
      </AccordionItem>
      <AccordionItem
        id={3}
        question={'How long is a typical physiotherapy session?'}
      >
        The duration of a session can vary based on your treatment plan.
        Generally, sessions last between 45 to 60 minutes, but your therapist
        will provide more specific information during your initial consultation.
      </AccordionItem>
      <AccordionItem id={4} question={'What types of conditions do you treat?'}>
        Our licensed therapists specialize in a wide range of conditions,
        including musculoskeletal issues, injuries, and rehabilitation. We also
        offer specialized services such as acupuncture, IMS, and pelvic floor
        physiotherapy.
      </AccordionItem>
      <AccordionItem id={5} question={'Can I choose a specific therapist?'}>
        Yes, you can express a preference for a specific therapist when
        scheduling your appointment. We will do our best to accommodate your
        request, ensuring you feel comfortable and confident in your chosen
        therapist.
      </AccordionItem>
      <AccordionItem
        id={6}
        question={'What COVID-19 safety measures are in place?'}
      >
        We prioritize your safety. Our clinic adheres to strict COVID-19
        protocols, including enhanced sanitation, social distancing, and the use
        of personal protective equipment. Please contact us if you have specific
        concerns or questions regarding our safety measures.
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ id, question, children }) {
  return (
    <div className={styles.question}>
      <input type="checkbox" name="panel" id={id}></input>
      <label className={styles.label} htmlFor={id}>
        <span>{question}</span>
      </label>
      <div className={styles.answer}>
        <p>{children}</p>
      </div>
    </div>
  );
}
