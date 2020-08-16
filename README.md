# Bot

## Project plan

### Set up

- [x] Structure directories
- [x] Create github repository
- [x] Initialize project
- [x] Install dependencies

### Design schema and create models

- [x] Map class properties and connections
- [x] Create database
- [x] Import tables

```bash
psql -d thoughtful_report -U thoughtful_report_bot -f './db/schema/db.sql'
```

- [x] Create models

```bash
sequelize-auto -o "./models" -d thoughtful_report -h localhost -u thoughtful_report_bot -p 5432 -x "Z36iU@ft&f1u" -e "postgres"
```

- Reset auto increment counter

```bash
alter sequence "Day_id_seq" restart with 1
```

- Unique index on multiple columns
  - <https://stackoverflow.com/questions/42195348/how-to-define-unique-index-on-multiple-columns-in-sequelize>
  - <https://sequelize.org/master/class/lib/model.js~Model.html#static-method-init>

```js
indexes: [
      {
        unique: true,
        fields: ['isAskingAboutWho', 'isAskingAboutWhat']
      }
    ]
```

## Scraper Bot

### Scraper Bot Plan

- Login to portal
  - Select `LOGIN_USERNAME_SELECTOR`
  - Enter `LOGIN_USERNAME`
  - Select `LOGIN_PASSWORD_SELECTOR`
  - Enter `LOGIN_PASSWORD`
  - Click `LOGIN_BTN_SELECTOR`
  - Wait for navigation to dashboard <DASHBOARD_URL>
- Get current id
  - Select `GREETING_SELECTOR`
  - Save week number to `weekNum`
  - Save day number to `dayNum`
- Get partner name
  - Select `PARTNER_SELECTOR`
  - Save name to `partnerName`
- Navigate to report page
  - Click `NEW_REPORT_BTN_SELECTOR`
  - Wait for navigation to <NEW_REPORT_URL>
- Fill out report
  - Wait for network to be idle
  - Get data from coda
  - Respond to each survey item
    - Click `REPORT_UNDERSTANDING_SELECTOR`
    - Comfort with material
      - Get comfortScore from coda <TODO: get from coda>
    - Feedback pairing reflection
      - Select `FEEDBACK_PAIRING_REFLECTION_SELECTOR`
      - Input `feedbackPairingReflection`

#### App Academy Open

- Run on Mondays at 12 pm
  - [ ] Objectives
  - [ ] Materials

#### Progress Tracker

- Run daily at 6 pm
  - [ ] Report
    - [ ] Items
      - [ ] prompt
  - [ ] Classmates

### Scraper Bot Tests

- [ ] // TODO:

## Coda Bot

### Coda Bot Plan

- Notecards
  - id
  - type
  - front
  - back

### Coda Bot Tests

## Thoughtful Report

### DAO

- Items
- Responses
- Objectives
- Notecards
- Partners

### Generate responses

- [ ] What parts of today's material do you feel you still need to work on?
  - 'Feel comfortable with all material.'
- [ ] What did you learn? Thoughts on your progress
  - Objectives
    - 'Learned about < objective >.'
  - +'Think I've learned a lot.'

## Submission Crawler

### Submission Crawler Plan

- Run daily at 6 pm
  - [ ] Crawl
  - [ ] Enter
  - [ ] Submit

### Submission Crawler Tests

- [ ] // TODO:

## Frontend
