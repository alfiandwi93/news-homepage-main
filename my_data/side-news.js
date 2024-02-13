const SideNews = () => {
  return (
      <div className="card d-inline-block rounded-0 p-4 g-5 my-5 my-md-0">
        <h1>New</h1>
        <div className="d-flex align-content-strech flex-wrap h-100 pt-4 pb-5">
          <SideNewsContent title="Hydrogen VS Electric Cars" article="Will hydrogen-fueled cars ever catch up to EVs?" />
            <div className="w-100 d-inline-block"><hr /></div>
          <SideNewsContent title="The Downsides of AI Artistry" article="What are the possible adverse effects of on-demand AI image generation?" />
            <div className="w-100 d-inline-block"><hr /></div>
          <SideNewsContent title="Is VC Funding Drying Up?" article="Private funding by VC firms is down 50% YOY. We take a look at what that means." />
        </div>
      </div>
  );
};

const SideNewsContent = ({title,article}) => {
  return (
    <div>
      <h5 className="mb-3"><a href="#">{title}</a></h5>
    <p>
      {article}
    </p>
   </div>
  );
};

ReactDOM.render(
  <SideNews />,
  document.getElementById('side-news')
);