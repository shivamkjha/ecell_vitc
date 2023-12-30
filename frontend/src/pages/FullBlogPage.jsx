import React from "react";


const result = [
  {
    isApproved: "yes",
    Author: "Shivam Jha",
    title: "Success Story of Zepto",
    Description:
      "Zepto is not another grocery delivery app but a platform that promises 10-minute deliveries of groceries, built in order to revolutionize the selling and deliveries of groceries. With Zepto by their side, customers can conveniently purchase 5000+ products and get them delivered to their doorstep with the help of Zepto's 10-minute e-grocery delivery app.",
    Body: "`Hailing from Bengaluru, Vohra was raised in Dubai. The Zepto co-founder told Times of India that he always planned to start a business of his own though originally he had a traditional roadmap for his career. While he too once dreamt of working at a multinational company for a few years after finishing college, Vohra soon got the idea of delivery grocery in no time.Kaivalya identified that the business idea of taking grocery shopping online and delivering to doorsteps in quick time, which evolved into the ‘10-minute’ delivery model, was right for the circumstances during the pandemic.Zepto is a grocery shopping app that delivers groceries in 10 minutes. Customers get to choose from thousands of popular items including fresh farm vegetables and fruits, groceries, dairy & more at the best prices from Zepto",
    isModified: true,
    ModifiedBy: "sudhansh",
    DateOfModification: "2023-10-23",
    Likes: 0,
  },
  {
    isApproved: "yes",
    Author: "Ankush",
    title: "Physics Wallah becomes Unicorn",
    Description:
      "It was founded by Alakh Pandey and Prateek Maheshwari in 2020. It became a unicorn in June 2022 after raising $100 million at a valuation of $1.1 billion.",
    Body: "Physics Wallah became India's 101st unicorn startup. Physics Wallah raised $100 million from the Westbridge Capital & GSV ventures, which took the company valuation to a massive $1.1 billion. `}",
    ModifiedBy: "sudhansh",
    DateOfModification: "2023-10-23",
    Likes: 0,
    img: "data:image/jpeg;base64,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",
  },
  {
    isApproved: "yes",
    Author: "Sudhansh",
    title: "Raising Funding in 2024",
    Description:
      "What is the concept of raising funds Fundraising is the process of gathering voluntary contributions of money or other resources carried out by non-profit making organisations — NGOs, foundations, associations, collectives",
    Body: "In today's world, raising funding requires a strategic approach. Start by refining your business plan and identifying your target investors. Utilize crowdfunding platforms, pitch competitions, and angel investor networks.",
    isModified: true,
    ModifiedBy: "sudhansh",
    DateOfModification: "2023-10-23",
    Likes: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJMAghmveUt2LXMEYEiPAJJSaOLeE8ICihA&usqp=CAU",
  },
  {
    _id: "qwertyuiop876fgh",
    isApproved: "yes",
    Author: "Aashik",
    title: "Habits of Successful Entrepreneurs",
    Description: "qwertyuiop;lkjhgfdsaZxcvbnmkiouytr32123456789okjhytrewa",
    Body: "qwertyuiop;lkjhgfdsaZxcvbnmkiouytr32123456789okjhytrewalkjhgfdsaZxcvbnmkiouytr32123456789okjhytrewalkjhgfdsaZxcvbnmkiouytr32123456789okjhytrewalkjhgfdsaZxcvbnmkiouytr32123456789okjhytrewalkjhgfdsaZxcvbnmkiouytr32123456789okjhytrewalkjhgfdsaZxcvbnmkiouytr32123456789okjhytrewalkjhgfdsaZxcvbnmkiouytr32123456789okjhytrewalkjhgfdsaZxcvbnmkiouytr32123456789okjhytrewalkjhgfdsaZxcvbnmkiouytr32123456789okjhytrewa",
    isModified: true,
    ModifiedBy: "sudhansh",
    DateOfModification: "2023-10-23",
    Likes: 0,
    img: "data:image/jpeg;base64,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",
  },
];

// LikeButton component
function LikeButton({ likes }) {
  const [likeCount, setLikeCount] = React.useState(likes);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out"
      onClick={handleLike}
    >
      👍 {likeCount}
    </button>
  );
}

// MainBlog component
function MainBlog({ value }) {
  return (
    <>
      {value.map((item, index) => {
        if (index === 0) {
          return (
            <article
              key={item._id || index}
              className="p-4 bg-white border border-gray-200 rounded shadow-lg"
            >
              <h1 className="text-4xl font-bold text-red-600 mb-4 underline">
                {item.title}
              </h1>
              <p className="italic text-xl mb-4 bg-cyan-100 rounded-lg shadow-lg">
                {item.Description}
              </p>
              <p className="italic text-xl mb-4 bg-cyan-100 rounded-lg shadow-lg">
                {item.Body}
              </p>
              <LikeButton likes={item.Likes} />
            </article>
          );
        }
        return null;
      })}
    </>
  );
}

// OtherBlogs component
function OtherBlogs({ value }) {
  return (
    <>
      {value.map((item, index) => {
        if (index !== 0) {
          return (
            <article
              key={item._id || index}
              className="p-4 bg-gray-100 border border-purple-200 rounded shadow-lg mb-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-blue-500 mb-2">
                {item.title}
              </h2>
              <div className="italic text-green-500 text-xs mb-2">
                by {item.Author}
              </div>
              <LikeButton likes={item.Likes} />
            </article>
          );
        }
        return null;
      })}
    </>
  );
}

// BlogPage component
function FullBlogPage() {
  const [blogs, setBlogs] = React.useState(result); // Replace 'result' with your data source

  return (
    <div className="container mx-auto my-4">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full lg:w-2/3 px-2 mb-4">
          <MainBlog value={blogs} />
        </div>
        <div className="w-full lg:w-1/3 px-2">
          <OtherBlogs value={blogs} />
        </div>
      </div>
    </div>
  );
}

export default FullBlogPage;
