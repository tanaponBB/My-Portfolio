import React from 'react'
import { ReactComponent as WorkIcon } from '../assets/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/school.svg';
// js file
import timelineElements from "../elementsworkdata";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const Work = () => {
  let workIconStyles = { background: "#06D6A0"};
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <div name='work' className='w-full md:h-screen bg-[#111111] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl  font-bold inline border-b-4 border-[#ffbf50]'>Work</p>
              <p className='py-4'>// This is my work experience.</p>
          </div>
          <div className='py-4'>
          <VerticalTimeline lineColor='#ffbf50'
              className='w-full py-8' >
                {
                  timelineElements.map(element => {
                    let isWorkIcon = element.icon === "work";

                    return (
                      <VerticalTimelineElement
                      key={element.key}
                      date={element.date}
                      dateClassName="date"
                      iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                      icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                          <h3 className="text-lg  font-bold text-black">{element.title}</h3>
                          <h5 className="text-mb  font-bold text-black">{element.location}</h5>
                          <p className='text-base font-light text-black'>{element.description}</p>
                          <p class=' text-sm font-light text-black'>{element.date}</p>
                      </VerticalTimelineElement>
                    )
                  })
                }
              </VerticalTimeline>
          </div>





          </div>
    </div>
  )
}

export default Work;