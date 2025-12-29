  class HomePage{
    url = new URL(window.location.href)
    fullname = this.url.searchParams.get('fullname')
    email = this.url.searchParams.get('email')
    password = this.url.searchParams.get('password')

    firstName = this.fullname?.split(' ')[0] || 'Name'
    username = this.email?.split('@')[0] || 'username'
    slide = 0;

    constructor() {
      this.html1 = `
        <div class="slider js-slider">
          <div class="information">
            <div class="level">
              <div class="myinfo">Introducing the new</div>
              <div class="aty">ATY APP</div>
              <div class="hundred">100 Level</div>
              <div class="semester">FIRST SEMESTER</div>
            </div>
            <img class="bag" src="images/neuracoin.png" alt="Atere">
          </div>
        </div>
      `;

      this.html2 = `
        <div class="slider js-slider">
          <div class="information">
            <div class="level">
              <div class="myinfo">Be with us and never lose</div>
              <div class="aty">ATY APP</div>
              <div class="hundred">100 Level</div>
              <div class="semester">SECOND SEMESTER</div>
            </div>
            <img class="bag" src="images/backpack.jpg" alt="Atere">
          </div>
        </div>
      `;

      this.array = [this.html1, this.html2];

      let pageHTML = ''
      document.querySelector('.js-container').innerHTML = this.pageHTML;
    };

    pageHTML = `
      <div class="prepare">
        <div class="name">Hi, ${this.firstName}</div>
        <div>Ready to learn and study today?</div>
      </div>
      <!--<marquee behavior="scroll" direction="left">-->
      <div class="js-sliders">
        <div class="slider js-slider">
          <div class="information">
            <div class="level">
              <div class="myinfo">Be with and never lose</div>
              <div class="aty">ATY APP</div>
              <div class="hundred">100 Level</div>
              <div class="semester">SECOND SEMESTER</div>
            </div>
            <img class="bag" src="images/backpack.jpg" alt="Atere">
          </div>
        </div>
      </div>
      <!--</marquee>-->
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
    `;

    slideOver() {
      setInterval(() => {
        const currentSlider = document.querySelector('.js-slider');
        if (currentSlider) {
          currentSlider.classList.add('fade-out');
          currentSlider.addEventListener('transitionend', () => {
            if(this.slide >= this.array.length) {
              this.slide = 0
            }
            this.slide++
            document.querySelector('.js-sliders').innerHTML = this.array[this.slide-1]
            document.querySelector('.js-slider').classList.add('display-slides')
          }, { once: true });
        } else {
          // Initial load
          if(this.slide >= this.array.length) {
            this.slide = 0
          }
          this.slide++
          document.querySelector('.js-sliders').innerHTML = this.array[this.slide-1]
          document.querySelector('.js-slider').classList.add('display-slides')
        }
      }, 3000);
    }
  }

  const page1 = new HomePage();
  page1.slideOver()
  console.log(page1.slideOver())