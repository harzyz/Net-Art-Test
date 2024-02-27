import styles from './statistics.module.css'
import installations from '../../assets/images/3.png'

const Statistics = () => {
  return (
    <section className={styles.wrapper}>
      <h5>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION</h5>
      <div className={styles.sectionImage}>
        <img src={installations} alt="Installations" />
      </div>
      <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      <div className={styles.line}></div>
      <div className={styles.services}>
        CHEMICAL & PROCESS <span className={styles.pipe}>|</span>
        POWER<span className={styles.pipe}>|</span>
        WATER & WASTE WATER<span className={styles.pipe}>|</span>
        OIL & GAS <span className={styles.pipe}>|</span>
        PHARMA <span className={styles.pipe}>|</span>
        SUGARS & DISTILLERIES <span className={styles.pipe}>|</span>
        PAPER & PULP <span className={styles.pipe}>|</span>
        MARINE & DEFENCE <span className={styles.pipe}>|</span>
        METAL & MINING <span className={styles.pipe}>|</span>
        FOOD & BEVERAGE <span className={styles.pipe}>|</span>
        PETROCHEMICAL & REFINERIES <span className={styles.pipe}>|</span>
        SOLAR <span className={styles.pipe}>|</span>
        BUILDING <span className={styles.pipe}>|</span>
        HVAC <span className={styles.pipe}>|</span>
        FIRE FIGHTING<span className={styles.pipe}>|</span>
        AGRICULTURE & RESIDENTIAL
      </div>
    </section>
  )
}

export default Statistics
