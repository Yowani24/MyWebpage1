import React from 'react'

export default function HiremePage() {
    return (
        <div className="HiremePage">
            <div className="container Hire_h1">
                <h1>Get in touch with me</h1>
            </div>
            <div className="container Hire_me_box">
                <div className="form_card">
                <h1>Request a service</h1>
                    <div className="form-controls">
                        <input type="text" name="name" autoComplete="off" required/>
                        <label for="name" className="label_class">
                            <span className="placeholder_reference">Name</span>
                        </label>
                    </div>

                    <div className="form-controls">
                        <input type="text" name="company" autoComplete="off" required/>
                        <label for="company" className="label_class">
                            <span className="placeholder_reference">Company name</span>
                        </label>
                    </div>

                    <div className="form-controls">
                        <input type="text" name="email" autoComplete="off" required/>
                        <label for="email" className="label_class">
                            <span className="placeholder_reference">Email</span>
                        </label>
                    </div>
                    
                        <input type="submit" value="Send" className="form_btn"/>
                   
                    
                </div>
            </div>
        </div>
    )
}
