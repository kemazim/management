import { useState, useEffect } from 'react';
import organise from "../../../assets/images/organise.jpg";
import teamwork from "../../../assets/images/teamwork.jpg";
import work from "../../../assets/images/work.jpg";

function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slidingImages = [
      {
        image: organise,
        text: "Organise your workflows",
        p: "Organizing your workflows improves efficiency, reduces errors, and saves time. A well-structured workflow ensures tasks are completed in a logical order, minimizing delays and confusion. Start by identifying key processes, breaking them into steps, and assigning responsibilities. Utilize tools like task management software, automation, and clear documentation to streamline operations. Prioritize tasks, set deadlines, and establish communication channels to keep everyone aligned. Regularly review and refine workflows to adapt to changing needs. By maintaining an organized workflow, teams can enhance productivity, reduce stress, and achieve better results. A structured approach leads to smoother execution and overall business success"
      },
      {
        image: teamwork,
        text: "Teamwork makes the dream work",
        p: "Teamwork in the workplace is essential for productivity, innovation, and a positive work environment. When employees collaborate, they bring diverse skills and perspectives, leading to better problem-solving and creativity. Effective teamwork fosters communication, trust, and mutual support, ensuring tasks are completed efficiently. It also helps distribute workloads evenly, reducing stress and improving morale. Clear goals, active listening, and respect for each team member's contributions are key to successful collaboration. Encouraging teamwork boosts motivation, strengthens relationships, and enhances overall company performance. A strong team culture leads to higher job satisfaction and long-term success for both individuals and organizations"
      },
      {
        image: work,
        text: "Work easily",
        p:"Working easily means streamlining tasks, reducing complexity, and maintaining efficiency. Using the right tools, automation, and organization can make work smoother and less stressful. Prioritizing tasks, setting clear goals, and managing time effectively help avoid burnout and increase productivity. Good communication and collaboration also simplify work by ensuring everyone is aligned. Maintaining a clutter-free workspace and adopting a positive mindset contribute to a more effortless workflow. Learning to delegate and adapt to challenges makes work more manageable. When tasks are structured well, work feels lighter, allowing for better focus, creativity, and overall job satisfaction"
      }
    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        nextSlide();
      }, 6000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="relative w-full shadow shadow-emerald-800">
        <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
          {slidingImages.map((slide, index) => (
            <div
              key={index}
              className={` absolute w-full h-full transition-transform duration-500 ease-in-out ${
                index === currentIndex ? 'translate-x-0' : 
                index < currentIndex ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.text}
                className=" w-full h-full object-cover object-center mix-blend-overlay"
                loading='lazy'
              />
              <div className="absolute inset-0 bg-black/55">
                <p className="text-white text-2xl font-semibold absolute bottom-40 sm:bottom-30 md:bottom-35 left-5">
                  {slide.text}
                </p>
                <p className="text-white text-[10px] font-medium absolute bottom-2 left-5 leading-3.5 md:leading-4.5 max-w-[80vw] md:max-w-[80vw] xl:max-w-[80vw] h-35 sm:h-25 md:h-30 md:text-sm">
                  {slide.p}
                </p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Image Indicator */}
        <div className="absolute bottom-0 flex w-full">
          {slidingImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1/3 h-2 transition-colors ${
                index === currentIndex ? 'bg-emerald-800/50' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
}

export default ImageCarousel