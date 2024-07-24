import React from 'react';
import black_1 from "../../assets/img/black_1.svg";
import blue_2 from "../../assets/img/blue_2.svg";
import grey_3 from "../../assets/img/grey_3.svg";
import grey_4 from "../../assets/img/grey_4.svg";
import darkBlue_5 from "../../assets/img/darkBlue_5.svg";
import orange_6 from "../../assets/img/orange_6.svg";

const SolveCommon = () => {

    return (
        <>
            <div className='solve_common'>
                <h2>Solves common challenges</h2>
                <div className='flex_column'>
                    <div className='sec_flex border_sec'>
                        <div className='img_content card_border'>
                            <img src={black_1} alt='black_1' className='Inability' />
                            <p>Inability to react to or predict harmful business processes or unprofitable activities.</p>
                        </div>
                        <div className='img_content card_border'>
                            <img src={blue_2} alt='blue_2' className='trend_up' />
                            <p>Lack of real-time visibility into all areas of the business.</p>
                        </div>
                        <div className='img_content'>
                            <img src={grey_3} alt='grey_3' className='eye_slash' />
                            <p>Inability to scale due to manual processes.</p>
                        </div>
                    </div>
                    <div className='sec_flex border_sec_top'>
                        <div className='img_content card_border'>
                            <img src={grey_4} alt='grey_4' className='limited' />
                            <p>Limited internal control.</p>
                        </div>
                        <div className='img_content card_border'>
                            <img src={darkBlue_5} alt='darkBlue_5' className='share' />
                            <p>Limited insight into business processes.</p>
                        </div>
                        <div className='img_content'>
                            <img src={orange_6} alt='orange_6' className='company' />
                            <p>Inadequate control within the company.</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SolveCommon;