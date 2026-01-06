import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-za-emerald text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Zakat Academy</h3>
            <p className="text-sm opacity-90">
              Learn the fundamentals of Zakat and deepen your understanding of Islamic giving.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/courses" className="hover:underline">Courses</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:underline">All Courses</Link></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm opacity-90">
              Email: info@zakatacademy.com<br />
              Follow us on social media
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Zakat Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

