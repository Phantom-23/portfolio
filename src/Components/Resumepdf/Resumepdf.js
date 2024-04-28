import React from 'react'

import Resume from '../../Assests/resume.pdf';

const Resumepdf = () => {
    
  return (
    <div>
        <iframe src={Resume} width="90%" height="500px" />
    </div>
  )
}

export default Resumepdf