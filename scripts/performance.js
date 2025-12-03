let trackHTML = '';
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
          <div>#Exam 1</div>
          <div>Total Score: 262%</div>
          <div>Taken on: 31 May, 2025 4:13AM</div>
        </div>
        <a href="performance-details.html"><div class="arrow2"></div></a>
      </div>
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
          <div>#Exam 2</div>
          <div>Total Score: 100%</div>
          <div>Taken on: 29 May, 2025 8:50AM</div>
        </div>
        <a href="performance-details.html"><div class="arrow2"></div></a>
      </div>
    </div>
  </div>
`

document.querySelector('.js-track-container').innerHTML = trackHTML