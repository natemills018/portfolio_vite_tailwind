import React from  'react';
import { Link } from 'react-router-dom';


interface HomeProps {

}


const Home = (props: HomeProps) => {


    const handleLemonnadeMode = () => {
        if(document.body.classList.contains("lemonade")) {
            document.body.classList.remove("lemonade")
        } else {
            document.body.classList.add("lemonade")
        }
    }

    return (
        <main className=''>
            Is THis working?

            <button className='my-5 rounded-md btn btn-ghost' onClick={handleLemonnadeMode}>
                LemonadeTime
            </button>
        </main>
    )


}

export default Home;