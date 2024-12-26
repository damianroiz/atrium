import styles from './HomeSection.module.css';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

function HomeSection() {
  return (
    <section className={styles.home__section}>
      <img src={'/staff.jpg'} alt="Staff Photo" />
      <ul>
        <li>
          <span className={styles.checkmark}>
            <IoMdCheckmarkCircleOutline />
          </span>
          <p>
            We proudly provide quality, comprehensive Physiotherapy, Massage
            Therapy and Custom Crafted Orthotics.
          </p>
        </li>
        <li>
          <span className={styles.checkmark}>
            <IoMdCheckmarkCircleOutline />
          </span>
          <p>
            You are in the right hands, counting on experienced therapists you
            can trust, to help you towards an optimal wellbeing.
          </p>
        </li>
        <li>
          <span className={styles.checkmark}>
            <IoMdCheckmarkCircleOutline />
          </span>
          <p>
            We believe that in order to maintain a pain free body it is
            necessary to understand a person's specific injury and prevent
            situations that might exacerbate or aggravate a condition.
          </p>
        </li>
        <li>
          <span className={styles.checkmark}>
            <IoMdCheckmarkCircleOutline />
          </span>
          <p>
            We integrate customized physiotherapy treatment with injury
            prevention techniques to ensure overall musculoskeletal well being.
          </p>
        </li>
        <li>
          <span className={styles.checkmark}>
            <IoMdCheckmarkCircleOutline />
          </span>
          <p>
            Our Physiotherapist combine a balanced approach after properly
            diagnosing problems.
          </p>
        </li>
        <li>
          <span className={styles.checkmark}>
            <IoMdCheckmarkCircleOutline />
          </span>
          <p>
            Physiotherapy modalities, Low Intensity Laser, deep tissue massage,
            active resistive strengthening techniques, proprioceptive
            rehabilitation, and therapeutic exercise are just some of the
            scientifically based solutions we apply to our patients during their
            treatment plan.
          </p>
        </li>
        <li>
          <span className={styles.checkmark}>
            <IoMdCheckmarkCircleOutline />
          </span>
          <p>
            We strive to educate our patients about their condition and
            collaborate in developing a realistic treatment plan. Our teams of
            Physiotherapists and Massage Therapists have exceptional credentials
            and more than 20 years of experience with handling all types of
            musculoskeletal, and neurological issues.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default HomeSection;

//   //export const AboutUsContent = {
//   image: "",
//   title: "About Us",
//   subtitle1:
//     "We proudly provide quality, comprehensive Physiotherapy, Massage Therapy and Custom Crafted Orthotics.",
//   subtitle2:
//     "You are in the right hands, counting on experienced therapists you can trust, to help you towards an optimal wellbeing.",
//   paragraph1:
//     "We believe that in order to maintain a pain free body it is necessary to understand a person's specific injury and prevent situations that might exacerbate or aggravate a condition.",
//   paragraph2:
//     "We integrate customized physiotherapy treatment with injury prevention techniques to ensure overall musculoskeletal well being.",
//   paragraph3:
//     "Our Physiotherapist combine a balanced approach after properly diagnosing problems.",
//   paragraph4:
//     "Physiotherapy modalities, Low Intensity Laser, deep tissue massage, active resistive strengthening techniques, proprioceptive rehabilitation and therapeutic exercise are just some of the scientifically based solutions we apply to our patients during their treatment plan.",
//   paragraph5:
//     "We strive to educate our patients about their condition and collaborate in developing a realistic treatment plan. Our teams of Physiotherapists and Massage Therapists have exceptional credentials and more than 20 years of experience with handling all types of musculoskeletal, and neurological issues.",
// };
