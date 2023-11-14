// SurveyField contains logic to render a single lable and text input

//import Recat from 'react';

const MyInputComponent = ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
};

export default MyInputComponent;

