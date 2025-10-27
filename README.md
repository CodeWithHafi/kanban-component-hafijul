Kanban Board Component

Live Storybook

[Your Deployed Storybook URL]

Installation

# Clone the repository
git clone [https://github.com/YOUR_USERNAME/kanban-component-hafijul.git](https://github.com/YOUR_USERNAME/kanban-component-hafijul.git)

# Install dependencies
npm install

# Run the Storybook
npm run storybook


Architecture

This project implements a fully accessible, high-performance Kanban board component from scratch. The UI is built with React, TypeScript, and Tailwind CSS. Global state, including task and column data, is managed by Zustand. Drag-and-drop functionality is implemented using the low-level primitives from @dnd-kit/core, allowing for a completely custom and optimized user experience. Performance for large datasets is handled by @tanstack/react-virtual.

Features

[ ] Drag-and-drop tasks between columns

[ ] Task creation/editing modal

[ ] Responsive design for mobile, tablet, and desktop

[ ] Keyboard accessibility (WCAG 2.1)

[ ] Virtualized task lists for large datasets (500+ tasks)

[ ] Search and filter tasks

[ ] Dark Mode (Bonus)

Storybook Stories

Default: Standard 4-column board with sample tasks.

Empty State: Board with columns but no tasks.

Large Dataset: Board with 30+ tasks to demonstrate virtualization.

Mobile View: Board viewed at a mobile breakpoint.

Interactive Playground: Fully functional board with Storybook controls.

Technologies

React 18 + TypeScript

Tailwind CSS

Zustand (State Management)

@dnd-kit/core (Drag & Drop)

Storybook (Component Workshop)

@tanstack/react-virtual (Performance)

Contact

hafijulislam1207@gmail.com