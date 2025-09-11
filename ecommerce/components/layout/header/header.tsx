"use client"
import { useAuth } from "@/context/AuthContext"
import Image from "react-bootstrap"
import Link from "next/link"
import { GiMountains } from "react-icons/gi"

const Header = () => {
  const { loggedIn, user, logout } = useAuth()
  console.log("firstname: ", user?.firstName)
  return (
    <header className='p-3 sticky top-0 z-4 bg-white w-[100%]'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <a
            href='/'
            className='d-flex align-items-center mr-[30px] mb-2 mb-lg-0 text-black text-decoration-none font-bold text-2xl gap-4'
          >
            <GiMountains size={36} />
            EcoCart
          </a>
          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <a href='/' className='nav-link px-2 text-black'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-black'>
                Features
              </a>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-black'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-black'>
                FAQs
              </a>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-black'>
                About
              </a>
            </li>
          </ul>
          <div>
            {loggedIn ? (
              <>
                <span>Welcome, {user?.firstName}</span>
                <Link href='/profile'>Profile</Link>
                <button onClick={logout} className='text-red-500'>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href='/login'>Login</Link>
                <Link href='/signup'>Sign Up</Link>
              </>
            )}
          </div>
          <form
            className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'
            role='search'
          >
            <input
              type='search'
              className='form-control'
              placeholder='Search...'
              aria-label='Search'
            />
          </form>
          <div className='text-end'>
            <button type='button' className='btn btn-outline-dark me-2'>
              <Link className='btn' href={"/login"}>
                Login
              </Link>
            </button>
            <button type='button' className='btn btn-warning'>
              <Link className='btn' href={"/signup"}>
                Sign-up
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
