import React from "react"
import { FaUserCircle } from "react-icons/fa"
import { MdPassword } from "react-icons/md"

export const ManagerLogin = () => {
    return (
        <div>
      <div className="wrapper">
        <form action="">
          <h1>Manager Login</h1>
          <div className="input-box">
            <FaUserCircle className="icon" />
            <input type="email" placeholder="Username" required />
          </div>
          <div className="input-box">
            <MdPassword className="icon" />
            <input type="password" placeholder="Password" required />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me{" "}
            </label>
            <a href="#"> Forgot Password</a>
          </div>

          <button type="submit">Login</button>

          <div className="register">
            <p>
              Don't have an account ? <a href="#">Register</a>
            </p>
          </div>
        </form>
          
      </div>
    </div>

    )
}
