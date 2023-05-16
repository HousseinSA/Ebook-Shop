import {Github, Instagram, Linkedin} from "react-bootstrap-icons"
import {Link} from "react-router-dom"
export const Footer = () => {
const date = new Date().getFullYear()
  return (
    <footer className="flex justify-between p-8 flex-wrap dark:bg-slate-900 dark:text-white">
      <p> {date} &copy; <Link to={'/'}>E-Book Store.</Link>  All right Reserved</p>
      <div className="flex gap-3">
        <Link to="https://github.com/HousseinSA" target="_blank">
          <Github />
        </Link>
        <Link to={"https://www.linkedin.com/in/husseinsa/"} target="_blank">
          <Linkedin />
        </Link>
        <Link to={"https://www.instagram.com/houssein_11"} target="_blank">
          <Instagram />
        </Link>
      </div>
    </footer>
  )
}
