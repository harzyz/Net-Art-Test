import styles from './header.module.css'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
    </div>
  )
}

export default Header
