import logo from '../assets/images/1_JEHLmWo6_SrpHPiP4AimIw.png';

export default function Navbar() {
  return (
    <nav className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo" width="130px" />
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#social">Social</a>
          <a href="#call" className="rounded-full py-2 px-5 bg-orange-600 text-white hover:bg-violet-700">Call me</a>
        </div>
      </div>
    </nav>
  );
}
