import { MunSpeaker } from "../components/Speakers"

export const Speakers = () => {
    return (
      <div className="mt-20">
                  <div>
                      <h1 className="text-[80px] font-bold font-sans text-white ml-[20rem]">Speakers</h1>
                      
                  </div>
                  <div className="mr-[25rem]">
                      <MunSpeaker />
                  </div>
               
              </div>
    )
}