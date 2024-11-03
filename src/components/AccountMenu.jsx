import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase.js'
import { useUser } from './UserContext.jsx';

import '../styles/AccountMenu.css'

function AccountMenu() {
    const { user } = useUser();
    const [errors, setErrorMessages] = useState([]);
    const [successMessages, setSuccessMessages] = useState([]);
    const [fadeOutError, setFadeOutError] = useState(false);
    const [fadeOutSuccess, setFadeOutSuccess] = useState(false);

    
    const showErrorMessage = (message) => {
        const id = Date.now();
        setErrorMessages((prevErrors) => [...prevErrors, { id, message, fadeOut: false }]);

        setTimeout(() => {
            setErrorMessages((prevErrors) =>
                prevErrors.map((error) =>
                    error.id === id ? { ...error, fadeOut: true } : error
                )
            );
            setTimeout(() => {
                setErrorMessages((prevErrors) => prevErrors.filter((error) => error.id !== id));
            }, 500); // Time for fade-out animation to complete
        }, 3000); // Duration before fade-out starts
    };

    const showSuccessMessage = (message) => {
        const id = Date.now();
        setSuccessMessages((prevMessages) => [
            ...prevMessages,
            { id, message, fadeOut: false },
        ]);

        setTimeout(() => {
            setSuccessMessages((prevMessages) =>
                prevMessages.map((msg) =>
                    msg.id === id ? { ...msg, fadeOut: true } : msg
                )
            );
            setTimeout(() => {
                setSuccessMessages((prevMessages) =>
                    prevMessages.filter((msg) => msg.id !== id)
                );
            }, 500); // Time for fade-out animation to complete
        }, 3000); // Duration before fade-out starts
    };

    const resetMessages = () => {
        setFadeOutError(false);
        setFadeOutSuccess(false);
    };


    return (
        <>
            {user ? (
                <AccountSettings 
                    showErrorMessage={showErrorMessage}
                    showSuccessMessage={showSuccessMessage}
                    resetMessages={resetMessages}
                />
            ) : (
                <SignInForm 
                    showErrorMessage={showErrorMessage}
                    showSuccessMessage={showSuccessMessage}
                    resetMessages={resetMessages}
                />
            )}
            {/* Display error alerts */}
            {errors.map(({ id, message, fadeOut }) => (
                <div
                    key={id}
                    className={`alert alert-danger mt-3 ${fadeOut ? 'fade-out' : ''}`}
                >
                    {message}
                </div>
            ))}

            {/* Display success alerts */}
            {successMessages.map(({ id, message, fadeOut }) => (
                <div
                    key={id}
                    className={`alert alert-success mt-3 ${fadeOut ? 'fade-out' : ''}`}
                >
                    {message}
                </div>
            ))}
        </>
    )
}

const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function SignInForm({showErrorMessage, showSuccessMessage, resetMessages}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailHasText = email.trim() !== '';
    const passwordHasText = password.trim() !== '';

    useEffect(() => {
        const labels = document.querySelectorAll('.label-holder .form-label');
        labels.forEach(label => {
            const newLetters = label.innerText
                .split('')
                .map((letter, idx) => {
                    console.log(letter); // Log each letter before returning it wrapped in a span
                    return `<span style="transition-delay:${idx * 50}ms">${letter}</span>`; // Use a unique key for each span
                })
                .join('');
            label.innerHTML = newLetters;
        });
    }, []);

    const handleSignIn = async (event) => {
        event.preventDefault();
        resetMessages();

        if (!isValidEmail(email)) {
            showErrorMessage("Please enter a valid email address.");
            return;
        }
        if (password.trim() === '') {
            showErrorMessage("Password cannot be empty.");
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (!user.emailVerified) {
                throw new Error("Please verify your email address before signing in.");
            }
            else {
                showSuccessMessage("Signed in successfully!");
            }
        } catch (error) {
            if(error.code === "auth/invalid-credential") {
                showErrorMessage("Invalid email or password")
            }
            else {
                showErrorMessage(error.message);
            }
        }
    };

    const handleCreateAccount = async (event) => {
        event.preventDefault();
        resetMessages();

        if (!isValidEmail(email)) {
            showErrorMessage("Please enter a valid email address.");
            return;
        }
        if (password.trim() === '') {
            showErrorMessage("Password cannot be empty.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user

            // Send verification email
            await sendEmailVerification(user);
            showSuccessMessage("Verification email sent! Please check your inbox.");
        } catch (error) {
            if(error.code === "auth/email-already-in-use") {
                showErrorMessage("The email address provided is already in use.");
            }
            else {
                showErrorMessage(error.message)
            }
        }
    };

    return (
        <form>
            <div class={`label-holder mb-3 mt-4 ${emailHasText ? 'has-text' : ''}`}>
                <label for="email" class="form-label">Email</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class={`label-holder mb-3 mt-4 ${passwordHasText ? 'has-text' : ''}`}>
                <label for="password" class="form-label">Password</label>
                <input 
                type="password"
                class="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <div className="text-end">
                    <Link to="/forgot-password" className="link-primary mt-1 mb-0">Forgot Password?</Link>
                </div>
            </div>
            
            <div className="d-flex flex-column justify-content-center">
                <button type="submit" className="btn btn-success me-2 mt-4" onClick={handleSignIn}>Submit</button>
            </div>
            
            <div className="d-flex flex-column justify-content-center text-center">
                <p className="mt-4 mb-0 me-2">Don't have an account?</p>
                <button type="create-account" className="btn btn-success me-2" onClick={handleCreateAccount}>Create Account</button>
            </div>
        </form>
    )
}

function AccountSettings({showErrorMessage, showSuccessMessage, resetMessages}) {
    const { user } = useUser();

    const handleSignOut = async(event) => {
        event.preventDefault();

        try {
            await auth.signOut();
            showSuccessMessage("Signed out successfully!");
        } catch(error) {
            showErrorMessage(error.message)
        }
    }

    const handleResetPassword = async(event) => {
        event.preventDefault();

        try {
            await sendPasswordResetEmail(auth, user.email);
            showSuccessMessage("Password reset email sent!");
        } catch(error) {
            showErrorMessage(error.message);
        }
    }

    return (
        <>
            <div className="upper-box">
                <h5>Hello, {user.name}!</h5>
            </div>

            <div className="d-flex flex-column justify-content-center sign-in py-2">
            <div>
                <Link to="/order-history" className="links">
                    <p>Order History</p>
                </Link>
                <Link to="/payment-methods" className="links">
                    <p>Payment Methods</p>
                </Link>
                <Link to="/addresses" className="links">
                    <p>Addresses</p>
                </Link>
                <span className="links mb-5" onClick={handleResetPassword} style={{ cursor: 'pointer' }}>
                    Reset Password
                </span>
            </div>
                <button type="submit" className="btn btn-success me-2 mt-5" onClick={handleSignOut}>Sign Out</button>
            </div>
        </>
    )
}

export default AccountMenu