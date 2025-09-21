"use client"
import { useAuth } from "@/context/AuthContext"
import { useCart } from "@/context/CartContext"
import Image, { Button } from "react-bootstrap"
import Link from "next/link"
import { GiMountains } from "react-icons/gi"
import { FiShoppingCart } from "react-icons/fi"
import { FaCheese } from "react-icons/fa6"
import { CgProfile } from "react-icons/cg"
import { IoSearch } from "react-icons/io5"

const Header = () => {
  const { loggedIn, user, logout } = useAuth()
  const { cart } = useCart()
  return (
    <header className='p-3 sticky top-0 z-4 bg-[#493628] w-[100%]'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <Link
            href='/'
            className='d-flex align-items-center mr-[30px] mb-2 mb-lg-0 text-white text-decoration-none font-bold text-2xl gap-4'
          >
            <FaCheese size={36} />
            EcoCarts
          </Link>
          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <Link href='/products' className='nav-link px-2 text-white'>
                Products
              </Link>
            </li>
            <li>
              <Link href='#' className='nav-link px-2 text-white'>
                About us
              </Link>
            </li>
            <li>
              <Link href='#' className='nav-link px-2 text-white'>
                Contact us
              </Link>
            </li>
          </ul>
          <div className='flex items-center gap-4'>
            <div className='flex items-center mr-4 bg-[#FFFBE9] rounded-full px-3'>
              <input
                type='search'
                className='bg-[#FFFBE9] rounded-full py-1 border-none focus:outline-none focus:ring-0'
                placeholder='Search...'
                aria-label='Search'
              />
              <IoSearch size={26} color='#DCD7C9' />
            </div>

            <div>
              <Link href='/cart' className='relative'>
                <FiShoppingCart size={22} color='black' />
                {cart.length > 0 && loggedIn && (
                  <span className='absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5'>
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>

            <div>
              <Link href='/profile' className='!text-black'>
                <CgProfile size={26} />
              </Link>
            </div>

            <div>
              {loggedIn ? (
                <div className='flex items-center gap-4'>
                  <Button
                    className='rounded-full'
                    onClick={logout}
                    type='button'
                    variant='light'
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className='text-end'>
                  <Link
                    className='btn btn-dark !rounded-full px-3 !bg-[#A27B5C] !border-none'
                    href={"/login"}
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
