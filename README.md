# Pagination Project

A modern React application demonstrating image pagination with a custom pagination component. The app fetches images from the Picsum Photos API and displays them in a responsive grid with intuitive navigation controls.

## Features

- **Responsive Image Grid**: Display images in a responsive grid layout (2 columns on mobile, 3 on tablets, 4 on desktop)
- **Custom Pagination Component**: Navigate between pages with next/previous buttons and direct page number selection
- **Smart Page Display**: Shows the current page and surrounding pages for easy navigation
- **API Integration**: Fetches real images from the Picsum Photos API
- **Tailwind Styling**: Modern, clean UI built with Tailwind CSS

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.19
- **HTTP Client**: Axios 1.13.4
- **Code Quality**: ESLint 9.39.1
- **PostCSS**: For processing CSS with Tailwind

## Project Structure

src/
├── Components/
│   ├── Pagination.jsx   
│   └── Posts.jsx I
├── App.jsx       
├── index.css
└── main.jsx    



## Scripts

- **`npm run dev`** - Start the development server (Vite)


## Components
### Pagination Component
Located in `src/Components/Pagination.jsx`

**Props:**
- `pageNo` (number): Current page number
- `setPageNo` (function): Function to update the page number

**Features:**
- Shows previous and current page numbers
- Shows current and next page numbers
- Prev/Next buttons for navigation
- Disabled states for first/last pages
- Click on page numbers to jump directly to that page

### Posts Component
Located in `src/Components/Posts.jsx`

**Features:**
- Fetches images from Picsum Photos API
- Displays 8 images per page
- Shows author name below each image
- Responsive grid layout with hover effects
- Integrates pagination for page navigation

## API
The app uses the free [Picsum Photos API](https://picsum.photos/):

- Endpoint: `https://picsum.photos/v2/list?page={pageNo}&limit={limit}`
- Default limit: 8 images per page
- Total pages: 10