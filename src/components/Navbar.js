import Dhondt from "../Victor_D'hondt.jpg"
import '../App.css';

export default function NavBar() {
  return (
<header className="flex justify-between items-center py-6">
<img src={Dhondt} className="h-8" alt="Logo" />
<nav>
  <ul className="flex space-x-4">
    <li>
      <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
        Home
      </a>
    </li>
    <li>
      <a href="/calculator" className="font-medium text-gray-500 hover:text-gray-900">
        Calculator
      </a>
    </li>
    <li>
    </li>
  </ul>
</nav>
</header>
  )

}