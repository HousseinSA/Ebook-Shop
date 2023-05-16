import user1 from "../../../assets/Avatars/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
import user2 from "../../../assets/Avatars/alex-suprun-ZHvM3XIOHoE-unsplash.jpg"
import user3 from "../../../assets/Avatars/midas-hofstra-a6PMA5JEmWE-unsplash.jpg"
import user4 from "../../../assets/Avatars/nicolas-horn-MTZTGvDsHFY-unsplash.jpg"

export const Testemonial = () => {
  return (
    <section>
      <h1 className="text-center my-8 underline text-2xl ">Buyers Feedback</h1>
      <div className="flex justify-center flex-wrap items-center ">
        <div className="flex flex-wrap justify-center">
          <div className="border rounded max-w-lg dark:text-white p-10  dark:border-gray-700">
            <div className=" flex flex-col justify-center items-center py-4">
              <h1 className="text-xl pb-3">Very user friendly platform.</h1>
              <span className="text-xs pb-3 text-gray-500 dark:text-gray-300 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
                inventore.
              </span>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <img src={user1} alt={"user"} className="w-10  rounded-full" />
              <div>
                <p className=" text-sm font-medium h-3">Rayen shower</p>
                <span className="text-gray-400 text-xs">Product Manager</span>
              </div>
            </div>
          </div>
          <div className="border max-w-lg dark:text-white p-10 dark:border-gray-700 ">
            <div className=" flex flex-col justify-center items-center py-4">
              <h1 className="text-xl pb-3">i Love this platform </h1>
              <span className="text-xs pb-3 text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
                inventore.
              </span>
            </div >
            <div className="flex gap-2 justify-center items-center">
              <img src={user2} alt={"user"} className="w-10  rounded-full" />
              <div>
                <p className=" text-sm font-medium h-3">Matt timers</p>
                <span className="text-gray-400 text-xs">
                  {" "}
                  Backend developer
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="border max-w-lg dark:text-white p-10  dark:border-gray-700">
            <div className=" flex flex-col justify-center items-center  py-4">
              <h1 className="text-xl pb-3"> so easy to use. </h1>
              <span className="text-xs pb-3 text-gray-500 dark:text-gray-300 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
                inventore.
              </span>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <img src={user3} alt={"user"} className="w-10  rounded-full" />
              <div>
                <p className=" text-sm font-medium h-3">John tyler</p>
                <span className="text-gray-400 text-xs">Team Leader</span>
              </div>
            </div>
          </div>
          <div className="border max-w-lg dark:text-white p-10 dark:border-gray-700 ">
            <div className=" flex flex-col justify-center items-center py-4">
              <h1 className="text-xl pb-3"> Best EBook store ever </h1>
              <span className="text-xs pb-3 text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
                inventore.
              </span>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <img src={user4} alt={"user"} className="w-10  rounded-full" />
              <div>
                <p className=" text-sm font-medium h-3">Ricardo martin</p>
                <span className="text-gray-400 text-xs"> It Recruter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
