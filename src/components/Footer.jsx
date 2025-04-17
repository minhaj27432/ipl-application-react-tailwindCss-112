import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-8 text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">IPL Score Tracker</h2>
          <p className="text-sm text-gray-400">
            The ultimate destination for IPL cricket fans to stay updated with
            live scores, team standings, and match schedules.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm text-gray-300 ">
            <li className="hover:text-orange-600">
              <a href="#">Live Scores</a>
            </li>
            <li className="hover:text-orange-600">
              <a href="#">Schedule</a>
            </li>
            <li className="hover:text-orange-600">
              <a href="#">Teams</a>
            </li>
            <li className="hover:text-orange-600">
              <a href="#">Stats</a>
            </li>
            <li className="hover:text-orange-600">
              <a href="#">News</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Connect With Us</h2>
          <div className="flex space-x-4 mb-3">
            <a href="#" aria-label="Twitter">
              <Twitter className="text-gray-300 hover:text-orange-600 h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="text-gray-300 hover:text-orange-600 h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="text-gray-300 hover:text-orange-600 h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className="text-gray-300 hover:text-orange-600 h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Download our mobile app for a better experience
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © 2025 IPL Score Tracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
