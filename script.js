class MyPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      page:1,
    };
  }
  render(){
    return( 
      <div>
 <div class="project-top tile">
      <h3>Projects (3)</h3>
      <button class="project-btn active-btn">Responsive</button>
    </div>
    <div class="project-box-group">
    <div class="project-box tile">
      <img class="project-img" src="https://raw.githubusercontent.com/wy-chan/devchallenges_Portfolio/main/images/screen_profilep1.png" alt="project image"/>
      <p class="tag">#HTML #CSS #Responsive</p>
      <h4>Portfolio Page</h4>
      <p>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</p>
      <div class="project-btn-s-box">
      <button class="project-btn-s active-btn" onclick="window.open('https://wy-chan.github.io/devchallenges_Portfolio/','_blank')" >Demo</button>
      <button class="project-btn-s" onclick="window.open('https://github.com/wy-chan/devchallenges_Portfolio','_blank')">Code</button>
      </div>
    </div>
    
        <div class="project-box tile">
       <img class="project-img" src="https://raw.githubusercontent.com/wy-chan/devchallenges_Portfolio/main/images/screen_checkoutp.png" alt="project image"/>
          <p class="tag">#HTML #CSS #Responsive</p>
       <h4>Checkout Page</h4>
           <p>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</p>
          <div class="project-btn-s-box">
      <button class="project-btn-s active-btn" onclick="window.open('https://wy-chan.github.io/devchallenges_CheckoutPage/','_blank')">Demo</button>
      <button class="project-btn-s" onclick="window.open('https://github.com/wy-chan/devchallenges_CheckoutPage','_blank')">Code</button>
      </div>
    </div>
    
        <div class="project-box tile">
       <img class="project-img" src="https://raw.githubusercontent.com/wy-chan/devchallenges_Portfolio/main/images/screen_ediehomep.png" alt="project image"/>
          <p class="tag">#HTML #CSS #Responsive</p>
          <h4>Edie Homepage</h4>
           <p>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</p>
          <div class="project-btn-s-box">
      <button class="project-btn-s active-btn" onclick="window.open('https://wy-chan.github.io/devchallenges_EdieHomepage/','_blank')">Demo</button>
      <button class="project-btn-s" onclick="window.open('https://github.com/wy-chan/devchallenges_EdieHomepage','_blank')">Code</button>
      </div>
    </div>
     </div>
    
    <div class="page-btn-box">
      <button class="page-btn "><span class="material-icons">
chevron_left
</span></button>
      <button class="page-btn active-btn">1
      </button>
      <button class="page-btn">2
      </button>
       <button class="page-btn">3
      </button>
       <button class="page-btn "><span class="material-icons">
chevron_right
</span></button>
    </div>
</div>

    );
  }
}
class ProjectBox extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    
  }
}

ReactDOM.render(<MyPage />,document.getElementById('projects'));

