import csv

with open('matches.csv', newline='') as f:
    reader = csv.DictReader(f)
    goals = [int(row['home_goals']) + int(row['away_goals']) for row in reader]

print(f"Average goals per match: {sum(goals)/len(goals):.2f}")