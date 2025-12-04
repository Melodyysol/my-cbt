import { track } from "./realQuestion/questionSummary.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let trackHTML = '';
track.forEach(tracks => {
  trackHTML = `
    <div class="cells">
      <div class="cell">
        <div>Avg Score</div>
        <div>Overall Average Score</div>
        <div>82.5</div>
      </div>
      <div class="cell">
        <div>No. of CBT</div>
        <div>Total Score</div>
        <div>10</div>
      </div>
      <div class="cell">
        <div>Duration</div>
        <div>Overall Test Duration</div>
        <div>00h 47m</div>
      </div>
      <div class="cell">
        <div>Avg. Duration</div>
        <div>Average Test Duration</div>
        <div>00h 4.7m</div>
      </div>
      <div class="cell">
        <div>Best Subject</div>
        <div>Best Performed Subject</div>
        <div>English language</div>
      </div>
      <div class="cell">
        <div>Least Subject</div>
        <div>Least Performed Subject</div>
        <div>English language</div>
      </div>
    </div>
    <div>
      <div class="perf-rec">Performance Record</div>
      <div class="perform-info">
       ${trackExam()}
      </div>
    </div>
  `

  function trackExam() {
    let html = '';
    let examNum = 0
    const today = dayjs()
    const dateString = today.format('d MMMM, YYYY')
    let dateTime = today.format('hh:mmA')
    console.log(dateTime)
    track.forEach(track2 => {
    examNum++
    html +=`
      <div class="exam-cont">
        <div class="box">
          <div class="mini-box">
            <div class="first-box"></div>
            <div class="second-box">
              <div class="top-box"></div>
              <div class="bottom-box"></div>
            </div>
          </div>
          <div class="mini-box">
            <div class="first-box"></div>
            <div class="second-box">
              <div class="top-box"></div>
              <div class="bottom-box"></div>
            </div>
          </div>
        </div>
        <div class="exam-info">
          <div>#Exam ${examNum}</div>
          <div>Total Score: ${track2.percentScores}%</div>
          <div>Taken on: ${dateString} ${dateTime}</div>
        </div>
        <a href="performance-details.html"><div class="arrow2"></div></a>
      </div>
    `
  })
    return html;
  }
  
});

document.querySelector('.js-track-container').innerHTML = trackHTML