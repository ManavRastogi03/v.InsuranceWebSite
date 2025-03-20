import { useState } from 'react';
import { signIn } from '../../api/api.js';
import Login from '../../Component/Login/Login.jsx';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);

    const handleLogin = async (userData) => {
        setLoading(true);
        try {
            const response = await signIn(userData);
            console.log('Login Successful:', response.data);
        } catch (error) {
            console.error('Login Failed:', error.response?.data || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 p-6 shadow-lg rounded-lg">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <Login onSubmit={handleLogin} loading={loading} />
            </div>
        </div>
    );
};

export default LoginPage;
