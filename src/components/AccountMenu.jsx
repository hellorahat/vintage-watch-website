import { Link } from 'react-router-dom';

function AccountMenu() {
    return (
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
                <div className="text-end">
                    <Link to="/forgot-password" className="link-primary mt-1 mb-0">Forgot Password?</Link>
                </div>
            </div>
            
            <div className="d-flex flex-column justify-content-center">
                <button type="submit" className="btn btn-primary me-2">Submit</button>
            </div>
            
            <div className="d-flex flex-column justify-content-center text-center">
                <p className="mt-4 mb-0 me-2">Don't have an account?</p>
                <button type="create-account" className="btn btn-primary me-2">Create Account</button>
            </div>
        </form>
    )
}

export default AccountMenu