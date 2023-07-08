import React from "react";

const AddStudent = () => {
    return (
        <div className="container" style={{width:"600px"}}>
            <form>
                <div className="form-group mt-3" >
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                        type="Text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    
                </div>
                <div className="form-group mt-3" >
                    <label htmlFor="exampleInputEmail1">BMC School</label>
                    <input
                        type="Text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    
                </div>
                <div className="form-group mt-3" >
                    <label htmlFor="exampleInputEmail1">Age</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    
                </div>
                <div className="form-group mt-3" >
                    <label htmlFor="exampleInputEmail1">Disability</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    
                </div>
                <div className="form-group mt-3 " >
                    <label htmlFor="exampleInputEmail1">Severity</label>
                    <select className="mx-5 rounded" name="Severity" id="Severity">
                        <option value="mild">Mild</option>
                        <option value="moderate">Moderate</option>
                        <option value="seveare">seveare</option>
                    </select>
                    
                </div>
                <div className="form-group mt-3" >
                    <label htmlFor="exampleInputEmail1">Gender</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    
                </div>
                <div className="form-group mt-3" >
                    <label htmlFor="exampleInputEmail1">Level</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    
                </div>
                <div className="form-group mt-3" >
                    <label htmlFor="exampleInputEmail1">DOB</label>
                    <input
                        type="date"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    
                </div>
                <div className="form-group mt-3" >
                    <label htmlFor="exampleInputEmail1">DOA</label>
                    <input
                        type="date"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        
                    />
                    
                </div>
                <div className="form-group mt-3" >
                    <label htmlFor="exampleInputEmail1">Addhar</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        
                    />
                    
                </div>
                <div className="form-group mt-3" >
                    <label htmlFor="exampleInputEmail1">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        
                    />
                    
                </div>
                <div className="form-group mt-3" >
                    <label htmlFor="exampleInputEmail1">Contact</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        
                    />
                    
                </div>
                <div className="form-group mt-3" >
                    <label htmlFor="exampleInputEmail1">School</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                       
                    />
                    
                </div>
                
                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>

        </div>
    );
};

export default AddStudent;
