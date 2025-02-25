import { createRoot } from 'react-dom/client';
import { TodoList } from './components/TodoList';
import * as React from 'react';
import "../css/main.css";
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app')!);
root.render(<TodoList />);