import { track } from "./realQuestion/questionSummary.js";
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