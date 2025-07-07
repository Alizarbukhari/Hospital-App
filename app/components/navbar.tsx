import Link from "next/link"
import { Menu, Search, User } from "lucide-react"

const navigationItems = [
  { name: "관리팀", href: "/management" },
  { name: "병원둘러보기", href: "/hospital-tour" },
  { name: "입원안내", href: "/admission" },
  { name: "간병안내", href: "/care-guide" },
]

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Menu and Logo */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <Menu className="h-5 w-5 text-gray-600" />
            </button>

            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">에스엠요양병원</span>
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side - Search and User icons */}
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <User className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
