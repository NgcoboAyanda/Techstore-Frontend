import React, { useState } from 'react';

import '../InputBoxes.css';

const PhoneInput = ({ value='', placeholder='', label='', optional=false, register})=>{
    //register is a function from react-hook-form
    const[focused, setFocused] = useState(false);
    const[error, setError] = useState('');

    const validationPattern = /^\d{10}$/;

    const onInputFocus = ()=>{
        setFocused(true);
    }

    const onInputFocusLost = ()=>{
        setFocused(false);
        validate();
    }

    const clearError=()=>{
        setError('');
    }

    const validate = ()=>{
        //will validate the input box
        if(optional){
            if(value.length === 0){
                clearError();
            }
            else if(value.length > 0){
                let match = validationPattern.test(value)
                if(!match){
                    setError('PLease enter a valid South African phone number');
                }
                else if(match){
                    clearError();
                }
            }
            else{
                setError('PLease enter a valid South African phone number');
            }
        }
    }

    const renderInputLabelClass = ()=>{
        //return 'input-box__label_focused'
        //return 'input-box__label_normal'
        if(focused){
            return 'input-box__label_focused';
        }
        else if (!focused && value){
            return 'input-box__label_focused';
        }
        else if (!focused){
            return 'input-box__label_normal';
        }
    }

    const renderErrorMsg = () => {
        if(error){
            return(
                <div className="input-box__error-msg">
                    <div className="input-box__error-msg__inner">
                        {error}
                    </div>
                </div>
            )
        }
    }

    const renderInputBgClass = ()=>{
        if(!error){
            return 'input-box__bg_normal';
        }
        else{
            return 'input-box__bg_error';
        }
    }

    const renderInputBoxClass = ()=>{
        if(!error){
            return 'input-box_normal';
        }
        else{
            return 'input-box_error';
        }
    }

    const renderPhoneRequired = ()=>{
        if(error){
            return true
        }
        else{
            return false
        }
    }

    return (
        <div className={`input-box ${renderInputBoxClass()}`}>
            <div className="input-box__inner --fill-parent --bg-transparent">
                <div className="input-box__element --fill-parent --bg-transparent">
                    <div className="input-box__element__inner --fill-parent --bg-transparent">
                        <input 
                            type='text' 
                            className="--fill-parent --bg-transparent" 
                            {...register(label, {required: renderPhoneRequired(), pattern: validationPattern })}
                            onFocus={()=>onInputFocus()}  
                            onBlur={()=>onInputFocusLost()} 
                            />
                    </div>
                </div>
                <div className={`input-box__bg ${renderInputBgClass()}`}>
                    {/* This is the background */}
                </div>
                <div className={`input-box__label ${renderInputLabelClass()}`}>
                    <div className="input-box__label__inner">
                        {placeholder||label}
                    </div>
                </div>
            </div>
            {renderErrorMsg()}
        </div>
    )
}

export default PhoneInput;