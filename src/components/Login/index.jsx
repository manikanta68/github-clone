import { useState } from "react"
import "./index.css"

const Login = ({ onLoginSuccess }) => {
    const [activeButton,setActivebutton] = useState(true)
    const authuncation = () => {
        onLoginSuccess()
    }

    return <div className="login-page">
        <div className="login-bug-fix-container">
              <img className="bug-image" src="https://res.cloudinary.com/djszohdjt/image/upload/v1734851221/ndimjfdymlm2wwfsebfb.png" alt="bug-fix-image"/>
              <img className="bg-logo" src="https://res.cloudinary.com/djszohdjt/image/upload/v1734851212/wid6ljsc8j62fidxb74g.png" alt="bg-logo"/>
        </div>
        <div className="login-bg-container">
        <div className="login-conatiner">
            <div className="login-choose-container">
                 <div className="login-image-logo">
                    <img className="logo" src="https://res.cloudinary.com/djszohdjt/image/upload/v1734843414/lc8m2hi3gwrvxz4gty9o.png" alt="logo"/>
                    <p>CodeAnt AI</p>
                 </div>
                 <h1 className="login-intro-head">Welcome to CodeAnt AI</h1>
                 <div className="buttons-container">
                    <button onClick={() => {
                        setActivebutton(true)
                    }} className={`button ${activeButton === true && "button-style"}`} type="button">SAAS</button> 
                    <button onClick={() => {
                        setActivebutton(false)
                    }} className= {`button ${activeButton === false && "button-style"}`} type="button">Self Hosted</button>
                </div>
            </div>
            <hr className="hr"/>
            {activeButton ? <div className="login-option-select-container">
                 <button onClick={authuncation} className="login-options-buttons" type="button">
                    <img src="https://res.cloudinary.com/djszohdjt/image/upload/v1734845344/cgrz489pytvklxe1rtg2.png" alt="github-icon"/>
                    <p>Sign in with Github</p>
                 </button>
                 <button onClick={authuncation} className="login-options-buttons" type="button">
                    <img src="https://res.cloudinary.com/djszohdjt/image/upload/v1734845344/wqdfkscmyz9q8mahr2lm.png" alt="github-icon"/>
                    <p>Sign in with Bitbucket</p>
                 </button>
                 <button onClick={authuncation} className="login-options-buttons" type="button">
                    <img src="https://res.cloudinary.com/djszohdjt/image/upload/v1734845344/nfa56p9bnyhdqqwtkuob.png" alt="github-icon"/>
                    <p>Sign in with Azure Devops</p>
                 </button>
                 <button onClick={authuncation} className="login-options-buttons" type="button">
                    <img src="https://res.cloudinary.com/djszohdjt/image/upload/v1734845344/yrz3mgcv2luagmownboe.png" alt="github-icon"/>
                    <p>Sign in with GitLab</p>
                 </button>
            </div> : <div  className="login-option-select-container">
                 <button onClick={authuncation} className="login-options-buttons" type="button">
                    <img src="https://res.cloudinary.com/djszohdjt/image/upload/v1734845344/yrz3mgcv2luagmownboe.png" alt="github-icon"/>
                    <p>Self Hosted GitLab</p>
                 </button>
                 <button onClick={authuncation} className="login-options-buttons" type="button">
                    <img src="https://res.cloudinary.com/djszohdjt/image/upload/v1734848300/tebk0mlv2yib9usagj76.png" alt="github-icon"/>
                    <p>Sign in with SSO</p>
                 </button>
                 
            </div>
                 }
            
        </div>
        <p className="privacy-policy">By signing up you agree to the <strong>Privacy Policy </strong>.</p>
        </div>
    </div>
}


export default Login