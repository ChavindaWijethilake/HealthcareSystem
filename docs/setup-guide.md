# Setup & Deployment Guide

## Prerequisites
Ensure you have the following installed on your machine:
-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   A [Appwrite](https://appwrite.io/) account (Cloud or Self-hosted)

## Environment Variables

Create a `.env.local` file in the root directory and add the following keys:

```env
# Appwrite Configuration
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1 # or your self-hosted endpoint
PROJECT_ID=your_project_id
API_KEY=your_api_key_with_admin_access
DATABASE_ID=your_database_id
PATIENT_COLLECTION_ID=your_patient_collection_id
DOCTOR_COLLECTION_ID=your_doctor_collection_id
APPOINTMENT_COLLECTION_ID=your_appointment_collection_id
NEXT_PUBLIC_BUCKET_ID=your_storage_bucket_id

# Other Keys (if applicable)
NEXT_PUBLIC_ADMIN_PASSKEY=your_admin_passkey
```

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/healthcare-system.git
    cd healthcare-system
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

## Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```

2.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Deployment

The application is optimized for deployment on [Vercel](https://vercel.com/).

1.  **Push your code to GitHub/GitLab/Bitbucket.**
2.  **Import the project into Vercel.**
3.  **Configure Environment Variables:**
    -   Copy the contents of your `.env.local` into the Vercel project settings.
4.  **Deploy:**
    -   Click "Deploy". Vercel will automatically build and serve your Next.js application.

## Troubleshooting

-   **Appwrite Connection Error**: Ensure your `NEXT_PUBLIC_ENDPOINT` and `PROJECT_ID` are correct and that your Appwrite instance is reachable.
-   **Build Errors**: Check the console output for TypeScript or ESLint errors. Run `npm run lint` locally to identify issues.
