const TopNews = () => {
  return (
    <div className="h-100 d-inline-block">
  <div className="row">
    <div className="col-12">
      <div>
        <img src="assets/images/image-web-3-desktop.jpg" className="img-fluid d-none d-md-block" />
        <img src="assets/images/image-web-3-mobile.jpg" className="img-fluid d-md-none" />
      </div>
    </div>
  </div>
  <div className="row mt-4">
    <div className="col-md-6 col-12">
      <div className="card bg-transparent border-0">
        <h1>The Bright Future of Web 3.0?</h1>
      </div>
    </div>
    <div className="col-md-6 col-12">
      <div className="card h-100 d-inline-block border-0 position-relative">
        <p>
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise?
        </p>
        <button className="btn py-2 px-3 mt-2 mt-md-0 rounded-0 bottom-0 start-0">READ MORE</button>
      </div>
    </div>
  </div>
</div>

  );
};

ReactDOM.render(
  <TopNews />,
  document.getElementById('top-news')
);