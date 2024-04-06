import React from "react";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";

const Content = () => {
  const content_List = [
    {
      id: 1,
      content:
        "  Why do I see a tilda logo on a grey background when I open my website?",
    },
    {
      id: 2,
      content: " How do I connect to custom domain",
    },
  ];

  return (
    <div className="h-full   bg-[#FFFFFF]  my-1 md:flex inline mr-2">
      <ul className="bg-[#FFFFFF] my-5">
        <li className="p-2 ml-2 md:ml-10">
          <label className="font-semibold text-sm md:text-lg">Domains</label>
        </li>
        <li className="ml-4 md:ml-12 mr-4 font-normal my-4">
          <div className="relative">
            <HiMiniQuestionMarkCircle className="size-4 md:size-5 text-orange-300 absolute mt-1.5 md:mt-0.5 " />
            <p className="ml-5 md:ml-6 text-xs md:text-sm">
              Why do I see a tilda logo on a grey background when I open my
              website?{" "}
            </p>
          </div>
        </li>
        <li className="ml-4 md:ml-12 mr-4 font-normal my-4">
          <div className="relative">
            <HiMiniQuestionMarkCircle  className="size-4 md:size-5 text-orange-300 absolute mt-1.5 md:mt-0.5 "  />
            <p className="ml-5 md:ml-6 text-xs md:text-sm">How do I connect to custom domain</p>
          </div>
        </li>
        
         
          <li className="ml-4 md:ml-12 mr-4 font-normal my-4">
          <div className="relative">
          <HiMiniQuestionMarkCircle  className="size-4 md:size-5 text-orange-300 absolute mt-1.5 md:mt-0.5 "  />
            <p className="ml-5 md:ml-6 text-xs md:text-sm">
              How do I connect multiple domains to a single Tilda website
            </p>
            </div>
          </li>
        

       
          <li className="ml-4  md:ml-12 mr-4 font-normal my-4">
          <div className="relative">
          <HiMiniQuestionMarkCircle  className="size-4 md:size-5 text-orange-300 absolute mt-1.5 md:mt-0.5 " />
           <p className="ml-5 md:ml-6 text-xs md:text-sm">How do I create a custom business email address</p> 
            </div>
          </li>
       

       
          <li className="ml-4 md:ml-12 mr-4 font-normal my-3">
          <div className="relative">
          <HiMiniQuestionMarkCircle  className="size-4 md:size-5 text-orange-300 absolute mt-1.5 md:mt-0.5 "  />
           <p className="ml-5 md:ml-6 text-xs md:text-sm">troubleshooting custom domain errors</p> 
            </div>
          </li>
        

        
          <li className="ml-4 md:ml-12 mr-4 font-normal my-3">
          <div className="relative">
          <HiMiniQuestionMarkCircle  className="size-4 md:size-5 text-orange-300 absolute mt-1.5 md:mt-0.5 "  />
           <p className="ml-5 md:ml-6 text-xs md:text-sm">How do I connect a subdomain to my Tilda website</p> 
           </div>
          </li>
        

        
          <li className="ml-4 md:ml-12 mr-4 font-normal my-3">
          <div className="relative">
          <HiMiniQuestionMarkCircle  className="size-4 md:size-5 text-orange-300 absolute mt-1.5 md:mt-0.5 "  />
           <p className="ml-5 md:ml-6 text-xs md:text-sm"> How do I redirect from HTTP to HTTPS</p> 
           </div>
          </li>
        

        
          <li className="ml-4 md:ml-12 mr-4 font-normal my-3">
            <div className="relative">
            <HiMiniQuestionMarkCircle  className="size-4 md:size-5 text-orange-300 absolute mt-1.5 md:mt-0.5 " />
            <p className="ml-5 md:ml-6 text-xs md:text-sm">How do I remove 'www' from my domain?</p>
            </div>
            
          </li>
        

        
          <li className="ml-4 md:ml-12 mr-4 font-normal my-3">
          <div className="relative">
          <HiMiniQuestionMarkCircle className="size-4 md:size-5 text-orange-300 absolute mt-1.5 md:mt-0.5 "  />
            <p className="ml-5 md:ml-6 text-xs md:text-sm">How do I set up HTTPS/SSL for a subdomain in Tilda?</p>
          
        </div>
        </li>

        
          <li className="ml-4 md:ml-12  mr-4 font-normal my-3">
          <div className="relative">
          <HiMiniQuestionMarkCircle  className="size-4 md:size-5 text-orange-300 absolute mt-1.5 md:mt-0.5 " />
            <p className="ml-5 md:ml-6 text-xs md:text-sm">How do I set up my HTTPS/SSL certificate</p>
            </div>
          </li>
        


          <li className="ml-4 md:ml-12 mr-4 font-normal my-3">
        <div className="relative">
          <HiMiniQuestionMarkCircle  className="size-4 md:size-5 text-orange-300 absolute mt-1.5 md:mt-0.5 "  />
         
            <p className="ml-5 md:ml-6 text-xs md:text-sm">How can I speed up(optimize) my Tilda website?</p>
        
        </div>
        </li>
      </ul>

      <div>
        {content_List.map((content) => {
          <ul>
            <li>{content.content}</li>
          </ul>;
        })}
      </div>
    </div>
  );
};

export default Content;
