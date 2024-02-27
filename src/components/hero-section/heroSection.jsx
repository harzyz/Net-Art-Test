import styles from './heroSection.module.css'
import award from '../../assets/images/1.png'
import presentation from '../../assets/images/2.png'

const HeroSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.award}>
        <img src={award} alt="Award" />
      </div>
      <div className={styles.sectionContent}>
        <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONVSERVATION AWARD 2018 for the 4th time</h4>
        <ul>
          <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 star rated energy efficient smart pumps withIoT enabled control panel.
          </li>
        </ul>
        <div>
          <img src={presentation} alt="" />
        </div>
        <p>Goverment of india has awarded the <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.Raj Kumar Singh, Honorable Minister of State.</p>
      </div>
    </section>
  )
}

export default HeroSection
