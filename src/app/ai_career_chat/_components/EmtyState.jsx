import React from "react";

const EmtyState = ({ setUserInput }) => {
  const selectOptions = [
    "How do I switch careers to UX design?",
    "What skills do I need for a data analyst role?",
  ];

  return (
    <section className="pt-8">
      <h1 className="text-xl font-semibold text-center ">
        Ask anything to AI career Agent
      </h1>
      <div className="mt-4 max-w-3xl mx-auto">
        {selectOptions.map((option, index) => (
          <p
            onClick={() => setUserInput(option)}
            className="text-center p-3 border border-blue-900 rounded mb-2 text-[12px] hover:bg-gray-900 cursor-pointer hover:border-primary "
            key={index}
          >
            {option}
          </p>
        ))}
      </div>
    </section>
  );
};

export default EmtyState;
