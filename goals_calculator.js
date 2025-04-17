const fs = require('fs');

// Get file path from command line or use default
const filePath = process.argv[2] || 'matches.json';

// Read and parse the file
const rawData = fs.readFileSync(filePath, 'utf-8');
const matches = JSON.parse(rawData);

// Calculate total goals and average
let totalGoals = 0;
let totalMatches = matches.length;

matches.forEach(match => {
  totalGoals += match.home_score + match.away_score;
});

const average = (totalGoals / totalMatches).toFixed(2);
console.log(`Average goals per match: ${average}`);