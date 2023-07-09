import React, { useState } from 'react'

const UpdateStudents = () => {
  const [Fraction, setFraction] = useState(0);
  const [Addition, setAddition] = useState(0);
  const [Subtraction, setSubtraction] = useState(0);
  const [Social, setSocial] = useState(0);
  const [Motor, setMotor] = useState(0);
  const [Vocabluary, setVocabluary] = useState(0);
  const [show,setshow]=useState(0);

  return (
    <div className='container' style={{ width: "700px" }}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Enter Student id
        </label>
        <input
          type="text"
          className="form-control"
          required
        />
        
       </div>
      <label htmlFor="customRange3" className="form-label d-block">
        Fraction
      </label>
      <input
        style={{ width: "600px" }}
        type="range"
        min="0"
        max="10"
        value={Fraction}
        onChange={(e) => { setFraction(e.target.value) }}
      />
      <span className='mx-2'>{Fraction}</span>

      <label htmlFor="customRange3" className="form-label d-block">
        Addition
      </label>
      <input
        style={{ width: "600px" }}
        type="range"
        min="0"
        max="10"
        value={Addition}
        onChange={(e) => { setAddition(e.target.value) }}
      />
      <span className='mx-2'>{Addition}</span>

      <label htmlFor="customRange3" className="form-label d-block">
        Subtraction
      </label>
      <input
        style={{ width: "600px" }}
        type="range"
        min="0"
        max="10"
        value={Subtraction}
        onChange={(e) => { setSubtraction(e.target.value) }}
      />
      <span className='mx-2'>{Subtraction}</span>

      <label htmlFor="customRange3" className="form-label d-block">
        Social Skills
      </label>
      <input
        style={{ width: "600px" }}
        type="range"
        min="0"
        max="10"
        value={Social}
        onChange={(e) => { setSocial(e.target.value) }}
      />
      <span className='mx-2'>{Social}</span>

      <label htmlFor="customRange3" className="form-label d-block">
        Motor Skills
      </label>
      <input
        style={{ width: "600px" }}
        type="range"
        min="0"
        max="10"
        value={Motor}
        onChange={(e) => { setMotor(e.target.value) }}
      />
      <span className='mx-2'>{Motor}</span>

      <label htmlFor="customRange3" className="form-label d-block">
        Vocabluary
      </label>
      <input
        style={{ width: "600px" }}
        type="range"
        min="0"
        max="10"
        value={Vocabluary}
        onChange={(e) => { setVocabluary(e.target.value) }}
      />
      <span className='mx-2'>{Vocabluary}</span>

      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>




    </div>
  )
}

export default UpdateStudents
