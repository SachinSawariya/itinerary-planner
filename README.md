# ✈️ Y2Z Travel Itinerary Planner

A modern, responsive travel itinerary planner built using **React**, **Tailwind CSS**, and **Dnd Kit** for smooth drag-and-drop sorting of activity cards. Optionally integrates **Leaflet** maps to show mock activity locations.


---

## 🔗 Live Demo

[🌍 View the live site on Vercel](https://sachin-itinerary-planner.netlify.app/)

---

## 📂 Features

- ✅ Smooth drag-and-drop sorting of activity cards
- ✅ Fully responsive (mobile & desktop)
- ✅ Animated transitions on card movement
- ✅ Simulated itinerary data with mock API
- ✅ Optional: Display mock activity locations on a map (Leaflet)

---

## 🛠️ Tech Stack

| Tool / Library         | Purpose                                |
|------------------------|-----------------------------------------|
| React                  | UI framework                           |
| Tailwind CSS           | Styling and responsive layout          |
| @dnd-kit/sortable      | Drag-and-drop sorting                  |
| @dnd-kit/utilities     | Smooth transitions and transforms      |
| Leaflet + react-leaflet | Map rendering with markers     |
| Vercel                 | Hosting and deployment                 |

---

## 🧠 How It Works

- Activity cards are rendered from mock JSON data.
- Cards can be reordered by dragging and dropping vertically.
- Dnd Kit’s `useSortable` hook and `CSS.Transform` API enable smooth, fluid transitions.
- A Leaflet map (optional) displays the location of activities based on mocked coordinates.

---

## 🎥 Demo Video

[📽️ Watch the 1-minute demo](https://your-video-link.com)
---

## 🚧 Challenges Faced

### 1. Smooth Card Transitions  
Using `@dnd-kit/sortable` required custom transform logic with `CSS.Transform.toString()` and Tailwind transitions to avoid layout shift.

### 2. Mobile Touch Support  
Dnd Kit offers good mobile drag support, and Tailwind’s responsive utilities (`flex-col md:flex-row`) ensured clean layout shifts between devices.

### 3. Map Integration  
Mock coordinates were used with Leaflet to render lightweight maps and handle multiple markers.

---


## 🚀 Getting Started

### 1. Clone the Repo

    git clone https://github.com/SachinSawariya/itinerary-planner
    cd itinerary-planner

### 2. Install Dependencies

    npm install

### 2. Run Dev Server

    npm run dev


##  Deployment

    This project is deployed on Vercel. You can also deploy to Netlify, Firebase, or any static hosting provider.


##  🙌 Author

[🌐 sachinsawariya.netlify.app ](https://sachinsawariya.netlify.app)






