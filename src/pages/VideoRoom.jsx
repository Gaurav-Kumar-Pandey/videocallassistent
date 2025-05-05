import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom';

function VideoRoom() {
    let {roomId} = useParams()
    const myMeeting =async (element)=>{
        const appID = 497795524;
        const serverSecret = "b6889469f05d82b839f22ca08c07f52b";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"Gaurav Kumar Pandey")
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'copy link',
                url:`http://localhost:5173/room/${roomId}`,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
          });
    
    }
  return (
    <div>
        <div ref={myMeeting}/>
    </div>
  )
}

export default VideoRoom