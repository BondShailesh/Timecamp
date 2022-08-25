import React from 'react'
import "./tracking.css";
import { Heading ,Button} from '@chakra-ui/react'

import { AiOutlineChrome } from 'react-icons/ai';

const Tracking = () => {
  return (
    <div className='tracking_top'>
        <div className='tracking_left'>
          <p className='p'>TIME TRACKING INTEGRATIONS</p>
          <Heading as='h2' size='xl'>
          Easy and quick integration with more than 100 apps and work tools
        </Heading>
        <br />
        <p>
        TimeCamp works great alongside with all of the most popular work management tools.
        </p>

  <br/>
  <br />
  <p>
  Now, you can also track time directly from your go-to apps such as Trello or Asana thanks to our Chrome extension.
  </p>

  <br />
  <br />
  <Button color="white" colorScheme="whatsapp" padding="35px" borderRadius="40px"><AiOutlineChrome style={{fontSize:"50px"}}/> Track time in chrome</Button>
  <br />
 
        </div>
        {/* left side */}
        <div className='tracking_right'>
            <div>
                <img src="https://cdn-m.timecamp.com/img/greenbranding/integrations/slack.png" alt="" />
            </div>
            <div>
                <img src="https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png" alt="" />
            </div>
            <div>
                <img src="https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png" alt="" />
            </div>
            <div>
                <img src="	https://cdn-m.timecamp.com/img/greenbranding/integrations/ical.png" alt="" />
            </div>
            <div>
                <img src="	https://cdn-m.timecamp.com/img/greenbranding/integrations/podio.png" alt="" />
            </div>
            <div>
                <img src="https://cdn-m.timecamp.com/img/greenbranding/integrations/quickbooks.png" alt="" />
            </div>
            <div>
                <img src="https://cdn-m.timecamp.com/img/greenbranding/integrations/jira.png" alt="" />
            </div>
            <div>
                <img src="https://cdn-m.timecamp.com/img/greenbranding/integrations/todoist.png" alt="" />
            </div>
            <div>
                <img src="	https://cdn-m.timecamp.com/img/greenbranding/integrations/outlookcalendar.png" alt="" />
            </div>
            <div>
                <img src="https://cdn-m.timecamp.com/img/greenbranding/integrations/googlecalendar.png" alt="" />
            </div>
            <div>
                <img src="https://cdn-m.timecamp.com/img/greenbranding/integrations/smartsheet.png" alt="" />
            </div>
            <div>
                <img src="https://cdn-m.timecamp.com/img/greenbranding/integrations/xero.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Tracking