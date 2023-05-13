import React from 'react'

const Footer = () => {
  return (
    <footer className="footer py-16 mt-8 md:mt-20 p-10 bg-[#643843]  text-white">
    <div>
      <span className="footer-title">Services</span> 
      <a className="link link-hover">Branding</a>
  
      <a className="link link-hover">Advertisement</a>
    </div> 
    <div>
      <span className="footer-title">Company</span> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
     
    </div> 
    <div>
      <span className="footer-title">Legal</span> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
    </div>
  </footer>
  )
}

export default Footer