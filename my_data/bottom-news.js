const BottomNews = () => {
  return (
    <div className="row mb-4 mt-0 mt-md-4">
      <BottomNewsContent 
        numb="01" 
        image="assets/images/image-retro-pcs.jpg" 
        title="Reviving Retro PCs"
        article="What happens when old PCs are given modern upgrades?"
      />
      <BottomNewsContent 
        numb="02" 
        image="assets/images/image-top-laptops.jpg" 
        title="Top 10 Laptops of 2022"
        article="Our best picks for various needs and budgets."
      />
      <BottomNewsContent 
        numb="03" 
        image="assets/images/image-gaming-growth.jpg" 
        title="The Growth of Gaming"
        article="How the pandemic has sparked fresh opportunities."
      />
    </div>
  );
};

const BottomNewsContent = ({numb,image,title,article}) => {
  return (
    <div className="col-md-6 col-lg-4 col-12 mb-4 mb-lg-0">
      <div className="row">
        <div className="col-4"><img src={image} className="img-fluid" /></div>
        <div className="col-8 d-flex align-content-between flex-wrap">
        <div>
          <h3>
            {numb}
          </h3>
        </div>
          <div>
            <h5><a href="#">{title}</a></h5>
            <p className="mb-0">{article}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <BottomNews />,
  document.getElementById('bottom-news')
);