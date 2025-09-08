"use client"

const Footer = () => {
  return (
    <div className="fixed bottom-0 !w-[100%]">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
          </a> 
          <span className="mb-3 mb-md-0 text-body-secondary">© 2025 Company, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#" aria-label="Instagram">
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#" aria-label="Facebook">
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
