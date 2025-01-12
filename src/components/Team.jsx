import Img from "../assets/TeamImg.png";
import Img2 from "../assets/TeamImg2.png";
import Img3 from "../assets/TeamImg3.png";

function Team() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="w-[70%] bg-white p-6 rounded-lg shadow-lg ml-20">
        <div className="text-2xl font-semibold text-headingColor">Team</div>
        <div className="text-base font-medium text-mainText mt-4">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </div>
        <div className="flex flex-col gap-6 mt-6">
          {/* Profile 1 */}
          <div className="bg-[#E8F4FD] rounded-lg py-4 px-4 flex gap-4 items-start">
            <div className="flex flex-col items-center">
              <img
                src={Img}
                alt="John Smith"
                className="w-28 h-28 object-cover"
              />
              <div className="text-base font-semibold text-center mt-2">
                John Smith
              </div>
              <div className="text-[#788F9B] font-medium text-xs text-center">
                Frontend Developer
              </div>
            </div>
            <div className="text-sm font-normal text-[#0F1629]">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
              in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
              nec neque sed pellentesque viverra. Consectetur proin amet ut id
              facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
              egestas dolor est ipsum.
            </div>
          </div>
          {/* Profile 2 */}
          <div className="bg-[#E8F4FD] rounded-lg py-4 px-4 flex gap-4 items-start">
            <div className="flex flex-col items-center">
              <img
                src={Img2}
                alt="Sarah Doe"
                className="w-28 h-28 object-cover"
              />
              <div className="text-base font-semibold text-center mt-2">
                Sarah Doe
              </div>
              <div className="text-[#788F9B] font-medium text-xs text-center">
                Backend Developer
              </div>
            </div>
            <div className="text-sm font-normal text-[#0F1629]">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
              in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
              nec neque sed pellentesque viverra. Consectetur proin amet ut id
              facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
              egestas dolor est ipsum.
            </div>
          </div>
          {/* Profile 3 */}
          <div className="bg-[#E8F4FD] rounded-lg py-4 px-4 flex gap-4 items-start">
            <div className="flex flex-col items-center">
              <img
                src={Img3}
                alt="Michael Lee"
                className="w-28 h-28 object-cover"
              />
              <div className="text-base font-semibold text-center mt-2">
                Michael Lee
              </div>
              <div className="text-[#788F9B] font-medium text-xs text-center">
                UI/UX Designer
              </div>
            </div>
            <div className="text-sm font-normal text-[#0F1629]">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
              in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
              nec neque sed pellentesque viverra. Consectetur proin amet ut id
              facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
              egestas dolor est ipsum.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
