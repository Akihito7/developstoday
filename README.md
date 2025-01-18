# Vehicle Filter Application

This is a web application built using **Next.js** and **TypeScript** that allows users to filter vehicles by make and year. The application fetches data from an external API and presents it in a user-friendly interface with dropdown menus for selecting the vehicle make and year.

## Features

- **Vehicle Make Filter**: Users can select a vehicle make from a dynamically loaded list.
- **Vehicle Year Filter**: Users can select a vehicle year from a predefined list.
- **Next Button**: Once both filters are applied, users can click "Next" to view the results based on their selections.
- **Responsive UI**: The application is built with responsive design in mind, making it user-friendly across devices.

## Architecture

- **Frontend**: The application is built with **Next.js** using **React** and **Tailwind CSS** for styling.
- **API Integration**: The application fetches vehicle makes and years data from an external API.
- **State Management**: Uses **React hooks** (`useState`, `useEffect`) to manage and update the state for selected filters.
- **Routing**: Based on the selected filters, the app dynamically generates the next URL for displaying the filtered results.

## Prerequisites

Before you can run or build this project, make sure you have the following installed:

- **Node.js** (v14 or above)
- **npm** (v6 or above)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/vehicle-filter-app.git
   ```

2. Navigate to the project directory:

  ```bash
       cd vehicle-filter-app
    ```

3. Install the project dependencies:
  ```bash
       npm install
    ```
  

4. Create a .env.local file in the root of the project and add your API key or other necessary environment variables:
   ```bash
        API=
    ```


5. Start the development server:
    ```bash
        npm run dev
    ```


