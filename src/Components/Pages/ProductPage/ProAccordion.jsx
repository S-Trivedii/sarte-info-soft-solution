/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const containerVariants = {
  close: {
    height: 0,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const arrowVariants = {
  close: {
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    rotate: 180,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const ProAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(1)}
          >
            <h1>What types of investment plans do you offer?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 1 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 1 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We offer three investment plans, allowing you to earn fixed returns
            ranging from 38% to 46% without any risk.
          </div>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(2)}
          >
            <h1>How can I earn a fixed return on my investment?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 2 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 2 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            By investing in our plans, you can earn a fixed return based on the
            specific plan you choose.
          </div>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(3)}
          >
            <h1>What documents are required before I can invest?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 3 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 3 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            Before investing, you need to complete your KYC registration and
            provide your account details.
          </div>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(4)}
          >
            <h1>How do I complete the KYC registration process?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 4 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 4 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            Completing your KYC verification and submitting your bank
            information is a simple and secure process. Many investment firms
            offer online platforms where you can safely upload the required
            documents. After verification, your bank details will be connected
            to your investment account, facilitating smooth and effortless
            transactions.
          </div>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(5)}
          >
            <h1>What Happens If I Miss the Deadline for KYC Submission?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 5 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 5 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            If you miss the KYC submission deadline, it could delay the
            processing of your investment transactions. To ensure a smooth
            experience, please make sure to complete the KYC process and submit
            all required documents on time.
          </div>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(6)}
          >
            <h1>Is my investment safe with Sarte Infosoft & Solution?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 6 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 6 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            Absolutely. We ensure the safety of your investment by using proven
            methods to manage and protect your money effectively.
          </div>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(7)}
          >
            <h1>Can I Withdraw My Returns Before the Scheduled Payout Date?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 7 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 7 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            Typically, returns are credited to your bank account on the first
            Monday of each month. However, some investment plans may allow for
            withdrawals at different times. Please review the terms and
            conditions of your plan to understand the options available for
            withdrawing returns.
          </div>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(3)}
          >
            <h1>When Can I Access My Principal Amount?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 3 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 3 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            You can access your principal amount once the investment period of
            one year has ended. After this period, you have the choice to either
            withdraw your principal or renew your investment for another term.
          </div>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(8)}
          >
            <h1>Can I Alter My Investment Plan Before the End of the Term?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 8 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 8 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            In certain situations, you might be able to change or adjust your
            investment plan before the term ends. However, this could involve
            specific conditions or fees. To explore your options and understand
            any possible impacts, it's important to discuss this with your
            investment provider.
          </div>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(9)}
          >
            <h1>What Are the Tax Consequences of My Investment Returns?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 9 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 9 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            Investment returns might be taxable based on your country's tax
            laws. To fully understand how your returns will be taxed and to
            ensure you meet all tax requirements, it's best to consult with a
            tax advisor
          </div>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(10)}
          >
            <h1>How do I track the performance of my investment?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 10 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 10 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            You can track the performance of your investment through our
            user-friendly online platform, which provides real-time updates.
          </div>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(11)}
          >
            <h1>Can I change my investment plan after I have started?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 11 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 11 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            Changes to your investment plan depend on the terms and conditions
            of the specific plan. Please consult with our advisors for more
            details.
          </div>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(12)}
          >
            <h1>How do I track the performance of my investment?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 12 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 12 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            You can track the performance of your investment through our10            user-friendly online platform, which provides real-time updates.
          </div>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full sm:p-4 p-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group text-dark-500 sm:text-xl text-[15px]"
            onClick={() => handleToggle(13)}
          >
            <h1>Who can I contact for support or further questions?</h1>
            <motion.div
              initial="close"
              animate={activeIndex === 13 ? "open" : "close"}
              variants={arrowVariants}
              className="absolute right-2 pt-1 text-base"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
        </h6>
        <motion.div
          initial="close"
          animate={activeIndex === 13 ? "open" : "close"}
          variants={containerVariants}
          className="overflow-hidden"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            Our dedicated support team is available to assist you. You can reach
            us via email, phone, or through the contact form on our website.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProAccordion;
