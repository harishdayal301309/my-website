import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-text text-white py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-outfit text-sage mb-2">Shreyul Kankariya</h2>
          <p className="text-gray-400 text-sm">Author, Poet & Content Creator</p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://www.instagram.com/yuuuiiiiii08?igsh=dG03a2djNnZ6dzRq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><FaInstagram size={20} /></a>
          <a href="https://www.linkedin.com/in/shreyul-kankariya-8aa746330?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><FaLinkedin size={20} /></a>
          <a href="https://youtu.be/8QYv4wUdGdU?si=fCIb3yK3yk9WhJy0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sage transition-colors"><FaYoutube size={20} /></a>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/login" className="hover:text-white transition-colors">Admin</Link>
          <span>&copy; {new Date().getFullYear()} Shreyul Kankariya</span>
        </div>
      </div>
    </footer>
  );
}
