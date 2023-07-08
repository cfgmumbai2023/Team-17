import React from 'react'

const AddTeacher = () => {
    return (
        <div className='container'>
            <form>
                <div className="form-group mt-2">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="exampleInputEmail1">School</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="exampleInputEmail1">Mobile</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="exampleInputPassword1">Qualification</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>

        </div>
    )
}

export default AddTeacher
