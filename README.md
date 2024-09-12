# Mystic Films Website

![Logo](./public/mystic-story.jpg)

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
- [Deployment](#deployment)
- [Integrations](#integrations)
- [Contact](#contact)

## About the Project

Mystic Films is a photography and cinematography portfolio website built with Next.js 14 using the App Router. The site features a dynamic blog, smooth animations, and scheduling integration, providing a modern and responsive user experience.

## Features

- **Dynamic Content:** Managed through Sanity.io.
- **Video Background in Hero Section:** Ensures smooth loading and looping.
- **Category Filter Animations:** Adds a sleek user experience to blog filtering.
- **Global Progress Bar:** Shows during page transitions.
- **Timeline Animation:** Visualizes key milestones.
- **Calendly Integration:** Seamless scheduling for consultations.
- **Intercepting and Parallel Routes:** Utilized for optimized page navigation and user flow.

## Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Sanity.io**
- **Calendly Integration**

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 16 or above)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ojigs/mystic-next-sanity.git

2. **Navigate to the project directory:**
   ```bash
   cd your-repo

3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install

### Environment Variables

Create a `.env.local` file and add:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-09-01
NEXT_PUBLIC_CALENDLY_URL=your-calendly-url
```

### Running the Project

To run the development server:

```bash
npm run dev # or yarn dev
```

Visit http://localhost:3000 to view the app.

## Usage

* **Blog Section:** Supports pagination and category filtering with animated transitions.
* **Hero Section:** Video background that loops smoothly once fully loaded.
* **Timeline Animation:** Shows a dynamic timeline of key milestones on the About page.
* **Intercepting and Parallel Routes:** Enhance user flow and page transitions.

## Deployment

To deploy the project:
1. Deploy the frontend using Vercel or Netlify.
2. Deploy Sanity Studio separately (e.g., on Vercel).

## Integrations

* **Sanity.io:** Manages content for the blog and other dynamic sections.
* **Calendly:** Integrated for scheduling.
* **Next.js API Routes:** Handle server-side logic.

## Contact

* **Name:** Emmanuel Ojighoro
* **Email:** awesomeemoj@gmail.com
