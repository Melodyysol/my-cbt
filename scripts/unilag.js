  let pageHTML =''

  pageHTML = `
    <div class="prepare">
      <div class="name">Hi, Name</div>
      <div>Ready to learn and study today?</div>
    </div>
    <marquee behavior="scroll" direction="left">
      <div class="information">
        <div class="level">
          <div class="myinfo">Introducing the new</div>
          <div class="aty">ATY APP</div>
          <div class="hundred">100 Level</div>
          <div class="semester">FIRST SEMESTER</div>
        </div>
        <img class="bag" src="/images/neuracoin.png" alt="Atere">
      </div>
    </marquee>
    <div class="exercise">
      <a class="exercise-link" href="exam.html">
        <div class="cell-1 cell">
          <img src="/images/computer6.jpeg"><br><br>
          Examine<br>Yourself
        </div>
    </a>
    <a class="exercise-link" href="past-question.html">
        <div class="cell-2 cell">
          <img src="/images/computer6.jpeg"><br><br>
          Past<br>Question
        </div>
      </a>
      <a class="exercise-link" href="saved-question.html">
        <div class="cell-3 cell">
          <img src="/images/computer6.jpeg"><br><br>
          Saved<br>Question
        </div>
      </a>
      <a class="exercise-link" href="performance.html">
        <div class="cell-4 cell">
          <button></button>
          <button></button>
          <button></button>
          
            <br><br>
          Performance<br>Record
        </div>
      </a>
      <a>
        <div class="cell-5 cell">
          <img src="/images/computer6.jpeg"><br><br>
          More on<br>Unilag
        </div>
      </a>
      <a class="exercise-link" href="activate.html">
        <div class="cell-6 cell">
          <img src="/images/computer6.jpeg"><br><br>
          Activate<br>App
        </div>
      </a>
    </div>
    <div class="general-info">
      <div>General Information</div>
      <div class="online-info">
        <div class="circle">
          <div></div>
        </div>
        <div class="connect">Connection Error</div>
        <div>Please check your internet connection and try again</div>
        <button class="reload">Reload content</button>
      </div>
    </div>
    <div class="general-info">
      <div class="special">Special Information</div>
      <div class="online-info">
        <div class="circle"></div>
        <div>You can access Special Information only when you</div>
          <div>Activated the app</div>
      </div>
    </div>
    <div class="footer">
      <a class="home-link" href="index.html">
        <!--The removal of 'page' gives color-->
        <div class="home page">
          <div class="home-icon page"></div>
          <div>Homepage</div>
        </div>
      </a>
      <a class="home-link" href="profile.html">
        <!--The removal of 'menu' gives color-->
        <div class="home">
          <div class="home-icon">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <div>Menu</div>
        </div>
      </a>
    </div>
  `

  document.querySelector('.js-container').innerHTML = pageHTML;