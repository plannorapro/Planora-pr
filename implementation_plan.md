# Planora Phase 1 Implementation Plan

We will build an initial prototype of Planora focusing on the core navigation, Finance, and Day Planner features.
The app will use Vanilla HTML/CSS/JS to ensure maximum flexibility and adherence to the yellow/black theme and day/night mode requirement.

## Proposed Changes

### UI Mockups
We have generated high-fidelity mockups to visualize the yellow/black theme in both day and night modes.
![Day Mode Mockup](C:\Users\samar\.gemini\antigravity\brain\6ed70b02-4710-47c3-9089-b8d7956df743\planora_day_mockup_1772950885444.png)
![Night Mode Mockup](C:\Users\samar\.gemini\antigravity\brain\6ed70b02-4710-47c3-9089-b8d7956df743\planora_night_mockup_1772950903086.png)

### Web App Implementation (HTML/CSS/JS)
- **`index.html`**: The main structural shell containing the navigation sidebar/bottom bar, the top header (with day/night toggle), and the main content area.
- **`styles.css`**: Vanilla CSS using CSS variables for theming (`--bg-primary`, `--text-primary`, `--accent-yellow`). This will include a smooth transition between `.light-mode` and `.dark-mode`. We'll use modern styling (glassmorphism, clean borders, responsive grid/flexbox).
- **`app.js`**: Core Javascript to handle:
  - Theme toggling
  - Navigation state (switching between Finance and Planner views)
  - Basic DOM manipulation for adding income/expenses and tasks.

### Phase 1 Features
- **Finance View**: Input forms for Date, Amount, Type (Income/Expense), Category. A mock layout showing current balance and a list of recent transactions.
- **Day Planner View**: Input form for New Task (Title, Time, Priority). A mock layout showing a timeline or list of tasks for the day.

### Phase 2 Features
- **Finance Expansion**: Add visual reporting (charts/graphs using a lightweight library like Chart.js or pure CSS charts) and customizable expense/income categories.
- **Day Planner Expansion**: Add a Calendar view (month/week) and time-blocking interface to visualize tasks throughout the day.
- **Leaves Planner**: A new section to track upcoming leaves, leave balances, and request forms.
- **Notification System**: A toast notification system for reminders (e.g., upcoming tasks, budget alerts).

### Phase 3 Features
- **Event Planner**: A dedicated module to create and track upcoming events (date, location, budget integration, guest list).
- **Exam Planner**: A module tailored for students to track syllabuses, set study schedules, and countdown to exam dates.
- **Leave Planner Advanced**: Integration of a "Weekend Optimization" algorithm to suggest the best days to take leave to maximize continuous time off.
- **Finance Analytics**: Deeper analytical views (e.g., month-over-month comparisons, spending breakdown by category over time).

## Verification Plan
- **Internal Testing (Phase 2)**: We will manually test all Phase 1 & 2 features (Finance inputs, Calendar navigation, Leave tracking, Notifications) for stability and functionality in Day/Night modes.
- **User Acceptance Testing (UAT) (Phase 3)**: A complete build of the application (Phases 1-3) will be prepared and deployed locally for a small group of target users to test and provide feedback.
- The user will be able to open `index.html` in their browser to review the combined prototype.
