
import Footer from "./Footer";

const BlogHero = () => {
  return (
    <>
      <section className="p-5">
        <h1 className="font-nunito text-center mx-auto mb-7 text-[1.5rem] font-bold">
          Why Documenting Your Business Process is Crucial for Growth
        </h1>
        <div className="flex justify-between text-sm font-nunito px-5 mb-5 max-[500px]:px-0 xl:text-[1rem] 2xl:text-[1.5rem] xl:justify-evenly">
          <p className="font-bold ">Bayo Olayemi</p>
          <p className="text-[#787878] italic">Last updated: May 29, 2024</p>
        </div>
        <div className=" font-nunito flex gap-5 mb-10 max-[500px]:block min-[1000px]:block min-[1000px]:h-[14rem] min-[1000px]:mb-15 xl:mb-35 2xl:mb-65">
          <img
            className="size-[50%] rounded-[1rem] object-cover max-[500px]:size-[70%] max-[500px]:mx-auto max-[500px]:mb-5 min-[1000px]:mx-auto min-[1000px]:w-[50%] min-[1000px]:h-[100%] min-[1000px]:mb-10 xl:h-[150%] 2xl:h-[200%]"
            src="/images/blog-image.jpg"
            alt=""
          />
          <p className="text-[3vw] max-[500px]:text-[1rem] font-nunito tracking-tight min-[1000px]:hidden">
            In the fast-paced world of business, growth isn’t just about
            increasing sales or expanding your market share. It’s about building
            a strong, scalable foundation that can support your company’s
            long-term success. One of the most overlooked yet essential aspects
            of this foundation is business process documentation.
          </p>
        </div>
        <div className="min-[1000px]:w-[46rem] min-[1000px]:mx-auto min-[1000px]:text-left lg:text-[1rem] xl:text-[1.5rem]">
          <p className="max-[1000px]:hidden text-[3vw] max-[500px]:text-[1rem] font-nunito tracking-tight min-[1000px]:text-[1rem] min-[1000px]:mb-10 xl:text-[1.5rem]">
            In the fast-paced world of business, growth isn’t just about
            increasing sales or expanding your market share. It’s about building
            a strong, scalable foundation that can support your company’s
            long-term success. One of the most overlooked yet essential aspects
            of this foundation is business process documentation.
          </p>

          <h2 className="font-bold text-center min-[1000px]:text-left">
            What is Business Process Documentation?
          </h2>
          <p className="mb-5">
            Business process documentation involves creating detailed records of
            the steps, tasks, and procedures that define how work is done within
            your organization. Whether it’s onboarding a new employee, managing
            customer relationships, or handling inventory, every process in your
            business can—and should—be documented.
          </p>
          <h2 className="font-bold text-center min-[1000px]:text-left">
            How to Get Started with Process Documentation
          </h2>
          <p className="mb-5">
            Starting your process documentation journey doesn’t have to be
            daunting. Begin by identifying key processes that directly impact
            your growth goals. Involve your team members in the documentation
            process to capture every detail accurately. Use tools like
            flowcharts, checklists, and templates to make your documentation
            clear and accessible.
          </p>
          <h2 className="font-bold text-center min-[1000px]:text-left">
            Conclusion
          </h2>
          <p className="min-[1000px]:mb-5">
            In today’s competitive business landscape, growth requires more than
            just ambition—it requires a strong foundation built on clear,
            consistent processes. By documenting your business processes, you
            empower your team, enhance scalability, and set the stage for
            sustained success. Don’t let the lack of documentation hold your
            business back. Start today, and watch your growth take off.
          </p>
          <div className="max-[1000px]:hidden">
            <img src="/icons/send-button.png" alt="" />
          </div>
        </div>
      </section>
      <Footer/>
   
    </>
  );
};

export default BlogHero;
