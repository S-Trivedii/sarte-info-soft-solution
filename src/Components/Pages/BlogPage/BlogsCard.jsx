import { HoverEffect } from "../../ui/card-hover-effect";
import blog1 from '../../../assets/blog/blog1.jpg'
import blog2 from '../../../assets/blog/blog2.jpg'

const BlogsCard = () => {
  const projects = [
    {
      title: "Crypto Mining vs Crypto Trading",
      image: blog1,
      description:
        "Cryptocurrency has taken the world by storm in the past few years. As more and more people become aware of its potential, they are looking for ways to make money from it. Two of the most popular ways to do this are through crypto mining and crypto trading. Both have their own advantages and disadvantages.",
    },
    {
      title: "What is Crypto Mining?",
      image: blog2,
      description:
        "Crypto mining or Cryptocurrency mining is the process of verifying transactions on a blockchain and adding them to a ledger. It is a lucrative endeavour as miners are rewarded with cryptocurrency for their work. This reward incentivizes miners to ensure that the blockchain issecure and up-to-date. Cryptocurrency mining is an energy-intensive process.",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-1">
      <HoverEffect items={projects} />
    </div>
  );
};

export default BlogsCard;
