import { track} from "./realQuestion/questionSummary.js";

function performanceDetail() {
  let url = new URL(window.location.href)
  let trackId = url.searchParams.get('trackId')
  let performanceDetailHTML = '';
  let matchingTrackId;
  for (let i = 0; i < track.length; i++) {
    const tracks = track[i];
    if(tracks.id === trackId) {
      matchingTrackId = tracks;
    }
  }
  let numberOfSubject;

  if(matchingTrackId.selected.length <= 17) {
    numberOfSubject = 1
  }else if(matchingTrackId.selected.length >= 18 && matchingTrackId.selected.length <= 31) {
    numberOfSubject = 2
  }else{
    numberOfSubject = 3
  }
  console.log(matchingTrackId)
  performanceDetailHTML = `
    <div class="top-section">
      <a href="performance.html" class="arrow"></a>
      <div class="examine">Performance Details Page</div>
      <div class="select">View details report of your performance</div>
    </div>
    <div class="body-cont">
      <div class="date">
        <div>Date Taken</div>
        <div>${matchingTrackId.dateString} ${matchingTrackId.dateTime}</div>
      </div>
      <div class="cells">
        <div class="cell">
          <div>Questions</div>
          <div>Total Questions</div>
          <div>${matchingTrackId.selected.length}</div>
        </div>
        <div class="cell">
          <div>Subject</div>
          <div>Total Subjects</div>
          <div>${numberOfSubject}</div>
        </div>
        <div class="cell">
          <div>Total Score</div>
          <div>Overall Score (%)</div>
          <div>${matchingTrackId.percentScores}%</div>
        </div>
        <div class="cell">
          <div>Duration</div>
          <div>Overall Test Duration</div>
          <div>${matchingTrackId.timeMins}m ${matchingTrackId.timeSecs}s</div>
        </div>
      </div>
    </div>
    <div class="sub-cont">
      <div class="subjects lang">
        <!--This is where eng, math and gene is added to design it-->
        <span class="eng">English language</span>
        <span>Mathematics</span>
        <span>General Paper</span>
      </div>
      <div class="subj-name-cont">
        <div class="subjects name">
          <span>Subject name</span>
          <span>English language</span>
        </div>
        <div class="subjects name">
          <span>Task Questions</span>
          <span>25</span>
        </div>
        <div class="subjects name">
          <span>Year attempted</span>
          <span>2021</span>
        </div>
        <div class="subjects name">
          <span>Total Percent Score</span>
          <span>96%</span>
        </div>
        <div class="subjects name">
          <span>Total unattempted questions</span>
          <span>0</span>
        </div>
        <div class="subjects name">
          <span>Total correct</span>
          <span>24</span>
        </div>
        <div class="subjects name">
          <span>Total incorrect</span>
          <span>1</span>
        </div>
      </div>
  `

  document.querySelector('.js-container3').innerHTML = performanceDetailHTML;
}
performanceDetail()