export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Amrita Model United Nations Society</h3>
            <p className="text-gray-400 break-words">
              Empowering future diplomats through Model United Nations conferences and debates.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/achievements" className="text-gray-400 hover:text-white">Achievements</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-white">Events</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-white">Team</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: <a href="mailto:mun@cb.amrita.edu" className="hover:text-white">mun@cb.amrita.edu</a></li>
              <li className="break-words">
                Address: Amrita Model United Nations Society, Amrita Vishwa Vidyapeetham, Amritanagar, Coimbatore - 641 112, Tamil Nadu, India
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        {/* Credits aligned to right on large screens, centered on small screens */}
        <div className="mt-8 text-sm text-gray-400 text-center sm:text-right">
          <p>Website credits: Shrish Kumar Lohchab (CB.EN.U4CSE22048)</p>
        </div>

        <div className="border-t border-gray-800 mt-4 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Amrita Model United Nations Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
