import Link from 'next/link'

const Footer = () => {
  return (
    <>
<div className="copyright">
    <div className="copy">
        Copyright @ 2022  &nbsp; <Link href="/"><a className="footerlink">Website.com</a></Link>  &nbsp; All Rights Reserved
    </div>
</div>
<footer>

    <ul>

  <li><Link href="/about"><a>About Us</a></Link></li>
  <li><Link href="/contact"><a>Contact Us</a></Link></li>
  <li><Link href="/privacypolicy"><a>Privacy Policy</a></Link></li>
  <li><Link href="/disclaimer"><a>Disclaimer</a></Link></li>

    </ul>
    
</footer>


    </>
  )
}

export default Footer