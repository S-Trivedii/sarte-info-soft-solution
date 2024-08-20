import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import Wrapper from "../../Wrapper";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light,",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light,",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light,",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light,",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
  ];

  return (
    <div className="sm:-mt-6 mt-[4em]">
      <Wrapper>
        <div className="flex flex-col items-center text-center justify-center overflow-hidden">
          <motion.span
            initial={{ y: "70%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
          >
            <h1 className="sm:text-5xl text-3xl">Testimonial</h1>
          </motion.span>
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "8%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
            className="sm:border-2 border-[1.5px] border-[#18dae4] w-0 sm:mb-2 rounded-md"
          ></motion.span>
          <motion.p
            initial={{ y: "70%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
            className="sm:text-2xl font-semibold"
          >
            Our Client Reviews
          </motion.p>
        </div>
      </Wrapper>
      <div className="mt-8">
        <div className="h-fit rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="h-fit rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
