import React from "react";
import Sample from "./Sample";
import Event from "./widgets/Event";
import Heading from "./widgets/Heading";
import BlogBox from "./widgets/BlogBox";
import { Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function BlogsContainer() {
  return (
    <div id="events">
      <Heading heading={"Blogs"} />
      <div className=" mr-10 bg-bcol flex items-center overflow-x-auto overflow-hidden rounded-r-3xl p-3">
        <div className="flex-col flex-wrap">
          <BlogBox
            picture={
              "https://play-lh.googleusercontent.com/tjzK0-TCkXB1zxkmiRr5WNGJxQy87s1RdBx10nqLbdxRIH7bPWxTkH_YiUMbYPFRfmj7=w240-h480-rw"
            }
            heading={"Success Story of Zepto"}
            author={"Shivam Jha"}
            content={`Zepto is a grocery shopping app that delivers groceries in 10 minutes. Customers get to choose from thousands of popular items including fresh farm vegetables and fruits, groceries, dairy & more at the best prices from Zepto `}
          />
          <BlogBox
            picture={
              "https://img.etimg.com/thumb/width-640,height-480,imgsize-5908,resizemode-75,msid-99903494/tech/technology/physicswallah-rolls-out-50-offline-centres-to-offer-scholarships-worth-rs-160-crore/pw-physicswallah.jpg"
            }
            heading={"Physics Wallah becomes Unicorn"}
            author={"Ankush Chaudhary"}
            content={`Physics Wallah became India's 101st unicorn startup. Physics Wallah raised $100 million from the Westbridge Capital & GSV ventures, which took the company valuation to a massive $1.1 billion. `}
          />
        </div>
        <div>
          <BlogBox
            picture={
              "https://images.theconversation.com/files/481362/original/file-20220826-10690-nguhqg.jpg?ixlib=rb-1.1.0&rect=224%2C71%2C5766%2C3574&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
            }
            heading={"Raising Funding in 2024"}
            author={"Sudhansh"}
            content={`In today's world, raising funding requires a strategic approach. Start by refining your business plan and identifying your target investors. Utilize crowdfunding platforms, pitch competitions, and angel investor networks.
           `}
          />
          <BlogBox
            picture={
              "data:image/jpeg;base64,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"
            }
            heading={"Habits of Successful Entrepreneurs"}
            author={"Aashik"}
            content={`Being an entrepreneur is not just about having a great idea or a strong business acumen. It's also about cultivating the right habits to ensure long-term success. Here are some key habits that successful entrepreneurs often possess:`}
          />
        </div>

        <div className="flex-col w-[700px] flex-wrap">
          <BlogBox
            picture={
              "https://startupstorymedia.com/wp-content/uploads/2022/06/CASE-STUDY-ON-ZEPTO-1.jpg"
            }
            heading={"Success Story of Zepto"}
            author={"Shivam Jha"}
            content={`Zepto is a grocery shopping app that delivers groceries in 10 minutes. Customers get to choose from thousands of popular items including fresh farm vegetables and fruits, groceries, dairy & more at the best prices from Zepto `}
          />

          <div className="m-4 w-96 h-72 sm:w-[700px] sm:h-[220px] flex justify-center items-center flex-shrink-0 border-4 bg-gray-500 shadow-xl rounded-xl overflow-hidden">
            <div className=" text-center">
              <p className="text-white font-medium text-xl m-2">
                Click below to read more such blogs
              </p>
              <Button variant="contained" color="success">
                Explore
                <ArrowOutwardIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsContainer;
