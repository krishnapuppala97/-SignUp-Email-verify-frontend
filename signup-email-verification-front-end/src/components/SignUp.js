import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [data, setData] = useState(null);
    const [formColor, setFormColor] = useState('#FFFFFF'); // default form color
    const [showContent, setShowContent] = useState(false); // state variable to control content visibility
    const mydata = window.location.search;
    const queryParams = new URLSearchParams(mydata);
    const body = JSON.parse(queryParams.get('body'));
    const FullName = body['Full Name'];
    const BusinessEmail = body['Business Email'];
    const requestBody = {
        "Full Name": FullName,
        "Business Email": BusinessEmail,
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowContent(true); // show content after 1 second delay
        }, 1000);

        axios.put('/Prod/posts/UpdateVerify', requestBody, { withCredentials: true })
            .then(response => {
                console.log(response.data);
                setData(response.data);
                if (response.status === 200) {
                    setFormColor('#C8E6C9'); // change form color to green if response status is 200
                } else {
                    setFormColor('#FFCDD2'); // change form color to red if response status is not 200
                }
            })
            .catch(error => {
                console.error(error);
                setData(null);
                setFormColor('#FFCDD2'); // change form color to red if error occurs
            });

        return () => clearTimeout(timeoutId); // cleanup function to clear the timeout
    }, [3]);




    return ( <
        div className = 'col-md-12' >
        <
        form style = {
            { fontSize: "auto", maxHeight: "360px", backgroundColor: formColor } } >
        <
        div > {
            showContent && ( // only show content when showContent is true
                data ? ( <
                    div >
                    <
                    h2 className = ' text-middle-justify' > Congratulations < /h2> <
                    p className = ' text-middle-justify' > Your email is verified now, Thank you
                    for choosing us. < /p>

                    <
                    /div>
                ) : ( <
                    div >

                    <
                    h2 className = ' text-middle-justify' > OOOOPS! < /h2> <
                    p className = ' text-middle-justify' > Something went wrong < /p> <
                    /div>
                )
            )
        } <
        /div> <
        /form> <
        /div>
    );
};


export default SignUp;