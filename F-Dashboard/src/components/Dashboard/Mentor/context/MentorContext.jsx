import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MentorContext = createContext(null);

export const MentorProvider = ({ children }) => {

  const [mentor, setMentor] = useState([]);

  const [stats, SetStats] = useState();

  useEffect(() => {
    fetchMentor();
  }, []);

  const fetchMentor = async () => {

    try {
      const res = await axios.get("http://127.0.0.1:8000/mentors");

      const unqiueMentor = calDuplicate(res.data)
      setMentor(unqiueMentor);
      calculateMentor(unqiueMentor)




      
    } catch (error) {
      console.error("API error", error);
    }
  };

  const calDuplicate = (data) => {

    let result = []

    for (let i = 0; i < data.length; i++) {
      let exist = false

      for (let j = 0; j < result.length; j++) {
        if (data[i]._id === result[j]._id) {
          exist = true
          break;
        }
      }
      if (!exist) {
        result.push(data[i])
      }
    }



    return result

  }

  const calculateMentor = (data) => {

    let totalMentor = data.length
    let activeMember = 0
    let inactiveMember = 0
    let TotalEngagement = 0


    for (let i = 0; i < data.length; i++) {
      if (data[i].status === 'Active') {
        activeMember++;
      } else {
        inactiveMember++
      }

      if (data[i].engagementLevel === 'High') {
        TotalEngagement += 5

      } else if (data[i].engagementLevel === 'Medium') {
        TotalEngagement += 3

      } else {
        TotalEngagement += 1
      }
    }

    const AverageEngagement = totalMentor > 0 ? TotalEngagement / totalMentor : 0;


     const expertiseMap =()=>{
      
     }


   

    SetStats({
      totalMentor,
      activeMember,
      inactiveMember,
      AverageEngagement
    })


  }



  return (
    <MentorContext.Provider value={{ mentor, stats }}>
      {children}
    </MentorContext.Provider>
  );
};
