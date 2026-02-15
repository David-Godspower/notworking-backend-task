# Job Application Portal Backend 🚀

## Overview
This is a robust **Backend API** built with **Node.js & Express**. It simulates a Job Application Portal where users can register, log in, and submit job applications.

**Note:** For this assessment, the project uses an **In-Memory Data Structure (Mock Database)** to ensure the application runs instantly without requiring local MongoDB setup or cloud credentials.

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** In-Memory Storage (Arrays)
* **Authentication:** Mock JWT Token
* **Tools:** Dotenv, CORS

## ⚙️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/David-Godspower/notworking-backend-task.git](https://github.com/David-Godspower/notworking-backend-task.git)
    cd notworking-backend-task
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start the Server**
    ```bash
    node server.js
    ```
    *The server will start at `http://localhost:5000`*

## 🔌 API Endpoints

### 1️⃣ User Registration
* **Endpoint:** `POST /api/register`
* **Description:** Registers a new user.
* **Body:**
    ```json
    {
      "username": "david_dev",
      "password": "password123"
    }
    ```

### 2️⃣ User Login
* **Endpoint:** `POST /api/login`
* **Description:** Authenticates a user.
* **Body:**
    ```json
    {
      "username": "david_dev",
      "password": "password123"
    }
    ```
* **Response:** Returns a `token`.

### 3️⃣ Submit Job Application
* **Endpoint:** `POST /api/apply`
* **Description:** Submits a new job application.
* **Body:**
    ```json
    {
      "fullName": "David Godspower",
      "email": "david@example.com",
      "jobRole": "Frontend Engineer"
    }
    ```

### 4️⃣ View All Applications
* **Endpoint:** `GET /api/applications`
* **Description:** Fetches a list of all submitted applications.

---
*Submitted by David Godspower Ajala for the Backend Assessment Task.*