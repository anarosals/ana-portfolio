import React from 'react';
import ProjectOverview from './shared/ProjectOveriew';
import Section from '../shared/Section';
import ImagePopup from '../shared/ImagePopup';

import '../../css/fitStudy.css';

import airbnbStudy from '../../assets/airbnb_banner.png';
import avatarTop from '../../assets/top_avatar2.png';
import avatarBottom from '../../assets/bottom_avatar2.png';
import Megan from '../../assets/Megan.svg';
import Brianna from '../../assets/Brianna.svg';
import ratesGraph from '../../assets/rates_graph.png';
import Scott from '../../assets/Scott.svg';
import toolGraph from '../../assets/tool_graph.png';
import User_flow from '../../assets/User_flow.png';
import all_classes from '../../assets/all_classes.png';
import sign_up from '../../assets/sign_up.png';
import add_class from '../../assets/add_class.png';


const FitnessStudy = () => {
  return (
    <div>
      <div className='fitStudyWrapper'>
        <div className='fitStudyContent'>
          <div>
            <img alt='' src={airbnbStudy} />
          </div>
        </div>
      </div>
      <div className='fitStudyOverviewSectionContentWrapper'>
        <div className='fitStudyOverviewSectionContent'>
          <div style={{ display: 'block', margin: '25px 0' }} />
          <div className='fitStudyOverviewSectionCaption'>
            <h2>Project Background</h2>
          </div>
          <div style={{ display: 'block', margin: '25px 0' }} />
        </div>
      </div>
      <ProjectOverview />
      <Section sectionColor='#FFFAFA' wrapperColor='#FFFAFA'>
        <div style={{ display: 'block', margin: '46px 0' }} />

        <div className='stakeholder'> 
          <div className='stakeholder-left'>
            <div style={{ display: 'block', margin: '23px 0' }} />

            <h2>Discovering the user</h2>
            <div style={{ display: 'block', margin: '1px 0' }} />

            <h3>“How difficult can it be to give the optimal price?”</h3>
            <div style={{ display: 'block', margin: '6px 0' }} />

            <p>
            We got the project and in our first meeting, we were like, this 
            project is going to be easy, the answer is in the problem, the users 
            just need to have the optimal price, and we all believe it until we 
            created a survey and submitted to the target audience.
              <br />
              <br />
              OH BOY…  The results came back and we had to consider more aspects 
              that we didn’t think of them on the begging,  we didn’t just need 
              to give the optimal price, the users wanted something manageable, 
              something that will tell them when are the high seasons, What is the 
              range of prices they could price their Airbnb. 

              <br />
            </p>
          </div>
          <div className='stakeholder-divider' />

          <div className='stakeholder-right'>
            <img src={avatarTop} alt='Person' />
          </div>
          <div className='stakeholder-right'>
            <img src={avatarBottom} alt='Person' />
          </div>
        </div>
        <div style={{ display: 'block', margin: '70px 0' }} />
      </Section>
      
      <Section wrapperColor='#FfFF' sectionColor='#FffF'>
        <div style={{ display: 'block', margin: '25px 0' }} />
        <h2>Discovering the user</h2>
            <div style={{ display: 'block', margin: '1px 0' }} />
            <img src={ratesGraph} alt='Rates graph' />

        <div style={{ display: 'block', margin: '25px 0' }} />   
        <h2>Which tool have you used to determine your price?</h2>
            <div style={{ display: 'block', margin: '1px 0' }} />
            <img src={toolGraph} alt='Tool Graph' />

      </Section>

      <Section wrapperColor='#FfFF' sectionColor='#FffF'>
        <div style={{ display: 'block', margin: '25px 0' }} />
        <h2>Discovering the user</h2>
            <div style={{ display: 'block', margin: '1px 0' }} />
            <img src={ratesGraph} alt='Rates graph' />

        <div style={{ display: 'block', margin: '25px 0' }} />   
        <h2>Which tool have you used to determine your price?</h2>
            <div style={{ display: 'block', margin: '1px 0' }} />
            <img src={toolGraph} alt='Tool Graph' />

      </Section>
       
    </div>
    
  );
};

export default FitnessStudy;
