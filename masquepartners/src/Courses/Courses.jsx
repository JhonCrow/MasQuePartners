import React from 'react';
import courses from '../images/cur.png';
import './courses.css'

export default function Courses() {
    return (
        <div className='coursContainer'>
            <div>
                <div>
                    <h1>Nunca paramos de aprender</h1>
                    <p>Lorem lpsum is simply dummy text of the
                        printingandtypesettingindustry.</p>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those <br></br>
                        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum<br></br>
                        et Malorum" by Cicero are also reproduced in their exact original form, accompanied<br></br>
                        by English versions from the 1914 translation by H. Rackham.</p>
                </div>
                <div>
                    <h1>Nuestros cursos</h1>
                    <p>Lorem lpsum is simply dummy text of the
                        printingandtypesettingindustry.</p>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those <br></br>
                        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum<br></br>
                        et Malorum" by Cicero are also reproduced in their exact original form, accompanied<br></br>
                        by English versions from the 1914 translation by H. Rackham.</p>
                </div>
            </div>

            <div>
                <img src={courses} alt='not found' />
            </div>
        </div>
    )
}
