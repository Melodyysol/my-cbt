import { track } from "./realQuestion/questionSummary.js";
let trackHTML = '';
let totalPercent = 0
let overAllMins = 0
let overAllSecs = 0
let timeToSec = 0;
let timeToMin = 0
let overAllHour = 0;
let avgMin = 0;
let avgSec = 0;
let avgHour = 0;
track.forEach(tracks => {

  totalPercent += Number(tracks.percentScores) / track.length;
  overAllMins += tracks.timeMins;
  overAllSecs += tracks.timeSecs;
  avgMin = overAllMins / track.length;
  avgSec = overAllSecs / track.length;
  avgHour = overAllHour / track.length;
  while (overAllSecs >= 60) {
    timeToSec = overAllSecs - 60;
    overAllMins++
    overAllSecs = timeToSec
  }
  while (overAllMins >= 60) {
    timeToMin = overAllMins - 60
    overAllHour++;
    overAllMins = timeToMin
  }
  trackHTML = `
    <div class="cells">
      <div class="cell">
        <div>Avg Score</div>
        <div>Overall Average Score</div>
        <div>${totalPercent.toFixed(1)}%</div>
      </div>
      <div class="cell">
        <div>No. of CBT</div>
        <div>Total Score</div>
        <div>${track.length}</div>
      </div>
      <div class="cell">
        <div>Duration</div>
        <div>Overall Test Duration</div>
        <div>${overAllHour}h ${overAllMins}m ${timeToSec}s</div>
      </div>
      <div class="cell">
        <div>Avg. Duration</div>
        <div>Average Test Duration</div>
        <div>${avgHour.toFixed(1)}h ${avgMin.toFixed(1)}m ${avgSec.toFixed(1)}s</div>
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
    track.forEach(track2 => {
    examNum++
    html +=`
      <div class="exam-cont js-exam-cont"
        data-track-id="${track2.id}">
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
          <div>Taken on: ${track2.dateString} ${track2.dateTime}</div>
        </div>
        <a><div class="arrow2"></div></a>
      </div>
    `
    })
    return html;
  }
  
});

document.querySelector('.js-track-container').innerHTML = trackHTML

document.querySelectorAll('.js-exam-cont').forEach(examCount => {
  examCount.addEventListener('click', () => {
    let trackId = examCount.dataset.trackId
    console.log(trackId)
    window.location.href = `performance-details.html?trackId=${trackId}`
  })
})

console.log(track)