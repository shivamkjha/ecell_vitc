import React from 'react'
import Event from './widgets/Event';
import Heading from './widgets/Heading';
import BlogBox from './widgets/BlogBox';

function Blogs() {
  return (
    <div className="blogs">
      <Heading heading={"Blogs"} />
      <div className="flex flex-wrap">
        <BlogBox
          heading={"Success Story of Zepto"}
          author={"Shivam Jha"}
          content={`Zepto is a grocery shopping app that delivers groceries in 10 minutes. Customers get to choose from thousands of popular items including fresh farm vegetables and fruits, groceries, dairy & more at the best prices from Zepto `}
        />
        <BlogBox
          heading={"Physics Wallah becomes Unicorn"}
          author={"Ankush Chaudhary"}
          content={`Physics Wallah became India's 101st unicorn startup. Physics Wallah raised $100 million from the Westbridge Capital & GSV ventures, which took the company valuation to a massive $1.1 billion. `}
        />
        <BlogBox
          heading={"Raising Funding in 2024"}
          author={"Sudhansh"}
          content={`In today's world, raising funding requires a strategic approach. Start by refining your business plan and identifying your target investors. Utilize crowdfunding platforms, pitch competitions, and angel investor networks.
           `}
        />
        <BlogBox
          heading={"Habits of Successful Entrepreneurs"}
          author={"Aashik"}
          content={`Being an entrepreneur is not just about having a great idea or a strong business acumen. It's also about cultivating the right habits to ensure long-term success. Here are some key habits that successful entrepreneurs often possess:`}
        />
      </div>
    </div>
  );
}

export default Blogs
