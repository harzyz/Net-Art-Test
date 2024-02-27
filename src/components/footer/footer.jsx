import styles from './footer.module.css'
import { HiPhone } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div><HiPhone /> Toll free <b>1800 200 1234</b></div>
        <div><FaFacebook /> www.facebok.com/cripumps</div>
        <div><IoGlobeOutline /> www.crigroups.com</div>
      </div>
    </footer>
  )
}

export default Footer
