document.getElementById("csvFile").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) return;

  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      const data = results.data;
      let totalGoals = 0;
      let matchCount = 0;

      data.forEach(row => {
        const home = parseInt(row.home_goals, 10);
        const away = parseInt(row.away_goals, 10);
        if (!isNaN(home) && !isNaN(away)) {
          totalGoals += home + away;
          matchCount++;
        }
      });

      const avg = matchCount ? (totalGoals / matchCount).toFixed(2) : "N/A";
      const resultText = `✅ Average goals per match: ${avg}`;
      const matchesText = `📊 Matches analyzed: ${matchCount}`;

      const resultElement = document.getElementById("result");
      resultElement.innerHTML = `${resultText}<br><span id="matches">${matchesText}</span>`;

      // Trigger animation
      resultElement.classList.remove("show");
      void resultElement.offsetWidth; // re
