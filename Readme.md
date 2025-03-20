# Insurance Wala

Insurance Wala is a full-stack web application designed to help users select and manage insurance plans for themselves and their family members. It includes authentication, insurance options, city selection, and medical history storage.

## Features

- **User Authentication:** Email/Password & Google Sign-In
- **Insurance Options:** Coverage for self, wife, son, daughter, and mother
- **Age-based Insurance Storage**
- **City Selection Storage**
- **Medical History Management**

## Tech Stack

### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB instance running

### Installation
#### Clone the Repository
```sh
git clone https://github.com/ManavRastogi03/v.InsuranceWebSite.git
```

#### Backend Setup
```sh
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add the required environment variables:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Start the backend server:
```sh
npm run dev
```

#### Frontend Setup
```sh
cd ../frontend
npm install
npm run dev
```

## Usage
- Register/Login with Email or Google
- Select an insurance plan
- Store age, city, and medical history
- Manage and update your details
![Image 1](image_path)

## Roadmap
- 🚀 Deploy the application
- 📈 Add payment gateway integration
- 🔒 Implement more security features

## Contributing
Contributions are welcome! Fork the repo and submit a pull request.

## License
MIT License

