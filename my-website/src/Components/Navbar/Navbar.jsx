import React from 'react'

const Navbar = () => {
  return (
    <>
    <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
           <div class="row">{/* <!-- Bootstrap row to hold columns for layout --> */}
            <div class="col-sm-4 offset-md-1 py-4"> {/* <!-- Single column with padding and offset by 1 column --> */}
              <h4 class="text-white">Social Media</h4>
              {/* <!-- List of social media links --> */}
              <ul class="list-unstyled">
                <li><a href="https://www.linkedin.com/in/matt-justus-947967239/" class="text-white" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> Follow on LinkedIn</a></li>
                <li><a href="https://github.com/Justus78" class="text-white" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Follow on GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
      {/* <!-- Navbar with dark background --> */}
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container">
          {/* <!-- Branding/logo section --> */}
          <a href="#" class="navbar-brand d-flex align-items-center">
            
            <img src="/Media/Matt-Images/IMG_0735.jpg" alt="Profile Picture" height="30px" width="30px" class="img-fluid rounded-circle mb-3" />
    
            <strong class="ms-2">Matt Justus</strong>
          </a>
          
          <div class="me-auto">
            <a href="/index.html"><button class="btn btn-light me-2">Home</button></a>
            <a href="/Pages/AboutMe.html"><button class="btn btn-light me-2">About Me</button></a>
            <a href="/Assets/Matt-Justus-Resume.pdf" target="_blank" rel="noopener noreferrer"><button class="btn btn-light me-2">My Resume</button></a>
          </div>
    
          <div class="d-flex align-items-center">
            <h5 class="text-white"><strong>Social Media Links </strong></h5>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
    
        </div>
      </div> 
    </>
       )
}

export default Navbar