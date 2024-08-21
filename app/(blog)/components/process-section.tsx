interface Steps {
  title?: string | undefined;
  description?: string | undefined;
}

type ProcessSectionProps = {
  steps: Steps[];
};

export const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  return (
    <section className="py-16 px-8 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center glowRed">
          Our Process
        </h2>
        <div className="flex justify-center">
          <ol className="inline-flex flex-col gap-16 mx-auto">
            {steps.map((step, index) => (
              <li key={index} className="border-l-4 border-accent pl-4">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-primary-100 max-w-lg">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
