
const Header1 = () => {
  return (
    <div className="flex justify-around items-center py-2.5">
      <div className="hidden justify-between items-center gap-3 lg:flex text-gray-500 ">
        <a href="#">About us</a>
        <a href="#">My Account</a>
        <a href="#">Whishlist</a>
        <a href="#">Order Tracking</a>
      </div>
      <div className="md:flex justify-between items-center hidden">
        <span className="flex justify-between items-center gap-2"><p>Get great products up to 50% off</p> <p className="text-green-500">View Details</p></span>
      </div>
      <div className="sm:flex hidden justify-between items-center">
        <span className="flex justify-between items-center gap-2"><p>Need Help? Call us</p><p className="text-green-500">1800 900</p> <select><option>English</option></select><select><option>USD $</option></select></span>
      </div>
    </div>
  )
}

export default Header1