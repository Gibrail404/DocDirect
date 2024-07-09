# DocDirect

DocDirect is a comprehensive hospital management system built using the MERN stack (MongoDB, Express.js, React, and Node.js). The platform provides an efficient way to manage patient information, appointments, and administrative tasks, enhancing the overall patient and admin experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Video](#video)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Patient Management:** Easily manage patient records, including personal information, medical history, and appointments.
- **Appointment Scheduling:** Schedule, reschedule, and cancel appointments with ease.
- **Admin Dashboard:** A comprehensive dashboard for administrators to manage doctors, patients, and appointments.
- **User Authentication:** Secure login and registration for patients and admins.
- **Responsive Design:** A user-friendly interface that works on all devices.

## Installation

To run DocDirect locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Gibrail404/DocDirect.git
   cd DocDirect
   ```

2. **Install backend dependencies:**
   ```sh
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```sh
   cd ../frontend
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add the following variables:
   ```plaintext
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   ```

5. **Run the application:**
   Open two terminal windows or tabs:
   - In the first terminal, run the backend server:
     ```sh
     cd backend
     npm start
     ```
   - In the second terminal, run the frontend:
     ```sh
     cd frontend
     npm start
     ```

6. **Access the application:**
   Open your web browser and navigate to `http://localhost:3000`.

## Usage

After setting up the project, you can log in as an admin or patient to access different features of the application.

- **Admin:** Can manage doctors, patients, and appointments.
- **Patient:** Can view and manage their own appointments and medical records.


## Demo

Check out the [Live Demo](https://docdirect.netlify.app/) of DocDirect.

Check out the [Admin Dashboard](https://docdirect-admin.netlify.app/login) of DocDirect.

## Video

 Watch a detailed [video walkthrough](https://youtu.be/dqVOCRSLpvM?si=fuxz9Ce6DNuboueo) of DocDirect to see all features in action.


## Technologies

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Toastify](https://img.shields.io/badge/Toastify-FFDD00?style=for-the-badge&logo=react&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React-Icons](https://img.shields.io/badge/React--Icons-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React-Router](https://img.shields.io/badge/React--Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## Contributing

We welcome contributions! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Add feature: YourFeature"
   ```
4. Push to the branch:
   ```sh
   git push origin feature/YourFeature
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries or issues, feel free to contact me:

- **Email:** gibrailzaidi@gmail.com
- **GitHub:** [Gibrail404](https://github.com/Gibrail404)

