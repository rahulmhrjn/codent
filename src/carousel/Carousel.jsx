import React from 'react';

const Carousel = () => {
  return (
  <>
    <div id="carouselExampleIndicators" className="carousel slide position-relative">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  {/* Social Media Icons */}
  <div className="position-absolute top-50 end-0 translate-middle-y me-3 d-flex flex-column" style={{ zIndex: 1000 }}>
    <a href="#" className="d-block">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" width="50" height="50" className="bg-primary p-2 rounded"/>
    </a>
    <a href="#" className="d-block">
      <img src="https://yt3.googleusercontent.com/n2F5svHzfGDDEIRWDKt6WF_jeJqwzba7NTKx5lbVzNVa9lKnK5iVT1pH824C-g76IRzWR1_hjA=s900-c-k-c0x00ffffff-no-rj" alt="TikTok" width="50" height="50" className="bg-dark p-2 rounded"/>
    </a>
    <a href="#" className="d-block">
      <img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png" alt="YouTube" width="50" height="50" className="bg-danger p-2 rounded"/>
    </a>
    <a href="#" className="d-block">
      <img src="https://img.freepik.com/free-vector/twitter-app-new-logo-x-black-background_1017-45425.jpg?semt=ais_hybrid" alt="X" width="50" height="50" className="bg-black p-2 rounded"/>
    </a>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active position-relative">
      <img src="https://t3.ftcdn.net/jpg/02/81/21/10/360_F_281211036_24KPea5poawt4mXYlEjRUwsCgomtjoVc.jpg" className="d-block w-100 h-[600px]" alt="Medical College"/>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>

      <div className="position-absolute top-50 start-0 translate-middle-y text-start text-white w-50 ms-5">
        <h1 className="text-uppercase fs-6">Healing Futures</h1>
        <h2 className="fw-bold fs-1">Empowering Future Healers at National Medical College</h2>
        <p>Join us in our commitment to excellence in medical education and compassionate healthcare.</p>
        <a href="#" className="btn btn-success">Learn More</a>
      </div>
    </div>

    <div className="carousel-item active position-relative">
      <img src="https://thumbs.dreamstime.com/b/healthcare-business-graph-medical-examination-businessman-analyzing-data-growth-chart-blured-background-154742173.jpg" className="d-block w-100 h-[600px]" alt="Medical College"/>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>

      <div className="position-absolute top-50 start-0 translate-middle-y text-start text-white w-50 ms-5">
        <h1 className="text-uppercase fs-6">Healing Futures</h1>
        <h2 className="fw-bold fs-1">Empowering Future Healers at National Medical College</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien ac augue auctor convallis. 
            Nullam in orci ut purus euismod interdum. Fusce vitae ultricies lorem. In hac habitasse platea dictumst.
            </p>
      </div>
    </div>

    <div className="carousel-item active position-relative">
      <img src="https://cdn.create.vista.com/api/media/small/159522648/stock-photo-healthcare-costs-and-fees-concept-hand-of-smart-doctor-used-a-ca" className="d-block w-100 h-[600px]" alt="Medical College"/>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>

      <div className="position-absolute top-50 start-0 translate-middle-y text-start text-white w-50 ms-5">
        <h1 className="text-uppercase fs-6">Healing Futures</h1>
        <h2 className="fw-bold fs-1">Empowering Future Healers at National Medical College</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien ac augue auctor convallis. 
            Nullam in orci ut purus euismod interdum. Fusce vitae ultricies lorem. In hac habitasse platea dictumst.
            </p>
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
  );
};

export default Carousel;
