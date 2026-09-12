# Dev Stack Builder

🔗 **Live Site:** https://dev-stack-react-web.netlify.app/

A React + TypeScript web application...

# Dev Stack Builder

A React + TypeScript web application where developers can explore popular web development technologies, compare them, and build their own personalized tech stack by adding tools to a selection panel.

## Description

Dev Stack Builder lets users browse a curated list of frontend, backend, database, language, styling, DevOps, and tools technologies. Each technology is displayed as a card with its rating, difficulty level, and category. Users can add technologies to their personal "Stack" panel, remove individual items, or clear the entire stack at once — making it easy to visualize and plan a project's tech stack.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- Vite

## Features

1. **Interactive Stack Builder** — Add or remove technologies from a live sidebar panel with real-time count updates and toast notifications for every action.
2. **Duplicate Protection** — The app prevents adding the same technology twice, showing a warning toast and disabling the button with a "✓ Added to Stack" state.
3. **Fully Responsive Design** — The layout adapts smoothly across mobile, tablet, and desktop screens, including a dedicated mobile navigation view.

## React Concepts Q&A

**1. What is JSX, and why is it used in React?**
JSX হলো JavaScript-এর ভেতরে HTML-এর মতো syntax লেখার একটা পদ্ধতি। এটা ব্যবহার করা হয় কারণ এতে UI structure আর logic একই জায়গায় লেখা যায়, যা কোড পড়তে ও বুঝতে সহজ করে।

**2. What is the difference between props and state?**
Props হলো এমন ডেটা যা parent component থেকে child component-এ পাঠানো হয়, এটা child নিজে বদলাতে পারে না। State হলো component-এর নিজের ভেতরের ডেটা, যা component নিজেই বদলাতে পারে এবং বদলালে UI re-render হয়।

**3. What does the useState hook do, and where did you use it in this project?**
useState একটা component-কে নিজের ভেতরে ডেটা মনে রাখতে এবং সেটা বদলানোর ক্ষমতা দেয়। এই প্রজেক্টে আমি `technologies`, `stack`, এবং `loading` state রাখতে useState ব্যবহার করেছি App.tsx-এ।

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
useEffect component প্রথমবার screen-এ আসার সময় বা কোনো dependency বদলালে একটা নির্দিষ্ট কাজ চালায়। আমি এটা ব্যবহার করেছি যাতে component mount হওয়ার সাথে সাথে JSON data load হয়ে state-এ বসে যায়।

**5. Why does every item in a .map() list need a unique key prop?**
key prop React-কে বলে দেয় list-এর কোন item কোনটা, যাতে কোনো item add/remove/update হলে React সঠিকভাবে চিনে সেটাই re-render করে, পুরো list না।

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering মানে কোনো শর্তের উপর ভিত্তি করে আলাদা আলাদা UI দেখানো। আমি এটা ব্যবহার করেছি YourStack component-এ — stack খালি থাকলে "Your stack is empty" মেসেজ দেখায়, নাহলে item-এর list দেখায়।

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent থেকে child-এ props দিয়ে ডেটা পাঠানো হয়। Child থেকে parent-এ ডেটা পাঠাতে হলে parent একটা function props হিসেবে child-কে দেয়, child সেই function-কে call করে প্রয়োজনীয় ডেটা argument হিসেবে পাঠায় — যেমন এই প্রজেক্টে `onAdd`, `onRemove` function গুলো।