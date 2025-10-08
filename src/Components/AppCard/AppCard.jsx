import React from 'react';
import { FaStar } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";

/*
{
    "id": 1,
    "title": "Facebook",
    "companyName": "Meta Platforms, Inc.",
    "description": "Connect with friends, family and communities. Share posts, stories, and join groups.",
    "size": 98,
    "reviews": 135000000,
    "ratingAvg": 4.5,
    "downloads_millions": 5000,
    "image": "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=w240-h480",
    "verified": true,
    "ratings": [
        {
            "name": "1 star",
            "count": 6500000
        },
        {
            "name": "2 star",
            "count": 2500000
        },
        {
            "name": "3 star",
            "count": 4200000
        },
        {
            "name": "4 star",
            "count": 25000000
        },
        {
            "name": "5 star",
            "count": 125000000
        }
    ],
    "largeDescription": "Facebook is a social networking hub that helps people stay connected across friendships, families, and interest groups. The app blends a customizable news feed, Stories, Groups, and Events so users can follow personal updates, trending content, and community conversations in one place. Built-in posting tools let you share photos, videos, live broadcasts, and long-form posts, while privacy and audience controls let you tailor who sees what. Facebook also supports marketplace listings, fundraising, and local recommendations — making it a versatile app for socializing, discovering local happenings, and coordinating real-world meetups. With continuous updates to content discovery and moderation, the app aims to balance personal connection with safe, discoverable content."
}
*/
const AppCard = ({ app }) => {
    const { title, image, description, ratingAvg, downloads_millions } = app;
    return (
      <>
        <div className="card bg-base-100 shadow-sm">
          <div className='p-4 rounded-xl'>
            <figure className="bg-gray-200 p-2.5 rounded">
              <img
                src={image}
                alt={title}
                className="object-cover w-1/2 px-2 py-7"
              />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>

            <div className="card-actions justify-between mt-4">
              <div className="badge badge-outline text-[#00D390] bg-[#F1F5E8] font-medium">
                <HiOutlineDownload />
                {downloads_millions}
              </div>
              <div className="badge badge-outline text-[#FF8811] bg-[#FFF0E1] font-medium">
                <FaStar />
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default AppCard;