import React from 'react';
import Inability from "../../assets/img/Inability.svg";
import trend_up from "../../assets/img/trend_up.svg";
import eye_slash from "../../assets/img/eye_slash.svg";
import limited from "../../assets/img/limited.svg";
import share from "../../assets/img/share.svg";
import company from "../../assets/img/company.svg";

const SolveCommon = () => {

    return (
        <>
            <div className='tab_sec'>
                <h2>Solves common challenges</h2>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src={Inability} alt='Inability' className='Inability' />
                                <p>Inability to react to or predict harmful business processes or unprofitable activities.</p>
                            </div>
                            <div>
                                <img src={trend_up} alt='trend_up' className='trend_up' />
                                <p>Inability to react to or predict harmful business processes or unprofitable activities.</p>
                            </div>
                            <div>
                                <img src={eye_slash} alt='eye_slash' className='eye_slash' />
                                <p>Inability to react to or predict harmful business processes or unprofitable activities.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={limited} alt='limited' className='limited' />
                                <p>Inability to react to or predict harmful business processes or unprofitable activities.</p>
                            </div>
                            <div>
                                <img src={share} alt='share' className='share' />
                                <p>Inability to react to or predict harmful business processes or unprofitable activities.</p>
                            </div>
                            <div>
                                <img src={company} alt='company' className='company' />
                                <p>Inability to react to or predict harmful business processes or unprofitable activities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SolveCommon;