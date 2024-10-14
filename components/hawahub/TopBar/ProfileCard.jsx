import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';


const ProfileCard = () => (
  <Card
    bordered={false}
    style={{
      width: "100%",
      backgroundColor: "#dffcf0",
      display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    }}
    className='flex-col-center'
  >
    <div>
    <Image
    src="/images/media/under-18.png"
    alt="logo"
    width={60}
    height={60}
    />
    </div>
    <div>
    <p className='text-center text-bold m-0 p-0 mt-10'>Hi Hawa</p>
    </div>
  </Card>
);
export default ProfileCard;