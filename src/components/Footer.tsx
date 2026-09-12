import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Dev Stack" className="h-8 mb-3" />
          <p className="text-gray-500 text-sm">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>
          <div className="flex gap-4 mt-4 text-sm text-gray-600">
            <a href="#" className="hover:text-pink-500">GitHub</a>
            <a href="#" className="hover:text-pink-500">Twitter</a>
            <a href="#" className="hover:text-pink-500">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="text-gray-500 text-sm flex flex-col gap-2">
            <li><a href="#" className="hover:text-pink-500">Home</a></li>
            <li><a href="#" className="hover:text-pink-500">Technologies</a></li>
            <li><a href="#" className="hover:text-pink-500">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="text-gray-500 text-sm flex flex-col gap-2">
            <li><a href="#" className="hover:text-pink-500">About</a></li>
            <li><a href="#" className="hover:text-pink-500">Contact</a></li>
            <li><a href="#" className="hover:text-pink-500">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="text-gray-500 text-sm flex flex-col gap-2">
            <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-500">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 max-w-7xl mx-auto">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-pink-500">Privacy</a>
          <a href="#" className="hover:text-pink-500">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;